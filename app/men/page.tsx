const products = [
  {
    name: "Premium Men's Outfit",
    price: "Rs. 8,500",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  },
  {
    name: "Luxury Street Style",
    price: "Rs. 9,200",
    image:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
  },
  {
    name: "Classic Modern Wear",
    price: "Rs. 7,900",
    image:
      "https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg",
  },
];

export default function MenPage() {
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