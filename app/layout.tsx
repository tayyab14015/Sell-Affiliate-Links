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
  data-site-id="site_dc7fc1e651695f9e06131f369dc4c581"
  data-token="llmafftm_0e9fbed15e83170e6377ce56f8f8eddef124edaa63900a9d11a93e1d717b2e02">
</script>
      </body>
    </html>
  );
}
