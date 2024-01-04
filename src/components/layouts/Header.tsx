import Link from 'next/link'
import AuthButton from '../auth/AuthButton'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='border-b flex justify-between'>
      <Link href='/' className='text-4xl px-2 py-4 '>
        NEO
      </Link>
      <AuthButton />
    </div>
  )
}
