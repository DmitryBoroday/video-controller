import { IoIosPlay } from 'react-icons/io'
import { IoIosPause } from 'react-icons/io'

interface VideoPlayerControlsProps {
    progress: number;
    isPaused: boolean;
    onPlayPause: () => void;
    size?: number | undefined;
    width?: number | undefined;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
    progress,
    isPaused,
    onPlayPause,
    size = 48,
    width = 3
}) => {
   
    const center = size / 2
    const radius = center - width
    const dashArray = 2 * Math.PI * radius
    const dashOffset = dashArray * (1 - progress)

  return (
      <div className='relative flex justify-center items-center'>
          <svg width={size} height={size} style={{transform: 'rotate(-90deg)'}}>
              <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill='transparent'
                  stroke='#aaaaaa'
                  strokeWidth={width}
              />
              <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill='transparent'
                  stroke='#ffffff'
                  strokeWidth={width}
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                  strokeLinecap='round'
              />
          </svg>
          <div className='absolute'>
              <button
                  className='group cursor-pointer flex justify-center items-center'
                  onClick={onPlayPause}
              >
                  <div className='fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200'>
                      {isPaused ? <IoIosPlay size={20} className='text-white'/> : <IoIosPause size={20} className='text-gray-400'/>}
                  </div>
              </button>
          </div>
    </div>
  )
}

export default VideoPlayerControls