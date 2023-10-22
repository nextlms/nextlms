import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // TODO: Validate the request body against the schema

  return NextResponse.json(
    {
      data: {
        email,
        password,
      },
      message: 'Login succesfully, redirecting to dashboard...',
    },
    { status: 201 },
  );
}
