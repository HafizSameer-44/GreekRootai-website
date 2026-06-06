export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07140F] text-white flex items-center justify-center px-6">

      <div className="max-w-3xl w-full text-center">

        <h1 className="text-5xl font-black mb-6 text-green-400">

          Contact Us

        </h1>

        <p className="text-gray-300 mb-10">

          Let’s build something amazing together.

        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#0D1F18] border border-green-400/20 rounded-xl p-5 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#0D1F18] border border-green-400/20 rounded-xl p-5 outline-none"
          />

        </div>

        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full mt-6 bg-[#0D1F18] border border-green-400/20 rounded-xl p-5 outline-none"
        />

        <button className="mt-8 bg-green-400 text-black px-12 py-4 rounded-full font-bold hover:scale-105 duration-300">

          Send Message

        </button>

      </div>

    </main>
  );
}