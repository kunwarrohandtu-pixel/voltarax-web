import React from "react";
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

const team = [
  { name: 'Shubhika', role: 'Founder & CEO', bio: 'Visionary leader driving innovation.' },
  { name: 'Pradeep Patel', role: 'Chief Operational Manager', bio: 'Operations expert ensuring seamless execution.' },
  { name: 'Kunwar Rohan', role: 'Chief Technical Officer', bio: 'Technical mastermind behind our bio-solar solutions.' },
  { name: 'Manodeep Barai', role: 'Chief Scientific Officer', bio: 'Scientific innovator driving R&D.' },
  { name: 'Dinesh Kumar', role: 'Chief Strategy Officer', bio: 'Strategic planner charting our path to global impact.' },
]
const mentors = [{ name: 'Prof. Jai Gopal Sharma', role: 'Mentor', bio: 'Renowned academic and industry expert guiding our vision.' }]

export default function TeamPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" /></div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection><h1 className="heading-xl text-[#1A3A1A] mb-4">Meet Our <span className="text-gradient">Team</span></h1><p className="text-lg text-[#1A3A1A]/70 max-w-2xl mx-auto">The passionate individuals behind Voltarax.</p></AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection><h2 className="heading-md text-center text-[#1A3A1A] mb-12">Leadership <span className="text-gradient">Team</span></h2></AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i*0.1}>
                <motion.div className="bg-[#F0FFF0] rounded-2xl overflow-hidden shadow-lg card-hover" whileHover={{ scale: 1.02 }}>
                  <div className="relative h-64 bg-[#2E7D32]/10 flex items-center justify-center">
                    <div className="text-6xl text-[#2E7D32]">{member.name[0]}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A1A]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white"><h3 className="font-bold text-xl">{member.name}</h3><p className="text-sm text-white/80">{member.role}</p></div>
                  </div>
                  <div className="p-6"><p className="text-sm text-[#1A3A1A]/70 mb-4">{member.bio}</p><div className="flex gap-3"><a href="#" className="text-[#2E7D32] hover:text-[#1B5E20]"><FaLinkedin size={20} /></a><a href="#" className="text-[#2E7D32] hover:text-[#1B5E20]"><FaEnvelope size={20} /></a></div></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-gradient-to-b from-white to-[#F0FFF0]">
        <div className="container-custom">
          <AnimatedSection><h2 className="heading-md text-center text-[#1A3A1A] mb-12">Our <span className="text-gradient">Mentor</span></h2></AnimatedSection>
          <div className="max-w-md mx-auto">
            {mentors.map((m, i) => (
              <AnimatedSection key={i} delay={0.2}>
                <motion.div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover" whileHover={{ scale: 1.02 }}>
                  <div className="relative h-64 bg-[#2E7D32]/10 flex items-center justify-center">
                    <div className="text-6xl text-[#2E7D32]">{m.name[0]}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A1A]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white"><h3 className="font-bold text-xl">{m.name}</h3><p className="text-sm text-white/80">{m.role}</p></div>
                  </div>
                  <div className="p-6"><p className="text-sm text-[#1A3A1A]/70">{m.bio}</p></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}