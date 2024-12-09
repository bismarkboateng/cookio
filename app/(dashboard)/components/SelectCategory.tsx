import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function SelectCategory() {
    return (
        <section>
            <Select>
                <SelectTrigger className="w-full py-2 px-4 rounded-lg focus:outline-none
          border border-red-500"
                >
                    <SelectValue placeholder="Theme" />
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
