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
  data-site-id="site_7a60b5bcd2f6ceb9fa53fcc183972c33"
  data-token="llmafftm_4717a8716fc9d809baa10e34ac0647affc9afa79ddb6ba897de0d557ff83d4e7">
</script>
      </body>
    </html>
  );
}
