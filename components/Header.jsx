"use client";

import Image from "next/image"
import Link from "next/link"

/* import { useState, useEffect } from "react" */

const Header = () => {

    /* const [query, setQuery] = useState('')
    
    useEffect(() => {
        const delayTimeSearch = setTimeout(() => {
            console.log(query)
        }, 500)
    }, [query]) */
    

  return (
    <header className="w-full flex items-center justify-center border-b-2 main-border h-24 py-5">
        <nav className="flex items-center justify-center gap-5">
            <Link href="/">
                <Image src="/assets/logo.png" alt="quraniLogo" width={32} height={32} className="object-contain cursor-pointer pb-1.5"/>
            </Link>
            <input 
            type="search" 
            name="search" 
            id="" 
            placeholder="search for a surah/ayah"
            onChange={(e) => setQuery(e.target.value)}
            className="w-[350px] py-1.5 px-2 rounded-lg text-gray-900 outline-none bg-gray-200 placeholder:text-gray-400"
            />
        </nav>
    </header>
    )
}

export default Header