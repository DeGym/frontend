import React from 'react';
import type { AppProps } from 'next/app';
import { ToastProvider } from '@/context/ToastContext';
import { AppProvider } from '@/context/AppContext';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <ToastProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ToastProvider>
        </AppProvider>
    );
}

export default MyApp;