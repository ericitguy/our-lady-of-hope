/* ============================================================
   OUR LADY OF HOPE ENTERPRISE — Products catalogue logic
   ============================================================ */
(function () {
  "use strict";
  const OLAH = window.OLAH;
  if (!OLAH) return;

  const grid = document.getElementById("productGrid");
  const chipsWrap = document.getElementById("filterChips");
  const searchInput = document.getElementById("productSearch");
  const meta = document.getElementById("catalogueMeta");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  const products = OLAH.getProducts();
  const categories = OLAH.getCategories();

  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category");
  const initialQuery = params.get("q") || "";

  /* Which category slugs are actually in use */
  const usedCategoryIds = new Set(products.map((p) => p.categoryId));

  let state = {
    category: "all",
    query: initialQuery,
    featuredOnly: false,
    newOnly: false
  };

  /* Resolve initial category slug -> id */
  if (initialCategory) {
    const cat = categories.find((c) => c.slug === initialCategory);
    if (cat) state.category = cat.id;
  }

  /* Render filter chips (dynamic — categories drive the filters) */
  const chips = [{ id: "all", name: "All" }]
    .concat(
      categories
        .filter((c) => usedCategoryIds.has(c.id))
        .map((c) => ({ id: c.id, name: c.name }))
    )
    .concat([
      { id: "featured", name: "Featured" },
      { id: "new", name: "New" }
    ]);

  chipsWrap.innerHTML = chips
    .map(
      (c) =>
        `<button class="chip${c.id === state.category ? " active" : ""}" data-chip="${c.id}" type="button">${c.name}</button>`
    )
    .join("");

  if (initialQuery) searchInput.value = initialQuery;

  chipsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-chip]");
    if (!btn) return;
    state.category = btn.dataset.chip;
    state.featuredOnly = state.category === "featured";
    state.newOnly = state.category === "new";
    chipsWrap.querySelectorAll(".chip").forEach((ch) =>
      ch.classList.toggle("active", ch === btn)
    );
    render();
  });

  let debounce;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      state.query = searchInput.value.trim();
      render();
    }, 180);
  });

  function matches(p) {
    if (state.featuredOnly && !p.featured) return false;
    if (state.newOnly && !p.isNew) return false;
    if (
      state.category !== "all" &&
      !state.featuredOnly &&
      !state.newOnly &&
      p.categoryId !== state.category
    ) {
      return false;
    }
    if (state.query) {
      const q = state.query.toLowerCase();
      const hay = [p.name, p.shortDescription, p.fullDescription, OLAH.getCategoryName(p.categoryId)]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function render() {
    const results = products.filter(matches);
    grid.innerHTML = results.map(window.renderProductCard).join("");
    emptyState.hidden = results.length > 0;

    let label;
    if (state.featuredOnly) label = "Featured products";
    else if (state.newOnly) label = "New products";
    else if (state.category === "all") label = "All products";
    else label = OLAH.getCategoryName(state.category);
    if (state.query) label += ` matching “${state.query}”`;
    meta.textContent = `${results.length} ${results.length === 1 ? "product" : "products"} · ${label}`;
  }

  render();
})();
