import '../styles/globals.css';
import Navbar from '../components/NavBar';
import ParticleNetworkAnimation from '../components/ParticleNetworkAnimation';
import Footer from '../components/Footer';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { WalletProvider } from '../utils/WalletContext';
config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's being imported above

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
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
