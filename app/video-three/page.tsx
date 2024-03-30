import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

export default function VideoThree() {
    return (
        <section>
            <div className='relative h-screen w-full overflow-hidden'>
                <video
                    className='w-full object-fill h-full'
                    loop
                    muted
                    autoPlay
                >
                    <source src='/videos/offers_desktop.mp4' />
                </video>
                <div className='absolute top-1/2 left-4'>
                    <Link
                        href='/video-two'
                        className='text-white transition-all duration-500 hover:text-zinc-600'
                    >
                        <IoIosArrowBack size={40} />
                    </Link>
                </div>
            </div>
        </section>
    )
}