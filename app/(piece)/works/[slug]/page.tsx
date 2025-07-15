// app/(piece)/works/[slug]/page.tsx
import { projectData } from '@/lib/projectData';
import ClientProjectPage from './ClientProjectPage';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = projectData[slug as keyof typeof projectData];

  if (!data) {
    return <p className="mt-20 text-center">プロジェクトが見つかりません</p>;
  }

  return <ClientProjectPage slug={slug} data={data} />;
}
