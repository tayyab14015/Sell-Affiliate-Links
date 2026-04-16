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
  data-site-id="site_5faa9d24f36208028ba2593e26df24b7"
  data-token="llmafftm_09fd975c8d9afc4ec93781fd8c552071a044ddbb37686664779e3b8816af5b8e">
</script>
      </body>
    </html>
  );
}
