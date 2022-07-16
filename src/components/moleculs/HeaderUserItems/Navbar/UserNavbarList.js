import Link from "next/link";
import Lang from "../../../atoms/Lang";

export default function UserNavbarList({ locale, router }) {
  return (
    <>
      <Link href="/task-1/product/102/paket-pro">
        <a
          className={`lg:inline-flex text-sm lg:w-auto w-full px-5 py-2  items-center justify-center hover: hover:text-[#757575] ${
            router.asPath === "/task-1/product/102/paket-pro/"
              ? "text-[#757575]"
              : "text-[#212121]"
          }`}
        >
          {locale === "en" ? "Task 1" : "Tugas 1"}
        </a>
      </Link>
      <Link href="/task-2">
        <a
          className={`lg:inline-flex text-sm lg:w-auto w-full px-5 py-2  items-center justify-center hover: hover:text-[#757575] ${
            router.pathname === "/task-2" ? "text-[#757575]" : "text-[#212121]"
          }`}
        >
          {locale === "en" ? "Task 2" : "Tugas 2"}
        </a>
      </Link>
      <Link href="/task-3">
        <a
          className={`lg:inline-flex text-sm lg:w-auto w-full px-5 py-2  items-center justify-center hover: hover:text-[#757575] ${
            router.pathname === "/task-3" ? "text-[#757575]" : "text-[#212121]"
          }`}
        >
          {locale === "en" ? "Task 3" : "Tugas 3"}
        </a>
      </Link>

      <div className="ml-auto">
        <Lang />
      </div>
    </>
  );
}
