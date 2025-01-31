import React from "react";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import IndicatorText from "@/components/ui/indicator-text";

export default function Header() {
  return (
    <header className="lg:px-20 mt-5 flex flex-row items-center justify-between gap-5">
      <div className="w-1/2 flex flex-col gap-7">
        <IndicatorText title="Welcome to Recipe" />
        <Text className="text-[63px] font-bold leading-[60px]">
          Come, let's savor the goodness of my
          {" "}<span className="text-green">nutritious.</span>
        </Text>
        <Text className="text-grey font-medium w-[60%] leading-5">
          Discover the art of cooking nutritious and mouthwatering dishes with
          me.
        </Text>
        <Button className="border-2 border-green bg-transparent text-green
          hover:bg-transparent font-bold w-1/3">
          All Recipes
        </Button>
      </div>

      <div className="w-1/2">
        <Image
          src="/images/hero.jpg"
          alt="hero image"
          width={1000}
          height={1000}
          className="w-full rounded-full"
        />
      </div>
    </header>
  );
}
