import { NextResponse } from "next/server";
 
import { deleteVideoById } from "@/services/videos.services";

export const POST = async (request) => {
    
  try {
    const body = await request.json();
    const deletedId = body.id;  
    if (deletedId !== undefined) {
let result = await deleteVideoById(deletedId)


      return NextResponse.json({ result });
    } else {
      return NextResponse.error({
        status: 400,
        message: "Invalid Request: 'hello' property not found in the JSON body",
      });
    }
  } catch (error) {
    return NextResponse.error({
      status: 500,
      message: "Internal Server Error",
    });
  }
};