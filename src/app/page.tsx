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
  return (
    <>
      <MainImage img='/inf-88.jpg' title='J & A' />
      <OurHistory />
      <Details />
      <CountDown />
      <Church />
      <Salon />
      <DressCode />
      <Gallery
        images={[
          '/inf-67.jpg',
          '/inf-68.jpg',
          '/inf-70.jpg',
          '/inf-78.jpg',
          '/inf-92.jpg',
        ]}
      />
      <Confirmation invites={searchParams.i} />
      <ThankYou />
    </>
  )
}
