'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Session } from 'next-auth'
import '@uploadthing/react/styles.css'

export default function Layout({ children, session }: any) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
