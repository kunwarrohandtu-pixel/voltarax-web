'use client'

import React from "react";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSuccess(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E7D32] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h1 className="heading-xl text-[#1A3A1A] mb-4">Get In <span className="text-gradient">Touch</span></h1>
              <p className="text-lg text-[#1A3A1A]/70 mb-8">Have questions about our bio-solar technology? We'd love to hear from you.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#2E7D32] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A1A]">Address</h4>
                    <p className="text-[#1A3A1A]/70">A Block, 171, Shastri Nagar, Delhi - 110052</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-[#2E7D32] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A1A]">Phone</h4>
                    <p className="text-[#1A3A1A]/70">+91 83839451859</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[#2E7D32] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A1A]">Email</h4>
                    <p className="text-[#1A3A1A]/70">voltaraxpvtltd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-[#2E7D32] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A1A]">Working Hours</h4>
                    <p className="text-[#1A3A1A]/70">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="font-bold text-2xl text-[#1A3A1A] mb-6">Send a Message</h2>
                {success && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">Message sent successfully!</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={(e) => setForm({...form, subject: e.target.value})}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button type="submit" disabled={submitting} className="w-full btn-primary justify-center">
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}