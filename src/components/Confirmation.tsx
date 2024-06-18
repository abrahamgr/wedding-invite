import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  type: 'novio' | 'novia'
  invites: string
}

function Button({ children, type, invites }: ButtonProps) {
  const phoneNumber = type === 'novio' ? '8186936753' : '8123309117'
  return (
    <Link
      href={`https://wa.me/52${phoneNumber}?text=${invites} lugares reservados - Boda Jaquelline y Abraham. Quiero confirmar la asistencia a la boda, anexo el nombre de las personas que asistirán para su registro, gracias`}
      className='my-1 mr-2 rounded-md border-2 border-slate-300 px-1'
      target='_blank'
    >
      {children}
    </Link>
  )
}

interface ConfirmationProps {
  invites: string
}

export function Confirmation({ invites }: ConfirmationProps) {
  return (
    <div className='flex flex-col items-center bg-yellow-50 py-5 text-center *:px-2 md:text-xl'>
      <p className='text-xl md:text-2xl'>Sugerencia de regalo</p>
      <br />
      <p>Tu presencia es nuestro regalo mas grande</p>
      <Image src='/gift.png' alt='gift' className='' height={100} width={100} />
      <p>
        Si deseas obsequiarnos algun presente, agradeceriamos que fuera en
        efectivo
      </p>
      <Image
        src='/letter.svg'
        alt='letter'
        className=''
        height={100}
        width={100}
      />
      <p>Agradecemos confirmar tu asistencia antes del 9 de Agosto</p>
      <br />
      <p className=''>Pase para {invites} personas</p>
      <div className='flex flex-col md:flex-row'>
        <Button type='novia' invites={invites}>
          Confirmar a la Novia
        </Button>
        <Button type='novio' invites={invites}>
          Confirmar al Novio
        </Button>
      </div>
    </div>
  )
}
