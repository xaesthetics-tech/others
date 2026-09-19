"use strict";

/*
  APSARA BEAUTY ATELIER
  Supabase-powered website data layer.

  The existing design and CSS are preserved.
  Salon-specific content is loaded from Supabase.
*/

const SUPABASE_URL =
  "https://xswwxebfmnhfsczhnuxe.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_PNtKfSQtEnEMtYf9kQ8CdQ_YRFhT2kN";

const SALON_CODE = "salon-01";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

let SERVICE_DATA = [];


/* -------------------------------
   SUPABASE DATA
-------------------------------- */

async function loadSalonData() {
  const [
    salonResult,
    settingsResult,
    servicesResult,
    galleryResult
  ] = await Promise.all([
    db
      .from("salons")
      .select("*")
      .eq("salon_code", SALON_CODE)
      .single(),

    db
      .from("site_settings")
      .select("*")
      .eq("salon_code", SALON_CODE),

    db
      .from("services")
      .select("*")
      .eq("salon_code", SALON_CODE)
      .order("display_order", { ascending: true }),

    db
      .from("gallery_images")
      .select("*")
      .eq("salon_code", SALON_CODE)
      .order("display_order", { ascending: true })
  ]);

  if (salonResult.error) {
    console.error("Salon loading error:", salonResult.error);
    throw salonResult.error;
  }

  if (settingsResult.error) {
    console.error("Settings loading error:", settingsResult.error);
    throw settingsResult.error;
  }

  if (servicesResult.error) {
    console.error("Services loading error:", servicesResult.error);
    throw servicesResult.error;
  }

  if (galleryResult.error) {
    console.error("Gallery loading error:", galleryResult.error);
    throw galleryResult.error;
  }

  applySalonData(
    salonResult.data,
    settingsResult.data || []
  );

  buildServiceData(servicesResult.data || []);
  renderGallery(galleryResult.data || []);

  renderHomeCards();
  renderServiceMenu();
  populateServiceSelect();
}


/* -------------------------------
   SALON INFORMATION
-------------------------------- */

function applySalonData(salon, settingsRows) {
  if (!salon) return;

  const settings = {};

  settingsRows.forEach(row => {
    settings[row.setting_key] = row.setting_value;
  });

  /* Brand */
  document.querySelectorAll(".brand-script, .footer-brand .brand-script")
    .forEach(element => {
      element.textContent = salon.name || "Apsara";
    });

  /* Brand subtitle */
  const brandSubs = document.querySelectorAll(".brand-sub");

  brandSubs.forEach(element => {
    element.innerHTML =
      salon.tagline
        ? salon.tagline.replace(/\s*•\s*/g, " <i>•</i> ")
        : "HAIR <i>•</i> BEAUTY <i>•</i> WELLNESS";
  });

  /* Header country / establishment */
  const headerNote = document.querySelector(".header-note");

  if (headerNote) {
    headerNote.innerHTML =
      `${salon.location ? salon.location.split(",").pop().trim().toUpperCase() : "INDIA"}
       <span>/</span> EST. 2026`;
  }

  /* Hero eyebrow */
  const heroEyebrow = document.querySelector(".hero .eyebrow");

  if (heroEyebrow) {
    heroEyebrow.textContent =
      settings.hero_eyebrow || "A MODERN BEAUTY ATELIER";
  }

  /* Hero title */
  const heroTitle = document.querySelector(".hero h1");

  if (heroTitle) {
    const title = settings.hero_title || "Beauty, beautifully considered.";

    const words = title.trim().split(/\s+/);

    if (words.length >= 3) {
      const first = words[0];
      const second = words[1];
      const rest = words.slice(2).join(" ");

      heroTitle.innerHTML =
        `${escapeHtml(first)}<br>` +
        `${escapeHtml(second)}<br>` +
        `<em>${escapeHtml(rest)}</em>`;
    } else {
      heroTitle.textContent = title;
    }
  }

  /* Hero copy */
  const heroCopy = document.querySelector(".hero-copy");

  if (heroCopy) {
    heroCopy.textContent =
      settings.hero_copy ||
      salon.description ||
      "";
  }

  /* About */
  const aboutParagraph = document.querySelector(".about-copy > p:not(.eyebrow)");

  if (aboutParagraph) {
    aboutParagraph.textContent =
      salon.about_text ||
      salon.description ||
      "";
  }

  /* Statistics */
  setStatValue(
    '[data-count="12"]',
    settings.stat_experience || "12+"
  );

  setStatValue(
    '[data-count="12"][data-suffix="k"]',
    settings.stat_clients || "12k"
  );

  setStatValue(
    '[data-count="1"][data-suffix="m"]',
    settings.stat_beauty_moments || "1m"
  );

  /* Contact information */
  const contactBlocks =
    document.querySelectorAll(".contact-block");

  contactBlocks.forEach(block => {
    const label =
      block.querySelector(".eyebrow")?.textContent
        ?.trim()
        .toUpperCase();

    if (label === "ADDRESS") {
      const p = block.querySelector("p");

      if (p) {
        p.textContent = salon.location || "";
      }
    }

    if (label === "PHONE") {
      const link = block.querySelector("a");

      if (link) {
        link.href =
          salon.phone
            ? `tel:${salon.phone.replace(/\s+/g, "")}`
            : "#";

        link.textContent =
          salon.phone
            ? `${salon.phone} ⇗`
            : "Phone to be added";
      }
    }

    if (label === "EMAIL") {
      const link = block.querySelector("a");

      if (link) {
        link.href =
          salon.email
            ? `mailto:${salon.email}`
            : "#";

        link.textContent =
          salon.email
            ? `${salon.email} ⇗`
            : "Email to be added";
      }
    }

    if (label === "WORKING HOURS") {
      const p = block.querySelector("p");

      if (p) {
        p.textContent =
          salon.working_hours || "";
      }
    }

    if (label === "WHATSAPP") {
      const link = block.querySelector("a");

      if (link) {
        link.href = salon.whatsapp || "#";
      }
    }

    if (label === "INSTAGRAM") {
      const p = block.querySelector("p");

      if (salon.instagram) {
        const link = document.createElement("a");

        link.href = salon.instagram;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "Visit Instagram ⇗";

        if (p) {
          p.replaceWith(link);
        }
      } else if (p) {
        p.textContent =
          settings.instagram_status ||
          "Instagram — profile to be added";
      }
    }
  });

  /* Footer contact */
  const footerContact =
    document.querySelector(".footer-contact");

  if (footerContact) {
    const links = footerContact.querySelectorAll("a");

    links.forEach(link => {
      const text = link.textContent.trim();

      if (text.includes("@")) {
        if (salon.email) {
          link.href = `mailto:${salon.email}`;
          link.textContent = salon.email;
        }
      } else if (
        text.toLowerCase().includes("whatsapp")
      ) {
        if (salon.whatsapp) {
          link.href = salon.whatsapp;
        }
      } else if (
        text.includes("+91") ||
        link.href.startsWith("tel:")
      ) {
        if (salon.phone) {
          link.href =
            `tel:${salon.phone.replace(/\s+/g, "")}`;

          link.textContent =
            salon.phone;
        }
      }
    });

    const instagramSpan =
      footerContact.querySelector("span");

    if (instagramSpan) {
      instagramSpan.textContent =
        settings.instagram_status ||
        "Instagram — profile to be added";
    }
  }

  /* Footer copyright name */
  const footer =
    document.querySelector(".site-footer");

  if (footer) {
    const copyright =
      footer.querySelector("#copyright-year");

    if (copyright && salon.name) {
      const parent = copyright.parentElement;

      if (parent) {
        parent.innerHTML =
          `© <span id="copyright-year"></span> ` +
          `${escapeHtml(salon.name)} Beauty Atelier`;

        setupFooterYear();
      }
    }
  }

  /* Page title */
  document.title =
    `${salon.name || "Apsara"} Beauty Atelier | Hair • Beauty • Wellness`;

  /* Meta description */
  const meta =
    document.querySelector('meta[name="description"]');

  if (meta) {
    meta.content =
      salon.description ||
      "A refined beauty atelier.";
  }
}


/* -------------------------------
   SERVICE DATA
-------------------------------- */

function buildServiceData(rows) {
  const grouped = new Map();

  rows.forEach(row => {
    if (!grouped.has(row.category)) {
      grouped.set(row.category, {
        number: "",
        name: row.category,
        description: row.description || "",
        startingPrice: row.price || "Price on request",
        image: row.image_url || "",
        subcategories: []
      });
    }

    const item = grouped.get(row.category);

    item.subcategories.push({
      name: row.name,
      price: row.price || "Price on request"
    });
  });

  SERVICE_DATA = Array.from(grouped.values());

  SERVICE_DATA.forEach((item, index) => {
    item.number =
      String(index + 1).padStart(2, "0");
  });
}


/* -------------------------------
   HOME SERVICE CARDS
-------------------------------- */

function renderHomeCards() {
  const container =
    document.getElementById("home-service-cards");

  if (!container) return;

  container.innerHTML =
    SERVICE_DATA.map(item => `
      <a class="service-card"
         href="#services"
         aria-label="Explore ${escapeHtml(item.name)} services">

        <img src="${escapeAttribute(item.image)}"
             alt="${escapeAttribute(item.name)} beauty service"
             loading="lazy">

        <div class="service-card-content">
          <small>${escapeHtml(item.number)} / SIGNATURE</small>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </div>

        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>
    `)
    .join("");
}


/* -------------------------------
   SERVICES MENU
-------------------------------- */

function renderServiceMenu() {
  const container =
    document.getElementById("service-menu");

  if (!container) return;

  container.innerHTML =
    SERVICE_DATA.map(item => `
      <article class="service-entry">

        <div class="service-entry-head">
          <span class="service-number">
            ${escapeHtml(item.number)}
          </span>

          <div>
            <h3>${escapeHtml(item.name)}</h3>

            <p>
              ${escapeHtml(item.description)}
            </p>

            <span class="starting-price">
              STARTING AT ·
              ${escapeHtml(item.startingPrice)}
            </span>
          </div>
        </div>

        <details class="service-accordion">
          <summary>
            Explore
            ${escapeHtml(item.name.toLowerCase())}
            services
          </summary>

          <ul class="service-list">
            ${item.subcategories.map(service => `
              <li>
                <span>${escapeHtml(service.name)}</span>
                <span>${escapeHtml(service.price)}</span>
              </li>
            `).join("")}
          </ul>
        </details>

      </article>
    `)
    .join("");
}


/* -------------------------------
   ENQUIRY SERVICE DROPDOWN
-------------------------------- */

function populateServiceSelect() {
  const select =
    document.getElementById("service-select");

  if (!select) return;

  select.innerHTML =
    `<option value="">Choose a service</option>`;

  SERVICE_DATA.forEach(item => {
    const option =
      document.createElement("option");

    option.value = item.name;
    option.textContent = item.name;

    select.appendChild(option);
  });
}


/* -------------------------------
   GALLERY
-------------------------------- */

function renderGallery(rows) {
  const container =
    document.querySelector(".gallery-grid");

  if (!container || !rows.length) return;

  container.innerHTML =
    rows.map((item, index) => {

      const position = index % 9;

      let className = "gallery-item";

      if (position === 0 || position === 5) {
        className += " tall";
      }

      if (position === 3) {
        className += " wide";
      }

      return `
        <figure class="${className}">
          <img
            loading="lazy"
            src="${escapeAttribute(item.image_url || "")}"
            alt="${escapeAttribute(item.caption || "Beauty gallery image")}"
          >

          <figcaption>
            <span>
              ${String(index + 1).padStart(2, "0")}
              / APSARA BEAUTY
            </span>

            <b>
              ${escapeHtml(item.caption || "")}
            </b>
          </figcaption>
        </figure>
      `;
    })
    .join("");
}


/* -------------------------------
   MOBILE NAVIGATION
-------------------------------- */

function setupNavigation() {
  const nav =
    document.getElementById("site-nav");

  const toggle =
    document.querySelector(".menu-toggle");

  const close =
    document.querySelector(".menu-close");

  const overlay =
    document.querySelector(".nav-overlay");

  if (!nav || !toggle || !close || !overlay) {
    return;
  }

  const links =
    nav.querySelectorAll("a");

  function setOpen(open) {
    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    toggle.setAttribute(
      "aria-label",
      open
        ? "Close navigation"
        : "Open navigation"
    );

    nav.classList.toggle("open", open);

    nav.setAttribute(
      "aria-hidden",
      String(!open)
    );

    overlay.hidden = !open;

    document.body.classList.toggle(
      "menu-open",
      open
    );

    if (open) {
      close.focus();
    } else {
      toggle.focus();
    }
  }

  toggle.addEventListener("click", () => {
    const isOpen =
      toggle.getAttribute("aria-expanded") === "true";

    setOpen(!isOpen);
  });

  close.addEventListener(
    "click",
    () => setOpen(false)
  );

  overlay.addEventListener(
    "click",
    () => setOpen(false)
  );

  links.forEach(link => {
    link.addEventListener(
      "click",
      () => setOpen(false)
    );
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
  const validPages =
    new Set([
      "home",
      "gallery",
      "services",
      "contact",
      "enquiry"
    ]);

  const requested =
    window.location.hash.replace(/^#/, "") ||
    "home";

  const page =
    validPages.has(requested)
      ? requested
      : "home";

  document.querySelectorAll(".page")
    .forEach(section => {

      const active =
        section.dataset.page === page;

      section.hidden = !active;

      section.classList.toggle(
        "active",
        active
      );
    });

  document.querySelectorAll(".site-nav a")
    .forEach(link => {

      if (link.hash === `#${page}`) {
        link.setAttribute(
          "aria-current",
          "page"
        );
      } else {
        link.removeAttribute(
          "aria-current"
        );
      }
    });

  window.scrollTo({
    top: 0,
    behavior:
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth"
  });
}


/* -------------------------------
   ANIMATED STATISTICS
-------------------------------- */

function setupCounters() {
  const counters =
    document.querySelectorAll("[data-count]");

  if (!("IntersectionObserver" in window)) {
    counters.forEach(element => {
      element.textContent =
        element.dataset.count +
        (element.dataset.suffix || "");
    });

    return;
  }

  const observer =
    new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const element =
          entry.target;

        const target =
          Number(element.dataset.count);

        const suffix =
          element.dataset.suffix || "";

        const duration = 1400;
        const start = performance.now();

        function animate(now) {
          const progress =
            Math.min(
              (now - start) / duration,
              1
            );

          const eased =
            1 - Math.pow(1 - progress, 3);

          element.textContent =
            Math.round(target * eased) +
            suffix;

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);

        observer.unobserve(element);
      });

    }, {
      threshold: 0.35
    });

  counters.forEach(
    element => observer.observe(element)
  );
}


/* -------------------------------
   STAT VALUE HELPER
-------------------------------- */

function setStatValue(selector, value) {
  const element =
    document.querySelector(selector);

  if (!element) return;

  const clean =
    String(value)
      .trim()
      .replace(/\s+/g, "");

  const match =
    clean.match(/^([\d.]+)(.*)$/);

  if (!match) {
    element.textContent = clean;
    return;
  }

  element.dataset.count = match[1];
  element.dataset.suffix = match[2];

  element.textContent = "0";
}


/* -------------------------------
   PREVENT PAST APPOINTMENT DATES
-------------------------------- */

function setupDateMinimum() {
  const dateInput =
    document.getElementById("preferred-date");

  if (!dateInput) return;

  const now = new Date();

  const localToday =
    `${now.getFullYear()}-` +
    `${String(now.getMonth() + 1).padStart(2, "0")}-` +
    `${String(now.getDate()).padStart(2, "0")}`;

  dateInput.min = localToday;
}


/* -------------------------------
   EXISTING ENQUIRY FORM
-------------------------------- */

function setupEnquiryForm() {
  const form =
    document.getElementById("enquiry-form");

  const status =
    document.getElementById("form-status");

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

    const dateInput =
      document.getElementById("preferred-date");

    const chosenDate =
      form.elements.date.value;

    if (
      chosenDate &&
      chosenDate < dateInput.min
    ) {
      status.textContent =
        "Please choose today or a future date.";

      status.hidden = false;

      return;
    }

    status.textContent =
      "Thank you — your enquiry has been captured in this browser " +
      "demo only. It has not been sent to the salon.";

    status.hidden = false;

    form.reset();

    setupDateMinimum();
  });
}


/* -------------------------------
   FOOTER YEAR
-------------------------------- */

function setupFooterYear() {
  const year =
    document.getElementById("copyright-year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }
}


/* -------------------------------
   HTML SAFETY HELPERS
-------------------------------- */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}


/* -------------------------------
   INITIALIZE WEBSITE
-------------------------------- */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    setupNavigation();
    setupCounters();
    setupDateMinimum();
    setupEnquiryForm();
    setupFooterYear();

    routeToHash();

    window.addEventListener(
      "hashchange",
      routeToHash
    );

    try {

      await loadSalonData();

      /*
        Counters need to be observed again because
        Supabase supplies their values.
      */
      setupCounters();

    } catch (error) {

      console.error(
        "Unable to load salon data:",
        error
      );

      /*
        Keep the existing website usable if
        Supabase temporarily cannot be reached.
      */
      console.error(
        "Salon data could not be loaded from Supabase."
      );
    }
  }
);
