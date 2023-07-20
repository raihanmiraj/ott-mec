import timeSince from '@/utils/date';
  import getallvideos from '@/utils/getallvideos';
import React from 'react'; 
import HomepageLayout from '@/Component/HomepageLayout/HomepageLayout';
import VideoCard from '@/Component/VideoCard/VideoCard';
import Getallevents from '@/utils/getallevents';
const HomePage = async () => {
     const categoryVideos = await getallvideos();
     const eventname = await Getallevents();
    var aDay = 24 * 60 * 60 * 1000;
    return (
      
 
  <HomepageLayout>
 <div className='w-full pt-[100px]  px-3 flex gap-4'>
 {eventname.map((e,index)=>{
      return(
        <span className='text-black px-3 py-1 rounded-md bg-gray-100'>{e}</span>
      )
    })}
 </div>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[4%] pt-10 mx-3 sm:ml-4 md:pr-[28px] lg:pr-14 gap-y-6 max-w-[100%] bg-contain '>
    {
    
    categoryVideos.map((e, index) => {
      return (
     
          <VideoCard key={index} title={e.title} thumbnail={e.thumbnails} on={timeSince(new Date(Date.parse(e.publishedAt) - aDay))} channel={e.eventname} channelId={e.department} videoId={e._id} />
       
      )
    })
  }
    </div>

</HomepageLayout>
    );
}

export default HomePage;
