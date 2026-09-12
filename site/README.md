# OUR LADY OF HOPE ENTERPRISE — Website

A premium, enquiry-based e-commerce website for a Ghanaian herbal products company. No prices are displayed anywhere; all product interest is captured through enquiries (form, email, WhatsApp).

## Running the site

The site is fully static. Open `index.html` directly, or serve it:

```bash
cd site
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage — hero, brand intro, featured products, categories, why-choose, heritage, showcase, trust, CTA |
| `products.html` | Catalogue with category filters, Featured/New chips and search |
| `product.html?p=<slug>` | Product detail with gallery, specs and enquiry modal + WhatsApp |
| `about.html` | Who We Are, Heritage, Products, Quality, Vision & Mission |
| `our-story.html` | Timeline storytelling (deliberately undated until real milestones are supplied) |
| `why-choose-us.html` | Six value-proposition pillars |
| `contact.html` | Form, address, phones, email, digital address, hours, map, WhatsApp CTA |
| `admin.html` | Product manager dashboard (noindex) |

## Managing products (Admin)

1. Open `admin.html`.
2. Edit or create products — every field from the brief is editable (name, images, category, descriptions, ingredients, specifications, packaging, sizes, usage, storage, availability, featured/new flags, SEO title/description).
3. Changes are stored in the browser (localStorage) immediately.
4. Use **Export JSON** to download the catalogue, then paste its contents over the `products` array in `js/data.js` to publish for all visitors. **Import JSON** restores an export.

The product schema already carries future e-commerce fields (`price`, `salePrice`, `stock`, `sku`, `variants`, inventory hooks), so cart/checkout can be added later without restructuring.

## Content guardrails (by design)

- No prices, discounts, ratings or reviews anywhere.
- Ingredients and usage instructions render **only** when supplied in `js/data.js`.
- No medical or disease-treatment claims; copy is factual and heritage-focused.
- Timeline has no invented dates.

## SEO

- Semantic headings, meta descriptions per page, `robots.txt` and `sitemap.xml` included.
- Admin SEO title/description fields flow into `<title>` and meta description on product pages.
- Target terms: Ghana herbal products, herbal products in Ghana, natural products Ghana, herbal products Ashanti Region, etc.

## Notes

- Product images live in `assets/products/` (copied from the supplied label/photo pack).
- The contact/enquiry/newsletter forms are front-end ready with clear "Backend hook" comments where your form/email service should be connected.
- Replace the OpenStreetMap embed with a Google Maps embed of the exact location if preferred.
