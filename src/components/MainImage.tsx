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
      <h1
        className={`${handWriteFont.className} absolute right-[25%] top-[10vh] text-8xl text-slate-200 sm:right-[30%] md:right-[43%] md:top-[30vh]`}
      >
        {title}
      </h1>
      <Image
        src={img}
        alt='portada'
        quality={50}
        priority
        width={1280}
        height={855}
        sizes='100vw'
        className='h-auto w-full'
      />
      <Audio />
    </div>
  )
}
