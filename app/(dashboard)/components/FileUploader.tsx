"use client"

import { Label } from "@/components/ui/label"
import { useState } from "react";
import { UploadIcon } from "lucide-react"; // Assuming you have an icon library
import Image from "next/image";

export default function FileUploader() {
const [image, setImage] = useState(null);


const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImage(URL.createObjectURL(file));
    }
 };
  return (
    <section>
     <div className="mb-6">
        <Label htmlFor="image" className="block text-[#1F1D1B] text-lg font-medium mb-2">
          Upload Recipe Image
        </Label>
        <div className="relative border border-dashed rounded-lg p-6 text-center">
          {image ? (
            <Image src={image} alt="Recipe" className="w-full h-auto rounded-lg mb-4" />
          ) : (
            <>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="image"
                className="cursor-pointer text-[#EC4700] font-medium hover:text-[#1F1D1B]
                transition-all duration-500"
              >
                <UploadIcon className="mx-auto mb-2" />
                Click to upload
              </label>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
