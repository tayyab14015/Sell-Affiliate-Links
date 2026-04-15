# Minimal Next.js SSR Laptops Page

This project uses Next.js App Router with TypeScript and an Edge Runtime SSR route at `/laptops`.

## Quick Start

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000/laptops](http://localhost:3000/laptops)

### Test with curl

```bash
curl http://localhost:3000/laptops
```

You should see full laptop listing HTML in the response (not an empty shell), plus:

```html
<script type="application/json" id="laptop-data">...</script>
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```
