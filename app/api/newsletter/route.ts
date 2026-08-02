import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/mongodb'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const existing = await prisma.newsletter.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
    }

    const subscriber = await prisma.newsletter.create({
      data: { email }
    })

    return NextResponse.json({ message: 'Subscribed successfully', id: subscriber.id }, { status: 200 })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}