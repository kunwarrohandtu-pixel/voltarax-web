import React from "react";
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FaLeaf, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Application', href: '/application' },
  { name: 'SDG', href: '/sdg' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => { setIsMenuOpen(false) }, [pathname])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#F0FFF0]/95 backdrop-blur-md shadow-lg shadow-green-900/10' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <FaLeaf className="text-3xl text-[#2E7D32] animate-float" />
              <FaSun className="text-xl text-yellow-400 absolute -top-1 -right-1 animate-pulse-slow" />
            </div>
            <div>
              <span className="font-bold text-xl text-[#1A3A1A]">VOLTARAX</span>
              <span className="block text-[10px] tracking-[0.3em] text-[#2E7D32] font-medium uppercase">Pvt Ltd</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map(item => (
              <Link key={item.name} href={item.href} className={`text-sm font-medium transition-all relative ${pathname === item.href ? 'text-[#2E7D32]' : 'text-[#1A3A1A] hover:text-[#2E7D32]'}`}>
                {item.name}
                {pathname === item.href && <motion.span layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2E7D32]" />}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="px-6 py-2 bg-[#2E7D32] text-white rounded-full text-sm font-semibold hover:bg-[#1B5E20] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">Get Started</Link>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-2xl text-[#1A3A1A] p-2">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div className={`fixed inset-0 z-40 bg-[#F0FFF0] lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} initial={{ x: '100%' }} animate={{ x: isMenuOpen ? '0%' : '100%' }} transition={{ type: 'tween', duration: 0.3 }}>
        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {nav.map(item => (
              <Link key={item.name} href={item.href} className={`text-lg font-medium py-2 border-b border-green-100 transition-colors ${pathname === item.href ? 'text-[#2E7D32]' : 'text-[#1A3A1A] hover:text-[#2E7D32]'}`}>{item.name}</Link>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-green-100">
            <Link href="/contact" className="w-full px-6 py-3 bg-[#2E7D32] text-white rounded-full text-center font-semibold hover:bg-[#1B5E20] transition-all block">Get Started</Link>
          </div>
          <div className="mt-auto pt-8 text-sm text-[#1A3A1A]/60"><p>© 2024 Voltarax Pvt Ltd</p></div>
        </div>
      </motion.div>
    </header>
  )
}