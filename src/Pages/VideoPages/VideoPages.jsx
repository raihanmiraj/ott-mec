import { getVideosFromDbByCategory, getVideosFromDbById, getVideosFromDbBySearch } from '@/services/videos.services';
import timeSince from '@/utils/date';
  import getallvideos from '@/utils/getallvideos';
import React from 'react'; 
import HomepageLayout from '@/Component/HomepageLayout/HomepageLayout';
import VideoCard from '@/Component/VideoCard/VideoCard';
import Getallevents from '@/utils/getallevents';
import Link from 'next/link';
const getYouTubeVideoId = (url) => {
  try {
    const match = url.match(/[?&]v=([^&#]+)|youtu\.be\/([^?]+)/);
    return match ? (match[1] || match[2]) : null;
  } catch (e) {
    console.error('Error in getYouTubeVideoId:', e);
    return null;
  }
};
const VideoPages = async ({id}) => {
    const eventname = await Getallevents();
    const data = await getVideosFromDbById(id)
    var aDay = 24 * 60 * 60 * 1000;
    return (
      <>
       <div className='w-full pt-[100px]  px-3 flex gap-4'>
 {eventname.map((e,index)=>{
      return(
        <Link href={`/category/${e}`} key={index} className='text-black px-3 py-1 rounded-md bg-gray-100'>{e}</Link>
      )
    })}
 </div>
 <div>
 

<div className='flex justify-center items-center mt-8'>
<iframe width="716" height="403" src={`https://www.youtube.com/embed/${getYouTubeVideoId(data.videourl)}`} title="Warfaze - Hariye Tomake (Lyric Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
 </div>
     {/* {JSON.stringify(data)} */}
          {/* <VideoCard key={index} title={data.title} thumbnail={data.thumbnails} on={timeSince(new Date(Date.parse(e.publishedAt) - aDay))} channel={data.eventname} channelId={data.department} videoId={data._id} /> */}
      </>
    );
}

export default VideoPages;
