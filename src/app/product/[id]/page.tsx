// src/app/product/[id]/page.tsx
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return <p>ID: {id}</p>;
}
