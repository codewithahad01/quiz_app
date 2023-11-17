import React from 'react'
import './Button'
import Button from './Button'

const Hero = () => {
  return (
    <div className='flex flex-col'>
        <h1>Let's start the quiz!</h1>
        <div className='flex justify-center'>
          <Button title="Start" link='/level' />
        </div>
    </div>
  )
}

export default Hero