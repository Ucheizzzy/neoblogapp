import CalloutSection from '@/components/home/CalloutSection'
import HeroSection from '@/components/home/HeroSection'
import Post from '@/components/home/Post'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='container'>
        <Post />
      </div>
      <CalloutSection />
    </>
  )
}
