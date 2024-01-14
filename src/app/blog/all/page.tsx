import prisma from '@/utils/db'
import AllPosts from './AllPosts'
import { Prisma } from '@prisma/client'
type PostWithCategories = Prisma.PostGetPayload<{
  include: { categories: true }
}>

export default async function page() {
  const posts: PostWithCategories[] = await prisma.post.findMany({
    include: {
      categories: true,
    },
  })
  const categories = await prisma.category.findMany()
  return (
    <section className='my-24 container'>
      <h2 className='text-4xl text-center my-6'>All Articles</h2>
      <AllPosts categories={categories} posts={posts} />
    </section>
  )
}
