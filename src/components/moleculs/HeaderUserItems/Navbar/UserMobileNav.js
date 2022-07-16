import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";

export default function UserMobileNav({ handleClick }) {
  return (
    <>
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 lg:hidden">
          <span className="text-xl text-[#ff5c31] font-bold uppercase tracking-wide">
            <h5 className="font-bold mb-6 text-[#ff5c31] text-5xl h-8 w-full mr-2">
              LOGO
            </h5>
          </span>
        </a>
      </Link>

      {/* Menu */}
      <button
        className="inline-flex p-2 ml-auto hover:bg-[#dcdfe2] rounded lg:hidden text-[#ff5c31] hover:text-[#ff5c31] outline-none"
        onClick={handleClick}
      >
        <MenuIcon className="w-6 h-6 text-gray-400 hover:text-gray-500" />
      </button>
    </>
  );
}
