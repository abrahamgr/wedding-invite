import { handWriteFont } from '@/fonts'
import Image from 'next/image'

export function ThankYou() {
  return (
    <div className='flex flex-col items-center justify-center p-10 md:text-xl'>
      <p className='z-10'>Gracias por ser parte de este gran día</p>
      <p className='z-10'>Con cariño</p>
      <p
        className={`${handWriteFont.className} z-10 py-3 text-center text-6xl md:text-8xl`}
      >
        Jaquelline <br />&<br /> Abraham
      </p>
      <Image
        src='/heart.gif'
        alt='heart'
        unoptimized
        width={500}
        height={200}
        className='absolute z-0 w-[350px]'
      />
    </div>
  )
}
