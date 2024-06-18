import '../styles/globals.css';
import Header from '../components/Header';
import ParticleNetworkAnimation from '../components/ParticleNetworkAnimation';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParticleNetworkAnimation />
        <Header />
        {children}
      </body>
    </html>
  );
}
