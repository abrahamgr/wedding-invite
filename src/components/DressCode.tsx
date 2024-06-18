import Image from 'next/image'

interface DressColor {
  src: string
  alt: string
}

const colors: DressColor[] = [
  {
    src: '/code/black.png',
    alt: 'code-black',
  },
  {
    src: '/code/green.png',
    alt: 'code-breen',
  },
  {
    src: '/code/red.png',
    alt: 'code-red',
  },
  {
    src: '/code/blue.png',
    alt: 'code-blue',
  },
]

export function DressCode() {
  return (
    <div className='flex w-full flex-col items-center justify-center p-5 md:p-10'>
      <h2 className='text-xl md:text-2xl'>Código de vestimenta</h2>
      <p>Formal</p>
      <br />
      <div className='flex w-full'>
        <div className='w-1/2'>
          <Image
            src='/suit.png'
            className='m-auto my-0 h-auto'
            alt='suit'
            width={65}
            height={40}
          />
        </div>
        <div className='w-1/2'>
          <Image
            src='/dress.svg'
            className='m-auto my-0 h-auto'
            alt='dress'
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex flex-row flex-wrap content-between'>
          {colors.map((item) => (
            <div className='relative m-2 h-10 w-10' key={item.alt}>
              <Image
                src={item.src}
                alt={item.alt}
                className='rounded-3xl'
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <p>Colores sugeridos</p>
    </div>
  )
}
