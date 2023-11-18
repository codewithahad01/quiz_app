import React from 'react'
import './Button'
import Button from './Button'
import { ArrowRight } from 'iconsax-react'

const Hero = () => {
  return (
    <div className='flex flex-col'>
        <h1>Let's start the quiz!</h1>
        <div className='flex justify-center gap-3'>
          <Button title="Start" link='/level' icon={<ArrowRight size={24} color='#fff' />} />
        </div>
    </div>
  )
}

export default Hero