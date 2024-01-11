import prisma from '@/utils/db'
import PostCard from './PostCard'

export default async function Post() {
  const posts = await prisma.post.findMany({
    take: 3,
    orderBy: {
      
    },
  })

  const bgClasses = ['bg-emerald-500', 'bg-blue-500', 'bg-yellow-500']
  return (
    <section>
      <h2 className='text-4xl text-center mt-6'>Trending</h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </section>
  )
}
