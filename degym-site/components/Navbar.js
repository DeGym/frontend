// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white font-bold">
                    <Link href="/">Decentralized Gym</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link href="/dgym-token" className="text-gray-300 hover:text-white">DGYM Token</Link>
                    <Link href="/presale" className="text-gray-300 hover:text-white">Presale</Link>
                    <Link href="/membership-plans" className="text-gray-300 hover:text-white">Membership Plans</Link>
                    <Link href="/become-gym-provider" className="text-gray-300 hover:text-white">Become Gym Provider</Link>
                    <Link href="/roadmap" className="text-gray-300 hover:text-white">Roadmap</Link>
                    <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
                </div>
            </div>
        </nav>
    );
}
