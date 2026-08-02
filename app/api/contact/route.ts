import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/mongodb'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received contact data:', body)

    const { name, email, phone, subject, message } = body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const contact = await prisma.contact.create({
      data: { name, email, phone, subject, message }
    })
    console.log('Saved contact:', contact)

    return NextResponse.json({ message: 'Message sent', id: contact.id }, { status: 200 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}