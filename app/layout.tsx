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
  data-site-id="site_9a3c80429c0103303618c5159409ef5b"
  data-token="llmafftm_4a10070b415f660cc6bc3b37c18705582a1aa396b8961780cdab72caa4be0b4d">
</script>

      </body>
    </html>
  );
}
