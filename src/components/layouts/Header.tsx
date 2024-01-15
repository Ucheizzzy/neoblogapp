'use client'
import Link from 'next/link'
import AuthButton from '../auth/AuthButton'
import { SessionProvider } from 'next-auth/react'
export default function Header() {
  return (
    <SessionProvider>
      <div className='border-b flex justify-between'>
        <Link href='/' className='text-4xl px-2 py-4 font-bold '>
          NEO BLOG
        </Link>
        <AuthButton />
      </div>
    </SessionProvider>
  )
}
