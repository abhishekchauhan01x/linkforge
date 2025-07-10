"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMsg, setToastMsg] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                setToastMsg(result.message)
                setShowToast(true)
                setTimeout(() => setShowToast(false), 2500)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg w-full bg-white/80 backdrop-blur-lg my-8 md:my-16 p-4 md:p-10 rounded-3xl flex flex-col gap-4 md:gap-6 shadow-2xl border border-teal-100 animate-fadein'>
            <h1 className='font-extrabold text-2xl md:text-3xl text-teal-700 text-center mb-2'>Generate your short URLs</h1>
            <div className='flex flex-col gap-3 md:gap-4'>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-teal-400 text-xl">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M12.293 7.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 12H7a1 1 0 110-2h6.586l-1.293-1.293a1 1 0 010-1.414z" /></svg>
                  </span>
                  <input type="text"
                      value={url}
                      className='pl-10 pr-4 py-3 focus:outline-teal-600 bg-white rounded-xl border border-blue-200 shadow-sm text-base md:text-lg transition-all duration-200 w-full'
                      placeholder='Enter your URL'
                      onChange={e => { seturl(e.target.value) }} />
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-teal-400 text-xl">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" /></svg>
                  </span>
                  <input type="text"
                      value={shorturl}
                      className='pl-10 pr-4 py-3 focus:outline-teal-600 bg-white rounded-xl border border-blue-200 shadow-sm text-base md:text-lg transition-all duration-200 w-full'
                      placeholder='Enter your preferred short URL text'
                      onChange={e => { setshorturl(e.target.value) }} />
                </div>
                <button onClick={generate} className='bg-gradient-to-r from-teal-500 to-blue-400 hover:from-teal-600 hover:to-blue-500 shadow-lg rounded-xl px-8 py-3 font-bold text-white text-base md:text-lg transition-all duration-200 mt-2 cursor-pointer'>Generate</button>
            </div>

            {generated && 
            <div className='flex flex-col items-center gap-2 mt-4'>
              <span className='font-bold text-base md:text-lg text-teal-700'>Your Link</span> 
              <code className='bg-blue-50 px-4 py-2 rounded-lg text-blue-800 font-mono text-sm md:text-base shadow-inner'>
                <Link target="-blank" href={generated}>{generated}</Link>
              </code>
            </div>}

            {showToast && (
              <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-base md:text-lg z-50 animate-fadein">
                {toastMsg}
              </div>
            )}
        </div>
    )
}

export default Shorten
