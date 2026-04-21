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
  data-site-id="site_2562122d60c41ec23bd1273ee7acb03f"
  data-token="llmafftm_35ad60ebef8cc468fc44941557ae9cfed70ffd823ed13db3293ac8b7ac7eae35">
</script>

      </body>
    </html>
  );
}
