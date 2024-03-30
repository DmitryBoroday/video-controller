import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

export default function VideoOne() {
  return (
      <section>
          <div className='relative h-screen w-full overflow-hidden'>
              <video
                  className='w-full object-fill h-full'
                  loop
                  muted
                  autoPlay
              >
                  <source src='/videos/community_desktop.mp4'/>
              </video>
              <div className='absolute top-1/2 right-4'>
                  <Link
                      href='video-two'
                      className='text-white transition-all duration-500 hover:text-zinc-600'
                  >
                      <IoIosArrowForward size={40} />
                  </Link>
              </div>
          </div>
    </section>
  )
}
