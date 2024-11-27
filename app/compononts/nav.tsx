'use client'
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center bg-green-600 p-4 text-white">
      <div className="logo">
        <h1 className="text-xl font-bold">Course Platform</h1>
      </div>
      <ul className={`flex gap-4 ${isOpen ? 'flex-col absolute top-16 right-0 bg-green-600 w-full h-screen justify-center items-center' : 'hidden md:flex'}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <GiHamburgerMenu size={30} />
      </div>
    </nav>
  );
}
