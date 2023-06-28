import Image from 'next/image'
import json from './test.json'
import VideoCard from '@/Component/VideoCard/VideoCard';
 import timeSince  from '@/utils/date'
export default function Home() {
  console.log(json)
  const categoryVideos = json.items;
  const sidebarExtend = false;
  var aDay = 24 * 60 * 60 * 1000;
  return (
    <>
    {/* <Sidebar /> */}
    <div className={`sm:hidden overlayEffect ${sidebarExtend ? "block" : "hidden"}`}></div>
    <div className={`pl-0  ${sidebarExtend ? "sm:pl-[180px]" : "sm:pl-[70px]"} feedGrid grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[4%] pt-20 mx-3 sm:ml-4 md:pr-[28px] lg:pr-14 gap-y-6 max-w-[100%] bg-contain `}>

      {
        categoryVideos.map((e, index) => {
          return (
         
              <VideoCard key={index} title={e.snippet.title} thumbnail={e.snippet?.thumbnails?.medium?.url} on={timeSince(new Date(Date.parse(e.snippet.publishedAt) - aDay))} channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
           
          )
        })
      }
    </div>
  </>
  )
}

 