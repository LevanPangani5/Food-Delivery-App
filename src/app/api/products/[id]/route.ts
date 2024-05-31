import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: params.id,
      },
    });
    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Error ocuured" }), {
      status: 500,
    });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const session = await getAuthSession();
    if (!session?.user.isAdmin) {
      return new NextResponse(JSON.stringify({ message: "not authorized!" }), {
        status: 401,
      });
    }

    await prisma.product.delete({
      where: {
        id: params.id,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "product has been deleted!" }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "error occured" }), {
      status: 500,
    });
  }
};
