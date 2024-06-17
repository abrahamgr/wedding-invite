import Image from 'next/image'

export function OurHistory() {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute z-20 max-w-[500px] p-5 sm:top-1/3'>
        <h2 id='nuestra-historia' className='text-2xl md:text-4xl'>
          Nuesta historia
        </h2>
        <br />
        <p className='text-md md:text-xl'>
          En un mundo digital, encontramos un amor real, desde el primer
          &apos;match&apos;, fuimos nuestro destino, nuestra historia de amor
          única, nacida en redes sociales pero destinada a perdurar para
          siempre. Nuestro match fue solo el comienzo de una historia de amor
          eterna.
        </p>
        <p className='text-md md:text-xl'>
          ¡Estamos listos para decir &apos;sí, acepto&apos;!
        </p>
      </div>
      <Image
        src='/inf-91.jpg'
        alt='portada'
        quality={70}
        width={700}
        height={475}
        sizes='100vw'
        className='z-0 h-auto w-full'
      />
      <div className='absolute z-10 h-full w-full bg-slate-300 bg-opacity-50'>
        &nbsp;
      </div>
    </div>
  )
}
