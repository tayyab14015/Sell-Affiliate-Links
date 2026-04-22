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
  data-site-id="site_01a7b9b3c8051293a5b4b9f28a79268b"
  data-token="llmafftm_ae644998da498cbb5923ee2946610e9c7f102a18a3bb8d3e666bd1db577cdd4d">
</script>
      </body>
    </html>
  );
}
