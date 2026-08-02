import React from "react";
'use client'
import Link from 'next/link'
import { FaLeaf, FaRecycle, FaAward, FaSun } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow" /></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h1 className="heading-xl text-[#1A3A1A] mb-4">About <span className="text-gradient">Voltarax</span></h1>
              <p className="text-lg text-[#1A3A1A]/70 mb-6">Voltarax Pvt Ltd is a pioneering company dedicated to advancing renewable energy through innovative bio-solar panel technology.</p>
              <p className="text-[#1A3A1A]/60 mb-6">Our bio-solar panels combine biological processes with advanced solar technology, resulting in higher efficiency and lower environmental impact.</p>
              <div className="flex gap-4"><Link href="/contact" className="btn-primary">Get In Touch</Link><Link href="/application" className="btn-secondary">Join Us</Link></div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-[#2E7D32]/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaLeaf className="text-8xl text-[#2E7D32] mx-auto mb-4 animate-float" />
                  <p className="text-xl font-semibold text-[#1A3A1A]">Pioneering Bio-Solar Innovation</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection><div className="bg-[#F0FFF0] p-8 rounded-2xl shadow-lg"><div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mb-4"><FaLeaf className="text-2xl text-[#2E7D32]" /></div><h3 className="font-bold text-xl text-[#1A3A1A] mb-3">Our Mission</h3><p className="text-[#1A3A1A]/70">To revolutionize renewable energy by developing innovative bio-solar technologies that are sustainable, efficient, and accessible to all.</p></div></AnimatedSection>
            <AnimatedSection delay={0.2}><div className="bg-[#F0FFF0] p-8 rounded-2xl shadow-lg"><div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4"><FaSun className="text-2xl text-yellow-500" /></div><h3 className="font-bold text-xl text-[#1A3A1A] mb-3">Our Vision</h3><p className="text-[#1A3A1A]/70">A world powered by clean, sustainable energy where bio-solar technology plays a central role in combating climate change.</p></div></AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}