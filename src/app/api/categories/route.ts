import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

//fetch all categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "error occured" }), {
      status: 500,
    });
  }
};
