import { NextRequest, NextResponse } from 'next/server';
// import { registerSchema } from '@/types/auth/registerSchema';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // TODO: Validate the request body against the schema
  //   try {
  //     registerSchema.safeParse({
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //     });
  //   } catch (error) {
  //   }

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
