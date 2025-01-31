"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Loader2Icon } from "lucide-react";
import SelectCategory from "../select-category";
import { handleInstructionsChange, handleNextStep, handlePreviousStep } from "../../helpers";

import FileUploader from "../file-uploader";
import { fetchCategories, fetchRecipe } from "../../services/recipes";
import { Recipe } from "../../types";
import { uploadRecipeImageToStorage } from "../../utils";

import { getEmailFromCookies } from "@/app/(auth)/helpers";
import useAddRecipe from "../../hooks/useAddRecipe";
import useUpdateRecipe from "../../hooks/useUpdateRecipe";

type Props = {
  type: string;
  id?: string;
};

export default function RecipeForm({ type, id }: Props) {
  const [instructions, setInstructions] = useState([""]);
  const [currentStep, setCurrentStep] = useState(0);
  const [addCategoryBtnClicked, setAddCategoryBtnClicked] = useState(false);
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
  
  const { handleAddRecipe, loading } = useAddRecipe()
  const { handleUpdateRecipe, loading: _loading } = useUpdateRecipe()


  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  function returnImageUrl(file: File) {
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
        handleAddRecipe({ url: uploadedUrl, formValues, category, instructions, email })
      case "Update":
       handleUpdateRecipe({ image, uploadedUrl, id, formValues, category, instructions })
      default:
        console.error("unknown operation");
    }
    
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg lg:mb-10">
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
            className="bg-green hover:bg-green focus:bg-green
            active:bg-green w-full text-white py-3 px-6 rounded-lg
            transition duration-300"
          >
            {loading || _loading  === "loading" ? (
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