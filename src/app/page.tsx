import { Church } from '@/components/Church'
import { Confirmation } from '@/components/Confirmation'
import { CountDown } from '@/components/CountDown'
import { Details } from '@/components/Details'
import { DressCode } from '@/components/DressCode'
import { Gallery } from '@/components/Gallery'
import { MainImage } from '@/components/MainImage'
import { OurHistory } from '@/components/OurHistory'
import { Salon } from '@/components/Salon'
import { ThankYou } from '@/components/ThankYou'

interface PageProps {
  searchParams: Record<string, string>
}

export default function Home({ searchParams }: PageProps) {
  const invites = searchParams.i
    ? Buffer.from(searchParams.i, 'base64').toString()
    : '1'
  return (
    <>
      <MainImage img='/gallery/inf-88.jpg' title='J & A' />
      <OurHistory />
      <Details />
      <CountDown />
      <Church />
      <Salon />
      <DressCode />
      <Gallery
        images={[
          '/gallery/inf-67.jpg',
          '/gallery/inf-68.jpg',
          '/gallery/inf-70.jpg',
          '/gallery/inf-78.jpg',
          '/gallery/inf-92.jpg',
        ]}
      />
      <Confirmation invites={invites} />
      <ThankYou />
    </>
  )
}
