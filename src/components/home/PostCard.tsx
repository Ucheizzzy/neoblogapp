import type { Post } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

type Props = {
  post: Post
  className?: string
}

export default function PostCard({ post, className }: Props) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`${className} p-4 rounded border-2 line-clamp-6 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}
    >
      <h2 className='text-2xl lg:text-3xl mb-3'>{post.title}</h2>
      <p className='line-clamp-3'>{post.content}</p>
    </Link>
  )
}
