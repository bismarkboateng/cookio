"use client"

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";

import { Label } from "@/components/ui/label";

import { ArrowLeft, ArrowRight } from "lucide-react";
import SelectCategory from "../SelectCategory";
import { handleInstructionsChange, handleNextStep, handlePreviousStep } from "../../helpers";
import FileUploader from "../FileUploader";



export default function RecipeForm() {
  const [instructions, setInstructions] = useState(["some"]); // Instructions array
  const [currentStep, setCurrentStep] = useState(0); // Track the current step





  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg">

      {/* Title Input */}
      <div className="mb-6">
        <Label htmlFor="title" className="block text-[#1F1D1B] text-lg font-medium mb-2">
          Recipe Title
        </Label>
        <Input
          id="title"
          placeholder="Enter recipe title"
          className="w-full py-2 px-4 rounded-lg focus:outline-none"
        />
      </div>

      {/* Description Textarea */}
      <div className="mb-6">
        <Label htmlFor="description" className="block text-[#1F1D1B] text-lg font-medium mb-2">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Describe your recipe"
          rows={4}
          className="w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC4700]"
        />
      </div>

      {/* Image Upload */}
      <FileUploader />

      {/* Tags Input */}
      <div className="mb-6">
        <Label htmlFor="tags" className="block text-[#1F1D1B] text-lg font-medium mb-2">
          Tags <span className="italic">(comma separated)</span>
        </Label>
        <Input
          id="tags"
          placeholder="Enter tags"
          className="w-full py-2 px-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC4700]"
        />
      </div>

      {/* Multi-Step Instructions */}
      <div className="mb-6">
        <Label htmlFor="instructions" className="block text-[#1F1D1B] text-lg font-medium mb-2">
          Instructions
        </Label>
        <div className="space-y-4">
          <div className="border  rounded-lg">
            <Textarea
              id={`step-${currentStep}`}
              value={instructions[currentStep]}
              onChange={(event) => handleInstructionsChange(event, currentStep, setInstructions, instructions)} // Handle step changes
              placeholder={`Step ${currentStep + 1}: Enter cooking instruction`}
              rows={4}
              className="w-full py-2 px-4 rounded-lg focus:outline-none"
            />
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-4">
            <ArrowLeft
             onClick={() => handlePreviousStep(
              currentStep, setCurrentStep
             )}
             className="text-gray-500 cursor-pointer"
             size={22}
            />

            <ArrowRight
             onClick={() => handleNextStep(
              currentStep, instructions, setCurrentStep,
              setInstructions
             )}
             className="text-gray-500 cursor-pointer text-sm"
             size={22}
            />
          </div>

        </div>
      </div>
      <SelectCategory />

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <Button
          type="submit"
          className="bg-orange-color hover:bg-orange-color focus:bg-orange-color
          active:bg-orange-color w-full text-white py-3 px-6 rounded-lg transition duration-300"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
