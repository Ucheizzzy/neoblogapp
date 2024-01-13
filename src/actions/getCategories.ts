'use server'

import prisma from '@/utils/db'

export async function getCategories() {
  const categories = await prisma.category.findMany()
  return categories
}
