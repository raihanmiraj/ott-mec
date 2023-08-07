import Image from 'next/image'
import Link from 'next/link'
 
const VideoCard=(props)=> {
 
  return (
  <Link href={`/video/${props.videoId}`}>
    <div style={{ width: props.width, display: props.display }} className='w-full   relative cursor-pointer '> 
      <div  className="rounded-lg !important overflow-hidden">
      <Image
      src={props.thumbnail}
      width={366}
      height={206}
      layout="responsive"
      alt="Picture of the author"
    
    />
      </div>
     

      <div style={{ width: props.rightWidth }} className='flex w-[100%] gap-x-3 items-start mt-2'><div>
        <h3 url={`/watch/${props.videoId}`} className='text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]'>
          {props.title?.slice(0, 60)}
        </h3>
        <div className='mt-1'>
          <p url={`/channel/${props.channelId}`} className='text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide'>{props.channel}</p>
          <p url={`/watch/${props.videoId}`} className='text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1'>{props.on}</p>
        </div>
      </div>
      </div>
    </div></Link>
  )
}

export default VideoCard