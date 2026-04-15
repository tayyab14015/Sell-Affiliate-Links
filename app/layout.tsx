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
          data-site-id="site_3e03b230d268a93d69a409f48e05785a"
          data-token="llmafftm_61fb21da17acb1fae067cc377b2ccdd6360df137cc50a0186378023f57f70a84"
        ></script>
      </body>
    </html>
  );
}
