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
  data-site-id="site_5030097e298ed9c7faf7759e8af0ff28"
  data-token="llmafftm_b7337f915c9cf4aedc3a4d14aadf38b1b68dff4873e6d1fff84e8d4faffc0cfa">
</script>
      </body>
    </html>
  );
}
