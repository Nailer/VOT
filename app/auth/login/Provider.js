'use client';
import React, { use } from 'react';
import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }) {
    return (
        <PrivyProvider
            appId="cm99eqskx0215l50n2yhxu2u1"
            clientId={ process.env.CLIENT_ID }
            config={{
            // Customize Privy's appearance in your app
            appearance: {
                theme: 'light',
                accentColor: '#676FFF',
                logo: 'https://your-logo-url'
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
                createOnLogin: 'users-without-wallets'
            }
            }}
        >
            {children}
        </PrivyProvider>
    )
}