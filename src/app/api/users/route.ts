import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullName, email, password } = body;

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password,
    },
  });

  return NextResponse.json(user);
}
