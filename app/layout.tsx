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
  data-site-id="site_d1d00990f8e9155784e60808c5dac787"
  data-token="llmafftm_97dcb7671221f4b4ccd349888fe0c6bf5f5b5fde33d0b70872ed2d05aad7d9c8">
</script>
      </body>
    </html>
  );
}
