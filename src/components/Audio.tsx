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
    <div className='absolute right-[42%] top-[22%] cursor-pointer md:right-[48%] md:top-[60%]'>
      <Image
        alt='play-pause'
        src={isPlaying ? '/pause.svg' : '/play.svg'}
        height={40}
        width={40}
        onClick={handlePlayPause}
      />
      <audio src='/audio.mp3' ref={ref}></audio>
      <span className='p-1 text-white'>{isPlaying ? 'Pause' : 'Play'}</span>
    </div>
  )
}
