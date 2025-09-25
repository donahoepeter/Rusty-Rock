import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST() {
  try {
    const user = await prisma.user.upsert({
      where: { email: 'demo@example.com' },
      update: {},
      create: {
        name: 'Demo User',
        email: 'demo@example.com',
        posts: {
          create: {
            title: 'Hello World',
            content: 'This is a demo post created by the seed endpoint'
          }
        }
      },
      include: {
        posts: true
      }
    })

    return NextResponse.json({
      message: 'Seed data created successfully',
      user
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to seed data' },
      { status: 500 }
    )
  }
}