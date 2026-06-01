export default function MenPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] p-10">
      <h1 className="text-5xl font-bold mb-8">
        Men Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm"
          >
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
              className="h-[350px] object-cover w-full"
            />

            <div className="p-5">
              <h3 className="font-semibold text-xl">
                Men's Premium Outfit
              </h3>

              <p className="font-bold mt-2">
                Rs. 8,500
              </p>

              <a
                href="https://wa.me/"
                className="block text-center bg-black text-white py-3 rounded-full mt-4"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}