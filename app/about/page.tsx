'use client'

import React from "react";
import Link from 'next/link'
import { FaLeaf, FaRecycle, FaAward, FaSun, FaRocket, FaGlobe, FaLightbulb, FaShieldAlt } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h1 className="heading-xl text-[#1A3A1A] mb-4">About <span className="text-gradient">Voltarax</span></h1>
              <div className="text-lg text-[#1A3A1A]/70 mb-6 leading-relaxed">
                <p className="mb-4">
                  Voltarax is an innovation-driven clean energy startup committed to revolutionizing the renewable energy sector through advanced bio-based photovoltaic technologies and intelligent energy solutions.
                </p>
                <p className="mb-4">
                  Our flagship innovation, the <strong>AI-Assisted Bio-Based Luminescent Solar Panel</strong>, enhances the performance of conventional silicon solar panels by utilizing proprietary bio-based luminescent materials that improve solar spectrum utilization.
                </p>
                <p className="mb-4">
                  By integrating <strong>Artificial Intelligence (AI)</strong>, <strong>Internet of Things (IoT)</strong>, and sustainable material science, we enable real-time energy monitoring, predictive maintenance, and intelligent energy optimization.
                </p>
                <p>
                  Our solutions are designed for government, industry, defence, agriculture, education, smart cities, and residential sectors, supporting clean energy adoption while promoting circular economy principles and sustainable development. At Voltarax, we believe innovation should create environmental, social, and economic value, driving the transition toward a smarter and greener future.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">Get In Touch</Link>
                <Link href="/application" className="btn-secondary">Join Us</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2E7D32]/20 to-yellow-400/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex justify-center gap-6 mb-6">
                    <FaLeaf className="text-7xl text-[#2E7D32] animate-float" />
                    <FaSun className="text-7xl text-yellow-400 animate-pulse-slow" />
                    <FaRocket className="text-7xl text-[#2E7D32] animate-float" style={{ animationDelay: '1s' }} />
                  </div>
                  <p className="text-xl font-semibold text-[#1A3A1A]">Pioneering AI-Powered Bio-Solar Innovation</p>
                  <p className="text-sm text-[#1A3A1A]/60 mt-2">Atmanirbhar Bharat • Sustainable Future</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-[#F0FFF0] p-8 rounded-2xl shadow-lg card-hover">
                <div className="w-14 h-14 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mb-4">
                  <FaRocket className="text-3xl text-[#2E7D32]" />
                </div>
                <h3 className="font-bold text-2xl text-[#1A3A1A] mb-3">Our Mission</h3>
                <p className="text-[#1A3A1A]/70 leading-relaxed">
                  To develop next-generation AI-powered bio-based solar technologies that enhance renewable energy generation through sustainable materials, intelligent monitoring, and innovative engineering. We aim to accelerate the adoption of clean energy by delivering scalable, cost-effective, and environmentally responsible solutions that promote energy efficiency, circular economy principles, and long-term sustainability.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-[#F0FFF0] p-8 rounded-2xl shadow-lg card-hover">
                <div className="w-14 h-14 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
                  <FaGlobe className="text-3xl text-yellow-600" />
                </div>
                <h3 className="font-bold text-2xl text-[#1A3A1A] mb-3">Our Vision</h3>
                <p className="text-[#1A3A1A]/70 leading-relaxed">
                  To become a global leader in AI-enabled sustainable energy technologies, transforming the future of solar power through continuous innovation, indigenous research, and smart renewable energy solutions. We envision a world where clean energy is more efficient, intelligent, and accessible, contributing to <strong>Atmanirbhar Bharat</strong> and a <strong>carbon-neutral future</strong>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-white to-[#F0FFF0]">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="heading-lg text-center text-[#1A3A1A] mb-4">Our Core <span className="text-gradient">Values</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: FaLightbulb, title: 'Innovation', desc: 'Pioneering AI-powered bio-solar technologies for a smarter future.' },
              { icon: FaRecycle, title: 'Sustainability', desc: 'Committed to circular economy principles and environmental responsibility.' },
              { icon: FaShieldAlt, title: 'Impact', desc: 'Creating lasting environmental, social, and economic value.' }
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover">
                  <div className="w-16 h-16 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="text-3xl text-[#2E7D32]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#1A3A1A] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#1A3A1A]/60">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}