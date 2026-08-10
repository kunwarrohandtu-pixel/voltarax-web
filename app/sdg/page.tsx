'use client'

import React from "react";
import { motion } from 'framer-motion'
import { FaLeaf, FaIndustry, FaCity, FaCloudSun, FaExclamationTriangle, FaLightbulb, FaRecycle, FaChartLine, FaRupeeSign } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

const goals = [
  { number: 7, title: 'Affordable and Clean Energy', icon: FaLeaf, desc: 'Our bio-solar panels provide clean, renewable energy accessible for all.', color: 'bg-yellow-400', iconColor: 'text-yellow-500' },
  { number: 9, title: 'Industry, Innovation and Infrastructure', icon: FaIndustry, desc: 'We pioneer innovative technologies for sustainable infrastructure.', color: 'bg-blue-400', iconColor: 'text-blue-500' },
  { number: 11, title: 'Sustainable Cities and Communities', icon: FaCity, desc: 'Our solutions help create sustainable urban environments.', color: 'bg-orange-400', iconColor: 'text-orange-500' },
  { number: 13, title: 'Climate Action', icon: FaCloudSun, desc: 'By reducing carbon emissions, we actively combat climate change.', color: 'bg-green-400', iconColor: 'text-green-500' },
]

const problems = [
  { icon: FaRecycle, text: 'Recycling of panels – solar waste management is a growing challenge' },
  { icon: FaMoon, text: 'Night efficiency – conventional panels are inefficient during nighttime' },
  { icon: FaLightbulb, text: 'Bio-solar research – limited investment and development in India' },
  { icon: FaRupeeSign, text: 'Manufacturing cost – high production costs hinder widespread adoption' },
  { icon: FaChartLine, text: 'Parts imported from China – 60-70% of components rely on imports' },
]

export default function SDGPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h1 className="heading-xl text-[#1A3A1A] mb-4">Sustainable Development <span className="text-gradient">Goals</span></h1>
            <p className="text-lg text-[#1A3A1A]/70 max-w-3xl mx-auto">
              Voltarax is committed to achieving the UN SDGs through innovative bio-solar technology and sustainable practices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Current Scenario - Problem */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-3xl text-red-500" />
                <h2 className="heading-md text-[#1A3A1A]">Current Scenario of Solar Panels in India</h2>
              </div>
              <p className="text-[#1A3A1A]/70 mb-4">
                Despite India's ambitious renewable energy targets, the solar sector faces critical challenges:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                    <p.icon className="text-xl text-red-500 mt-0.5" />
                    <span className="text-sm text-[#1A3A1A]/80">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Need Section */}
          <AnimatedSection delay={0.1}>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-3xl text-[#2E7D32]" />
                <h2 className="heading-md text-[#1A3A1A]">The Need for Bio-Solar Panels</h2>
              </div>
              <p className="text-[#1A3A1A]/70 leading-relaxed">
                With 60-70% of solar components imported, high manufacturing costs, and limited research in bio-solar technologies, 
                India urgently needs indigenous, cost-effective, and sustainable solar solutions. Bio-solar panels offer the potential 
                for enhanced efficiency, reduced reliance on imports, and environmentally friendly energy generation. By investing in 
                bio-based photovoltaic research and AI-powered optimization, India can achieve energy independence, create jobs, and 
                lead the global transition toward a cleaner, more sustainable energy future.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="section-padding bg-[#F0FFF0]">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="heading-md text-center text-[#1A3A1A] mb-12">
              How Voltarax Contributes to the <span className="text-gradient">SDGs</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((g, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div className="bg-white rounded-2xl p-8 shadow-lg card-hover" whileHover={{ scale: 1.02 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 ${g.color} rounded-full flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-white">{g.number}</span>
                    </div>
                    <g.icon className={`text-4xl ${g.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-xl text-[#1A3A1A] mb-3">{g.title}</h3>
                  <p className="text-[#1A3A1A]/70">{g.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-[#1A3A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-4">Join the <span className="text-yellow-400">Green Revolution</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Be part of India's journey toward energy independence and a sustainable future with Voltarax.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">Partner With Us</a>
              <a href="/application" className="btn-secondary border-white text-white hover:bg-white hover:text-[#1A3A1A]">Join Our Team</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}