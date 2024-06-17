import { handWriteFont } from '@/fonts'

export function ThankYou() {
  return (
    <div className='flex flex-col items-center justify-center bg-yellow-50 p-10 md:text-xl'>
      <p>Gracias por ser parte de este gran día</p>
      <p>Con cariño</p>
      <p
        className={`${handWriteFont.className} py-3 text-center text-6xl md:text-8xl`}
      >
        Jaquelline <br />&<br /> Abraham
      </p>
    </div>
  )
}
