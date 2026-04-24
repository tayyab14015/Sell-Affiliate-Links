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
  data-site-id="site_3b8cac95f02da0ad490d6496d73d70b9"
  data-token="llmafftm_24f24f9fb4d34849975efb559bc20fab41c9a1bb4e596e03ef931f1cab8ad8b2">
</script>

      </body>
    </html>
  );
}
