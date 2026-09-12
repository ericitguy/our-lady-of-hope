/* ============================================================
   OUR LADY OF HOPE ENTERPRISE — Product detail logic
   ============================================================ */
(function () {
  "use strict";
  const OLAH = window.OLAH;
  if (!OLAH) return;

  const content = document.getElementById("detailContent");
  const crumb = document.getElementById("crumbName");
  const relatedGrid = document.getElementById("relatedGrid");
  if (!content) return;

  const slug = new URLSearchParams(window.location.search).get("p");
  const product = slug ? OLAH.getProductBySlug(slug) : null;

  if (!product) {
    content.innerHTML = `
      <div class="empty-state">
        <h2 class="h2">Product Not Found</h2>
        <p>The product you are looking for may have been moved or renamed.</p>
        <p style="margin-top:1.4rem"><a class="btn btn-solid" href="products.html">Browse All Products</a></p>
      </div>`;
    if (relatedGrid) relatedGrid.closest("section").style.display = "none";
    return;
  }

  const cat = OLAH.getCategoryName(product.categoryId);
  document.title = product.seoTitle || `${product.name} | ${OLAH.company.name}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && product.seoDescription) metaDesc.setAttribute("content", product.seoDescription);
  crumb.textContent = product.name;

  const images = (product.images && product.images.length ? product.images : ["assets/products/product-01.jpg"]);
  const sizes = product.sizes && product.sizes.length ? product.sizes.join(" · ") : "—";
  const specs = product.specifications && Object.keys(product.specifications).length
    ? Object.entries(product.specifications)
        .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
        .join("")
    : "";
  const availabilityClass = product.availability === "out-of-stock" ? "out" : "";

  content.innerHTML = `
    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="main-image"><img id="mainImage" src="${images[0]}" alt="${product.name}"></div>
        ${
          images.length > 1
            ? `<div class="gallery-thumbs" role="tablist" aria-label="Product images">
                ${images
                  .map(
                    (src, i) =>
                      `<button type="button" data-src="${src}" class="${i === 0 ? "active" : ""}" aria-label="View image ${i + 1}">
                        <img src="${src}" alt="">
                      </button>`
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
      <div class="detail-info">
        <span class="product-cat">${cat}${product.isNew ? " · New" : ""}</span>
        <h1 class="h1">${product.name}</h1>
        <p class="detail-desc">${product.fullDescription}</p>
        <div class="spec-list">
          <div><dt>Available sizes</dt><dd>${sizes}</dd></div>
          ${product.packaging ? `<div><dt>Packaging</dt><dd>${product.packaging}</dd></div>` : ""}
          ${product.storage ? `<div><dt>Storage</dt><dd>${product.storage}</dd></div>` : ""}
          ${specs}
        </div>
        ${
          product.ingredients
            ? `<div class="spec-list"><div><dt>Ingredients</dt><dd>${product.ingredients}</dd></div></div>`
            : ""
        }
        ${
          product.usage
            ? `<div class="spec-list"><div><dt>Usage</dt><dd>${product.usage}</dd></div></div>`
            : ""
        }
        <span class="availability ${availabilityClass}">${OLAH.availabilityLabel(product.availability)}</span>
        <div class="detail-ctas">
          <button class="btn btn-solid" id="enquireBtn" type="button">Enquire About This Product</button>
          <a class="btn btn-whatsapp" id="waBtn" href="#" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.5-.6c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.1-.4 3.6a11.6 11.6 0 0 0 4.5 4.3c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z"/></svg>
            WhatsApp
          </a>
          <a class="btn btn-outline" href="mailto:${OLAH.company.email}?subject=${encodeURIComponent("Product enquiry: " + product.name)}">Email Enquiry</a>
        </div>
        <p class="small-note" style="margin-top:1.4rem">For pricing, wholesale and availability, please enquire directly — we respond promptly.</p>
      </div>
    </div>`;

  /* Gallery */
  const mainImage = document.getElementById("mainImage");
  content.querySelectorAll(".gallery-thumbs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      mainImage.src = btn.dataset.src;
      content.querySelectorAll(".gallery-thumbs button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  /* WhatsApp deep link with product context */
  const waBtn = document.getElementById("waBtn");
  waBtn.href = `https://wa.me/${OLAH.company.whatsapp}?text=${encodeURIComponent(
    `Hello ${OLAH.company.name}, I would like to enquire about: ${product.name} (${window.location.href})`
  )}`;

  /* Related products */
  if (relatedGrid) {
    const related = OLAH.getProducts()
      .filter((p) => p.id !== product.id && p.categoryId === product.categoryId)
      .concat(OLAH.getProducts().filter((p) => p.id !== product.id && p.categoryId !== product.categoryId))
      .slice(0, 4);
    relatedGrid.innerHTML = related.map(window.renderProductCard).join("");
  }

  /* ---------- Enquiry modal ---------- */
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="enquiryTitle">
      <button class="modal-close" type="button" aria-label="Close enquiry form">✕</button>
      <h2 id="enquiryTitle" class="h3">Enquire About ${product.name}</h2>
      <p class="small-note">Share your details and we will respond promptly with availability and pricing.</p>
      <form id="enquiryForm" novalidate>
        <div class="field-row">
          <div class="field"><label for="eqName">Name *</label><input type="text" id="eqName" required></div>
          <div class="field"><label for="eqPhone">Phone *</label><input type="tel" id="eqPhone" required></div>
        </div>
        <div class="field"><label for="eqEmail">Email</label><input type="email" id="eqEmail"></div>
        <div class="field"><label for="eqProduct">Product</label><input type="text" id="eqProduct" value="${product.name}" readonly></div>
        <div class="field"><label for="eqQty">Quantity</label><input type="text" id="eqQty" placeholder="e.g. 5 bottles"></div>
        <div class="field"><label for="eqMsg">Message</label><textarea id="eqMsg" rows="3" placeholder="Any questions or delivery details…"></textarea></div>
        <button type="submit" class="btn btn-solid">Send Enquiry</button>
        <p class="form-note" id="enquiryNote" role="status"></p>
      </form>
    </div>`;
  document.body.appendChild(backdrop);

  let lastFocused = null;
  const openModal = () => {
    lastFocused = document.activeElement;
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => document.getElementById("eqName").focus(), 250);
  };
  const closeModal = () => {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  };

  document.getElementById("enquireBtn").addEventListener("click", openModal);
  backdrop.querySelector(".modal-close").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal();
  });

  /* Focus trap — keeps Tab cycling inside the dialog (Radix/shadcn dialog behaviour) */
  backdrop.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusables = backdrop.querySelectorAll(
      'button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  document.getElementById("enquiryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const note = document.getElementById("enquiryNote");
    const name = document.getElementById("eqName");
    const phone = document.getElementById("eqPhone");
    if (!name.value.trim()) {
      note.textContent = "Please enter your name.";
      note.classList.add("error");
      note.setAttribute("role", "alert");
      name.setAttribute("aria-invalid", "true");
      name.focus();
      return;
    }
    if (!phone.value.trim()) {
      note.textContent = "Please enter your phone number so we can reach you.";
      note.classList.add("error");
      note.setAttribute("role", "alert");
      phone.setAttribute("aria-invalid", "true");
      phone.focus();
      return;
    }
    note.classList.remove("error");
    note.removeAttribute("role");
    name.removeAttribute("aria-invalid");
    phone.removeAttribute("aria-invalid");
    note.textContent = "Thank you — your enquiry has been received. We will contact you shortly.";
    setTimeout(closeModal, 1600);
    /* Backend hook: POST enquiry { productId, name, phone, email, quantity, message } to your service here. */
  });
})();
