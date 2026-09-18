/* =========================================
   APSARA BEAUTY ATELIER
   WEBSITE JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   IMAGE COLLECTION
========================================= */

const images = {

  hero:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=90",

  salon:
    "https://images.unsplash.com/photo-1521590832167-7bcb752127f5?auto=format&fit=crop&w=1200&q=90",

  hair:
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=90",

  makeup:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=90",

  skin:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=90",

  nails:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=90",

  bride:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=90",

  portrait:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=90",

  wellness:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=90",

  hairTwo:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=90"

};


/* =========================================
   DATA
========================================= */

const serviceData = [

  {
    number: "01",
    name: "Hair",
    description:
      "Cuts, styling, colour and restorative hair treatments.",
    price: "From ₹799",
    image: images.hair,

    subcategories: [
      ["Hair Cut & Finish", "₹799"],
      ["Hair Wash & Blow Dry", "₹599"],
      ["Hair Styling", "₹899"],
      ["Hair Spa", "₹1,499"],
      ["Global Colour", "₹2,499"],
      ["Root Touch-Up", "₹1,499"],
      ["Balayage", "₹4,999"],
      ["Keratin Treatment", "₹3,999"],
      ["Hair Smoothening", "₹3,499"],
      ["Deep Repair Treatment", "₹1,799"]
    ]
  },


  {
    number: "02",
    name: "Makeup",
    description:
      "Bridal, party, editorial and occasion makeup.",
    price: "From ₹1,999",
    image: images.makeup,

    subcategories: [
      ["Party Makeup", "₹1,999"],
      ["Engagement Makeup", "₹2,999"],
      ["Reception Makeup", "₹3,499"],
      ["Bridal Makeup", "₹5,999"],
      ["HD Makeup", "₹3,499"],
      ["Airbrush Makeup", "₹4,499"],
      ["Eye Makeup", "₹999"],
      ["Makeup Touch-Up", "₹799"],
      ["Editorial Makeup", "₹2,499"],
      ["Draping & Styling", "₹999"]
    ]
  },


  {
    number: "03",
    name: "Skin",
    description:
      "Facials, clean-ups and personalised skin rituals.",
    price: "From ₹999",
    image: images.skin,

    subcategories: [
      ["Express Clean-Up", "₹999"],
      ["Classic Facial", "₹1,299"],
      ["Glow Facial", "₹1,799"],
      ["Hydration Facial", "₹1,799"],
      ["Detan Ritual", "₹1,299"],
      ["Deep Cleanse", "₹1,499"],
      ["Bridal Glow Ritual", "₹2,499"],
      ["Back Clean-Up", "₹1,499"],
      ["Face Massage", "₹899"],
      ["Skin Consultation", "₹499"]
    ]
  },


  {
    number: "04",
    name: "Nails",
    description:
      "Classic manicures, gel finishes and nail art.",
    price: "From ₹599",
    image: images.nails,

    subcategories: [
      ["Classic Manicure", "₹599"],
      ["Classic Pedicure", "₹799"],
      ["Gel Manicure", "₹999"],
      ["Gel Pedicure", "₹1,299"],
      ["French Finish", "₹899"],
      ["Chrome Finish", "₹1,199"],
      ["Nail Art", "₹199+"],
      ["Gel Removal", "₹399"],
      ["Extension Refill", "₹1,499"],
      ["Nail Extension", "₹1,999"]
    ]
  },


  {
    number: "05",
    name: "Bridal",
    description:
      "Complete bridal beauty planning and artistry.",
    price: "From ₹5,999",
    image: images.bride,

    subcategories: [
      ["Bridal Makeup", "₹5,999"],
      ["Bridal Hair", "₹2,499"],
      ["Bridal Draping", "₹999"],
      ["Bridal Nails", "₹1,499"],
      ["Pre-Bridal Facial", "₹2,499"],
      ["Pre-Bridal Hair Spa", "₹1,799"],
      ["Engagement Look", "₹3,499"],
      ["Reception Look", "₹3,499"],
      ["Bridal Trial", "₹1,999"],
      ["Complete Bridal Package", "₹9,999+"]
    ]
  },


  {
    number: "06",
    name: "Wellness",
    description:
      "Relaxing rituals designed for your reset.",
    price: "From ₹899",
    image: images.wellness,

    subcategories: [
      ["Head Massage", "₹899"],
      ["Scalp Ritual", "₹999"],
      ["Relaxation Massage", "₹1,499"],
      ["Aroma Ritual", "₹1,499"],
      ["Foot Relaxation", "₹799"],
      ["Hand Relaxation", "₹599"],
      ["Hair & Scalp Spa", "₹1,499"],
      ["Stress Reset Ritual", "₹1,799"],
      ["Couples Relaxation", "₹2,999"],
      ["Wellness Consultation", "₹499"]
    ]
  }

];


const galleryData = [

  {
    title: "Bridal artistry",
    image: images.bride
  },

  {
    title: "Hair transformation",
    image: images.hair
  },

  {
    title: "Skin ritual",
    image: images.skin
  },

  {
    title: "The beauty edit",
    image: images.makeup
  },

  {
    title: "Nail atelier",
    image: images.nails
  },

  {
    title: "Salon moments",
    image: images.salon
  },

  {
    title: "Editorial beauty",
    image: images.portrait
  },

  {
    title: "Hair craft",
    image: images.hairTwo
  },

  {
    title: "Wellness ritual",
    image: images.wellness
  }

];


/* =========================================
   DOM REFERENCES
========================================= */

const app =
  document.getElementById("app");

const navigation =
  document.getElementById("navigation");

const navOverlay =
  document.getElementById("navOverlay");

const menuButton =
  document.getElementById("menuButton");

const closeButton =
  document.getElementById("closeButton");

const loader =
  document.getElementById("loader");

const year =
  document.getElementById("year");


/* =========================================
   NAVIGATION DRAWER
========================================= */

function openMenu() {

  navigation.classList.add("active");

  navOverlay.classList.add("active");

  document.body.classList.add("menu-open");

  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

}


function closeMenu() {

  navigation.classList.remove("active");

  navOverlay.classList.remove("active");

  document.body.classList.remove("menu-open");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

}


menuButton.addEventListener(
  "click",
  openMenu
);


closeButton.addEventListener(
  "click",
  closeMenu
);


navOverlay.addEventListener(
  "click",
  closeMenu
);


document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeMenu();

    }

  }
);


/* =========================================
   PAGE BANNER
========================================= */

function createBanner(
  eyebrow,
  title
) {

  return `

    <section class="page-banner">

      <span class="eyebrow">
        ${eyebrow}
      </span>

      <h1>
        ${title}
      </h1>

    </section>

  `;

}


/* =========================================
   HOME PAGE
========================================= */

function homePage() {

  return `

    <div class="page">


      <!-- HERO -->

      <section
        class="hero"
        style="--hero-bg: url('${images.salon}');"
      >

        <div class="hero-copy reveal">

          <span class="eyebrow">
            A modern beauty atelier
          </span>

          <h1>
            Beauty,<br>
            <em>beautifully</em><br>
            considered.
          </h1>

          <p class="hero-text">
            A refined space for hair, skin, makeup and wellness.
            Thoughtful beauty rituals, crafted around you.
          </p>

          <a
            class="text-link"
            href="#enquiry"
            data-route
          >
            Begin your experience ↗
          </a>

        </div>


        <div
          class="hero-art reveal"
          aria-hidden="true"
        >

          <div class="hero-label">
            Your beauty story.
          </div>

        </div>

      </section>


      <!-- MOVING RIBBON -->

      <div
        class="beauty-ribbon"
        aria-label="Apsara values"
      >

        <div class="beauty-ribbon-track">

          <span>BEAUTY</span>
          <i>✦</i>

          <span>ELEGANCE</span>
          <i>✦</i>

          <span>DIGNITY</span>
          <i>✦</i>

          <span>CONFIDENCE</span>
          <i>✦</i>

          <span>GRACE</span>
          <i>✦</i>

          <span>WELLNESS</span>
          <i>✦</i>


          <span>BEAUTY</span>
          <i>✦</i>

          <span>ELEGANCE</span>
          <i>✦</i>

          <span>DIGNITY</span>
          <i>✦</i>

          <span>CONFIDENCE</span>
          <i>✦</i>

          <span>GRACE</span>
          <i>✦</i>

          <span>WELLNESS</span>
          <i>✦</i>

        </div>

      </div>


      <!-- ABOUT -->

      <section class="section">

        <div class="about-grid">

          <img
            class="about-photo reveal"
            src="${images.salon}"
            alt="Elegant salon interior"
            loading="lazy"
          >

          <div class="about-copy reveal">

            <span class="eyebrow">
              About the atelier
            </span>

            <h2>
              Where beauty meets<br>
              <em>intention.</em>
            </h2>

            <p>
              At Apsara, every detail is designed to make you
              feel seen, cared for and confident. From a
              considered consultation to the final touch,
              our artists bring precision and warmth to
              every appointment.
            </p>

            <a
              class="text-link"
              href="#contact"
              data-route
            >
              Discover Apsara ↗
            </a>

          </div>

        </div>

      </section>


      <!-- STATS -->

      <section class="stats">

        <div class="stat">

          <strong
            class="stat-number"
            data-target="12"
            data-suffix="+"
          >
            0+
          </strong>

          <span>
            Years of experience
          </span>

        </div>


        <div class="stat">

          <strong
            class="stat-number"
            data-target="12"
            data-suffix="k"
          >
            0k
          </strong>

          <span>
            Happy clients
          </span>

        </div>


        <div class="stat">

          <strong
            class="stat-number"
            data-target="1"
            data-suffix="m"
          >
            0m
          </strong>

          <span>
            Beauty moments
          </span>

        </div>

      </section>


      <!-- SERVICES PREVIEW -->

      <section class="section">

        <div class="section-heading">

          <h2 class="section-title">

            Our signature<br>
            <em>services.</em>

          </h2>

          <p class="section-intro">

            A complete beauty experience, from everyday
            refinement to your most important occasions.

          </p>

        </div>


        <div class="service-grid">

          ${serviceData
            .slice(0, 4)
            .map(service => `

            <article
              class="service-card reveal"
            >

              <img
                src="${service.image}"
                alt="${service.name}"
                loading="lazy"
              >

              <span class="service-number">
                ${service.number}
              </span>

              <h3>
                ${service.name}
              </h3>

              <p>
                ${service.description}
              </p>

            </article>

          `)
          .join("")}

        </div>


        <a
          class="text-link"
          href="#services"
          data-route
        >
          View all services ↗
        </a>

      </section>

    </div>

  `;

}


/* =========================================
   GALLERY PAGE
========================================= */

function galleryPage() {

  return `

    <div class="page">

      ${createBanner(
        "The visual diary",
        "Work gallery."
      )}


      <section class="section">

        <div class="section-heading">

          <h2 class="section-title">

            A little<br>
            <em>inspiration.</em>

          </h2>

          <p class="section-intro">

            A collection of beauty moments,
            transformations and details from our atelier.

          </p>

        </div>


        <div class="gallery-grid">

          ${galleryData
            .map(item => `

            <figure
              class="gallery-item reveal"
            >

              <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy"
              >

              <figcaption>
                ${item.title}
              </figcaption>

            </figure>

          `)
          .join("")}

        </div>

      </section>

    </div>

  `;

}


/* =========================================
   SERVICES PAGE
========================================= */

function servicesPage() {

  return `

    <div class="page">

      ${createBanner(
        "The beauty menu",
        "Our services."
      )}


      <section class="section">

        <div class="section-heading">

          <h2 class="section-title">

            Made for<br>
            <em>your ritual.</em>

          </h2>

          <p class="section-intro">

            Every service begins with a conversation
            and ends with a little more confidence.

          </p>

        </div>


        <div class="services-list">

          ${serviceData
            .map(service => `

            <article
              class="service-row reveal"
            >

              <div class="service-row-main">

                <span class="service-number">
                  ${service.number}
                </span>


                <h3>
                  ${service.name}
                </h3>


                <p>
                  ${service.description}
                </p>


                <div
                  class="service-subcategories"
                >

                  ${service.subcategories
                    .map((item, index) => `

                    <div
                      class="service-subcategory"
                    >

                      <span>
                        ${String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <strong>
                        ${item[0]}
                      </strong>

                      <em>
                        ${item[1]}
                      </em>

                    </div>

                  `)
                  .join("")}

                </div>

              </div>


              <span class="service-price">
                ${service.price}
              </span>

            </article>

          `)
          .join("")}

        </div>

      </section>

    </div>

  `;

}


/* =========================================
   CONTACT PAGE
========================================= */

function contactPage() {

  return `

    <div class="page">

      ${createBanner(
        "Come say hello",
        "Contact us."
      )}


      <section class="section">

        <div class="contact-grid">

          <div class="contact-details reveal">

            <span class="eyebrow">
              Visit the atelier
            </span>


            <h2>

              Let's create<br>
              <em>something beautiful.</em>

            </h2>


            <div class="detail">

              <small>
                Address
              </small>

              <p>

                123, Your Main Street<br>
                Your City, India

              </p>

            </div>


            <div class="detail">

              <small>
                Call
              </small>

              <a href="tel:+919999999999">
                +91 99999 99999
              </a>

            </div>


            <div class="detail">

              <small>
                WhatsApp
              </small>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp ↗
              </a>

            </div>


            <div class="detail">

              <small>
                Instagram
              </small>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
              >
                Visit Instagram ↗
              </a>

            </div>


            <div class="detail">

              <small>
                Email
              </small>

              <a href="mailto:hello@apsarabeauty.in">
                hello@apsarabeauty.in
              </a>

            </div>


            <div class="detail">

              <small>
                Working hours
              </small>

              <p>

                Monday – Sunday<br>
                10:00 – 21:00

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  `;

}


/* =========================================
   ENQUIRY PAGE
========================================= */

function enquiryPage() {

  const serviceOptions =
    serviceData
      .map(service => {

        return `
          <option value="${service.name}">
            ${service.name}
          </option>
        `;

      })
      .join("");


  return `

    <div class="page">

      ${createBanner(
        "Your next beauty moment",
        "Make an enquiry."
      )}


      <section class="section">

        <div class="enquiry-grid">


          <div class="enquiry-copy reveal">

            <span class="eyebrow">
              A considered beginning
            </span>


            <h2 class="section-title">

              Tell us what<br>
              <em>you need.</em>

            </h2>


            <p class="section-intro">

              Complete the form and our team will contact
              you to confirm availability and discuss
              your preferences.

            </p>

          </div>


          <form
            class="form-card reveal"
            id="enquiryForm"
          >

            <h2>
              Book your visit.
            </h2>


            <div class="form-row">


              <div class="field">

                <label for="name">
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                >

              </div>


              <div class="field">

                <label for="phone">
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  required
                >

              </div>


            </div>


            <div class="field">

              <label for="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              >

            </div>


            <div class="form-row">


              <div class="field">

                <label for="service">
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  required
                >

                  <option value="">
                    Choose service
                  </option>

                  ${serviceOptions}

                </select>

              </div>


              <div class="field">

                <label for="date">
                  Preferred date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                >

              </div>


            </div>


            <div class="field">

              <label for="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us anything we should know..."
              ></textarea>

            </div>


            <button
              class="submit-button"
              type="submit"
            >

              Send enquiry ↗

            </button>


            <p
              class="form-status"
              id="formStatus"
              role="status"
              aria-live="polite"
            ></p>

          </form>

        </div>

      </section>

    </div>

  `;

}


/* =========================================
   ROUTING
========================================= */

const pages = {

  home: homePage,

  gallery: galleryPage,

  services: servicesPage,

  contact: contactPage,

  enquiry: enquiryPage

};


function getCurrentRoute() {

  const route =
    window.location.hash
      .replace("#", "")
      .split("?")[0]
      .toLowerCase();


  return pages[route]
    ? route
    : "home";

}


function renderPage() {

  const route =
    getCurrentRoute();


  app.innerHTML =
    pages[route]();


  closeMenu();


  updateActiveLinks(route);


  initializeRevealAnimations();


  initializeStatCounters();


  if (route === "enquiry") {

    initializeForm();

  }


  window.scrollTo({

    top: 0,

    behavior: "auto"

  });

}


function updateActiveLinks(route) {

  document
    .querySelectorAll("[data-route]")
    .forEach(link => {

      const href =
        link.getAttribute("href");


      link.classList.toggle(

        "active",

        href === "#" + route

      );


      link.onclick = () => {

        closeMenu();

      };

    });

}


/* =========================================
   REVEAL ANIMATIONS
========================================= */

function initializeRevealAnimations() {

  const elements =
    document.querySelectorAll(".reveal");


  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {

      element.classList.add(
        "visible"
      );

    });

    return;

  }


  const observer =
    new IntersectionObserver(

      (entries, observerInstance) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observerInstance.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.1
      }

    );


  elements.forEach(element => {

    observer.observe(element);

  });

}


/* =========================================
   STAT COUNTERS
========================================= */

function initializeStatCounters() {

  const counters =
    document.querySelectorAll(
      ".stat-number"
    );


  if (!counters.length) return;


  const animateCounter =
    (counter) => {

      if (
        counter.dataset.animated ===
        "true"
      ) {

        return;

      }


      counter.dataset.animated =
        "true";


      const target =
        Number(
          counter.dataset.target
        );


      const suffix =
        counter.dataset.suffix || "";


      const duration =
        1400;


      const startTime =
        performance.now();


      function update(now) {

        const progress =
          Math.min(
            (now - startTime) /
              duration,
            1
          );


        const eased =
          1 -
          Math.pow(
            1 - progress,
            3
          );


        const value =
          Math.floor(
            target * eased
          );


        counter.textContent =
          value + suffix;


        if (progress < 1) {

          requestAnimationFrame(
            update
          );

        } else {

          counter.textContent =
            target + suffix;

        }

      }


      requestAnimationFrame(
        update
      );

    };


  if (
    !("IntersectionObserver" in window)
  ) {

    counters.forEach(
      animateCounter
    );

    return;

  }


  const observer =
    new IntersectionObserver(

      (
        entries,
        observerInstance
      ) => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting
          ) {

            animateCounter(
              entry.target
            );

            observerInstance.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.35
      }

    );


  counters.forEach(counter => {

    observer.observe(counter);

  });

}


/* =========================================
   ENQUIRY FORM
========================================= */

function initializeForm() {

  const form =
    document.getElementById(
      "enquiryForm"
    );


  const status =
    document.getElementById(
      "formStatus"
    );


  if (!form || !status) return;


  form.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const formData =
        new FormData(form);


      const name =
        formData.get("name");


      status.textContent =
        `Thank you, ${name}. Your enquiry has been recorded in this demo. Please connect the form to your email or WhatsApp backend before going live.`;


      form.reset();

    }
  );

}


/* =========================================
   DATE RESTRICTION
========================================= */

function restrictPastDates() {

  const dateInput =
    document.getElementById(
      "date"
    );


  if (!dateInput) return;


  const today =
    new Date();


  const yearValue =
    today.getFullYear();


  const monthValue =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");


  const dayValue =
    String(
      today.getDate()
    ).padStart(2, "0");


  dateInput.min =
    `${yearValue}-${monthValue}-${dayValue}`;

}


/* =========================================
   INITIALIZATION
========================================= */

window.addEventListener(
  "hashchange",
  () => {

    renderPage();

  }
);


document.addEventListener(
  "DOMContentLoaded",
  () => {

    if (year) {

      year.textContent =
        new Date().getFullYear();

    }


    restrictPastDates();


    renderPage();


    setTimeout(() => {

      if (loader) {

        loader.classList.add(
          "hidden"
        );

      }

    }, 1100);

  }
);


/* =========================================
   FINISH
========================================= */
