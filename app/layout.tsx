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
  data-site-id="site_049db6b44ef2a8ea545104c3d6c94f8e"
  data-token="llmafftm_fb79f48ce7f1f31258a539f312c8c6e3c76e8fd7661cde18472c77882173a7d0">
</script>
      </body>
    </html>
  );
}
