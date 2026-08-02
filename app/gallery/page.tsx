'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

const images = [
  { id: 1, src: '/images/gallery/gallery-1.jpg', category: 'Installations' },
  { id: 2, src: '/images/gallery/gallery-2.jpg', category: 'Installations' },
  { id: 3, src: '/images/gallery/gallery-3.jpg', category: 'Products' },
  { id: 4, src: '/images/gallery/gallery-4.jpg', category: 'Products' },
  { id: 5, src: '/images/gallery/gallery-1.jpg', category: 'Events' },
  { id: 6, src: '/images/gallery/gallery-2.jpg', category: 'Events' },
  { id: 7, src: '/images/gallery/gallery-3.jpg', category: 'Installations' },
  { id: 8, src: '/images/gallery/gallery-4.jpg', category: 'Products' },
]
const categories = ['All', 'Installations', 'Products', 'Events']

export default function GalleryPage() {
  const [cat, setCat] = useState('All')
  const [selected, setSelected] = useState<typeof images[0] | null>(null)
  const filtered = cat === 'All' ? images : images.filter(i => i.category === cat)

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" /></div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection><h1 className="heading-xl text-[#1A3A1A] mb-4">Our <span className="text-gradient">Gallery</span></h1><p className="text-lg text-[#1A3A1A]/70 max-w-2xl mx-auto">Explore our bio-solar technology in action.</p></AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection><div className="flex flex-wrap justify-center gap-2 mb-10">{categories.map(c => (<button key={c} onClick={() => setCat(c)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${cat === c ? 'bg-[#2E7D32] text-white' : 'bg-[#F0FFF0] text-[#1A3A1A] hover:bg-[#2E7D32]/10'}`}>{c}</button>))}</div></AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.id} delay={i*0.05}>
                <motion.div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer" whileHover={{ scale: 1.02 }} onClick={() => setSelected(img)}>
                  <div className="relative h-64 bg-[#2E7D32]/10 flex items-center justify-center"><div className="text-4xl text-[#2E7D32]">📷</div></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="text-white text-sm font-medium px-3 py-1 bg-[#2E7D32]/80 rounded-full">{img.category}</span></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <motion.div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <button className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-400 transition-colors" onClick={() => setSelected(null)}><FaTimes /></button>
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-[#2E7D32]/10 flex items-center justify-center text-white text-6xl">📷</div>
        </motion.div>
      )}
    </div>
  )
}