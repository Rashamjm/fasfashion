export default function ContactPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen px-6 md:px-14 py-20">

      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[5px] text-sm text-neutral-500">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-12">
          Get In Touch
        </h1>

        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm">

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-3xl font-bold mb-5">
                WhatsApp Orders
              </h3>

              <p className="text-neutral-600 leading-8">
                Place your orders directly through WhatsApp for
                a quick and easy shopping experience.
              </p>

              <a
                href="https://wa.me/947XXXXXXXX"
                className="inline-block bg-black text-white px-8 py-4 rounded-full mt-8"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-5">
                Shop Information
              </h3>

              <p className="text-neutral-600 mb-3">
                📍 Sri Lanka
              </p>

              <p className="text-neutral-600 mb-3">
                🚚 Cash on Delivery Available
              </p>

              <p className="text-neutral-600">
                🌍 Worldwide Fashion Inspiration
              </p>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}