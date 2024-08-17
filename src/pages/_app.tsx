import React from 'react';
import type { AppProps } from 'next/app';
import { ToastProvider } from '@/context/ToastContext';
import { AppProvider } from '@/context/AppContext';
import Layout from '@/components/layout/Layout';
import { WalletProvider } from '@/context/WalletContext';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ToastProvider>
            <WalletProvider>
                <AppProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AppProvider>
            </WalletProvider>
        </ToastProvider>
    );
}

export default MyApp;