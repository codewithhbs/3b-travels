# 3B Travels — Next.js website

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- Pages: `/` (home, as per design PDF), `/about`, `/contact`, `/destinations`, `/destinations/[slug]` (11 destinations)
- Destination content (overview, highlights, itinerary, inclusions, visa): `lib/destinations.js` — add an entry to create a new page
- Content (phone, email, address, destinations, packages): `lib/data.js`
- Query form API: `app/api/query/route.js` (logs to console — connect email/CRM there)
- Brand assets: `public/brand/` (logos, icons, loader pattern) · Photos: `public/images/`
- Font: add licensed Gilroy woff2 files to `public/fonts/` (Gilroy-Light/Regular/Medium/SemiBold/Bold.woff2). Until then Outfit is used.
