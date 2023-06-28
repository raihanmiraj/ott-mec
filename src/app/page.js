 
import Image from 'next/image'
import json from './test.json'
import VideoCard from '@/Component/VideoCard/VideoCard';
 import timeSince  from '@/utils/date'
 
const Home = async ()=> {
  // const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  // const test = await data.json();
  // console.log(test)
  const categoryVideos = json.items;
  
  var aDay = 24 * 60 * 60 * 1000;

  return (
    <>
 
 {/* <div className={`sm:hidden fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-1 cursor-pointer overlayEffect ` }></div> */}
 {/* {JSON.stringify(test)} */}

      {
        categoryVideos.map((e, index) => {
          return (
         
              <VideoCard key={index} title={e.snippet.title} thumbnail={e.snippet?.thumbnails?.medium?.url} on={timeSince(new Date(Date.parse(e.snippet.publishedAt) - aDay))} channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
           
          )
        })
      }
        
  </>
  )
}

export default Home

 