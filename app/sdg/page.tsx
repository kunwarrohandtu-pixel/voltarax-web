'use client'
import { motion } from 'framer-motion'
import { FaLeaf, FaIndustry, FaCity, FaCloudSun } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

const goals = [
  { number: 7, title: 'Affordable and Clean Energy', icon: FaLeaf, desc: 'Our bio-solar panels provide clean, renewable energy accessible for all.', color: 'bg-yellow-400' },
  { number: 9, title: 'Industry, Innovation and Infrastructure', icon: FaIndustry, desc: 'We pioneer innovative technologies for sustainable infrastructure.', color: 'bg-blue-400' },
  { number: 11, title: 'Sustainable Cities and Communities', icon: FaCity, desc: 'Our solutions help create sustainable urban environments.', color: 'bg-orange-400' },
  { number: 13, title: 'Climate Action', icon: FaCloudSun, desc: 'By reducing carbon emissions, we actively combat climate change.', color: 'bg-green-400' },
]

export default function SDGPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" /></div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection><h1 className="heading-xl text-[#1A3A1A] mb-4">Sustainable Development <span className="text-gradient">Goals</span></h1><p className="text-lg text-[#1A3A1A]/70 max-w-3xl mx-auto">Voltarax is committed to achieving the UN SDGs through innovative bio-solar technology.</p></AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((g, i) => (
              <AnimatedSection key={i} delay={i*0.1}>
                <motion.div className="bg-[#F0FFF0] rounded-2xl p-8 shadow-lg card-hover" whileHover={{ scale: 1.02 }}>
                  <div className="flex items-center gap-4 mb-4"><div className={`w-16 h-16 ${g.color} rounded-full flex items-center justify-center`}><span className="text-2xl font-bold text-white">{g.number}</span></div><g.icon className="text-4xl text-[#2E7D32]" /></div>
                  <h3 className="font-bold text-xl text-[#1A3A1A] mb-3">{g.title}</h3>
                  <p className="text-[#1A3A1A]/70">{g.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}