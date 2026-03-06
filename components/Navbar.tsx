"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">Nadeeka</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-gray-800">
          <div className="flex flex-col gap-4 text-sm">
            <button 
              className="hover:text-gray-300 transition-colors text-left"
              onClick={() => {
                router.push('/');
                setMobileMenuOpen(false);
              }}
            >
              Home
            </button>
            <button 
              className="hover:text-gray-300 transition-colors text-left"
              onClick={() => {
                router.push('/about');
                setMobileMenuOpen(false);
              }}
            >
              About
            </button>
            <button 
              className="hover:text-gray-300 transition-colors text-left"
              onClick={() => {
                router.push('/contact');
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}