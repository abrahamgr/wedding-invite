import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  type: 'novio' | 'novia'
  invites: string
}

function Button({ children, type, invites }: ButtonProps) {
  const phoneNumber = type === 'novio' ? '8186936753' : '8123309117'
  const isOne = invites === '1'
  const wording = isOne ? 'Un lugar reservado' : `${invites} lugares reservados`

  return (
    <Link
      href={`https://wa.me/52${phoneNumber}?text=${wording} - Boda Jaquelline y Abraham. Quiero confirmar la asistencia a la boda, anexo el nombre de las personas que asistirán para su registro, gracias`}
      className='my-1 mr-2 rounded-md border-2 border-slate-300 p-1'
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
  const isOne = invites === '1'
  return (
    <div className='flex flex-col items-center bg-yellow-50 py-5 text-center *:px-2 md:text-xl'>
      <p className='text-xl md:text-2xl'>Sugerencia de regalo</p>
      <br />
      <p>Tu presencia es nuestro regalo mas grande</p>
      <Image src='/gift.png' alt='gift' className='' height={100} width={100} />
      <br />
      <p>
        Si deseas obsequiarnos algún presente, agradeceríamos que fuera en
        efectivo
      </p>
      <br />
      <Image
        src='/letter.svg'
        alt='letter'
        className=''
        height={100}
        width={100}
      />
      <br />
      <p>Agradecemos confirmar tu asistencia antes del 10 de Agosto</p>
      <p className=''>
        Pase para {isOne ? 'una persona' : `${invites} personas`}
      </p>
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
