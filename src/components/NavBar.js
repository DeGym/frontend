import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-dark text-light py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold neon-text">DeGym</h1>
        <nav className="flex space-x-4">
          <Link href="/about" className="text-secondary hover:text-primary">About</Link>
          <Link href="/dgym-token" className="text-secondary hover:text-primary">DGYM Token</Link>
          <Link href="/presale" className="text-secondary hover:text-primary">Presale</Link>
          <Link href="/membership-plans" className="text-secondary hover:text-primary">Membership Plans</Link>
          <Link href="/become-gym-provider" className="text-secondary hover:text-primary">Become Gym Provider</Link>
          <Link href="/roadmap" className="text-secondary hover:text-primary">Roadmap</Link>
          <Link href="/blog" className="text-secondary hover:text-primary">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
