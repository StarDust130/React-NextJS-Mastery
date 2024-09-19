import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xs sm:text-sm md:text-lg  lg:text-xl">
      <ul className="flex gap-5 sm:gap-10 md:gap-12 lg:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
