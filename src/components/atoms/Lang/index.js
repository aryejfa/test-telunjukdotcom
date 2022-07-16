import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Lang() {
  const { locale, locales, asPath } = useRouter();
  return (
    <div className="w-full text-right top-16 ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex btn-pattern-1 rounded-lg justify-center w-full px-2 py-1 text-[12px]  text-[#FFF]  bg-opacity-10 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {locale === "default" ? (
              <img src="/id.png" className="w-4 m-1" />
            ) : (
              <img src="/en.png" className="w-4 m-1" />
            )}
            {locale === "default" ? "ID" : "EN"}
            <ChevronDownIcon
              className=" w-5 h-5 ml-0 -mr-0 text-[#FFF]"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100  shadow-lg ring-1 ring-gray-200 ring-opacity-5 focus:outline-none z-10">
            {locales.map((row, index) => {
              return (
                <div className="px-1 py-1" key={index}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-50 text-[#ff5c31]" : "text-gray-500"
                        } group flex  items-center w-full px-1 py-1 text-[12px]`}
                      >
                        <Link href={asPath} locale={row}>
                          <a
                            className={`${
                              active
                                ? "bg-gray-50 text-[#ff5c31]"
                                : "text-gray-500"
                            } group flex  items-center w-full px-1 py-1 text-[12px]`}
                          >
                            {row === "default" ? (
                              <img src="/id.png" className="w-4 m-1" />
                            ) : (
                              <img src="/en.png" className="w-4 m-1" />
                            )}

                            {row === "default" ? "ID" : "EN"}
                          </a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
