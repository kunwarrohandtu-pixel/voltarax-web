'use client'

import React from "react";
import { motion } from 'framer-motion'
import { FaLeaf, FaRecycle, FaBolt, FaShieldAlt, FaAward, FaGlobe, FaHandshake, FaSun, FaMoon, FaCloudSun, FaBatteryFull } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

const reasons = [
  { 
    icon: FaMoon, 
    title: 'Works at Night', 
    desc: 'Our bio-luminescent technology enables energy generation even during nighttime, ensuring continuous power supply.', 
    color: 'text-indigo-500', 
    bg: 'bg-indigo-500/10' 
  },
  { 
    icon: FaCloudSun, 
    title: 'Works in Different Environments', 
    desc: 'Highly adaptable to various environmental conditions, from extreme heat to cloudy and low-light settings.', 
    color: 'text-cyan-500', 
    bg: 'bg-cyan-500/10' 
  },
  { 
    icon: FaBatteryFull, 
    title: 'Energy Storage', 
    desc: 'Integrated smart storage solutions ensuring efficient energy utilization and grid independence.', 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10' 
  },
  { 
    icon: FaLeaf, 
    title: 'Bio-Solar Technology', 
    desc: 'Our panels use biological processes to enhance solar energy conversion, resulting in higher efficiency and sustainability.', 
    color: 'text-[#2E7D32]', 
    bg: 'bg-[#2E7D32]/10' 
  },
  { 
    icon: FaRecycle, 
    title: 'Eco-Friendly Materials', 
    desc: '100% biodegradable and recyclable materials, minimizing environmental impact.', 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-500/10' 
  },
  { 
    icon: FaBolt, 
    title: 'Superior Efficiency', 
    desc: 'Our bio-solar technology offers enhanced energy conversion with AI-powered optimization.', 
    color: 'text-yellow-500', 
    bg: 'bg-yellow-500/10' 
  },
  { 
    icon: FaShieldAlt, 
    title: 'Durable & Reliable', 
    desc: 'Built with cutting-edge materials for longevity and minimal maintenance in all conditions.', 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10' 
  },
  { 
    icon: FaAward, 
    title: 'Industry Recognition', 
    desc: 'Globally recognized for innovation in renewable energy and sustainable technology.', 
    color: 'text-purple-500', 
    bg: 'bg-purple-500/10' 
  },
  { 
    icon: FaGlobe, 
    title: 'Global Impact & SDG Alignment', 
    desc: 'Directly contributing to UN Sustainable Development Goals – Clean Energy, Industry Innovation, Climate Action, and Sustainable Communities.', 
    color: 'text-teal-500', 
    bg: 'bg-teal-500/10' 
  },
  { 
    icon: FaHandshake, 
    title: 'Partner Focus – Bio-Integrated PV Systems', 
    desc: 'We collaborate with partners who want to work on bio-integrated environment-friendly photovoltaic (PV) systems, driving sustainable innovation together.', 
    color: 'text-orange-500', 
    bg: 'bg-orange-500/10' 
  },
  { 
    icon: FaSun, 
    title: 'Clean Energy Future', 
    desc: 'Join us in creating a world powered by clean, sustainable energy with our innovative bio-solar solutions.', 
    color: 'text-yellow-400', 
    bg: 'bg-yellow-400/10' 
  },
]

export default function WhyChooseUsPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E7D32] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h1 className="heading-xl text-[#1A3A1A] mb-4">Why Choose <span className="text-gradient">Voltarax</span></h1>
            <p className="text-lg text-[#1A3A1A]/70 max-w-2xl mx-auto">
              Discover why Voltarax is the preferred choice for AI-powered bio-solar technology and sustainable energy solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div className="bg-[#F0FFF0] rounded-2xl p-6 shadow-lg card-hover" whileHover={{ scale: 1.02 }}>
                  <div className={`w-14 h-14 ${r.bg} rounded-full flex items-center justify-center mb-4`}>
                    <r.icon className={`text-2xl ${r.color}`} />
                  </div>
                  <h3 className="font-bold text-lg text-[#1A3A1A] mb-2">{r.title}</h3>
                  <p className="text-sm text-[#1A3A1A]/70">{r.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}