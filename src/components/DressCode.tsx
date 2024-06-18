import Image from 'next/image'

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
            height={50}
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
          <div className='m-2 h-10 w-10 rounded-3xl bg-black'></div>
          <div className='m-2 h-10 w-10 rounded-3xl bg-blue-900'></div>
          <div className='m-2 h-10 w-10 rounded-3xl bg-red-900'></div>
          <div className='m-2 h-10 w-10 rounded-3xl bg-green-900'></div>
        </div>
      </div>
      <p>Colores sugeridos</p>
    </div>
  )
}
