export const dynamic = "force-dynamic";

async function getMenProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products?gender=eq.Men&select=*`,
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

  return res.json();
}

export default async function MenPage() {
  const products =
    await getMenProducts();

  return (
    <main className="bg-[#faf8f5] min-h-screen px-6 md:px-14 py-16">

      <div className="mb-12">
        <p className="uppercase tracking-[5px] text-sm text-neutral-500">
          Premium Collection
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          Men Collection
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products?.length > 0 ? (
          products.map((product: any) => (
            <div
              key={product.id}
              className="bg-white rounded-[35px] overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="h-[500px] object-cover w-full"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="text-neutral-600 mt-2">
                  {product.description}
                </p>

                <p className="font-bold mt-3 text-lg">
                  Rs. {product.price_lkr}
                </p>

                <a
                  href="https://wa.me/947XXXXXXXX"
                  className="block text-center bg-black text-white py-4 rounded-full mt-6"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No Men Products Found</p>
        )}
      </div>

    </main>
  );
}