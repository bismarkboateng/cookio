import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";


export default function SelectCategory({
    category, setCategory
}: { category: string; setCategory: Dispatch<SetStateAction<string>>}) {
    return (
        <section>
            <div className="block text-[#1F1D1B] text-lg font-medium mb-2">Select Category</div>
            <Select onValueChange={setCategory} defaultValue={category}>
                <SelectTrigger className="w-full py-2 px-4 rounded-lg focus:outline-none
          border border-red-500"
                >
                    <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="Appetizer">Appetizer</SelectItem>
                    <SelectItem value="Main Course">Main Course</SelectItem>
                    <SelectItem value="Dessert">Dessert</SelectItem>
                    <SelectItem value="Beverage">Beverage</SelectItem>
                </SelectContent>
            </Select>
        </section>
    )
}
