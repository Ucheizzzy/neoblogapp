import prisma from '@/utils/db'

export default async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  })
  console.log(post)

  return <div className='container-sm mt-6'>
    {post && <></>}
  </div>
}
