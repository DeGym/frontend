import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faMedium, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-dark text-light">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                <div>
                    <h4 className="text-primary text-lg font-bold mb-2">Contact Us</h4>
                    <p className="text-secondary">info@degym.io</p>
                    <p className="text-secondary">+1 (123) 456-7890</p>
                </div>
                <div>
                    <h4 className="text-primary text-lg font-bold mb-2">Quick Links</h4>
                    <ul>
                        <li>
                            <Link href="/about" className="text-secondary hover:text-neon-green">About</Link>
                        </li>
                        <li>
                            <Link href="/dgym-token" className="text-secondary hover:text-neon-green">DGYM Token</Link>
                        </li>
                        <li>
                            <Link href="/presale" className="text-secondary hover:text-neon-green">Presale</Link>
                        </li>
                        <li>
                            <Link href="/membership-plans" className="text-secondary hover:text-neon-green">Membership Plans</Link>
                        </li>
                        <li>
                            <Link href="/become-gym-provider" className="text-secondary hover:text-neon-green">Become Gym Provider</Link>
                        </li>
                        <li>
                            <Link href="/roadmap" className="text-secondary hover:text-neon-green">Roadmap</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="text-secondary hover:text-neon-green">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-primary text-lg font-bold mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com/0xthiagomartins" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://t.me/0xthiagomartins" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green">
                            <FontAwesomeIcon icon={faTelegram} size="2x" />
                        </a>
                        <a href="https://medium.com/@0xthiagomartins" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green">
                            <FontAwesomeIcon icon={faMedium} size="2x" />
                        </a>
                        <a href="https://discord.com/invite/0xthiagomartins" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green">
                            <FontAwesomeIcon icon={faDiscord} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-secondary">
                &copy; {new Date().getFullYear()} DeGym. All Rights Reserved.
            </div>
        </footer>
    );
}
