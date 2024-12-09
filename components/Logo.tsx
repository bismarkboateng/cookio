import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                alt="logo"
                src="/images/logo.png"
                width={48}
                height={48}
                className="w-[48px] h-[48px]"
            />
            <span className="text-2xl font-medium text-black-color">Cookio</span>
        </Link>
    )
}
