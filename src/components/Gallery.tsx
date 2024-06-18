'use client'

import Image from 'next/image'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

interface GalleryProps {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div>
      <Carousel responsive={responsive} ssr infinite autoPlay>
        {images.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`img-${idx}`}
            quality={50}
            priority
            width={700}
            height={475}
            className='h-auto w-full'
          />
        ))}
      </Carousel>
    </div>
  )
}
