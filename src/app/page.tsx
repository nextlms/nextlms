import prisma from '@/utils/prisma/prisma';

async function getConfig() {
  const config = await prisma.config.findFirst({});
  return config;
}

export default async function Page() {
  const data = await getConfig();
  console.log(data);

  return <main>Hey</main>;
}
