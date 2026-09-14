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
      id: "herbal-beverages",
      name: "Herbal Beverages",
      slug: "herbal-beverages",
      description: "Nourishing spiced beverage powders, blended the Our Lady way.",
      image: "assets/products/product-02.jpg"
    },
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
      image: "assets/products/product-04.jpg"
    },
    {
      id: "natural-products",
      name: "Natural Products",
      slug: "natural-products",
      description: "Pure, natural products for everyday living.",
      image: "assets/products/product-02.jpg"
    },
    {
      id: "wellness-products",
      name: "Wellness Products",
      slug: "wellness-products",
      description: "Products to support everyday natural wellness.",
      image: "assets/products/product-03.jpg"
    },
    {
      id: "other-products",
      name: "Other Products",
      slug: "other-products",
      description: "Additional items from the Our Lady of Hope range.",
      image: "assets/products/product-04.jpg"
    }
  ],

  products: [
    {
      id: "oloh-001",
      slug: "spiced-tiger-nut-coconut-beverage",
      name: "Spiced Tiger Nut Coconut Beverage",
      categoryId: "herbal-beverages",
      shortDescription: "A creamy spiced beverage powder of tiger nut and coconut — just add water or milk for a classic Ghanaian favourite.",
      fullDescription: "Our Spiced Tiger Nut Coconut Beverage brings together two beloved Ghanaian ingredients — earthy tiger nut and rich coconut — gently spiced and milled into a smooth powder. Simply mix with water or your choice of milk, served chilled over ice just as it is enjoyed across Ghana, or warmed on cooler days. Presented in a wooden-lidded canister, it is our signature beverage at the heart of the range.",
      ingredients: null,
      images: ["assets/products/product-02.jpg", "assets/products/tiger-coconut-poster.jpg"],
      sizes: ["1kg"],
      packaging: "Wooden-lidded canister",
      usage: null,
      storage: "Store in a cool, dry place away from direct sunlight.",
      availability: "available",
      featured: true,
      isNew: true,
      seoTitle: "Spiced Tiger Nut Coconut Beverage | Our Lady of Hope Enterprise",
      seoDescription: "Spiced tiger nut and coconut beverage powder from Our Lady of Hope Enterprise — a creamy Ghanaian favourite, prepared in the Ashanti Region.",
      /* ---- future e-commerce fields (not displayed) ---- */
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HB-001",
      variants: [],
      specifications: { "Form": "Beverage powder", "Net weight": "1kg", "Serving suggestion": "Mix with water or milk; serve chilled or warm", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-002",
      slug: "red-beverage-roselle-powder",
      name: "Red Beverage — Roselle Powder",
      categoryId: "herbal-beverages",
      shortDescription: "A vibrant ruby-red beverage powder made from roselle (hibiscus) — refreshingly tangy, served chilled or warm.",
      fullDescription: "Our Red Beverage celebrates roselle — the deep crimson hibiscus calyx long cherished in Ghanaian homes. Dried and milled into a fine powder, it stirs into a brilliantly ruby-red drink, delicious over ice with a slice of lime, or served warm. Presented in a sealed jar, it is as beautiful on the shelf as it is refreshing in the glass.",
      ingredients: null,
      images: ["assets/products/product-01.jpg", "assets/products/product-04.jpg"],
      sizes: ["750g"],
      packaging: "Sealed jar with tamper band",
      usage: null,
      storage: "Keep sealed in a cool, dry place.",
      availability: "available",
      featured: true,
      isNew: true,
      seoTitle: "Red Beverage — Roselle Powder | Our Lady of Hope Enterprise",
      seoDescription: "Vibrant roselle (hibiscus) beverage powder from Our Lady of Hope Enterprise — a refreshing Ghanaian red drink, prepared in the Ashanti Region.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HB-002",
      variants: [],
      specifications: { "Form": "Beverage powder", "Net weight": "750g", "Serving suggestion": "Mix with water; serve chilled with ice or warm", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-003",
      slug: "bitter-leaf-spiced-herbal-tea",
      name: "Bitter Leaf Spiced Herbal Tea",
      categoryId: "herbal-teas",
      shortDescription: "A spiced herbal tea of bitter leaf, warmed with cinnamon and star anise — an earthy, aromatic infusion.",
      fullDescription: "Our Bitter Leaf Spiced Herbal Tea pairs the deep, earthy character of bitter leaf with warming spices — cinnamon and star anise — for a rounded, aromatic infusion. Steeped hot, it makes a comforting cup; a quiet daily ritual rooted in Ghanaian tradition and prepared with care.",
      ingredients: null,
      images: ["assets/products/product-03.jpg"],
      sizes: ["200g"],
      packaging: "Sealed canister with tamper band",
      usage: null,
      storage: "Keep sealed in a cool, dry place.",
      availability: "available",
      featured: true,
      isNew: true,
      seoTitle: "Bitter Leaf Spiced Herbal Tea | Our Lady of Hope Enterprise",
      seoDescription: "Bitter leaf spiced herbal tea with cinnamon and star anise from Our Lady of Hope Enterprise — a warming Ghanaian infusion.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HT-003",
      variants: [],
      specifications: { "Form": "Spiced herbal tea", "Net weight": "200g", "Serving suggestion": "Steep in hot water and enjoy warm", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-004",
      slug: "prekese-spiced-herbal-tea",
      name: "Prekese Spiced Herbal Tea",
      categoryId: "herbal-teas",
      shortDescription: "A prized prekese spiced herbal tea, deeply aromatic and traditional — enjoy warm, sweetened with honey if desired.",
      fullDescription: "Prekese — the aidan fruit — is one of Ghana's most prized botanicals, treasured across generations. Our Prekese Spiced Herbal Tea prepares this remarkable pod into a deeply aromatic, warming infusion, wonderful on its own or with a spoonful of honey. Presented in a glass jar, it is a distinguished cup rooted in Ghanaian heritage.",
      ingredients: null,
      images: ["assets/products/product-04.jpg"],
      sizes: ["200g"],
      packaging: "Glass jar with metal lid",
      usage: null,
      storage: "Keep sealed in a cool, dry place.",
      availability: "available",
      featured: true,
      isNew: true,
      seoTitle: "Prekese Spiced Herbal Tea | Our Lady of Hope Enterprise",
      seoDescription: "Traditional prekese (aidan fruit) spiced herbal tea from Our Lady of Hope Enterprise — an aromatic Ghanaian infusion from the Ashanti Region.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HT-004",
      variants: [],
      specifications: { "Form": "Spiced herbal tea", "Net weight": "200g", "Serving suggestion": "Steep in hot water; enjoy warm, sweetened with honey if desired", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-005",
      slug: "turmeric-ginger-spiced",
      name: "Turmeric Ginger Spiced",
      categoryId: "herbal-products",
      shortDescription: "A golden blend of turmeric and ginger — 100% natural ingredients, no artificial preservatives, traditionally inspired.",
      fullDescription: "Our Turmeric Ginger Spiced brings together golden turmeric and warming ginger in one wholesome blend — natural, wholesome and full of character. Take a spoon into hot water or milk, or stir into your cooking for a fragrant lift. Presented in a wooden-lidded jar, it is nature's goodness in every spoon — prepared with 100% natural ingredients and no artificial preservatives.",
      ingredients: null,
      images: ["assets/products/turmeric-ginger-spiced-poster.jpg"],
      sizes: [],
      packaging: "Wooden-lidded jar",
      usage: null,
      storage: "Store in a cool, dry place away from direct sunlight.",
      availability: "available",
      featured: true,
      isNew: true,
      seoTitle: "Turmeric Ginger Spiced | Our Lady of Hope Enterprise",
      seoDescription: "Turmeric ginger spiced blend from Our Lady of Hope Enterprise — 100% natural ingredients, no artificial preservatives, prepared in the Ashanti Region of Ghana.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HP-005",
      variants: [],
      specifications: { "Form": "Spiced powder blend", "Serving suggestion": "Take a spoon in hot water or milk, or add to cooking", "Ingredients ethos": "100% natural ingredients, no artificial preservatives", "Origin": "Ashanti Region, Ghana" }
    },
    {
      id: "oloh-006",
      slug: "tiger-coconut-beverage",
      name: "Tiger Coconut Beverage",
      categoryId: "herbal-beverages",
      shortDescription: "Natural, delicious and nourishing — a creamy tiger nut and coconut beverage blend in a generous 1kg jar.",
      fullDescription: "Our Tiger Coconut Beverage blends earthy tiger nut with rich coconut into a smooth, creamy drink — natural, delicious and nourishing. Mix with water or milk, serve chilled over ice just as it is enjoyed across Ghana, or warm on cooler days. Sealed for freshness in a generous 1kg jar, it is nature's goodness in every scoop.",
      ingredients: null,
      images: ["assets/products/tiger-coconut-poster.jpg", "assets/products/product-02.jpg"],
      sizes: ["1kg"],
      packaging: "Jar with safety seal",
      usage: null,
      storage: "Store in a cool, dry place away from direct sunlight.",
      availability: "available",
      featured: true,
      isNew: true,
      seoTitle: "Tiger Coconut Beverage | Our Lady of Hope Enterprise",
      seoDescription: "Tiger nut and coconut beverage blend from Our Lady of Hope Enterprise — natural, delicious and nourishing, prepared in the Ashanti Region of Ghana.",
      price: null,
      salePrice: null,
      stock: null,
      sku: "OLOH-HB-006",
      variants: [],
      specifications: { "Form": "Beverage blend", "Net weight": "1kg", "Serving suggestion": "Mix with water or milk; serve chilled or warm", "Origin": "Ashanti Region, Ghana" }
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
