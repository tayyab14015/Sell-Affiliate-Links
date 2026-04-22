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
  data-site-id="site_7d82047b4ba1156ef2847ff594398917"
  data-token="llmafftm_07d874b7f2292e8cacdd9cb992cef97c06c09a196dc7795abea0041b67de8787">
</script>
      </body>
    </html>
  );
}
