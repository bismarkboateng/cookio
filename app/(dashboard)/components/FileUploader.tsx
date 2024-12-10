"use client"

import { Label } from "@/components/ui/label"
import { ChangeEvent, useEffect, useState } from "react";
import { UploadIcon } from "lucide-react"; // Assuming you have an icon library
import Image from "next/image";


export default function FileUploader({
  returnImageUrl, uploadedUrl
}: { returnImageUrl: (file: File) => void, uploadedUrl?: string | File | null }) {

  const [image, setImage] = useState<string | null>(null);


  const handleSelectImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0]

    console.log(file)
    if (file) {
      returnImageUrl(file)
      console.log(`${URL.createObjectURL(file)}.png`)
      setImage(URL.createObjectURL(file));
    }

  }

  useEffect(() => {
    if (uploadedUrl && uploadedUrl !== image) {
      setImage(uploadedUrl as string)
    }
  }, [uploadedUrl])

  


  return (
    <section>
      <div className="mb-6">
        <Label htmlFor="image" className="block text-[#1F1D1B] text-lg font-medium mb-2">
          Upload Recipe Image
          {image && (
            <div className="w-[150px] h-[80px] border">
              <Image
                src={image}
                alt="Recipe"
                className="w-full h-auto rounded-lg mb-4"
                width={100}
                height={50}
              />
            </div>
          )}
        </Label>
        <div className="relative border border-dashed mt-6 rounded-lg p-6 text-center">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleSelectImage}
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
        </div>
      </div>
    </section>
  )
}
