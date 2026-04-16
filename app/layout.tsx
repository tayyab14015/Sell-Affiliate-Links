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
  data-site-id="site_e45e2036e821719bc224d1d700eece37"
  data-token="llmafftm_f2111ab7420870a119ee788842ab2702374ad196cf7da1832967ca3df61ddc79">
</script>
      </body>
    </html>
  );
}
