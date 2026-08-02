'use client'

import React from "react";
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaLeaf, FaSun, FaRecycle, FaBolt, FaShieldAlt, FaAward } from 'react-icons/fa'
import ParticleBackground from '@/components/ui/ParticleBackground'
import AnimatedSection from '@/components/ui/AnimatedSection'

const features = [
  { icon: FaLeaf, title: 'Bio-Solar Technology', description: 'Combining biological processes with solar technology for maximum efficiency.' },
  { icon: FaRecycle, title: 'Eco-Friendly', description: '100% sustainable and biodegradable materials used in our panels.' },
  { icon: FaBolt, title: 'High Efficiency', description: 'Superior energy conversion rates compared to traditional solar panels.' },
  { icon: FaShieldAlt, title: 'Durable & Reliable', description: 'Built to last with minimal maintenance required.' }
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden rays-bg">
        <ParticleBackground />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center gap-3 mb-6">
              <FaLeaf className="text-5xl text-[#2E7D32] animate-float" />
              <FaSun className="text-5xl text-yellow-400 animate-pulse-slow" />
            </div>
            <h1 className="heading-xl text-[#1A3A1A] mb-6">
              Powering Tomorrow with
              <span className="block text-gradient">Bio-Solar Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-[#1A3A1A]/70 max-w-2xl mx-auto mb-10">
              Voltarax is revolutionizing renewable energy with cutting-edge bio-solar panel technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Get Started <FaArrowRight className="ml-2" /></Link>
              <Link href="/about" className="btn-secondary">Learn More</Link>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            {[
              { value: '5+', label: 'Years of Innovation' },
              { value: '50+', label: 'Projects Completed' },
              { value: '100+', label: 'Happy Clients' },
              { value: '500+ MW', label: 'Energy Generated' }
            ].map((stat, i) => (
              <motion.div key={i} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg" whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-[#2E7D32]">{stat.value}</div>
                <div className="text-sm text-[#1A3A1A]/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <div className="w-6 h-10 border-2 border-[#2E7D32]/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#2E7D32] rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="heading-lg text-center text-[#1A3A1A] mb-4">Why <span className="text-gradient">Voltarax</span></h2>
            <p className="text-center text-[#1A3A1A]/60 max-w-2xl mx-auto mb-12">Our bio-solar panels combine the best of nature and technology.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-green-100" whileHover={{ scale: 1.02 }}>
                  <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mb-4">
                    <f.icon className="text-2xl text-[#2E7D32]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#1A3A1A] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#1A3A1A]/60">{f.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Preview */}
      <section className="section-padding bg-[#1A3A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent" /></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4"><FaAward className="text-3xl text-yellow-400" /><span className="text-sm font-semibold text-yellow-400 tracking-wider">SDG ALIGNED</span></div>
              <h2 className="heading-lg mb-4">Committed to Sustainable <span className="block text-yellow-400">Development Goals</span></h2>
              <p className="text-white/70 mb-6">Our bio-solar technology directly contributes to multiple UN SDGs.</p>
              <Link href="/sdg" className="btn-primary">Learn About Our SDG Impact <FaArrowRight className="ml-2" /></Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[7,9,11,13].map(goal => (
                  <div key={goal} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                    <div className="text-4xl font-bold text-yellow-400">SDG {goal}</div>
                    <div className="text-xs text-white/60 mt-1">{goal===7?'Clean Energy':goal===9?'Industry Innovation':goal===11?'Sustainable Cities':'Climate Action'}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/5 to-yellow-400/5"></div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-[#1A3A1A] mb-4">Ready to Join the <span className="text-gradient">Green Revolution</span></h2>
            <p className="text-[#1A3A1A]/60 max-w-2xl mx-auto mb-8">Partner with us to power a sustainable future. Let's innovate together.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us <FaArrowRight className="ml-2" /></Link>
              <Link href="/application" className="btn-secondary">Apply Now</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}