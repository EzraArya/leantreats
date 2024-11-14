'use client'

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 76;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-row justify-between bg-offwhite items-center px-4 py-3 z-50">
      <div>
        <h1 className="font-moon-get font-bold text-2xl">
          <span className="text-primaryGreen">LEAN</span>
          <span className="text-secondaryYellow">TREATS</span>
        </h1>
      </div>
      <div className="hidden md:flex md:flex-row md:justify-between md:text-primaryGreen md:font-semibold">
        <button onClick={() => scrollToSection('about')} className="mr-6 hover:opacity-80">ABOUT US</button>
        <button onClick={() => scrollToSection('menu')} className="mr-6 hover:opacity-80">MENU</button>
        <button onClick={() => scrollToSection('faq')} className="mr-6 hover:opacity-80">FAQ</button>
        <button onClick={() => scrollToSection('contact')} className="mr-6 hover:opacity-80">CONTACT</button>
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
        <div className="absolute top-16 right-4 bg-offwhite text-primaryGreen font-semibold py-4 px-6 rounded-md w-48 z-50 md:hidden flex flex-col shadow-lg">
          <button onClick={() => scrollToSection('about')} className="mb-3 text-left hover:opacity-80">ABOUT US</button>
          <button onClick={() => scrollToSection('menu')} className="mb-3 text-left hover:opacity-80">MENU</button>
          <button onClick={() => scrollToSection('faq')} className="mb-3 text-left hover:opacity-80">FAQ</button>
          <button onClick={() => scrollToSection('contact')} className="mb-3 text-left hover:opacity-80">CONTACT</button>
        </div>
      )}
    </nav>
  );
}