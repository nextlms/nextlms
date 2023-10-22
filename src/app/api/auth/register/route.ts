import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import prisma from '@/utils/prisma';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, password } = await req.json();

  // TODO: Validate the request body against the schema

  try {
    const createUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: await hash(password, 10),
      },
    });
    return NextResponse.json({ data: createUser, message: 'Register succesfully' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
