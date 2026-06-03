"use client";

import Link from "next/link";

const products = [
  {
    name: "Luxury Black Dress",
    price: "Rs. 7,500",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  },
  {
    name: "Premium Fashion Set",
    price: "Rs. 9,200",
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
  },
  {
    name: "Elegant Casual Wear",
    price: "Rs. 6,900",
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#faf8f5] text-black">

      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-12 items-center px-6 md:px-14 py-20 min-h-[90vh]">

        <div>
          <p className="uppercase tracking-[5px] text-sm text-neutral-500 mb-5">
            Luxury Fashion Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1]">
            Elevate Your <br />
            Everyday Style
          </h1>

          <p className="text-lg text-neutral-600 mt-8 max-w-xl leading-8">
            Discover elegant, luxury-inspired fashion made
            for modern lifestyles. Premium quality with
            affordable style.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/women"
              className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition"
            >
              Shop Women
            </Link>

            <Link
              href="/men"
              className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
            >
              Shop Men
            </Link>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
          alt="fashion"
          className="rounded-[45px] h-[700px] w-full object-cover shadow-2xl"
        />
      </section>

      {/* Promo Banner */}
      <section className="px-6 md:px-14 py-8">
        <div className="bg-black text-white rounded-[40px] p-10 flex flex-col md:flex-row justify-between items-center">

          <div>
            <p className="uppercase text-sm tracking-[4px] text-neutral-400">
              Limited Offer
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Up To 40% Off Selected Styles
            </h2>
          </div>

          <button className="bg-white text-black px-8 py-4 rounded-full mt-5 md:mt-0">
            Shop Sale
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-14 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Link href="/women">
            <div className="relative rounded-[35px] overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg"
                className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 text-white text-3xl font-bold">
                Women
              </div>
            </div>
          </Link>

          <Link href="/men">
            <div className="relative rounded-[35px] overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
                className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 text-white text-3xl font-bold">
                Men
              </div>
            </div>
          </Link>

          <div className="relative rounded-[35px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg"
              className="h-[500px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 text-white text-3xl font-bold">
              Accessories
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white rounded-t-[60px] px-6 md:px-14 py-20">

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            New Arrivals
          </h2>

          <button className="border border-black px-6 py-3 rounded-full">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] rounded-[35px] overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-xl"
            >
              <img
                src={product.image}
                className="h-[450px] w-full object-cover"
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
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-14 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Customer Love
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {["Amazing quality!", "Very premium style!", "Fast delivery!"].map(
            (review, index) => (
              <div
                key={index}
                className="bg-white rounded-[35px] p-8 shadow-sm"
              >
                ⭐⭐⭐⭐⭐

                <p className="mt-4 text-neutral-700">
                  {review}
                </p>
              </div>
            )
          )}

        </div>
      </section>

    </main>
  );
}