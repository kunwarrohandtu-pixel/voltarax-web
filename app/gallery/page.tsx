'use client'

import React from "react";
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaTimes, FaCalendarAlt, FaAward, FaTrophy, FaBuilding, FaUniversity } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

const categories = ['All', 'Events', 'Installations']

const events = [
  {
    id: 1,
    title: 'DTU Incubation Program',
    category: 'Events',
    icon: FaBuilding,
    date: 'March 2024',
    description: 'Voltarax was proudly selected for the prestigious DTU (Delhi Technological University) Incubation Program. This milestone marks our recognition as one of India\'s most promising clean energy startups. Through this program, we gained access to state-of-the-art research facilities, mentorship from industry experts, and strategic guidance to accelerate our AI-powered bio-solar technology development. The incubation support has been instrumental in refining our product, building our team, and preparing for commercial deployment.',
    image: '/images/gallery/events/dtu-incubation.jpg'
  },
  {
    id: 2,
    title: 'RGIC Innovation Event',
    category: 'Events',
    icon: FaUniversity,
    date: 'June 2024',
    description: 'Voltarax showcased its groundbreaking AI-Assisted Bio-Based Luminescent Solar Panel at the prestigious RGIC (Research and Green Innovation Conference). Our presentation on \'AI-Powered Sustainable Energy Solutions for Urban Infrastructure\' received overwhelming response from researchers, policymakers, and industry leaders. The event provided a platform to demonstrate our technology\'s potential for smart cities, highlight our commitment to SDGs, and forge collaborations with leading research institutions.',
    image: '/images/gallery/events/rgic-event.jpg'
  },
  {
    id: 3,
    title: 'Global Excellence Award',
    category: 'Events',
    icon: FaAward,
    date: 'August 2024',
    description: 'Voltarax was honored with the prestigious Global Excellence Award for Innovation in Clean Energy Technology. This recognition celebrates our pioneering work in developing bio-based luminescent materials for enhanced solar energy conversion. The award acknowledges our commitment to sustainable innovation, our contribution to circular economy principles, and our vision of making clean energy more efficient and accessible. We were recognized among the top 10 clean energy startups globally for our groundbreaking technology.',
    image: '/images/gallery/events/global-excellence.jpg'
  },
  {
    id: 4,
    title: 'DMA Sustainability Award',
    category: 'Events',
    icon: FaTrophy,
    date: 'October 2024',
    description: 'Voltarax was recognized at the DMA (Delhi Management Association) Sustainability Awards for outstanding contribution to green energy innovation. Our AI-enabled bio-solar panel solution was praised for its potential to revolutionize renewable energy adoption in India. The award highlights our focus on \'Atmanirbhar Bharat\' (self-reliant India) by developing indigenous technology that reduces dependency on imported components and creates sustainable employment opportunities in the renewable energy sector.',
    image: '/images/gallery/events/dma-award.jpg'
  }
]

const installations = [
  {
    id: 5,
    title: 'Installations',
    category: 'Installations',
    description: 'Our installation gallery is coming soon! We are currently deploying our AI-powered bio-solar panels across various sectors. Check back for real-world installations showcasing our technology in action.',
    image: '/images/gallery/installations/coming-soon.jpg',
    isComingSoon: true
  }
]

export default function GalleryPage() {
  const [cat, setCat] = useState('All')
  const [selected, setSelected] = useState<typeof events[0] | null>(null)

  const allItems = [...events, ...installations]
  const filtered = cat === 'All' ? allItems : allItems.filter(i => i.category === cat)

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h1 className="heading-xl text-[#1A3A1A] mb-4">Our <span className="text-gradient">Gallery</span></h1>
            <p className="text-lg text-[#1A3A1A]/70 max-w-2xl mx-auto">
              Explore Voltarax's journey, events, and upcoming installations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Categories */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === c
                      ? 'bg-[#2E7D32] text-white'
                      : 'bg-[#F0FFF0] text-[#1A3A1A] hover:bg-[#2E7D32]/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item) => (
              <AnimatedSection key={item.id} delay={item.id * 0.1}>
                <motion.div
                  className={`bg-[#F0FFF0] rounded-2xl overflow-hidden shadow-lg cursor-pointer ${
                    item.isComingSoon ? 'opacity-70' : 'card-hover'
                  }`}
                  whileHover={!item.isComingSoon ? { scale: 1.02 } : {}}
                  onClick={() => !item.isComingSoon && setSelected(item as typeof events[0])}
                >
                  <div className={`relative h-64 bg-gradient-to-r from-[#2E7D32]/20 to-yellow-400/20 flex items-center justify-center`}>
                    <div className="text-center">
                      {'icon' in item && item.icon ? (
                        <item.icon className="text-6xl text-[#2E7D32] mx-auto mb-2" />
                      ) : (
                        <FaCalendarAlt className="text-6xl text-[#2E7D32] mx-auto mb-2" />
                      )}
                      {item.isComingSoon && (
                        <span className="inline-block px-4 py-1 bg-yellow-400 text-[#1A3A1A] text-sm font-semibold rounded-full">
                          Coming Soon
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-[#1A3A1A] mt-2">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {!item.isComingSoon && 'date' in item && (
                      <p className="text-sm text-[#2E7D32] font-medium mb-2">{item.date}</p>
                    )}
                    <p className="text-sm text-[#1A3A1A]/70 line-clamp-3">
                      {item.description}
                    </p>
                    {!item.isComingSoon && (
                      <span className="inline-block mt-3 text-[#2E7D32] text-sm font-medium hover:underline">
                        Read more →
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-400 transition-colors"
            onClick={() => setSelected(null)}
          >
            <FaTimes />
          </button>
          <div className="relative max-w-3xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                {selected.icon && <selected.icon className="text-3xl text-[#2E7D32]" />}
                <h2 className="text-2xl font-bold text-[#1A3A1A]">{selected.title}</h2>
              </div>
              <p className="text-sm text-[#2E7D32] font-medium mb-3">{selected.date}</p>
              <p className="text-[#1A3A1A]/80 leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}