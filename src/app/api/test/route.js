import { getAllDepartment, getAllEvents, getVideosFromDb } from "@/services/videos.services";
import { NextResponse } from "next/server";
 
export const GET = async (request) => {
  let result = await getAllDepartment()

  return NextResponse.json({result, message: "Token created" });
};
