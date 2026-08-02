'use client'

import React from "react";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLeaf, FaSun, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1A3A1A] text-white/90 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,235,59,0.1) 0%, transparent 50%)' }} />
      </div>
      <div className="container-custom relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center gap-2 mb-4"><FaLeaf className="text-2xl text-[#66BB6A]" /><span className="font-bold text-xl">VOLTARAX</span></Link>
            <p className="text-sm text-white/60 max-w-xs">Revolutionizing renewable energy with bio-solar panel technology.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-white/40 hover:text-[#66BB6A] transition-colors"><FaFacebook size={18} /></a>
              <a href="#" className="text-white/40 hover:text-[#66BB6A] transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="text-white/40 hover:text-[#66BB6A] transition-colors"><FaLinkedin size={18} /></a>
              <a href="#" className="text-white/40 hover:text-[#66BB6A] transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="text-white/40 hover:text-[#66BB6A] transition-colors"><FaYoutube size={18} /></a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/60 hover:text-[#66BB6A] transition-colors">About Us</Link></li>
              <li><Link href="/why-choose-us" className="text-white/60 hover:text-[#66BB6A] transition-colors">Why Choose Us</Link></li>
              <li><Link href="/application" className="text-white/60 hover:text-[#66BB6A] transition-colors">Applications</Link></li>
              <li><Link href="/sdg" className="text-white/60 hover:text-[#66BB6A] transition-colors">SDG Goals</Link></li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><FaMapMarkerAlt className="text-[#66BB6A] mt-1" /><span className="text-white/60">A Block, 171, Shastri Nagar, Delhi - 110052</span></li>
              <li className="flex items-center gap-3"><FaPhone className="text-[#66BB6A]" /><span className="text-white/60">+91 83839451859</span></li>
              <li className="flex items-center gap-3"><FaEnvelope className="text-[#66BB6A]" /><span className="text-white/60">voltaraxpvtltd@gmail.com</span></li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="font-semibold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-sm text-white/60 mb-3">Subscribe to get updates on our latest innovations.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#66BB6A] transition-colors" />
              <button type="submit" className="px-4 py-2 bg-[#2E7D32] text-white rounded-full font-semibold hover:bg-[#1B5E20] transition-colors">Subscribe</button>
            </form>
          </motion.div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Voltarax Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}