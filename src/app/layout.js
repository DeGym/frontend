// app/layout.js
import '../styles/globals.css';
import Navbar from '../components/NavBar';
import ParticleNetworkAnimation from '../components/ParticleNetworkAnimation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParticleNetworkAnimation />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
