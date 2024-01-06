import Image from 'next/image'
import githubIcon from '/public/github-icon.svg'
import twitterIcon from '/public/twitter-icon.svg'
export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-12 px-4 flex container justify-between '>
      <div className='flex flex-row items-center gap-3'>
        <p className='text-2xl mb-3'>Neo App</p>
        <p className='text-sm'>©️ {new Date().getFullYear()} Neo App</p>
      </div>

      <div className='flex gap-2'>
        <a href=''>
          <Image src={githubIcon} width={32} height={32} alt='github' />
        </a>
        <a href=''>
          <Image src={twitterIcon} width={32} height={32} alt='twitter' />
        </a>
      </div>
    </footer>
  )
}
