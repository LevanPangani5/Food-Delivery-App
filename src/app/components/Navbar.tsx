import React from "react";
import Menu from "./menue";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = async () => {
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 lg:px-20 xl:px-40 flex items-center justify-between border-2 border-b-red-500 uppercase">
      {/*LEFT LINKS*/}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Mangre</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/*RIGHT LINKS*/}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute right-2 top-3 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>23 23 23</span>
        </div>
        <UserLinks />

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
