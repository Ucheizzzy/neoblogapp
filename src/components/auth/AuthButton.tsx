'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
export default function AuthButton() {
  const { data: session, status } = useSession()
  // console.log(session)

  if (status === 'loading')
    return (
      <button className='h-5 w-5 animate-spin rounded-full border-b-2 border-white my-auto mx-5'></button>
    )

  if (session) {
    return (
      <div className='flex items-stretch'>
        <Link href='/blog/new' className='mr-6 hover:underline self-center'>
          ✍️ Write a Post
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault()
            signOut()
          }}
          className='text-white bg-black p-4 cursor-pointer'
        >
          Sign out
        </button>
      </div>
    )
  }
  return (
    <button
      className='text-white bg-black p-4 cursor-pointer'
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}
