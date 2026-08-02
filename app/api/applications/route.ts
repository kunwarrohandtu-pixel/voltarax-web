import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/mongodb'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, position, experience, message, resumeUrl } = body

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const application = await prisma.application.create({
      data: { firstName, lastName, email, phone, company, position, experience, message, resumeUrl }
    })

    return NextResponse.json({ message: 'Application submitted', id: application.id }, { status: 200 })
  } catch (error) {
    console.error('Application API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}