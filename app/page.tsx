"use client";

import Link from "next/link";

const featuredProducts = [
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
    <main className="bg-[#faf8f5] text-black min-h-screen">

      {/* Top Bar */}
      <div className="bg-black text-white text-center py-3 text-sm">
        Free Delivery • Cash on Delivery • WhatsApp Orders
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="flex items-center justify-between px-6 md:px-14 py-5">

          <h1 className="text-3xl font-bold tracking-tight">
            FasFashion
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/women">Women</Link>
            <Link href="/men">Men</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="flex gap-3">
            <select className="border rounded-full px-4 py-2 text-sm bg-white">
              <option>EN</option>
              <option>සිංහල</option>
              <option>தமிழ்</option>
            </select>

            <select className="border rounded-full px-4 py-2 text-sm bg-white">
              <option>LKR</option>
              <option>USD</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-12 items-center px-6 md:px-14 py-20">

        <div>
          <p className="uppercase tracking-[5px] text-neutral-500 text-sm mb-4">
            Luxury Fashion
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-[1]">
            Fashion <br />
            That Defines You
          </h2>

          <p className="text-neutral-600 text-lg mt-8 max-w-xl">
            Discover elegant, modern and premium fashion styles
            for every occasion.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/women"
              className="bg-black text-white px-8 py-4 rounded-full"
            >
              Shop Women
            </Link>

            <Link
              href="/men"
              className="border border-black px-8 py-4 rounded-full"
            >
              Shop Men
            </Link>
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
          alt="Luxury Fashion"
          className="rounded-[40px] w-full h-[650px] object-cover shadow-xl"
        />
      </section>

      {/* Category Cards */}
      <section className="px-6 md:px-14 py-16">

        <div className="flex justify-between items-center mb-10">
          <h3 className="text-4xl font-bold">
            Shop By Category
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <Link href="/women">
            <div className="relative rounded-[35px] overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg"
                className="h-[500px] object-cover w-full group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold">
                  Women
                </h3>
              </div>
            </div>
          </Link>

          <Link href="/men">
            <div className="relative rounded-[35px] overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
                className="h-[500px] object-cover w-full group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold">
                  Men
                </h3>
              </div>
            </div>
          </Link>

          <div className="relative rounded-[35px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg"
              className="h-[500px] object-cover w-full"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold">
                Accessories
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white rounded-t-[50px] px-6 md:px-14 py-20">

        <h3 className="text-4xl font-bold mb-12">
          Featured Collection
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] rounded-[35px] overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                className="h-[450px] object-cover w-full"
              />

              <div className="p-6">
                <h4 className="text-2xl font-semibold">
                  {product.name}
                </h4>

                <p className="font-bold text-lg mt-2">
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

      {/* Footer */}
      <footer className="bg-black text-white px-6 md:px-14 py-14">
        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-3xl font-bold">
              FasFashion
            </h2>
            <p className="mt-4 text-neutral-400">
              Luxury fashion for modern style.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Shop
            </h4>
            <p>Women</p>
            <p>Men</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Orders
            </h4>
            <p>Cash on Delivery</p>
            <p>WhatsApp Orders</p>
          </div>

        </div>
      </footer>

    </main>
  );
}