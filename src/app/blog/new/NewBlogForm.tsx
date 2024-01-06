export default function NewBlogForm() {
  return (
    <div className='min-h-[calc(100vh-130px)] py-2 container flex flex-col mt-12'>
      <form
        action=''
        className='flex flex-col flex-1 items-stretch justify-center h-full text-left'
      >
        <input
          type='text'
          className='text-6xl focus-visible:outline-none'
          placeholder='Title'
        />

        <textarea
          name='content'
          className='flex-1 focus-visible:outline-none text-4xl mt-2'
          placeholder='Content'
        ></textarea>

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
