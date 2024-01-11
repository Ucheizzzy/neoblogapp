'use server'
import prisma from '@/utils/db'
import type { Prisma } from '@prisma/client'

export async function createPost(postInfo: Prisma.PostUncheckedCreateInput) {
  const newPost = await prisma.post.create({
    data: {
      ...postInfo,
    },
  })

  return newPost
}
