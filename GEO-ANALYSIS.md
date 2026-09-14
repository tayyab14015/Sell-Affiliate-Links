# AISneer AI-search visibility regression

Audit date: September 14, 2026

Target query: `Blackzero BZD-01T-PS`

Target page: `https://www.aisneer.com/blog/blackzero-bzd-01t-ps`

## GEO readiness

Production before redeployment: **68/100**. Expected after deploying the canonical-host fix: **78/100**. This is a diagnostic readiness score, not a guarantee that DeepSeek will select the page for every query.

- Google AI surfaces: 76/100. The page is server-rendered, indexable, structured, and discoverable, but duplicate hosts weaken signal consolidation.
- ChatGPT search: 75/100. OAI-SearchBot and GPTBot are allowed and the full article is in initial HTML.
- Perplexity: 75/100. PerplexityBot is allowed and the article has extractable answer blocks.
- DeepSeek: 65/100. Access is open, but its citation selection and crawler identity are not publicly specified. The duplicate-host regression and August `noindex` interval are the strongest site-controlled explanations.

## Crawler and rendering status

On September 14, production returned HTTP 200 and `index, follow` for the target page to normal, Bingbot, and DeepSeekBot-like user agents. There was no blocking `X-Robots-Tag`. The full title, canonical, article, headings, and structured data were present in the initial response, so JavaScript execution is not required.

`/robots.txt` allows all public paths through the wildcard rule and named major crawlers. `DeepSeekBot` is now listed explicitly for clarity, although DeepSeek has not published an authoritative crawler specification.

`/llms.txt` exists, names `www` as canonical, and links to both Blackzero pages. It is optional navigation, not a substitute for normal indexing and canonicalization.

## Citability and authority

The page has a front-loaded product definition, a concise quick answer, specification tables, model comparisons, FAQs, exact ASINs, a named author, dates, and caveats where source data is incomplete. The quick-answer passage is the strongest citation candidate.

Authenticated off-site mention data for Wikipedia, Reddit, YouTube, and LinkedIn was not available in this investigation, so no claim is made about those signals.

## Change timeline and root cause

- **August 25, `930818b`:** changed both Blackzero pages from `index` to `noindex`, removed them from the sitemap and blog hub, and removed the Blackzero link from `llms.txt`. This is the primary delayed-effect cause. Previously indexed pages can remain visible until a later crawl processes `noindex`.
- **August 28, `fc599f3`:** removed both apex-to-www redirects. Since then, apex and www URLs have both returned HTTP 200 while declaring www canonicals, creating duplicate crawl targets.
- **August 28, `486d3e4` and `001d306`:** changed only the deferred affiliate script credentials. These do not control server-rendered indexing.
- **August 31, `353ed68` and `c015e4c`:** restored the canonical-host redirect and removed it again seven minutes later.
- **September 1, `dccbde7`:** changed Bing verification and deferred affiliate script values. This does not block crawling.
- **September 2, `08115c7`:** correctly restored `index, follow`, sitemap inclusion, hub links, and `llms.txt` links.
- **September 2, `9b11847`:** changed only the deferred affiliate script credentials.

## Fix implemented

- Restored the apex-to-www 301 in `proxy.ts`.
- Restored Vercel edge host redirects in `vercel.json`.
- Added an explicit `DeepSeekBot` allow entry while retaining the wildcard allow rule.
- Preserved the correct `index, follow` state and current sitemap/internal links.

## Recovery actions after deployment

1. Verify every `https://aisneer.com/...` URL returns one 301 to the matching `https://www.aisneer.com/...` URL, including query strings, robots.txt, and sitemap.xml.
2. Inspect and request recrawling of the canonical Blackzero URLs in Bing Webmaster Tools and Google Search Console.
3. Keep the target title, H1, canonical, and model identifiers stable during recovery.
4. Retest the same DeepSeek prompt after recrawling. Citation selection can vary even when indexing is healthy.

No broad content or schema rewrite is recommended. The remaining regression is canonical-host consolidation, not thin content or missing structured data.
