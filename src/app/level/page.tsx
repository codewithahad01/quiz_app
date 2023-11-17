import Button from '@/components/Button'
import React from 'react'

const page = () => {
  return (
    <section className='flex justify-center items-center h-screen gap-4'>
        <Button title='Easy' link='/level/easy' />
        <Button title='Medium' link='/level/medium' />
        <Button title='Hard' link='/level/hard' />
    </section>
  )
}

export default page