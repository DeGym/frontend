import '../styles/globals.css';
import Navbar from '../components/NavBar';
import ParticleNetworkAnimation from '../components/ParticleNetworkAnimation';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        <ParticleNetworkAnimation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
