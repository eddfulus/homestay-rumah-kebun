import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50">
           
            <ul className="flex gap-4">
                <li>
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export {Navbar}
