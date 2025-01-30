import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { ChevronRight } from "lucide-react";

export default function NewsLetter() {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <Text variant="div" className="text-base text-green font-bold">
        Sign up for our newsletter
      </Text>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" className="shad-input input-hover" placeholder="Enter your email..." />
        <Button
          type="submit"
          className="w-[44px] h-[44px] rounded-full bg-gradient-to-tr from-[#3898EC] to-green"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
