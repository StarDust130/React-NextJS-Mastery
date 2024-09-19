import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.png"
        alt="The Wild Oasis logo"
        className="block"
        height={60}
        width={60}
        sizes="(max-width: 768px) 50px, 60px"
        style={{ width: "auto", height: "auto" }}
      />
      <span className="hidden md:block md:text-lg lg:text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
