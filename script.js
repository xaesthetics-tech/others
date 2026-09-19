
"use strict";

/*
  APSARA BEAUTY ATELIER
  Static website JavaScript

  Update service names, descriptions, images and prices
  inside SERVICE_DATA below.

  This form is a front-end demo only. Connect a secure
  form backend before using it to receive real enquiries.
*/

const SERVICE_DATA = [
  {
    number: "01",
    name: "Hair",
    description: "Thoughtful cuts, colour and care to bring out the best in your hair.",
    startingPrice: "Price on request",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
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
    description: "Artistry for everyday expression, celebrations and unforgettable occasions.",
    startingPrice: "Price on request",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85",
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
    description: "Restorative skin rituals designed around your individual needs.",
    startingPrice: "Price on request",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
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
    description: "Considered colour, clean finishes and delicate details for your hands and feet.",
    startingPrice: "Price on request",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
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
    description: "A personal beauty experience for the moments you'll always remember.",
    startingPrice: "Price on request",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
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
    description: "A gentle pause from the everyday, with rituals for rest and renewal.",
    startingPrice: "Price on request",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbece2?auto=format&fit=crop&w=900&q=85",
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

/* -------------------------------
   HOME SERVICE CARDS
-------------------------------- */

function renderHomeCards() {
  const container = document.getElementById("home-service-cards");
  if (!container) return;

  container.innerHTML = SERVICE_DATA.map(item => `
    <a class="service-card" href="#services"
       aria-label="Explore ${item.name} services">
      <img src="${item.image}"
           alt="${item.name} beauty service"
           loading="lazy">
      <div class="service-card-content">
        <small>${item.number} / SIGNATURE</small>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </a>
  `).join("");
}

/* -------------------------------
   SERVICES MENU
-------------------------------- */

function renderServiceMenu() {
  const container = document.getElementById("service-menu");
  if (!container) return;

  container.innerHTML = SERVICE_DATA.map(item => `
    <article class="service-entry">
      <div class="service-entry-head">
        <span class="service-number">${item.number}</span>
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span class="starting-price">
            STARTING AT · ${item.startingPrice}
          </span>
        </div>
      </div>

      <details class="service-accordion">
        <summary>Explore ${item.name.toLowerCase()} services</summary>
        <ul class="service-list">
          ${item.subcategories.map(service => `
            <li>
              <span>${service.name}</span>
              <span>${service.price}</span>
            </li>
          `).join("")}
        </ul>
      </details>
    </article>
  `).join("");
}

/* -------------------------------
   ENQUIRY SERVICE DROPDOWN
-------------------------------- */

function populateServiceSelect() {
  const select = document.getElementById("service-select");
  if (!select) return;

  SERVICE_DATA.forEach(item => {
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
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
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

  const observer = new IntersectionObserver(entries => {
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

      // Run only once per statistic.
      observer.unobserve(element);
    });
  }, {
    threshold: 0.35
  });

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
   STATIC ENQUIRY FORM
-------------------------------- */

/*
  Backend integration point:
  Replace the demo submission logic below with a request
  to your chosen secure form backend when one is connected.

  Never put private API keys or secret credentials in this
  public JavaScript file.
*/

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

document.addEventListener("DOMContentLoaded", () => {
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
