"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Loader2Icon } from "lucide-react";
import SelectCategory from "../SelectCategory";
import { getImageSource, handleInstructionsChange, handleNextStep, handlePreviousStep } from "../../helpers";

import FileUploader from "../FileUploader";
import toast from "react-hot-toast";
import { addRecipeToFireStore, fetchCategories, fetchRecipe, updateRecipe } from "../../services/recipes";
import { useRouter } from "next/navigation";

import { Recipe } from "../../types";
import { uploadRecipeImageToStorage } from "../../utils";
import { getEmailFromCookies } from "@/app/(auth)/helpers";

type Props = {
  type: string;
  id?: string;
};

export default function RecipeForm({ type, id }: Props) {
  const [instructions, setInstructions] = useState([""]);
  const [currentStep, setCurrentStep] = useState(0);
  const [addCategoryBtnClicked, setAddCategoryBtnClicked] = useState(false);
  const [loading, setLoading] = useState("");
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState<string[] | undefined>(
    undefined
  );
  const [image, setImage] = useState<null | File | string>(null);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const router = useRouter();

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  function returnImageUrl(file: File) {
    console.log(file);
    setImage(file);
  }

  const fetchCategoriesFromDb = async () => {
    const categories = await fetchCategories();
    setAllCategories(categories);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (type === "Update") {
        const data = (await fetchRecipe(id!)) as Recipe;
        setFormValues({
          title: data.title,
          description: data.description,
          tags: data.tags,
        });
        setCategory(data.category);
        setInstructions(data.instructions);
        setImage(data.imageUrl);
      }
    };
    fetchData();
    fetchCategoriesFromDb();
  }, [id, type]);

  useEffect(() => {
    fetchCategoriesFromDb();
  }, [allCategories, addCategoryBtnClicked]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = await getEmailFromCookies();
    const uploadedUrl = await uploadRecipeImageToStorage(image as File);
    switch (type) {
      case "Add":
        try {
          setLoading("loading");
          const info = await addRecipeToFireStore({
            formValues,
            category,
            instructions,
            imageUrl: uploadedUrl,
            isPublic: false,
            email: email!,
          });
          console.log(info);
          setLoading("done");
          toast.success("recipe created!");
          router.push("/recipes")
        } catch (error) {
          console.error(error);
          toast.error("error, try again");
          setLoading("done");
          return;
        }
      case "Update":
        try {
          setLoading("loading");
          const url = getImageSource(image, uploadedUrl);
          await updateRecipe({
            id: id!,
            formValues,
            category,
            instructions,
            imageUrl: url,
          });
          setLoading("done");
          router.push("/recipes");
        } catch (error) {
          toast.error("failed, try again");
          console.error(error);
          setLoading("done");
          return;
        }
      // update
      default:
        console.error("unknown operation");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label
            htmlFor="title"
            className="block text-[#1F1D1B] text-lg font-medium mb-2"
          >
            Recipe Title
          </Label>
          <Input
            id="title"
            type="text"
            required
            value={formValues.title}
            name="title"
            onChange={(event) => handleFieldChange(event)}
            placeholder="Enter recipe title"
            className="w-full py-2 px-4 rounded-lg focus:outline-none shad-input"
          />
        </div>

        <div className="mb-6">
          <Label
            htmlFor="description"
            className="block text-[#1F1D1B] text-lg font-medium mb-2"
          >
            Description
          </Label>
          <Textarea
            id="description"
            value={formValues.description}
            onChange={(event) => handleFieldChange(event)}
            name="description"
            placeholder="Describe your recipe"
            rows={4}
            className="shad-input w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC4700]"
          />
        </div>

        <FileUploader returnImageUrl={returnImageUrl} uploadedUrl={image} />

        <div className="mb-6">
          <Label
            htmlFor="tags"
            className="block text-[#1F1D1B] text-lg font-medium mb-2"
          >
            Tags <span className="italic">(comma separated)</span>
          </Label>
          <Input
            id="tags"
            value={formValues.tags}
            onChange={(event) => handleFieldChange(event)}
            name="tags"
            placeholder="Enter tags"
            className="shad-input w-full py-2 px-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC4700]"
          />
        </div>

        <div className="mb-6">
          <Label
            htmlFor="instructions"
            className="block text-[#1F1D1B] text-lg font-medium mb-2"
          >
            Instructions
          </Label>
          <div className="space-y-4">
            <div className="border  rounded-lg">
              <Textarea
                id={`step-${currentStep}`}
                required
                value={instructions[currentStep]}
                onChange={(event) =>
                  handleInstructionsChange(
                    event,
                    currentStep,
                    setInstructions,
                    instructions
                  )
                } // Handle step changes
                placeholder={`Step ${
                  currentStep + 1
                }: Enter cooking instruction`}
                rows={4}
                className="shad-input w-full py-2 px-4 rounded-lg focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <ArrowLeft
                onClick={() => handlePreviousStep(currentStep, setCurrentStep)}
                className="text-gray-500 cursor-pointer"
                size={22}
              />

              <ArrowRight
                onClick={() =>
                  handleNextStep(
                    currentStep,
                    instructions,
                    setCurrentStep,
                    setInstructions
                  )
                }
                className="text-gray-500 cursor-pointer text-sm"
                size={22}
              />
            </div>
          </div>
        </div>
        <SelectCategory
          category={category}
          setCategory={setCategory}
          categories={allCategories}
          setAddCategoryBtnClicked={setAddCategoryBtnClicked}
        />

        <div className="mt-6 text-center">
          <Button
            type="submit"
            className="bg-orange-color hover:bg-orange-color focus:bg-orange-color
          active:bg-orange-color w-full text-white py-3 px-6 rounded-lg transition duration-300"
          >
            {loading === "loading" ? (
              <Loader2Icon className="w-4 h-4 animate-spin" />
            ) : type == "Add" ? (
              "Add"
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
