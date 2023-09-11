 

import { getVideosApprovedFromDb } from '@/services/videos.services';
import React from 'react';
import { cache } from "react";
// import "server-only";
const getallapprovedvideos = cache(() => {
     return getVideosApprovedFromDb()
})

export default getallapprovedvideos;
