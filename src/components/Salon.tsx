import Image from 'next/image'
import Link from 'next/link'

export function Salon() {
  return (
    <div className='flex flex-col bg-yellow-50 md:flex-row-reverse'>
      <div className='md:w-1/2'>
        <Image
          src='https://scontent.fntr6-1.fna.fbcdn.net/v/t1.6435-9/199231020_355765772642532_3489045091902622708_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=znNsDATHS70Q7kNvgHQPXar&_nc_ht=scontent.fntr6-1.fna&oh=00_AYAhNrtOpkPhoGnb1xAunL2cnUzFWD7ozD_X75BkzGAA8g&oe=6696DF56'
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
        <p>Recepción</p>
        <p>Grand Imperio Social Venue</p>
        <p>Benito Juárez 1937, Crispín Treviño, Guadalupe, N.L.</p>
        <p>7:20 pm </p>
        <br />
        <Link
          href='https://maps.app.goo.gl/d9ac1o3QX83omvvu5'
          className='underline'
          target='_blank'
        >
          Google Maps
        </Link>
      </div>
    </div>
  )
}
