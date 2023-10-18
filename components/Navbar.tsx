// use rafce to create a react arrow function user component
//use nav html tag to increase SEO and accessability
//import <Link></Link> from next/Link but it must has href attribute
//import <Image></Image> from next/Image as it load alot faster

import Link from "next/link";
import Image from "next/image";

import logo from "../public/hilink-logo.svg";
import userSvg from "../public/user.svg";

import React from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween padding-container max-container-relative z-30 py-5">
      <Link href="/">
        <Image src={logo} alt="logo" width={74} height={29}></Image>
      </Link>
      {/* use hidden lg:flex to make the nav links only shown on large screens  */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => {
          return (
            <li>
              <Link
                className="regular-16 text-gray-50 transition-all hover:font-bold pb-1.5 cursor-pointer flexCenter"
                key={link.key}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="lg:flexCenter hidden">
        {" "}
        <Button
          type="button"
          title="Log in"
          variant="btn_dark_green"
          icon={userSvg}
        />
      </div>
    </nav>
  );
};

export default Navbar;
