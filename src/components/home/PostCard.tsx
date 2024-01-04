import { Post } from '@prisma/client'
import React from 'react'

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  return <div>PostCard</div>
}
