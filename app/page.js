import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-Extrabold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="min-h-[80vh] bg-gradient-to-br from-teal-100 via-blue-50 to-white flex items-center justify-center animate-fadein">
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col gap-6 items-center justify-center bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-teal-100">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center shadow-lg mb-2 bg-white">
            <Image
              src="/trans_bg.png"
              alt="LinkForge Logo"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>
          <p className={`text-4xl md:text-5xl font-extrabold text-teal-700 drop-shadow-lg text-center ${poppins.className}`}>
            The best URL Shortener in the Market
          </p>
          <p className="text-lg md:px-10 text-center text-gray-700">
            We are the most straightforward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className='flex gap-4 text-center'>
            <Link href="/shorten">
              <button className='bg-gradient-to-r from-teal-500 to-blue-400 hover:from-teal-600 hover:to-blue-500 shadow-lg rounded-xl px-8 py-3 font-bold text-white text-lg transition-all duration-200 cursor-pointer'>
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/abhishekchauhan01x" target="_blank" rel="noopener noreferrer">
              <button className='bg-white bg-opacity-30 hover:bg-opacity-50 shadow-lg rounded-xl px-8 py-3 font-bold text-teal-700 border border-blue-200 text-lg transition-all duration-200 flex items-center gap-2 cursor-pointer'>
                <Image src="/github.svg" alt="GitHub" width={20} height={20} className="inline-block" />
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <div className="w-full h-80 md:h-full rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white/40 backdrop-blur-lg flex items-center justify-center">
            <Image className="mix-blend-darken" alt="An image of a vector" src={"/vector.jpg"} fill={true} style={{objectFit: 'cover'}} />
          </div>
        </div>
      </section>
    </main>
  );
}

