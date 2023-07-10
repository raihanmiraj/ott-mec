 import insertinvideo from "@/utils/insertinvideo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
const result = await insertinvideo(body);
  return NextResponse.json( result );
};
