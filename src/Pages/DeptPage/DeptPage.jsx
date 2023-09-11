import { getVideosFromDbByCategory } from '@/services/videos.services';
import timeSince from '@/utils/date';
  import getallvideos from '@/utils/getallvideos';
import React from 'react'; 
import HomepageLayout from '@/Component/HomepageLayout/HomepageLayout';
import VideoCard from '@/Component/VideoCard/VideoCard';
import Getallevents from '@/utils/getallevents';
import Link from 'next/link';
import { getVideosFromDbByDept } from '../../services/videos.services';

const DeptPage = async ({name}) => {
    const eventname = await Getallevents();
    const data = await getVideosFromDbByDept(decodeURIComponent(name))
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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[4%] pt-10 mx-3 sm:ml-4 md:pr-[28px] lg:pr-14 gap-y-6 max-w-[100%] bg-contain '>
    {
    
    data.map((e, index) => {
      return (
     
          <VideoCard key={index} title={e.title} thumbnail={e.thumbnails} on={timeSince(new Date(Date.parse(e.publishedAt) - aDay))} channel={e.eventname} channelId={e.department} videoId={e._id} />
       
      )
    })
  }
    </div></>
    );
}

export default DeptPage;
