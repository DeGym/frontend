// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-dark text-light navbar">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold neon-text">DeGym</h1>
        <nav className="flex space-x-8">
          <Link href="/" legacyBehavior><a className="text-secondary hover:neon-green">About</a></Link>
          <Link href="/token" legacyBehavior><a className="text-secondary hover:neon-green">$DGYM</a></Link>
          <Link href="/presale" legacyBehavior><a className="text-secondary hover:neon-green">Presale</a></Link>
          <Link href="/membership-plans" legacyBehavior><a className="text-secondary hover:neon-green">Membership Plans</a></Link>
          <Link href="/become-gym-provider" legacyBehavior><a className="text-secondary hover:neon-green">Become Gym Provider</a></Link>
          <Link href="/roadmap" legacyBehavior><a className="text-secondary hover:neon-green">Roadmap</a></Link>
          <Link href="/blog" legacyBehavior><a className="text-secondary hover:neon-green">Blog</a></Link>
        </nav>
      </div>
    </header>
  );
}
