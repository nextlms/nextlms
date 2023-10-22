import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import prisma from '@/utils/prisma';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // TODO: Validate the request body against the schema

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 404 });
    }

    const passwordValid = await compare(password, user.password!);

    if (!passwordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const accessToken = sign(payload, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '7d' });

    const response = NextResponse.json({ data: user, message: 'Login succesfully, redirecting...' }, { status: 201 });
    response.cookies.set('accessToken', accessToken);

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
