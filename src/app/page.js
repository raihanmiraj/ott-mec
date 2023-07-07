import HomepageLayout from "@/Component/HomepageLayout/HomepageLayout";

import json from './test.json'
import VideoCard from '@/Component/VideoCard/VideoCard';
//  import timeSince  from '@/utils/date'
export default function Home() {
  const categoryVideos = json.items;
  
  var aDay = 24 * 60 * 60 * 1000;
  return (
 
 <>
 HomePage
 </>
//   <HomepageLayout>
//    {
//         categoryVideos.map((e, index) => {
//           return (
         
//               <VideoCard key={index} title={e.snippet.title} thumbnail={e.snippet?.thumbnails?.medium?.url} on={timeSince(new Date(Date.parse(e.snippet.publishedAt) - aDay))} channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
           
//           )
//         })
//       }
// </HomepageLayout>
 

 
  )
}
