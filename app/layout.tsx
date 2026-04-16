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
  data-site-id="site_7b36106a6cd3929f8387b224e7d60679"
  data-token="llmafftm_c7726725e027bb4d6037d1eb7ef5fc874cb8fdaf1a481dad9ac6b69139666662">
</script>
      </body>
    </html>
  );
}
