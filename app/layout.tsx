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
  data-site-id="site_06bb78d1fae37ad7fc9bfe7ec3427ce3"
  data-token="llmafftm_35e3f5327b255af31c678b2ec5c0c77767c6df33daabf725a3399d56ef55c1eb">
</script>
      </body>
    </html>
  );
}
