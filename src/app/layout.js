import '@/styles/globals.css';
import Navbar from '@/components/NavBar';
import ParticleNetworkAnimation from '@/components/ParticleNetworkAnimation';
import Footer from '@/components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { WalletProvider } from '@/utils/WalletContext';

config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's being imported above

export const metadata = {
  title: 'DeGym Network',
  description: 'DeGym is the first decentralized gym network empowering users with blockchain technology to access gym memberships, fitness programs, and exclusive rewards. Join the future of fitness with secure, transparent, and seamless experiences.',
  icons: {
    icon: '/favicon.ico',
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        <WalletProvider>
          <ParticleNetworkAnimation />
          <Navbar />
          {children}
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
