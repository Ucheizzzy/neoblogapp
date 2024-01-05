import prisma from '@/utils/db'

export default async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className='container-sm mt-6'>
      {post && (
        <>
          <h1 className='text-5xl mb-5'>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
    </div>
  )
}
