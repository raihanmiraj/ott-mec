
import React from 'react';
 
import getallvideos from '@/utils/getallvideos';
import AllVideos from '@/Pages/AdminPages/AllVideos/AllVideos';
const Page = async () => {

  const allvideos = await getallvideos()

    return (
        <>
     <AllVideos allvideos = {allvideos}/>
        </>
    );
}

export default Page;
