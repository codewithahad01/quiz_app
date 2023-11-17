import Image from 'next/image'
import Hero from '@/components/Hero'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="">
      <section className='float-right p-5'>
        <UserButton afterSignOutUrl='/' />
      </section>

      <div className='flex justify-center items-center w-full h-screen'>
        <Hero />
      </div>
    </main>
  )
}
