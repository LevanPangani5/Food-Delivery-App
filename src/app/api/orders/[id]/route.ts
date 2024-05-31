import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    await prisma.order.update({
      where: { id: params.id },
      data: { status: body },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated!" }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Error ocuured" }), {
      status: 500,
    });
  }
};
