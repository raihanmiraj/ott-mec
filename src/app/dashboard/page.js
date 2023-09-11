import React from 'react';
import getallvideos from '@/utils/getallvideos';
import AllVideos from '@/Pages/AdminPages/AllVideos/AllVideos';

const Dashboard = async () => {
    const allvideos = await getallvideos()

    return (
        <>
     <AllVideos allvideos = {allvideos}/>
        </>
    );
}

export default Dashboard;
