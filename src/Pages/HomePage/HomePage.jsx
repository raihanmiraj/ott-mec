import timeSince from '@/utils/date';
  import getallvideos from '@/utils/getallvideos';
import React from 'react'; 
import HomepageLayout from '@/Component/HomepageLayout/HomepageLayout';
import VideoCard from '@/Component/VideoCard/VideoCard';
const HomePage = async () => {
     const categoryVideos = await getallvideos();
    var aDay = 24 * 60 * 60 * 1000;
    return (
      
 
  <HomepageLayout>
  {
       categoryVideos.map((e, index) => {
         return (
        
             <VideoCard key={index} title={e.title} thumbnail={e.thumbnails} on={timeSince(new Date(Date.parse(e.publishedAt) - aDay))} channel={e.eventname} channelId={e.department} videoId={e._id} />
          
         )
       })
     }
</HomepageLayout>
    );
}

export default HomePage;
