import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received contact data:', body)  // Debug log

    const { name, email, phone, subject, message } = body
    if (!name || !email || !subject || !message) {
      console.log('Missing required fields')
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const contact = await prisma.contact.create({
      data: { name, email, phone, subject, message }
    })
    console.log('Saved contact:', contact)  // Debug log

    return NextResponse.json({ message: 'Message sent', id: contact.id }, { status: 200 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}