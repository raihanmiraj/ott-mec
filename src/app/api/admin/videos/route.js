import { getAllDepartment, getAllEvents, getVideosFromDb } from "@/services/videos.services";
import getallvideos from "@/utils/getallvideos";
import { NextResponse } from "next/server";
 
export const GET = async (request) => {
  let result = await getallvideos()

  return NextResponse.json( result );
};
