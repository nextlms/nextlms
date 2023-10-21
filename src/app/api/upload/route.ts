// working fine

import { NextResponse } from 'next/server';
import { Blob } from 'node:buffer';
import fs from 'fs';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (file instanceof Blob) {
    const stream = file.stream();
    const chunks = [];
    for await (const chunk of stream as unknown as AsyncIterable<Buffer>) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Write to disk
    const { name: fileName } = file as any;
    fs.writeFileSync(`public/${fileName}`, buffer);

    return NextResponse.json({ message: 'Hello, Next.js!' });
  }
}
