"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { createCategoryInFireStore } from "../services/recipes";

export default function SelectCategory({
  category,
  setCategory,
  categories
}: {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  categories: string[] | undefined
}) {

  const [newCategory, setNewCategory] = useState("")


  return (
    <section>
      <div className="block text-[#1F1D1B] text-lg font-medium mb-2">
        Select Category
      </div>
      <Select onValueChange={setCategory} defaultValue={category}>
        <SelectTrigger
          className="w-full py-2 px-4 rounded-lg focus:outline-none
          border border-red-500"
        >
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent className="bg-white">
         {categories && categories.map((category) => (
            <SelectItem key={category} value={category}>{category}</SelectItem>
         ))}
        </SelectContent>
      </Select>
      <AlertDialog>
        <AlertDialogTrigger className="w-full mt-1">
          <div className="text-blue-500w-full text-sm py-2 rounded-md hover:bg-orange-300 hover:text-white
          transition-all duration-500">
            Add Category
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add New Category</AlertDialogTitle>
            <AlertDialogDescription>
              <input
               type="text"
               value={newCategory}
               className="border border-[#ccc] outline-none p-2 w-full text-black
               rounded"
               onChange={(event) => setNewCategory(event.target.value)}               
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-orange-color">Cancel</AlertDialogCancel>
            <AlertDialogAction
             onClick={() => createCategoryInFireStore(newCategory)}
             className="bg-orange-color text-white
            hover:bg-orange-color active:bg-orange-color">
             Add new
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
