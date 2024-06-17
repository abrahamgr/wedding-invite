import { handWriteFont } from '@/fonts'
import Image from 'next/image'
import { Audio } from '@/components/Audio'

interface MainImageProps {
  img: string
  title: string
}

export function MainImage({ img, title }: MainImageProps) {
  return (
    <div className='flex'>
      <div className=''>
        <h1
          className={`${handWriteFont.className} absolute right-[20%] top-[10vh] text-8xl text-slate-200 sm:right-[30%] md:right-[45%] md:top-[30vh]`}
        >
          {title}
        </h1>
        <Image
          src={img}
          alt='portada'
          quality={80}
          priority
          width={700}
          height={475}
          sizes='100vw'
          className='h-auto w-full'
        />
      </div>
      <Audio />
    </div>
  )
}
