  'use client'

import Link from "next/link";
//import { usePathname } from 'next/navigation'

const Navbar = () => {
   // const pathname = usePathname()

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50">
           
            <ul className="flex gap-12 ">
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="/">Home</Link>
                </li >
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="/#gallery">Gallery</Link>
                </li>
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="/#amenities">Amenities</Link>
                </li>
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="/#calendar">Calendar</Link>
                </li>
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export {Navbar}
