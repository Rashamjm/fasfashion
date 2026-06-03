export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-14 py-16 mt-20">

      <div className="grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold">
            FasFashion
          </h2>

          <p className="text-neutral-400 mt-4">
            Premium luxury fashion for modern lifestyles.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            Shop
          </h4>

          <p>Women</p>
          <p>Men</p>
          <p>Accessories</p>
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
            Services
          </h4>

          <p>Cash on Delivery</p>
          <p>WhatsApp Orders</p>
        </div>

      </div>

      <div className="border-t border-neutral-800 mt-10 pt-8 text-neutral-400 text-sm">
        © 2025 FasFashion. All rights reserved.
      </div>

    </footer>
  );
}