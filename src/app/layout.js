import '../styles/globals.css';
import Navbar from '../components/NavBar';
import ParticleNetworkAnimation from '../components/ParticleNetworkAnimation';
import Footer from '../components/Footer';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-dark text-light">
        <ParticleNetworkAnimation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
