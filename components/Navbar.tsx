"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">

      <div className="flex items-center justify-between px-6 md:px-14 py-5">

        <Link
          href="/"
          className="text-3xl font-bold tracking-tight"
        >
          FasFashion
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/women">Women</Link>
          <Link href="/men">Men</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a
          href="https://wa.me/947XXXXXXXX"
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Order Now
        </a>

      </div>
    </header>
  );
}