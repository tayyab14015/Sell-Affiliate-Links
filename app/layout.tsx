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
  data-site-id="site_a49b77cd8543960d97c1a09aad64a5a3"
  data-token="llmafftm_56bb2f033c48194a5722566c8835bc37dbff86985221180b39735409599c7c81">
</script>
      </body>
    </html>
  );
}
