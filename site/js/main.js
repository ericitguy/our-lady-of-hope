/* ============================================================
   OUR LADY OF HOPE ENTERPRISE — Shared site behaviour
   ============================================================ */
(function () {
  "use strict";

  /* Year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Sticky header shadow */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile navigation */
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      })
    );
  }

  /* Scroll reveal with stagger */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.setProperty("--d", `${(i % 4) * 0.08}s`);
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Product cards (shared renderer) ---------- */
  const OLAH = window.OLAH;
  if (!OLAH) return;

  window.renderProductCard = function (product) {
    const cat = OLAH.getCategoryName(product.categoryId);
    const tags = [];
    if (product.isNew) tags.push('<span class="tag tag-new">New</span>');
    if (product.featured) tags.push('<span class="tag tag-featured">Featured</span>');
    const img = (product.images && product.images[0]) || "assets/products/product-01.jpg";
    const size = product.sizes && product.sizes.length ? product.sizes.join(" · ") : "";
    const stock = product.availability === "out-of-stock"
      ? '<span class="tag tag-stock">Out of stock</span>'
      : "";
    return `
      <article class="product-card">
        <a class="product-media" href="product.html?p=${encodeURIComponent(product.slug)}" aria-label="${product.name}">
          <img src="${img}" alt="${product.name}" loading="lazy">
          <div class="product-tags">${tags.join("")}${stock}</div>
        </a>
        <div class="product-body">
          <span class="product-cat">${cat}</span>
          <h3 class="product-name"><a href="product.html?p=${encodeURIComponent(product.slug)}">${product.name}</a></h3>
          <p class="product-desc">${product.shortDescription}</p>
          ${size ? `<div class="product-meta"><span class="size">${size}</span></div>` : ""}
          <a class="btn btn-outline btn-sm" href="product.html?p=${encodeURIComponent(product.slug)}">View Product</a>
        </div>
      </article>`;
  };

  window.renderCategoryCards = function (mount) {
    if (!mount) return;
    const products = OLAH.getProducts();
    mount.innerHTML = OLAH.getCategories()
      .map((c) => {
        const count = products.filter((p) => p.categoryId === c.id).length;
        return `
          <a class="category-card" href="products.html?category=${encodeURIComponent(c.slug)}">
            <span class="category-count">${count} ${count === 1 ? "product" : "products"}</span>
            <div><h3>${c.name}</h3><p>${c.description}</p></div>
          </a>`;
      })
      .join("");
  };

  /* Featured grid on homepage */
  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid) {
    const featured = OLAH.getFeatured();
    featuredGrid.innerHTML = (featured.length ? featured : OLAH.getProducts().slice(0, 4))
      .map(window.renderProductCard)
      .join("");
  }

  /* Category grids on homepage + about */
  ["categoryGrid"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) window.renderCategoryCards(el);
  });

  /* Timeline on Our Story */
  const timeline = document.getElementById("storyTimeline");
  if (timeline && Array.isArray(OLAH.storyTimeline)) {
    timeline.innerHTML = OLAH.storyTimeline
      .map(
        (item) => `
        <li>
          <span class="timeline-era">${item.era}</span>
          <h3>${item.title}</h3>
          <p class="${item.placeholder ? "timeline-placeholder" : ""}">${item.text}</p>
        </li>`
      )
      .join("");
  }

  /* ---------- Accessible form validation helpers ---------- */
  function showError(field, note, msg) {
    note.textContent = msg;
    note.classList.add("error");
    note.setAttribute("role", "alert");            /* announced by screen readers */
    if (field) {
      field.setAttribute("aria-invalid", "true");
      field.focus();                               /* focus first invalid field */
    }
  }
  function clearError(note, fields) {
    note.classList.remove("error");
    note.removeAttribute("role");
    if (fields) fields.forEach((f) => f && f.removeAttribute("aria-invalid"));
  }
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  /* ---------- Newsletter (local stub) ---------- */
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail");
      const note = document.getElementById("newsletterNote");
      if (!emailOk(email.value.trim())) {
        showError(email, note, "Please enter a valid email address.");
        return;
      }
      clearError(note, [email]);
      note.textContent = "Thank you — you are on the list.";
      newsletterForm.reset();
      /* Backend hook: POST { email } to your mailing service here. */
    });
  }

  /* ---------- Contact form (local stub) ---------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.getElementById("contactNote");
      const name = document.getElementById("cfName");
      const email = document.getElementById("cfEmail");
      const message = document.getElementById("cfMessage");
      if (!name.value.trim()) {
        showError(name, note, "Please enter your name.");
        return;
      }
      if (!email.value.trim()) {
        showError(email, note, "Please enter your email address.");
        return;
      }
      if (!emailOk(email.value.trim())) {
        showError(email, note, "Please enter a valid email address, e.g. name@example.com.");
        return;
      }
      if (!message.value.trim()) {
        showError(message, note, "Please write a short message so we can help you.");
        return;
      }
      clearError(note, [name, email, message]);
      note.textContent = "Thank you — your message has been received. We will respond promptly.";
      contactForm.reset();
      /* Backend hook: send { name, email, phone, subject, message } to your form service here. */
    });
  }

  /* WhatsApp link on contact page */ /* eslint-disable-next-line */
  const waContact = document.getElementById("waContact");
  if (waContact && OLAH.company.whatsapp) {
    waContact.href = `https://wa.me/${OLAH.company.whatsapp}?text=${encodeURIComponent(
      "Hello " + OLAH.company.name + ", I would like to make an enquiry."
    )}`;
  }
})();
