import Image from 'next/image'
import githubIcon from '/public/github-icon.svg'
import twitterIcon from '/public/twitter-icon.svg'
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-12 px-4'>
      <div className='flex container justify-between'>
        <div className='flex flex-row items-center'>
          <div>
            <p className='text-2xl mb-3'>Neo Blog</p>
            <p className='text-sm'>© {new Date().getFullYear()} Neo Blog</p>
          </div>
        </div>
        <div className='flex'>
          <a href='https://github.com' target='_blank' className='mr-3'>
            <Image src={githubIcon} alt='github' width={32} height={32} />
          </a>
          <a href='https://twitter.com' target='_blank'>
            <Image src={twitterIcon} alt='twitter' width={32} height={32} />
          </a>
        </div>
      </div>
    </footer>
  )
}
