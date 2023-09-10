import { NextResponse } from "next/server";
import { approvedaVideoById } from "@/services/videos.services";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const updateId = body.id; // Assuming 'hello' is a property in the JSON body
    if (updateId !== undefined) {
let result = await approvedaVideoById(updateId)


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