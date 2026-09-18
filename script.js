
"use strict";

/*
  APSARA BEAUTY ATELIER
  Dynamic salon configuration

  The design, CSS classes, animations and page navigation
  remain unchanged.

  Edit salon details, images, services and prices inside salon.json.
*/

let SALON = null;

const FALLBACK_SERVICES = [
  {
    number: "01",
    name: "Hair",
    description:
      "Thoughtful cuts, colour and care to bring out the best in your hair.",
    startingPrice: "Price on request",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    subcategories: [
      { name: "Hair Cut", price: "Price on request" },
      { name: "Hair Styling", price: "Price on request" },
      { name: "Blow Dry", price: "Price on request" },
      { name: "Hair Colour", price: "Price on request" },
      { name: "Root Touch-Up", price: "Price on request" },
      { name: "Global Colour", price: "Price on request" },
      { name: "Highlights", price: "Price on request" },
      { name: "Balayage", price: "Price on request" },
      { name: "Hair Spa", price: "Price on request" },
      { name: "Keratin / Smoothing", price: "Price on request" }
    ]
  },
  {
    number: "02",
    name: "Makeup",
    description:
      "Artistry for everyday expression, celebrations and unforgettable occasions.",
    startingPrice: "Price on request",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
    subcategories: [
      { name: "Party Makeup", price: "Price on request" },
      { name: "Engagement Makeup", price: "Price on request" },
      { name: "Reception Makeup", price: "Price on request" },
      { name: "Bridal Makeup", price: "Price on request" },
      { name: "HD Makeup", price: "Price on request" },
      { name: "Airbrush Makeup", price: "Price on request" },
      { name: "Editorial Makeup", price: "Price on request" },
      { name: "Cocktail Makeup", price: "Price on request" },
      { name: "Dewy Makeup", price: "Price on request" },
      { name: "Makeup Consultation", price: "Price on request" }
    ]
  },
  {
    number: "03",
    name: "Skin",
    description:
      "Restorative skin rituals designed around your individual needs.",
    startingPrice: "Price on request",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    subcategories: [
      { name: "Classic Facial", price: "Price on request" },
      { name: "Deep Cleansing Facial", price: "Price on request" },
      { name: "Glow Facial", price: "Price on request" },
      { name: "Hydrating Facial", price: "Price on request" },
      { name: "Brightening Facial", price: "Price on request" },
      { name: "Acne Care Facial", price: "Price on request" },
      { name: "Detan Treatment", price: "Price on request" },
      { name: "Clean-Up", price: "Price on request" },
      { name: "Skin Consultation", price: "Price on request" },
      { name: "Premium Skin Ritual", price: "Price on request" }
    ]
  },
  {
    number: "04",
    name: "Nails",
    description:
      "Considered colour, clean finishes and delicate details for your hands and feet.",
    startingPrice: "Price on request",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    subcategories: [
      { name: "Classic Manicure", price: "Price on request" },
      { name: "Classic Pedicure", price: "Price on request" },
      { name: "Gel Manicure", price: "Price on request" },
      { name: "Gel Pedicure", price: "Price on request" },
      { name: "French Tips", price: "Price on request" },
      { name: "Nail Art", price: "Price on request" },
      { name: "Chrome Nails", price: "Price on request" },
      { name: "Extensions", price: "Price on request" },
      { name: "Nail Removal", price: "Price on request" },
      { name: "Nail Care Ritual", price: "Price on request" }
    ]
  },
  {
    number: "05",
    name: "Bridal",
    description:
      "A personal beauty experience for the moments you'll always remember.",
    startingPrice: "Price on request",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
    subcategories: [
      { name: "Bridal Makeup", price: "Price on request" },
      { name: "Bridal Hair", price: "Price on request" },
      { name: "Bridal Draping", price: "Price on request" },
      { name: "Bridal Trial", price: "Price on request" },
      { name: "Engagement Look", price: "Price on request" },
      { name: "Reception Look", price: "Price on request" },
      { name: "Haldi Look", price: "Price on request" },
      { name: "Mehendi Look", price: "Price on request" },
      { name: "Bridal Skin Prep", price: "Price on request" },
      { name: "Complete Bridal Package", price: "Price on request" }
    ]
  },
  {
    number: "06",
    name: "Wellness",
    description:
      "A gentle pause from the everyday, with rituals for rest and renewal.",
    startingPrice: "Price on request",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbece2?auto=format&fit=crop&w=900&q=85",
    subcategories: [
      { name: "Head Massage", price: "Price on request" },
      { name: "Relaxation Ritual", price: "Price on request" },
      { name: "Aromatherapy", price: "Price on request" },
      { name: "Scalp Ritual", price: "Price on request" },
      { name: "Body Relaxation", price: "Price on request" },
      { name: "Foot Ritual", price: "Price on request" },
      { name: "Hand Ritual", price: "Price on request" },
      { name: "Stress Relief Ritual", price: "Price on request" },
      { name: "Wellness Consultation", price: "Price on request" },
      { name: "Signature Wellness Ritual", price: "Price on request" }
    ]
  }
];

function getServices() {
  return Array.isArray(SALON?.services) && SALON.services.length
    ? SALON.services
    : FALLBACK_SERVICES;
}

function safe(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined && value !== null) {
    element.textContent = value;
  }
}

function setHTML(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined && value !== null) {
    element.innerHTML = value;
  }
}

function setAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element && value) {
    element.setAttribute(attribute, value);
  }
}

/* -------------------------------
   LOAD SALON CONFIGURATION
-------------------------------- */

async function loadSalonConfiguration() {
  try {
    const response = await fetch("salon.json", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("salon.json could not be loaded");
    }

    SALON = await response.json();
  } catch (error) {
    console.warn(
      "salon.json could not be loaded. Using the original website content.",
      error
    );

    SALON = {
      services: FALLBACK_SERVICES
    };
  }

  applySalonConfiguration();
}

/* -------------------------------
   APPLY SALON TEXT AND IMAGES
-------------------------------- */

function applySalonConfiguration() {
  if (!SALON) return;

  const brandName = SALON.name || "Apsara";
  const fullName = SALON.fullName || `${brandName} Beauty Atelier`;
  const tagline = SALON.tagline || "Beauty, beautifully considered.";
  const description =
    SALON.description ||
    "A refined space for hair, skin, makeup and wellness. Thoughtful beauty rituals, crafted around you.";

  document.title =
    SALON.meta?.title || `${fullName} | Hair • Beauty • Wellness`;

  setAttribute(
    'meta[name="description"]',
    "content",
    SALON.meta?.description || description
  );

  setAttribute(
    'meta[name="theme-color"]',
    "content",
    SALON.meta?.themeColor || "#173b30"
  );

  /* Brand */
  setText(".brand-script", brandName);
  setText(".footer-brand .brand-script", brandName);

  /* Header and navigation */
  setText(".drawer-label", `EXPLORE ${brandName.toUpperCase()}`);

  /* Hero */
  if (SALON.hero) {
    setText(".hero-content .eyebrow", SALON.hero.eyebrow);
    setHTML(".hero-content h1", SALON.hero.title);
    setText(".hero-copy", SALON.hero.description);

    if (SALON.hero.image) {
      setAttribute(
        ".hero-image",
        "style",
        `background-image: url("${SALON.hero.image}")`
      );
    }
  }

  /* About section */
  if (SALON.about) {
    setText(".about-copy .eyebrow", SALON.about.eyebrow);
    setHTML(".about-copy h2", SALON.about.title);
    setText(".about-copy > p:not(.eyebrow)", SALON.about.description);
    setText(".signature", SALON.about.signature || brandName);

    if (SALON.about.image) {
      setAttribute(".about-photo img", "src", SALON.about.image);
    }

    if (SALON.about.imageAlt) {
      setAttribute(".about-photo img", "alt", SALON.about.imageAlt);
    }

    setText(
      ".image-index",
      SALON.about.imageLabel || `THE ${brandName.toUpperCase()} SPACE / 01`
    );
  }

  /* Stats */
  if (Array.isArray(SALON.stats)) {
    const statElements = document.querySelectorAll(".stat");

    SALON.stats.slice(0, 3).forEach((stat, index) => {
      const element = statElements[index];
      if (!element) return;

      const number = element.querySelector("strong");
      const label = element.querySelector("span");

      if (number) {
        number.dataset.count = stat.number ?? 0;
        number.dataset.suffix = stat.suffix || "";
        number.textContent = "0";
      }

      if (label) {
        label.textContent = stat.label || "";
      }
    });
  }

  /* Footer */
  if (SALON.footer?.statement) {
    setHTML(".footer-top > p", SALON.footer.statement);
  }

  /* Contact and enquiry details */
  applyContactConfiguration();
}

/* -------------------------------
   CONTACT CONFIGURATION
-------------------------------- */

function applyContactConfiguration() {
  const contact = SALON.contact || {};

  if (contact.address) {
    setHTML(
      ".contact-block:nth-child(1) p",
      safe(contact.address).replace(/\n/g, "<br>")
    );
  }

  if (contact.phone) {
    const phoneDigits = String(contact.phone).replace(/\D/g, "");

    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.href = `tel:+${phoneDigits}`;
      link.textContent = `${contact.phone} ⇗`;
    });

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      link.href = `https://wa.me/${phoneDigits}`;
    });
  }

  if (contact.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      link.href = `mailto:${contact.email}`;
      link.textContent = `${contact.email} ⇗`;
    });
  }

  if (contact.hours) {
    setHTML(
      ".contact-block:nth-child(4) p",
      safe(contact.hours).replace(/\n/g, "<br>")
    );
  }

  if (contact.instagram) {
    const instagramBlock = document.querySelector(
      ".contact-block:nth-child(6) p"
    );

    if (instagramBlock) {
      instagramBlock.innerHTML = contact.instagramUrl
        ? `<a href="${safe(contact.instagramUrl)}" target="_blank" rel="noopener">${safe(contact.instagram)} ⇗</a>`
        : safe(contact.instagram);
    }

    const footerInstagram = document.querySelector(
      ".footer-contact span"
    );

    if (footerInstagram) {
      footerInstagram.textContent = contact.instagram;
    }
  }

  if (SALON.footer?.phone) {
    setText(".footer-contact a[href^='tel:']", SALON.footer.phone);
  }

  if (SALON.footer?.email) {
    setText(".footer-contact a[href^='mailto:']", SALON.footer.email);
  }
}

/* -------------------------------
   HOME SERVICE CARDS
-------------------------------- */

function renderHomeCards() {
  const container = document.getElementById("home-service-cards");
  if (!container) return;

  container.innerHTML = getServices()
    .map(
      item => `
      <a class="service-card" href="#services"
         aria-label="Explore ${safe(item.name)} services">
        <img src="${safe(item.image)}"
             alt="${safe(item.name)} beauty service"
             loading="lazy">
        <div class="service-card-content">
          <small>${safe(item.number)} / SIGNATURE</small>
          <h3>${safe(item.name)}</h3>
          <p>${safe(item.description)}</p>
        </div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>
    `
    )
    .join("");
}

/* -------------------------------
   SERVICES MENU
-------------------------------- */

function renderServiceMenu() {
  const container = document.getElementById("service-menu");
  if (!container) return;

  container.innerHTML = getServices()
    .map(
      item => `
      <article class="service-entry">
        <div class="service-entry-head">
          <span class="service-number">${safe(item.number)}</span>
          <div>
            <h3>${safe(item.name)}</h3>
            <p>${safe(item.description)}</p>
            <span class="starting-price">
              STARTING AT · ${safe(item.startingPrice)}
            </span>
          </div>
        </div>

        <details class="service-accordion">
          <summary>
            Explore ${safe(item.name).toLowerCase()} services
          </summary>
          <ul class="service-list">
            ${(item.subcategories || [])
              .map(
                service => `
                <li>
                  <span>${safe(service.name)}</span>
                  <span>${safe(service.price)}</span>
                </li>
              `
              )
              .join("")}
          </ul>
        </details>
      </article>
    `
    )
    .join("");
}

/* -------------------------------
   ENQUIRY SERVICE DROPDOWN
-------------------------------- */

function populateServiceSelect() {
  const select = document.getElementById("service-select");
  if (!select) return;

  select.innerHTML = '<option value="">Choose a service</option>';

  getServices().forEach(item => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    select.appendChild(option);
  });
}

/* -------------------------------
   MOBILE NAVIGATION
-------------------------------- */

function setupNavigation() {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".menu-toggle");
  const close = document.querySelector(".menu-close");
  const overlay = document.querySelector(".nav-overlay");

  if (!nav || !toggle || !close || !overlay) return;

  const links = nav.querySelectorAll("a");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));

    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );

    nav.classList.toggle("open", open);
    nav.setAttribute("aria-hidden", String(!open));

    overlay.hidden = !open;
    document.body.classList.toggle("menu-open", open);

    if (open) {
      close.focus();
    } else {
      toggle.focus();
    }
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  close.addEventListener("click", () => setOpen(false));
  overlay.addEventListener("click", () => setOpen(false));

  links.forEach(link => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      setOpen(false);
    }
  });
}

/* -------------------------------
   HASH-BASED PAGE NAVIGATION
-------------------------------- */

function routeToHash() {
  const validPages = new Set([
    "home",
    "gallery",
    "services",
    "contact",
    "enquiry"
  ]);

  const requested = window.location.hash.replace(/^#/, "") || "home";
  const page = validPages.has(requested) ? requested : "home";

  document.querySelectorAll(".page").forEach(section => {
    const active = section.dataset.page === page;

    section.hidden = !active;
    section.classList.toggle("active", active);
  });

  document.querySelectorAll(".site-nav a").forEach(link => {
    if (link.hash === `#${page}`) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth"
  });
}

/* -------------------------------
   ANIMATED STATISTICS
-------------------------------- */

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");

  if (!("IntersectionObserver" in window)) {
    counters.forEach(element => {
      element.textContent =
        element.dataset.count + (element.dataset.suffix || "");
    });

    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.count);
        const suffix = element.dataset.suffix || "";
        const duration = 1400;
        const start = performance.now();

        function animate(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          element.textContent =
            Math.round(target * eased) + suffix;

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
        observer.unobserve(element);
      });
    },
    {
      threshold: 0.35
    }
  );

  counters.forEach(element => observer.observe(element));
}

/* -------------------------------
   PREVENT PAST APPOINTMENT DATES
-------------------------------- */

function setupDateMinimum() {
  const dateInput = document.getElementById("preferred-date");
  if (!dateInput) return;

  const now = new Date();

  const localToday =
    `${now.getFullYear()}-` +
    `${String(now.getMonth() + 1).padStart(2, "0")}-` +
    `${String(now.getDate()).padStart(2, "0")}`;

  dateInput.min = localToday;
}

/* -------------------------------
   ENQUIRY FORM
-------------------------------- */

function setupEnquiryForm() {
  const form = document.getElementById("enquiry-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    status.hidden = true;

    if (!form.checkValidity()) {
      form.reportValidity();

      status.textContent =
        "Please complete the required fields with valid details.";

      status.hidden = false;
      return;
    }

    const dateInput = document.getElementById("preferred-date");
    const chosenDate = form.elements.date.value;

    if (chosenDate && chosenDate < dateInput.min) {
      status.textContent = "Please choose today or a future date.";
      status.hidden = false;
      return;
    }

    status.textContent =
      "Thank you — your enquiry has been captured in this browser " +
      "demo only. It has not been sent to the salon. Connect a secure " +
      "form backend to receive real enquiries.";

    status.hidden = false;

    form.reset();
    setupDateMinimum();
  });
}

/* -------------------------------
   AUTOMATIC COPYRIGHT YEAR
-------------------------------- */

function setupFooterYear() {
  const year = document.getElementById("copyright-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

/* -------------------------------
   INITIALIZE WEBSITE
-------------------------------- */

document.addEventListener("DOMContentLoaded", async () => {
  await loadSalonConfiguration();

  renderHomeCards();
  renderServiceMenu();
  populateServiceSelect();

  setupNavigation();
  setupCounters();
  setupDateMinimum();
  setupEnquiryForm();
  setupFooterYear();

  routeToHash();

  window.addEventListener("hashchange", routeToHash);
});
