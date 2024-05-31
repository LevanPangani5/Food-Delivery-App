import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse("not authorized", { status: 401 });
  }
  try {
    if (session.user.isAdmin) {
      const orders = await prisma.order.findMany();
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    }
    const orders = await prisma.order.findMany({
      where: {
        userEmail: session.user.email!,
      },
    });
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new NextResponse("Error occured", { status: 500 });
  }
};
