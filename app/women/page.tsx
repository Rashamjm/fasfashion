const products = [
  {
    name: "Luxury Evening Dress",
    price: "Rs. 7,500",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  },
  {
    name: "Elegant Premium Wear",
    price: "Rs. 9,900",
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
  },
  {
    name: "Modern Luxury Fashion",
    price: "Rs. 8,200",
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg",
  },
];

export default function WomenPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen px-6 md:px-14 py-16">

      <div className="mb-12">
        <p className="uppercase tracking-[5px] text-sm text-neutral-500">
          Luxury Collection
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          Women Collection
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-[35px] overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              className="h-[500px] object-cover w-full"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                {product.name}
              </h3>

              <p className="font-bold mt-3 text-lg">
                {product.price}
              </p>

              <a
                href="https://wa.me/947XXXXXXXX"
                className="block text-center bg-black text-white py-4 rounded-full mt-6"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}