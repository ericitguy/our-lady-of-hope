/* ============================================================
   OUR LADY OF HOPE ENTERPRISE — Product Data Layer
   ------------------------------------------------------------
   This file is the single source of truth for products and
   categories. It is editable in the admin dashboard (admin.html)
   and maps 1:1 to a future CMS/e-commerce database schema.
   Future-ready fields (price, salePrice, stock, sku, variants)
   are included but intentionally unused on the storefront.
   ============================================================ */

window.OLAH = {
  company: {
    name: "OUR LADY OF HOPE ENTERPRISE",
    tagline: "Quality herbal products rooted in Ghanaian heritage.",
    address: {
      line1: "Atimatim Taabu",
      district: "Kwabre East District",
      region: "Ashanti Region",
      country: "Ghana",
      digitalAddress: "AP-035-1987"
    },
    email: "olohghana@gmail.com",
    phones: ["+233 202 155 729", "+233 261 931 815", "+233 243 069 987"],
    whatsapp: "233202155729",
    hours: {
      "Monday – Friday": "8:00 AM – 6:00 PM",
      "Saturday": "8:00 AM – 5:00 PM",
      "Sunday": "Closed"
    }
  },

  categories: [
    {
      id: "herbal-products",
      name: "Herbal Products",
      slug: "herbal-products",
      description: "Our core range of traditionally inspired herbal preparations.",
      image: "assets/products/product-01.jpg"
    },
    {
      id: "herbal-teas",
      name: "Herbal Teas",
      slug: "herbal-teas",
      description: "Carefully blended teas from Ghanaian botanicals.",
      image: "assets/products/product-02.jpg"
    },
    {
      id: "herbal-preparations",
      name: "Herbal Preparations",
      slug: "herbal-preparations",
      description: "Tonics and preparations made with patience and care.",
      image: "assets/products/product-03.jpg"
    },
    {
      id: "natural-products",
      name: "Natural Products",
      slug: "natural-products",
      description: "Pure, natural products for everyday living.",
      image: "assets/products/product-01.jpg"
    },
    {
      id: "wellness-products",
      name: "Wellness Products",
      slug: "wellness-products",
      description: "Products to support everyday natural wellness.",
      image: "assets/products/product-02.jpg"
    },
    {
      id: "other-products",
      name: "Other Products",
      slug: "other-products",
      description: "Additional items from the Our Lady of Hope range.",
      image: "assets/products/product-03.jpg"
    }
  ],

  products: [
    {
      id: "oloh-001",
      slug: "herbal-bitters-tonic",
      name: "Herbal Bitters Tonic",
      categoryId: "herbal-preparations",
      shortDescription: "A traditional Ghanaian herbal bitters, carefully prepared and presented for the modern table.",
      fullDescription: "Our Herbal Bitters Tonic draws on generations of Ghanaian traditional knowledge. Selected botanicals are prepared with patience and care, then presented in a clean, modern bottle. As with all our products, it is prepared with a focus on quality and consistency.",
      ingredients: null,
      images: ["assets/products/product-01.jpg", "assets/products/product-02.jpg"],
      sizes: ["200ml", "500ml"],
      packaging: "Amber glass bottle with tamper-evident cap",
      usage: null,
      storage: "Store in a cool, dry place away from direct sunlight.",
      availability: "available",
      featured: true,
      isNew: true,
      seoTitle: "Herbal Bitters Tonic | Our Lady of Hope Enterprise",
      seoDescription: "A traditional Ghanaian herbal bitters tonic, carefully prepared and presented by Our Lady of Hope Enterprise, Ashanti Region, Ghana.",
      /* ---- future e-commerce fields (not displayed) ---- */
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HP-001",
      variants: [],
      specifications: { "Form": "Liquid tonic", "Bottle size": "200ml / 500ml", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-002",
      slug: "heritage-herbal-tea",
      name: "Heritage Herbal Tea",
      categoryId: "herbal-teas",
      shortDescription: "A warming herbal tea blended from time-honoured Ghanaian botanicals.",
      fullDescription: "Heritage Herbal Tea brings together botanicals long appreciated in Ghanaian homes. The blend is prepared in small batches, packed to preserve freshness, and presented in a refined caddy suitable for gifting or everyday enjoyment.",
      ingredients: null,
      images: ["assets/products/product-02.jpg", "assets/products/product-03.jpg"],
      sizes: ["50g", "100g"],
      packaging: "Resealable pouch in a printed caddy",
      usage: null,
      storage: "Keep sealed in a cool, dry place.",
      availability: "available",
      featured: true,
      isNew: false,
      seoTitle: "Heritage Herbal Tea | Our Lady of Hope Enterprise",
      seoDescription: "A warming Ghanaian herbal tea blend from Our Lady of Hope Enterprise — quality herbal products rooted in Ghanaian heritage.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HT-002",
      variants: [],
      specifications: { "Form": "Dried herbal blend", "Net weight": "50g / 100g", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-003",
      slug: "shea-and-botanical-balm",
      name: "Shea & Botanical Balm",
      categoryId: "natural-products",
      shortDescription: "A nourishing balm combining shea with carefully selected botanicals.",
      fullDescription: "Our Shea & Botanical Balm combines traditional shea with botanicals selected for their gentle character. Whipped to a smooth finish and poured into a compact jar, it is a small daily ritual of Ghanaian natural care.",
      ingredients: null,
      images: ["assets/products/product-03.jpg", "assets/products/product-01.jpg"],
      sizes: ["60g"],
      packaging: "Aluminium jar with screw lid",
      usage: null,
      storage: "Store below 30°C.",
      availability: "available",
      featured: true,
      isNew: false,
      seoTitle: "Shea & Botanical Balm | Our Lady of Hope Enterprise",
      seoDescription: "A nourishing shea and botanical balm from Our Lady of Hope Enterprise — natural products from the Ashanti Region of Ghana.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-NP-003",
      variants: [],
      specifications: { "Form": "Balm", "Net weight": "60g", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-004",
      slug: "daily-wellness-capsules",
      name: "Daily Wellness Capsules",
      categoryId: "wellness-products",
      shortDescription: "A convenient capsule format of our traditional herbal blend.",
      fullDescription: "For customers who prefer a convenient format, our Daily Wellness Capsules carry the same carefully prepared herbal blend in an easy-to-take form. Each batch is prepared with a focus on consistency and quality.",
      ingredients: null,
      images: ["assets/products/product-01.jpg", "assets/products/product-03.jpg"],
      sizes: ["30 capsules", "60 capsules"],
      packaging: "Amber jar with tamper-evident seal",
      usage: null,
      storage: "Store in a cool, dry place.",
      availability: "made-to-order",
      featured: false,
      isNew: true,
      seoTitle: "Daily Wellness Capsules | Our Lady of Hope Enterprise",
      seoDescription: "Convenient traditional herbal wellness capsules from Our Lady of Hope Enterprise, Ghana.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-WP-004",
      variants: [],
      specifications: { "Form": "Capsules", "Count": "30 / 60", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-005",
      slug: "signature-herbal-blend",
      name: "Signature Herbal Blend",
      categoryId: "herbal-products",
      shortDescription: "The house signature — a balanced blend at the heart of our range.",
      fullDescription: "The Signature Herbal Blend is the blend at the heart of Our Lady of Hope Enterprise. Balanced, aromatic and prepared to the standard our name carries, it represents everything the house stands for: heritage, quality and care.",
      ingredients: null,
      images: ["assets/products/product-02.jpg", "assets/products/product-01.jpg"],
      sizes: ["100g", "250g"],
      packaging: "Resealable pouch",
      usage: null,
      storage: "Keep sealed in a cool, dry place.",
      availability: "available",
      featured: true,
      isNew: false,
      seoTitle: "Signature Herbal Blend | Our Lady of Hope Enterprise",
      seoDescription: "The signature Ghanaian herbal blend from Our Lady of Hope Enterprise — quality herbal products rooted in Ghanaian heritage.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HP-005",
      variants: [],
      specifications: { "Form": "Dried herbal blend", "Net weight": "100g / 250g", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-006",
      slug: "hibiscus-infusion",
      name: "Hibiscus Infusion",
      categoryId: "herbal-teas",
      shortDescription: "A vibrant hibiscus infusion, a familiar and beloved Ghanaian favourite.",
      fullDescription: "Our Hibiscus Infusion celebrates one of Ghana's most beloved botanicals. Dried carefully to retain its character, it makes a beautiful ruby-coloured infusion, served warm or over ice.",
      ingredients: null,
      images: ["assets/products/product-03.jpg", "assets/products/product-02.jpg"],
      sizes: ["80g"],
      packaging: "Resealable pouch in a printed caddy",
      usage: null,
      storage: "Keep sealed in a cool, dry place.",
      availability: "available",
      featured: false,
      isNew: false,
      seoTitle: "Hibiscus Infusion | Our Lady of Hope Enterprise",
      seoDescription: "A vibrant Ghanaian hibiscus infusion from Our Lady of Hope Enterprise — natural herbal products from Ashanti Region, Ghana.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HT-006",
      variants: [],
      specifications: { "Form": "Dried hibiscus", "Net weight": "80g", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-007",
      slug: "traditional-herbal-syrup",
      name: "Traditional Herbal Syrup",
      categoryId: "herbal-preparations",
      shortDescription: "A smooth traditional syrup prepared from a classic herbal recipe.",
      fullDescription: "Our Traditional Herbal Syrup follows a classic preparation, finished to a smooth consistency and bottled with care. A quiet staple of the range, made the way we believe tradition deserves.",
      ingredients: null,
      images: ["assets/products/product-01.jpg", "assets/products/product-02.jpg"],
      sizes: ["250ml"],
      packaging: "Amber glass bottle",
      usage: null,
      storage: "Refrigerate after opening.",
      availability: "available",
      featured: false,
      isNew: false,
      seoTitle: "Traditional Herbal Syrup | Our Lady of Hope Enterprise",
      seoDescription: "A traditional Ghanaian herbal syrup from Our Lady of Hope Enterprise, prepared with care in the Ashanti Region.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HP-007",
      variants: [],
      specifications: { "Form": "Syrup", "Bottle size": "250ml", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-008",
      slug: "gift-collections",
      name: "Curated Gift Collection",
      categoryId: "other-products",
      shortDescription: "A curated selection of house favourites, beautifully presented for gifting.",
      fullDescription: "Our Curated Gift Collection brings together a selection of house favourites in elegant packaging. An ideal way to share the heritage and quality of Our Lady of Hope Enterprise with someone special, or to introduce a stockist to the range.",
      ingredients: null,
      images: ["assets/products/product-lineup.jpg", "assets/products/product-01.jpg"],
      sizes: ["3-piece", "5-piece"],
      packaging: "Presentation box with ribbon",
      usage: null,
      storage: "See individual product labels.",
      availability: "made-to-order",
      featured: false,
      isNew: true,
      seoTitle: "Curated Gift Collection | Our Lady of Hope Enterprise",
      seoDescription: "A curated gift collection of Ghanaian herbal and natural products from Our Lady of Hope Enterprise.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-OP-008",
      variants: [],
      specifications: { "Contents": "Selection of house products", "Presentation": "Gift box", "Origin": "Ashanti Region, Ghana" }
    }
  ],

  storyTimeline: [
    {
      era: "Chapter One — The Foundation",
      title: "Rooted in Knowledge",
      text: "Long before there was a name on a label, there was knowledge — of plants gathered with care and preparations trusted across generations in Ghanaian homes.",
      placeholder: false
    },
    {
      era: "Chapter Two — The Company",
      title: "Our Lady of Hope Enterprise",
      text: "The enterprise is established in Atimatim Taabu, in the Kwabre East District of the Ashanti Region — taking traditional knowledge into a modern, quality-focused product house.",
      placeholder: true
    },
    {
      era: "Chapter Three — Early Products",
      title: "The First Range",
      text: "The founding range of herbal products takes shape — prepared with care, honestly described, and presented with the dignity the tradition deserves.",
      placeholder: true
    },
    {
      era: "Chapter Four — Growth",
      title: "Milestones & Expansion",
      text: "As the range grows, so does the community around it — customers, stockists and partners across Ghana. Milestones will be recorded here as they are confirmed.",
      placeholder: true
    },
    {
      era: "Chapter Five — Tomorrow",
      title: "Community, Then the World",
      text: "Our vision reaches beyond Ghana's borders: a trusted Ghanaian herbal brand on shelves internationally, carrying heritage, quality and hope.",
      placeholder: true
    }
  ]
};

/* ---------------- Data access helpers ---------------- */
(function () {
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) { /* storage unavailable */ }
    }
  };

  const OLAH = window.OLAH;
  const LS_PRODUCTS = "oloh_products_override_v1";

  OLAH.store = store;
  OLAH.getProducts = function () {
    return store.get(LS_PRODUCTS, null) || OLAH.products;
  };
  OLAH.saveProducts = function (products) {
    store.set(LS_PRODUCTS, products);
  };
  OLAH.resetProducts = function () {
    try { localStorage.removeItem(LS_PRODUCTS); } catch (e) {}
  };
  OLAH.getCategories = function () { return OLAH.categories; };
  OLAH.getCategory = function (id) {
    return OLAH.categories.find(function (c) { return c.id === id; }) || null;
  };
  OLAH.getCategoryName = function (id) {
    const c = OLAH.getCategory(id);
    return c ? c.name : "Herbal Products";
  };
  OLAH.getProductBySlug = function (slug) {
    return OLAH.getProducts().find(function (p) { return p.slug === slug; }) || null;
  };
  OLAH.getFeatured = function () {
    return OLAH.getProducts().filter(function (p) { return p.featured; });
  };
  OLAH.isUsingOverrides = function () {
    return store.get(LS_PRODUCTS, null) !== null;
  };
  OLAH.availabilityLabel = function (value) {
    const map = {
      "available": "Available",
      "made-to-order": "Made to Order",
      "out-of-stock": "Out of Stock"
    };
    return map[value] || "Available";
  };
})();
