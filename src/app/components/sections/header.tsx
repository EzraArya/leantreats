"use client"

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row justify-between bg-offwhite items-center px-4 py-3 ">
      <div>
        <h1 className="font-moon-get font-bold text-2xl">
          <span className="text-primaryGreen">
            LEAN
          </span>
          <span className="text-secondaryYellow">
            TREATS
          </span>
        </h1>
      </div>
      <div className="hidden md:flex md:flex-row md:justify-between md:text-primaryGreen md:font-semibold">
        <a href='' className="mr-6">ABOUT US</a>
        <a href='' className="mr-6">MENU</a>
        <a href='' className="mr-6">FAQ</a>
        <a href='' className="mr-6">CONTACT</a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-primaryGreen" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-primaryGreen" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-offwhite text-primaryGreen font-semibold py-4 px-6 rounded-md w-48 z-10 md:hidden flex flex-col">
          <a href='' className="mb-3">ABOUT US</a>
          <a href='' className="mb-3">MENU</a>
          <a href='' className="mb-3">FAQ</a>
          <a href='' className="mb-3">CONTACT</a>
        </div>
      )}
    </nav>
  );
}