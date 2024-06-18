// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-dark text-light">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold neon-text">DeGym</h1>
        <nav className="flex space-x-4">
          <Link href="/about" className="text-secondary hover:text-neon-green">About</Link>
          <Link href="/dgym-token" className="text-secondary hover:text-neon-green">DGYM Token</Link>
          <Link href="/presale" className="text-secondary hover:text-neon-green">Presale</Link>
          <Link href="/membership-plans" className="text-secondary hover:text-neon-green">Membership Plans</Link>
          <Link href="/become-gym-provider" className="text-secondary hover:text-neon-green">Become Gym Provider</Link>
          <Link href="/roadmap" className="text-secondary hover:text-neon-green">Roadmap</Link>
          <Link href="/blog" className="text-secondary hover:text-neon-green">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
