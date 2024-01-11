import prisma from '@/utils/db'

export default async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      author: true,
    },
  })

  return (
    <div className='container-sm mt-6'>
      {post && (
        <>
          <h1 className='text-5xl mb-5'>{post.title}</h1>
          <div className='flex items-center'>
            <p className='text-sm text-gray-500'>By</p>
            <div
              className='w-5 h-5 ml-3 mr-2 rounded-full bg-contain'
              style={{ backgroundImage: `url(${post?.author?.image})` }}
            ></div>
            <p className='text-sm text-gray-500'>{post.author.name}</p>
          </div>
          <p>{post.content}</p>
        </>
      )}
    </div>
  )
}
