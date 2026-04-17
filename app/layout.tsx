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
  data-site-id="site_def4f65c576147cd82bbb1dc9b91314a"
  data-token="llmafftm_e34b35529122e462bd38036e8a400908fd4f75a7ca9b3ce9369b47a8ff0f149b">
</script>

      </body>
    </html>
  );
}
