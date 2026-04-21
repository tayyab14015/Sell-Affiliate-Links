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
  data-site-id="site_2387593b15bb5a6f5fbf834572abfaa8"
  data-token="llmafftm_22a5800242a06225e7d3347a4d2a78d3f6c408e508e8c95f8ce824215c798e11">
</script>
      </body>
    </html>
  );
}
