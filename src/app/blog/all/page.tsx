import prisma from '@/utils/db'
import AllPosts from './AllPosts'
import { Prisma } from '@prisma/client'
export const dynamic = 'force-dynamic'
export default async function page() {
  type PostWithCategories = Prisma.PostGetPayload<{
    include: { categories: true }
  }>
  const posts: PostWithCategories[] = await prisma.post.findMany({
    include: {
      categories: true,
    },
  })
  // console.log(posts)

  const categories = await prisma.category.findMany()
  // console.log(categories)
  return (
    <section className='my-24 container'>
      <h2 className='text-4xl text-center my-6'>All Articles</h2>
      <AllPosts categories={categories} posts={posts} />
    </section>
  )
}
