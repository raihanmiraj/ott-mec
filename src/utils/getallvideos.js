import { getVideosFromDb } from '@/services/videos.services';
import React from 'react';
import { cache } from "react";
// import "server-only";
const getallvideos = cache(() => {
     return getVideosFromDb()
})

export default getallvideos;
