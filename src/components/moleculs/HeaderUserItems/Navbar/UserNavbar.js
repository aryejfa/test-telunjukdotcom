import Link from "next/link";
import UserNavbarList from "./UserNavbarList";

export default function UserNavbar(props) {
  const { active, locale, router } = props;
  return (
    <>
      <div
        className={`${
          active ? "" : "hidden"
        }   lg:-mx-7 w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row font-semibold  lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/">
            <a className=" items-center p-2 mr-4 lg:block hidden">
              <span className="text-xl text-[#ff5c31] font-bold uppercase tracking-wide">
                <h5 className="font-bold mb-6 text-[#ff5c31] text-5xl h-8 w-full mr-2">
                  LOGO
                </h5>
              </span>
            </a>
          </Link>
        </div>
        <div className="p-6 mr-0 font-semibold lg:inline-flex lg:flex-row lg:ml-auto justify-center w-full lg:items-center items-start  flex flex-col">
          <UserNavbarList active={active} locale={locale} router={router} />
        </div>
      </div>
    </>
  );
}
