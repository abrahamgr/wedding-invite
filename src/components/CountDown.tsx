'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function CountDown() {
  const [expired, setExpired] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date(2024, 7, 16).getTime()

    // Update the count down every 1 second
    const intervalId = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      const currentDays = Math.floor(distance / (1000 * 60 * 60 * 24))
      const currentHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const currentMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60),
      )
      const currentSeconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Display the result in the element with id="demo"
      setDays(currentDays)
      setHours(currentHours)
      setMinutes(currentMinutes)
      setSeconds(currentSeconds)

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(intervalId)
        setExpired(true)
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='flex w-full flex-col items-center md:flex-row-reverse'>
      <div className='md:w-1/3'>
        <Image
          src='/inf-75.jpg'
          alt='img'
          sizes='(max-width: 768px) 100vw, 33vw'
          quality={50}
          width={700}
          height={475}
          className='z-0 h-auto w-full'
        />
      </div>
      <div className='flex flex-col items-center md:w-2/3'>
        <div className='flex w-full flex-row items-center justify-center p-5 text-3xl md:p-10'>
          <p>Viernes</p>
          <p>&nbsp;| 16 |&nbsp;</p>
          <p>Agosto</p>
        </div>
        <div className='flex w-full flex-col items-center justify-center p-5 md:p-10'>
          <Image
            src='/stars.gif'
            alt='stars'
            unoptimized
            width={700}
            height={475}
            className='absolute z-0 h-auto w-full'
          />
          <p className='z-10'>Cuenta regresiva</p>
          <p className='z-10 text-3xl'>
            {expired
              ? 'Ya es hora!'
              : `${days}d ${hours}h ${minutes}m ${seconds}s`}
          </p>
        </div>
      </div>
    </div>
  )
}
