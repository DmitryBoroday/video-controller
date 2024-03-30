'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import { setTimeout } from 'timers'
import VideoPlayerControls from '../components/VideoPlayerControls'

export default function VideoTwo() {
    const [isPaused, setIsPaused] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [videoDuration, setVideoDuration] = useState<number>()
    const [videoProgress, setVideoProgress] = useState<number>(0)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            setVideoDuration(video.duration)
        }
    }, [])
    
    useEffect(() => {
        if (isPaused) return
        const currentTime = videoRef.current?.currentTime
        if (videoDuration != null && currentTime != null) {
            let loadingTimeout = setTimeout(() => {
                if (videoProgress == currentTime / videoDuration) {
                    setVideoProgress((prev)=> prev + 0.000001)
                } else {
                    setVideoProgress(currentTime / videoDuration)
                }
            }, 10)
            return () => {
                clearTimeout(loadingTimeout)
            }
        } 
   },[videoProgress, videoDuration, isPaused])

    const togglePlayPause = () => {
        const video = videoRef.current
        if (video) {
            setIsPaused(!video.paused)
            video.paused ? video.play() : video.pause()
        }
    }

    return (
        <section>
            <div className='relative h-screen w-full overflow-hidden'>
                <video
                    className='w-full object-fill h-full'
                    loop
                    muted
                    autoPlay
                    ref={videoRef}
                >
                    <source src='/videos/ice_desktop.mp4' />
                </video>
                <div className='absolute top-1/2 right-4'>
                    <Link
                        href='/video-three'
                        className='text-white transition-all duration-500 hover:text-zinc-600'
                    >
                        <IoIosArrowForward size={40} />
                    </Link>
                </div>
                <div className='absolute top-1/2 left-4'>
                    <Link
                        href='/video-one'
                        className='text-white transition-all duration-500 hover:text-zinc-600'
                    >
                        <IoIosArrowBack size={40} />
                    </Link>
                </div>
                <button
                    className='absolute top-64 text-3xl text-white left-24'
                    onClick={togglePlayPause}
                >Play/Pause
                </button>
                {/* <p className='text-white absolute left-12 top-12 text-4xl'>{videoProgress}</p> */}
                <div className='absolute top-12 right-12 z-10'>
                    <VideoPlayerControls
                        progress={videoProgress}
                        isPaused={isPaused}
                        onPlayPause={togglePlayPause}
                    />
                </div>
                <h1 className='absolute top-24 left-24 text-white text-9xl'>Video 2</h1>
            </div>
        </section>
    )
}