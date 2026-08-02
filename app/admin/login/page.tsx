'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FaLeaf, FaSun } from 'react-icons/fa'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid email or password')
      setLoading(false)
    } else {
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F0FFF0] to-white px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-3 mb-4">
            <FaLeaf className="text-4xl text-[#2E7D32] animate-float" />
            <FaSun className="text-4xl text-yellow-400 animate-pulse-slow" />
          </div>
          <h1 className="text-2xl font-bold text-[#1A3A1A]">Admin Login</h1>
          <p className="text-sm text-[#1A3A1A]/60">Access the Voltarax dashboard</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
              placeholder="admin@voltarax.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A3A1A] mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2E7D32] bg-white text-[#1A3A1A]"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary justify-center"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-[#1A3A1A]/40 mt-6">
          Use the admin credentials from your .env file
        </p>
      </div>
    </div>
  )
}