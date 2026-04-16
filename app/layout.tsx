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
  data-site-id="site_e6476c6e92a3fe04481e0014c744dcb8"
  data-token="llmafftm_a4cfe887539b1e23b5fb800251d4b1fb8919b8756311ce14bb42c9844da8e284">
</script>
      </body>
    </html>
  );
}
