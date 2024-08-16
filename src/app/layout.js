import '@/styles/globals.css';
import Navbar from '@/components/NavBar';
import ParticleNetworkAnimation from '@/components/ParticleNetworkAnimation';
import Footer from '@/components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GlobalProvider } from '@/context/GlobalContext';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's being imported above

export const metadata = {
  title: 'DeGym Network',
  description: 'DeGym is the first decentralized gym network empowering users with blockchain technology to access gym memberships, fitness programs, and exclusive rewards. Join the future of fitness with secure, transparent, and seamless experiences.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-dark text-light ${jetbrains.className}`}>
        <GlobalProvider>
          <ParticleNetworkAnimation />
          <Navbar />
          {children}
          <Footer />
        </GlobalProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}