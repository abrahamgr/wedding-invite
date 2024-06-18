'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

export function Audio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => {
    const { current: audio } = ref
    if (!audio) return
    if (isPlaying) audio.pause()
    else audio.play()
    setIsPlaying(!isPlaying)
  }

  return (
    <div className=''>
      <Image
        alt='play-pause'
        src={isPlaying ? '/pause.svg' : '/play.svg'}
        height={40}
        width={40}
        className='absolute right-[42%] top-[23%] cursor-pointer md:right-[48%] md:top-[60%]'
        onClick={handlePlayPause}
      />
      <audio src='/audio.mp3' ref={ref}></audio>
    </div>
  )
}
