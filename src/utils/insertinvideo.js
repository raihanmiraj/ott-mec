import {   insertVideoInDb } from '@/services/videos.services';
 

import "server-only";
const insertinvideo =async (data) => {
     return await insertVideoInDb(data)
}

export default insertinvideo;
