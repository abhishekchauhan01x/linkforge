import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-gradient-to-r from-teal-600 to-blue-500 shadow-lg flex justify-between px-8 py-4 items-center text-white transition-all duration-300'>
            <div className='logo font-extrabold text-2xl tracking-tight drop-shadow-lg flex items-center gap-2'>
                <Link href="/">
                  <span className="flex items-center gap-2">
                    <Image src="/trans_bg.png" alt="Logo" width={32} height={32} className="rounded-full bg-white" priority />
                    LinkForge
                  </span>
                </Link>
            </div>
            <ul className='flex justify-center items-center gap-6 font-medium'>
                <li>
                  <Link href="/" className="hover:text-blue-200 transition-colors duration-200">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">About</Link>
                </li>
                <li>
                  <Link href="/shorten" className="hover:text-blue-200 transition-colors duration-200">Shorten</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-200 transition-colors duration-200">Contact Us</Link>
                </li>
                <li className='flex gap-3'>
                    <Link href="/shorten">
                      <button className='bg-gradient-to-r from-teal-500 to-blue-400 hover:from-teal-600 hover:to-blue-500 shadow-md rounded-lg px-5 py-2 font-bold transition-all duration-200 border border-white/20 backdrop-blur-md cursor-pointer'>
                        Try Now
                      </button>
                    </Link>
                    <Link href="https://github.com/abhishekchauhan01x" target="_blank" rel="noopener noreferrer">
                      <button className='bg-gradient-to-r from-teal-500 to-blue-400 hover:from-teal-600 hover:to-blue-500 shadow-md rounded-lg px-5 py-2 font-bold transition-all duration-200 border border-white/20 backdrop-blur-md flex items-center gap-2 cursor-pointer'>
                        <Image src="/github.svg" alt="GitHub" width={20} height={20} className="inline-block" />
                        Github
                      </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
