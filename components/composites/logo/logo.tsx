import Image from "next/image"
import Link from "next/link"

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                alt="logo"
                src="/images/logo.png"
                width={125}
                height={40.25}
                className={className}
            />
        </Link>
    )
}
