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
  data-site-id="site_3a829f3dab43138212eaa5d132dbcae0"
  data-token="llmafftm_963ee5a0021935a735b4bb884f1cfb88034f4b4981f71a20b4e4faf18607c07f">
</script>

      </body>
    </html>
  );
}
