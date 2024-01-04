import prisma from '@/utils/db'
import PostCard from './PostCard'

export default async function Post() {
  const posts = await prisma.post.findMany()

  return (
    <section>
      <h2 className='text-4xl text-center mt-6'>Trending</h2>
      <div>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
