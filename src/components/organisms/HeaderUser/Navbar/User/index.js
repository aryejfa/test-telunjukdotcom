import { useRouter } from "next/router";
import { useState } from "react";
import UserMobileNav from "../../../../moleculs/HeaderUserItems/Navbar/UserMobileNav";
import UserNavbar from "../../../../moleculs/HeaderUserItems/Navbar/UserNavbar";

export default function NavBar() {
  const { locale } = useRouter();
  const router = useRouter();

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="bg-[#FFF] flex items-center flex-wrap p-2 shadow-md px-8 lg:px-20">
      <UserMobileNav handleClick={handleClick} />
      <UserNavbar active={active} locale={locale} router={router} />
    </nav>
  );
}
