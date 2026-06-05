export const dynamic = "force-dynamic";

async function getMenProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?select=*&gender=eq.Men`,
    {
      headers: {
        apikey:
          process.env
            .NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${
          process.env
            .NEXT_PUBLIC_SUPABASE_ANON_KEY
        }`,
      },
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function MenPage() {
  const products =
    await getMenProducts();

  return (
    <main className="min-h-screen bg-[#faf8f5] px-6 md:px-14 py-20">
      <h1 className="text-6xl font-bold mb-12">
        Men Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products?.length > 0 ? (
          products.map((product: any) => (
            <div
              key={product.id}
              className="bg-white rounded-[30px] overflow-hidden"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="h-[500px] w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <p className="mt-2 text-neutral-600">
                  {product.description}
                </p>

                <p className="font-bold mt-4">
                  Rs. {product.price_lkr}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </main>
  );
}