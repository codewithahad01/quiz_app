'use client'

import { useState, useEffect} from 'react'

const Timer = ({ second }: { second: number }) => {
    const [startTime, setStartTime] = useState(false)
    const [time, setTime] = useState(second)
    const [timerOn, setTimerOn] = useState(false)    

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time - 1)
            if(time === 0) return setTime(0)
        }, 1000)
        return () => clearInterval(interval)
    }, [time])

  return (
    <section className='button'>
      {`${time}`}
    </section>
  )
}

export default Timer