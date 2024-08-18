import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ParticleNetworkAnimation from './ParticleNetworkAnimation';
import styles from '@/styles/components/layout/Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <ParticleNetworkAnimation />
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;