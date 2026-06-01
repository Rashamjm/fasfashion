"use client";

import Link from "next/link";

const products = [
  {
    name: "Luxury Dress",
    price: "Rs. 7,500",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
  },
  {
    name: "Premium Outfit",
    price: "Rs. 9,200",
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
  },
  {
    name: "Modern Style",
    price: "Rs. 6,900",
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg",
  },
  {
    name: "Classic Wear",
    price: "Rs. 8,100",
    image:
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg",
  },
];

export default function Home() {
  return (
    <main className="bg-[#faf8f5] min-h-screen text-black">

      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Free Delivery • Cash on Delivery • WhatsApp Orders
      </div>

      {/* Navbar */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="flex justify-between items-center px-6 md:px-14 py-5">

          <h1 className="text-3xl font-bold">
            FasFashion
          </h1>

          <nav className="hidden md:flex gap-8">
            <Link href="/women">Women</Link>
            <Link href="/men">Men</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <button className="bg-black text-white px-5 py-3 rounded-full">
            Shop Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-12 items-center px-6 md:px-14 py-16">

        <div>
          <p className="uppercase tracking-[4px] text-neutral-500 text-sm mb-4">
            Premium Fashion
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Fashion That Defines You
          </h2>

          <p className="text-neutral-600 mt-6 text-lg max-w-lg">
            Discover premium luxury fashion for every occasion.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/women"
              className="bg-black text-white px-7 py-4 rounded-full"
            >
              Shop Women
            </Link>

            <Link
              href="/men"
              className="border border-black px-7 py-4 rounded-full"
            >
              Shop Men
            </Link>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
          alt="Fashion"
          className="rounded-[35px] h-[650px] object-cover w-full shadow-2xl"
        />
      </section>

      {/* Products */}
      <section className="bg-white rounded-t-[50px] px-6 md:px-14 py-20">
        <h3 className="text-4xl font-bold mb-10">
          Trending Products
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] rounded-[30px] overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[350px] w-full object-cover"
              />

              <div className="p-5">
                <h4 className="text-xl font-semibold">
                  {product.name}
                </h4>

                <p className="font-bold mt-2">
                  {product.price}
                </p>

                <a
                  href="https://wa.me/"
                  className="block text-center bg-black text-white py-3 rounded-full mt-5"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 md:px-14 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold">
              FasFashion
            </h2>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Shop
            </h4>
            <p>Women</p>
            <p>Men</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Company
            </h4>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Contact
            </h4>
            <p>WhatsApp Orders</p>
            <p>Sri Lanka</p>
          </div>
        </div>
      </footer>
    </main>
  );
}