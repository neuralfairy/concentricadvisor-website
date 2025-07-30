"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#E63946] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">iE</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ConcentricAdvisor</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-[#E63946] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-[#E63946] transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#E63946] transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#E63946] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#E63946] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-[#E63946]">
              Sign In
            </Button>
            <Button className="bg-[#E63946] hover:bg-[#E63946]/90 text-white">Start Free Trial</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-600 hover:text-[#E63946] transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-[#E63946] transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#E63946] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-[#E63946] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#E63946] transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-[#E63946] justify-start">
                  Sign In
                </Button>
                <Button className="bg-[#E63946] hover:bg-[#E63946]/90 text-white justify-start">
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
