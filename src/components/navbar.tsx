import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50">
           
            <ul className="flex gap-8 ">
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="#">Home</Link>
                </li >
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="#">Gallery</Link>
                </li>
                <li className="text-black hover:text-green-500 transition-colors">
                    <Link href="#">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export {Navbar}
