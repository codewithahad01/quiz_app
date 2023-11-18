import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'
import { ArrowLeft } from 'iconsax-react'

const page = () => {
  return (
    <section className=''>
      <div className='float-left  text-white p-3'>
        <Link href='/' className='flex flex-row button gap-2'>
          <ArrowLeft className='transform transition-transform hover:-translate-x-3' size={24} color='#fff' />
          Back
        </Link>
      </div>
      <div className='flex justify-center items-center h-screen gap-4'>
        <Button title='Easy' link='/level/easy' />
        <Button title='Medium' link='/level/medium' />
        <Button title='Hard' link='/level/hard' />
      </div>
    </section>
  )
}

export default page