import { handWriteFont } from '@/fonts'
import Image from 'next/image'

export function Details() {
  return (
    <div className='flex flex-col border-2 border-amber-300 bg-yellow-50 py-5 text-center md:py-10'>
      <p id='save-date' className='py-4'>
        En compañia de Dios y nuestors padres
      </p>
      <div className='flex flex-row text-sm md:text-inherit'>
        <div className='w-1/2 justify-center'>
          <p>
            Ricardo G. Castaneda Espino (
            <Image
              src='/cross.svg'
              alt='cross'
              className='inline'
              height={10}
              width={10}
            />
            )
            <br />
            ​Sandra Patricia Reyes Blanco
          </p>
        </div>
        <div className='w-1/2 justify-center'>
          <p>
            José Juan Galindo Fraire
            <br />
            Ma. del Socorro Rodriguez Beltran
          </p>
        </div>
      </div>
      <p className='p-5 text-xl'>Nosotros</p>
      <p className={`${handWriteFont.className} text-6xl`}>
        Jaquelline <br />&<br /> Abraham
      </p>
      <p className='p-5'>
        Tenemos el honor de invitarlos a celebrar la union de nuestras vidas
      </p>
    </div>
  )
}
