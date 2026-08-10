'use client'

import React from "react";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUpload, FaCheckCircle, FaSolarPanel, FaBuilding, FaShieldAlt, FaTree, FaUniversity, FaCity, FaUsers, FaHospital } from 'react-icons/fa'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

const deploymentTypes = [
  {
    id: 'rooftop',
    title: 'Rooftop Panels',
    icon: FaSolarPanel,
    description: 'Residential and commercial rooftop installations for clean energy generation.',
    image: '/images/application/rooftop.jpg',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'metro',
    title: 'Metro Chambers',
    icon: FaCity,
    description: 'Bio-solar panels integrated into metro infrastructure for sustainable urban transit.',
    image: '/images/application/metro.jpg',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'farming',
    title: 'Farming Fields',
    icon: FaTree,
    description: 'Agrivoltaic solutions combining agriculture with solar energy generation.',
    image: '/images/application/farming.jpg',
    color: 'from-green-600 to-lime-600'
  },
  {
    id: 'defence',
    title: 'Defence & Security',
    icon: FaShieldAlt,
    description: 'Robust bio-solar solutions for military installations and security operations.',
    image: '/images/application/defence.jpg',
    color: 'from-slate-600 to-gray-700'
  },
  {
    id: 'institutions',
    title: 'Institutions & Education',
    icon: FaUniversity,
    description: 'Sustainable energy solutions for schools, colleges, and research institutions.',
    image: '/images/application/institutions.jpg',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'bipb',
    title: 'Building Integrated Photovoltaic (BIPV)',
    icon: FaBuilding,
    description: 'Aesthetic bio-solar panels integrated into building facades for MNCs and commercial spaces.',
    image: '/images/application/bipb.jpg',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'bunkers',
    title: 'Army Bunkers & Surveillance',
    icon: FaShieldAlt,
    description: 'High-durability bio-solar panels for remote military outposts and surveillance posts.',
    image: '/images/application/bunkers.jpg',
    color: 'from-gray-700 to-stone-800'
  },
  {
    id: 'disaster',
    title: 'Disaster Relief & Emergency Camps',
    icon: FaHospital,
    description: 'Portable bio-solar solutions for rapid deployment in disaster-affected areas.',
    image: '/images/application/disaster.jpg',
    color: 'from-orange-500 to-red-600'
  }
]

export default function ApplicationPage() {
  const [selectedType, setSelectedType] = useState(deploymentTypes[0])
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    message: '',
    deploymentInterest: ''
  })
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSuccess(true)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      experience: '',
      message: '',
      deploymentInterest: ''
    })
    setFile(null)
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="heading-xl text-center text-[#1A3A1A] mb-4">
              Our <span className="text-gradient">Applications</span>
            </h1>
            <p className="text-center text-[#1A3A1A]/70 max-w-2xl mx-auto mb-8">
              Explore our bio-solar solutions deployed across diverse sectors, from urban infrastructure to defence and disaster relief.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Deployment Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - Deployment Types */}
            <div className="lg:col-span-1">
              <div className="bg-[#F0FFF0] rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="font-semibold text-lg text-[#1A3A1A] mb-4">Deployment Types</h3>
                <div className="space-y-2">
                  {deploymentTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                        selectedType.id === type.id
                          ? 'bg-[#2E7D32] text-white shadow-md'
                          : 'hover:bg-[#2E7D32]/10 text-[#1A3A1A]'
                      }`}
                    >
                      <type.icon className={`text-lg ${selectedType.id === type.id ? 'text-white' : 'text-[#2E7D32]'}`} />
                      <span className="text-sm font-medium">{type.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedType.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#F0FFF0] rounded-2xl overflow-hidden shadow-lg"
              >
                <div className={`h-64 bg-gradient-to-r ${selectedType.color} flex items-center justify-center relative`}>
                  <div className="text-white text-center p-8">
                    <selectedType.icon className="text-6xl mx-auto mb-4" />
                    <h2 className="text-3xl font-bold">{selectedType.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#1A3A1A]/70 mb-4">{selectedType.description}</p>
                  <div className="flex items-center gap-2 text-sm text-[#2E7D32]">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#2E7D32]/10 rounded-full">
                      <FaCheckCircle size={12} /> Available for deployment
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Application Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
                <h3 className="font-bold text-xl text-[#1A3A1A] mb-4">Deployment Enquiry / Join Our Team</h3>
                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    Application submitted successfully!
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1A3A1A] mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={(e) => setForm({...form, firstName: e.target.value})}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={(e) => setForm({...form, lastName: e.target.value})}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Company (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={(e) => setForm({...form, company: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Deployment Interest</label>
                    <select
                      name="deploymentInterest"
                      value={form.deploymentInterest}
                      onChange={(e) => setForm({...form, deploymentInterest: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
                    >
                      <option value="">Select deployment type</option>
                      {deploymentTypes.map((type) => (
                        <option key={type.id} value={type.title}>{type.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A] resize-none"
                      placeholder="Tell us about your deployment needs..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Upload Resume (Optional)</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#2E7D32] transition-colors">
                        <FaUpload className="text-2xl text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-[#1A3A1A]/60">{file ? file.name : 'Click or drag to upload your resume'}</p>
                      </div>
                    </div>
                  </div>
                  <button type="submit" disabled={submitting} className="w-full btn-primary justify-center">
                    {submitting ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}