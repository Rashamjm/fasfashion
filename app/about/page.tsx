export default function AboutPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen px-6 md:px-14 py-20">

      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[5px] text-sm text-neutral-500">
          Our Story
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-10">
          About FasFashion
        </h1>

        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm">

          <p className="text-lg leading-9 text-neutral-700">
            FasFashion is a premium fashion destination designed for
            modern style lovers. We provide luxury-quality fashion
            for women, men and accessories with elegant designs,
            affordable prices and premium shopping experiences.
          </p>

          <p className="text-lg leading-9 text-neutral-700 mt-8">
            Our mission is to bring world-class fashion styles
            with easy WhatsApp ordering and Cash on Delivery
            for customers.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="bg-[#faf8f5] rounded-[30px] p-8">
              <h3 className="text-2xl font-bold">
                Premium Quality
              </h3>

              <p className="mt-3 text-neutral-600">
                Carefully selected fashion products.
              </p>
            </div>

            <div className="bg-[#faf8f5] rounded-[30px] p-8">
              <h3 className="text-2xl font-bold">
                Fast Ordering
              </h3>

              <p className="mt-3 text-neutral-600">
                Order instantly via WhatsApp.
              </p>
            </div>

            <div className="bg-[#faf8f5] rounded-[30px] p-8">
              <h3 className="text-2xl font-bold">
                Cash on Delivery
              </h3>

              <p className="mt-3 text-neutral-600">
                Easy and trusted payments.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}