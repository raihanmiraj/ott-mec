import { NextResponse } from "next/server";
 

export const POST = async (request) => {
  try {
    const body = await request.json();
  
    const searchtitle = body.title; // Assuming 'hello' is a property in the JSON body

    if (searchtitle !== undefined) {
      let result = await getVideoSearchFromDb(searchtitle)
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