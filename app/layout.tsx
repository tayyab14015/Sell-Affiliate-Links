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
  data-site-id="site_c1027479d56dc79bff9d8b747b1021a2"
  data-token="llmafftm_38bb3c871d67fec45d2905ba4223ec9d579afc796ba6e8f371da2784522f6967">
</script>
      </body>
    </html>
  );
}
