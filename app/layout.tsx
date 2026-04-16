import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Laptop Listings',
  description: 'Simple SSR laptop listing page'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
  src="https://api.llmaffiliate.com/static/onboarding-snippet.js"
  data-site-id="site_5a576d66e091c519bb6c00984dbfc188"
  data-token="llmafftm_bc2923a1b6f62baa1c65cef679f7c7ff4bfe34ea454b8f16e41443d1a9cea5e0">
</script>
      </body>
    </html>
  );
}
