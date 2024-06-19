import Image from 'next/image'
import Link from 'next/link'

export function Church() {
  return (
    <div className='flex flex-col bg-yellow-50 md:flex-row'>
      <div className='md:w-1/2'>
        <Image
          src='/church.jpg'
          alt='church'
          quality={80}
          priority
          width={700}
          height={475}
          sizes='100vw'
          className='h-auto w-full'
        />
      </div>
      <div className='flex flex-col items-center justify-center px-5 py-7 text-center md:w-1/2 md:text-xl'>
        <p>Ceremonia</p>
        <p>Templo Expiatorio de San Luis Gonzaga</p>
        <p>Miguel Hidalgo y Costilla 280, Centro, Monterrey, N.L.</p>
        <p>5:20 pm </p>
        <br />
        <Link
          href='https://maps.app.goo.gl/nJNdwHyYnAQs1KLq8'
          className='underline'
          target='_blank'
        >
          Google Maps
        </Link>
      </div>
    </div>
  )
}
