'use client'
import { useSession } from 'next-auth/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import type { Category, Prisma, User } from '@prisma/client'
import { createPost } from '@/actions/publishPost'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { UploadButton } from '@/utils/uploadthing'
import CategoryDropdown from './CategoryDropdown'

type Props = {
  categories: Category[]
}
export default function NewBlogForm({ categories }: Props) {
  const { data: session, status } = useSession()
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [postId, setPostId] = useState<number | null>(null)
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const [categoryId, setCategoryId] = useState<number | null>(null)

  type formDataType = {
    title: string
    content: string
  }
  const [formData, setFormData] = useState<formDataType>({
    title: '',
    content: '',
  })
  if (!session && status !== 'loading')
    return (
      <div className='py-2 container flex flex-col mt-12'>
        <div className='flex flex-col flex-1 items-stretch justify-center h-full text-left border p-8'>
          <h1 className='text-4xl'>You must be logged in to post:</h1>
          <Link href='/' className='text-indigo-500 text-xl mt-4'>
            Go back home or sign in!!
          </Link>
        </div>
      </div>
    )
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { id } = session?.user as User
    if (!id) return
    try {
      let newPost: Prisma.PostUncheckedCreateInput = {
        title: formData.title,
        content: formData.content,
        authorId: id,
        imgURL: thumbnail,
      }
      if (categoryId) {
        newPost.categories = {
          connect: [{ id: categoryId }],
        }
      }
      const post = await createPost(newPost)
      toast.success('post created successfully')
      setPostId(post.id)
      setFormData({
        title: '',
        content: '',
      })
      setSubmitted(true)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  if (submitted)
    return (
      <div className='py-2 container flex flex-col mt-12'>
        <div className='flex flex-col flex-1 items-stretch justify-center h-full text-left border p-8'>
          <h1 className='text-4xl'>Your post has been published:</h1>
          <Link
            href={`/blog/${postId}`}
            className='text-indigo-500 text-xl mt-4'
          >
            Click here to view
          </Link>
        </div>
      </div>
    )
  return (
    <div className='min-h-[calc(100vh-130px)] py-2 container flex flex-col mt-12'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col flex-1 items-stretch justify-center h-full text-left'
      >
        <input
          type='text'
          className='text-6xl focus-visible:outline-none'
          placeholder='Title'
          name='title'
          required
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name='content'
          className='flex-1 focus-visible:outline-none text-4xl mt-2'
          placeholder='Content'
          value={formData.content}
          required
          onChange={handleChange}
        ></textarea>
        <div className='self-start'>
          {thumbnail && (
            <img
              src={thumbnail}
              alt='thumbnail'
              className='w-20 h-20 object-cover rounded-full'
            />
          )}
          <label className='text-slate-600 mb-3 mt-3'>
            {thumbnail ? 'Change Image' : ' Add thumbnail(optional)'}
          </label>
          <UploadButton
            className='items-start mt-3 '
            endpoint='imageUploader'
            onClientUploadComplete={(res) => {
              // Do something with the response
              if (res) {
                setThumbnail(res[0].url)
                toast.success('Upload Completed')
              }
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              toast.error(error.message)
            }}
          />

          <CategoryDropdown
            list={categories}
            selected={categoryId}
            setSelected={(selected: number) => setCategoryId(selected)}
          />
        </div>
        <button
          type='submit'
          className='text-white bg-indigo-400 px-4 py-2 sm:px-6 sm:py-4 mt-6 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'
        >
          Create Post
        </button>
      </form>
    </div>
  )
}
