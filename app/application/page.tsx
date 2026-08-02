'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUpload, FaCheckCircle } from 'react-icons/fa'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ApplicationPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    message: ''
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
      message: ''
    })
    setFile(null)
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-[#F0FFF0] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <h1 className="heading-xl text-center text-[#1A3A1A] mb-4">
                Join Our <span className="text-gradient">Team</span>
              </h1>
              <p className="text-center text-[#1A3A1A]/70 mb-8">
                Apply to join the Voltarax team and help us build a sustainable future.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    Application submitted successfully! We'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 transition-colors"
                      placeholder="Your current company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                      Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 transition-colors"
                      placeholder="Position you're applying for"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="experience"
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] transition-colors"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                      Message / Cover Letter
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] bg-white text-[#1A3A1A] placeholder:text-gray-400 resize-none transition-colors"
                      placeholder="Tell us why you'd like to join Voltarax..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A3A1A] mb-1">
                      Upload Resume (PDF, DOC) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        required
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#2E7D32] transition-colors cursor-pointer">
                        <FaUpload className="text-2xl text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-[#1A3A1A]/60">
                          {file ? file.name : 'Click or drag to upload your resume'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary justify-center"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
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