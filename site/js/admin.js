/* ============================================================
   OUR LADY OF HOPE ENTERPRISE — Admin dashboard logic
   Local product management (localStorage) + JSON export/import.
   Export produces a ready-to-paste js/data.js replacement.
   ============================================================ */
(function () {
  "use strict";
  const OLAH = window.OLAH;
  if (!OLAH) return;

  const list = document.getElementById("adminList");
  const search = document.getElementById("adminSearch");
  const form = document.getElementById("productForm");
  const formTitle = document.getElementById("formTitle");
  const deleteBtn = document.getElementById("deleteBtn");
  const note = document.createElement("p");
  note.className = "form-note";
  form.appendChild(note);

  let products = OLAH.getProducts().map((p) => ({ ...p }));
  let selectedId = null;

  /* Category select */
  const catSelect = document.getElementById("pfCategory");
  catSelect.innerHTML = OLAH.getCategories()
    .map((c) => `<option value="${c.id}">${c.name}</option>`)
    .join("");

  function persist() {
    OLAH.saveProducts(products);
  }

  function slugify(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function renderList(filter) {
    const q = (filter || "").toLowerCase();
    const filtered = products.filter(
      (p) => !q || (p.name + " " + p.shortDescription).toLowerCase().includes(q)
    );
    list.innerHTML = filtered
      .map(
        (p) => `
        <li data-id="${p.id}" class="${p.id === selectedId ? "selected" : ""}">
          <img src="${(p.images && p.images[0]) || "assets/products/product-01.jpg"}" alt="">
          <div class="admin-item-text">
            <strong>${p.name}</strong>
            <span>${OLAH.getCategoryName(p.categoryId)} · ${OLAH.availabilityLabel(p.availability)}${
              p.featured ? " · Featured" : ""
            }${p.isNew ? " · New" : ""}</span>
          </div>
        </li>`
      )
      .join("");
  }

  function parseSpecs(text) {
    const out = {};
    (text || "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .forEach((line) => {
        const idx = line.indexOf(":");
        if (idx > 0) out[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
      });
    return out;
  }

  function specsToText(specs) {
    return specs ? Object.entries(specs).map(([k, v]) => `${k}: ${v}`).join("\n") : "";
  }

  function selectProduct(id) {
    selectedId = id;
    const p = products.find((x) => x.id === id);
    if (!p) return;
    formTitle.textContent = "Edit Product";
    deleteBtn.hidden = false;
    document.getElementById("pfId").value = p.id;
    document.getElementById("pfName").value = p.name || "";
    document.getElementById("pfSlug").value = p.slug || "";
    document.getElementById("pfCategory").value = p.categoryId || OLAH.categories[0].id;
    document.getElementById("pfSizes").value = (p.sizes || []).join(", ");
    document.getElementById("pfImages").value = (p.images || []).join(", ");
    document.getElementById("pfShort").value = p.shortDescription || "";
    document.getElementById("pfFull").value = p.fullDescription || "";
    document.getElementById("pfIngredients").value = p.ingredients || "";
    document.getElementById("pfSpecs").value = specsToText(p.specifications);
    document.getElementById("pfPackaging").value = p.packaging || "";
    document.getElementById("pfUsage").value = p.usage || "";
    document.getElementById("pfStorage").value = p.storage || "";
    document.getElementById("pfAvailability").value = p.availability || "available";
    document.getElementById("pfSeoTitle").value = p.seoTitle || "";
    document.getElementById("pfSeoDesc").value = p.seoDescription || "";
    document.getElementById("pfFeatured").checked = !!p.featured;
    document.getElementById("pfNew").checked = !!p.isNew;
    renderList(search.value);
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearForm() {
    selectedId = null;
    form.reset();
    formTitle.textContent = "New Product";
    deleteBtn.hidden = true;
    document.getElementById("pfId").value = "";
    renderList(search.value);
  }

  list.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-id]");
    if (li) selectProduct(li.dataset.id);
  });

  search.addEventListener("input", () => renderList(search.value));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("pfName").value.trim();
    const short = document.getElementById("pfShort").value.trim();
    const full = document.getElementById("pfFull").value.trim();
    if (!name || !short || !full) {
      note.textContent = "Name, short description and full description are required.";
      note.classList.add("error");
      return;
    }
    note.classList.remove("error");

    const values = {
      name,
      slug: slugify(document.getElementById("pfSlug").value || name),
      categoryId: document.getElementById("pfCategory").value,
      shortDescription: short,
      fullDescription: full,
      ingredients: document.getElementById("pfIngredients").value.trim() || null,
      images: document.getElementById("pfImages").value.split(",").map((s) => s.trim()).filter(Boolean),
      sizes: document.getElementById("pfSizes").value.split(",").map((s) => s.trim()).filter(Boolean),
      packaging: document.getElementById("pfPackaging").value.trim(),
      usage: document.getElementById("pfUsage").value.trim() || null,
      storage: document.getElementById("pfStorage").value.trim(),
      availability: document.getElementById("pfAvailability").value,
      featured: document.getElementById("pfFeatured").checked,
      isNew: document.getElementById("pfNew").checked,
      seoTitle: document.getElementById("pfSeoTitle").value.trim(),
      seoDescription: document.getElementById("pfSeoDesc").value.trim(),
      specifications: parseSpecs(document.getElementById("pfSpecs").value),
      price: null,
      salePrice: null,
      stock: null,
      sku: "",
      variants: []
    };

    const existingId = document.getElementById("pfId").value;
    if (existingId) {
      const idx = products.findIndex((p) => p.id === existingId);
      if (idx > -1) products[idx] = { ...products[idx], ...values };
    } else {
      const idNum = products.length + 1;
      products.push({
        id: `oloh-${String(idNum).padStart(3, "0")}`,
        sku: values.sku || `OLOH-${values.categoryId.slice(0, 2).toUpperCase()}-${String(idNum).padStart(3, "0")}`,
        ...values
      });
    }
    persist();
    note.textContent = "Saved. Changes are live on this browser — export JSON to publish.";
    renderList(search.value);
    if (!existingId) clearForm();
  });

  deleteBtn.addEventListener("click", () => {
    if (!selectedId) return;
    const p = products.find((x) => x.id === selectedId);
    if (confirm(`Delete “${p.name}”? This cannot be undone (export a backup first).`)) {
      products = products.filter((x) => x.id !== selectedId);
      persist();
      clearForm();
    }
  });

  document.getElementById("resetBtn").addEventListener("click", clearForm);
  document.getElementById("newProductBtn").addEventListener("click", clearForm);

  /* Export */
  document.getElementById("exportBtn").addEventListener("click", () => {
    const payload = {
      company: OLAH.company,
      categories: OLAH.getCategories(),
      products,
      storyTimeline: OLAH.storyTimeline
    };
    const js =
      "/* Generated by OLAH Admin — replace js/data.js products with this export */\n" +
      "window.OLAH = " +
      JSON.stringify(payload, null, 2) +
      ";\n";
    const blob = new Blob([js], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "olah-products.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  /* Import */
  document.getElementById("importInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(
          reader.result.replace(/^[\s\S]*?window\.OLAH\s*=\s*/, "").replace(/;?\s*$/, "")
        );
        if (Array.isArray(parsed.products)) {
          products = parsed.products;
          persist();
          renderList(search.value);
          note.textContent = "Imported " + products.length + " products.";
        } else {
          note.textContent = "Could not find a products array in that file.";
          note.classList.add("error");
        }
      } catch (err) {
        note.textContent = "Invalid JSON file.";
        note.classList.add("error");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  });

  renderList();
})();
