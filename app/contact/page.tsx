export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] p-10 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-8">
        Contact Us
      </h1>

      <div className="bg-white p-8 rounded-[30px] shadow-sm">
        <h3 className="text-2xl font-semibold">
          WhatsApp Orders
        </h3>

        <p className="mt-4 text-neutral-600">
          Place orders directly through WhatsApp.
        </p>

        <a
          href="https://wa.me/97470768582"
          className="inline-block mt-6 bg-black text-white px-8 py-4 rounded-full"
        >
          Chat on WhatsApp
        </a>
      </div>
    </main>
  );
}