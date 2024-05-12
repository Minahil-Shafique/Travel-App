'use client'
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      {/* Navigation links for large screens */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image onClick={toggleDropdown} src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
      {/* Navigation links for small screens */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-white shadow-md rounded-lg">
          <ul className="py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href} className="block px-4 py-2 text-gray-800 hover:font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
