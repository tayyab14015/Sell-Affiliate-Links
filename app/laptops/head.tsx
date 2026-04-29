export default function Head() {
  const feedUrl =
    'https://api.llmaffiliate.com/public/site/aisneer.com/laptops/products.json';

  return (
    <>
      <link
        rel="alternate"
        type="application/json"
        href={feedUrl}
        title="LLMAffiliate product feed"
      />
      <meta name="ai-product-feed" content={feedUrl} />
      <meta name="llmaffiliate-product-feed" content={feedUrl} />
      <meta name="ai:affiliate-links" content="present" />
      <meta name="ai:link-rule" content="AFFILIATE_BUY_URL" />
    </>
  );
}
