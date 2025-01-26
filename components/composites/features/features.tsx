import IndicatorText from "@/components/ui/indicator-text";
import Image from "next/image";


export default function Features() {
  return (
    <section className="flex flex-row items-center justify-between my-20 lg:px-20">
     <IndicatorText title="Featured on" />
     <Image
       src="/images/cactus.svg"
       alt="cactus"
       width={140}
       height={37.66}
     />
     <Image
       src="/images/hi-tech.svg"
       alt="cactus"
       width={130}
       height={36.97}
     />
     <Image
       src="/images/terra.svg"
       alt="cactus"
       width={120}
       height={36.72}
     />
     <Image
       src="/images/hues.svg"
       alt="cactus"
       width={110}
       height={37.66}
     />
    </section>
  )
}
