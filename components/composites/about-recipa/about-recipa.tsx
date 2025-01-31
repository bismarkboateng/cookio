import { Button } from "@/components/ui/button";
import IndicatorText from "@/components/ui/indicator-text";
import Text from "@/components/ui/text";
import Image from "next/image";

export default function AboutRecipa() {
  return (
    <section className="lg:pl-20 mt-32 flex flex-row items-center justify-between gap-5">
      <div className="w-1/2 flex flex-col gap-5">
        <IndicatorText title="About me" />
        <Text className="text-[50px] font-bold leading-[50px]">
          Lucia Delgado&apos;s journey from kitchen whiz to digital {" "}
          <span className="text-green">culinary star.</span>
        </Text>
        <Text className="text-grey font-medium w-[60%] leading-5">
          Discover the art of cooking nutritious and mouthwatering dishes with
          me.
        </Text>
        <Button
          className="border-2 border-green bg-transparent text-green
        hover:bg-transparent font-bold w-1/3"
        >
          Learn more
        </Button>
      </div>

      <div className="">
        <Image
          src="/images/about-recipa.jpg"
          alt="hero image"
          width={1000}
          height={1000}
          className="w-full rounded-tl-lg rounded-bl-lg"
        />
      </div>
    </section>
  );
}
