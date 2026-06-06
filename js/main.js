/* =====================================================================
   FRISCHLAND GRILL – Hauptlogik
   ---------------------------------------------------------------------
   - Sprache (DE/EN) umschalten + in localStorage speichern
   - Menü aus MENU_DATA rendern
   - Öffnungszeiten-Tabelle + Live-Status ("Jetzt geöffnet/geschlossen")
   - Kontaktdaten/Links aus SITE_CONFIG einsetzen
   - Cookie-Banner (Akzeptieren/Ablehnen) inkl. Maps-Consent
   - Mobile-Navigation (Hamburger)
   ===================================================================== */

(function () {
  "use strict";

  const LANG_KEY = "fg_lang";
  const COOKIE_KEY = "fg_cookie_consent"; // "accepted" | "declined"
  const DEFAULT_LANG = "de";

  const T = window.TRANSLATIONS || {};
  const HOURS = window.OPENING_HOURS || [];
  const CONFIG = window.SITE_CONFIG || {};

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function getLang() {
    const stored = localStorage.getItem(LANG_KEY);
    return stored === "en" || stored === "de" ? stored : DEFAULT_LANG;
  }

  function t(key, lang = getLang()) {
    return (
      (T[lang] && T[lang][key]) ||
      (T[DEFAULT_LANG] && T[DEFAULT_LANG][key]) ||
      key
    );
  }

  function timeToMinutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  }

  /* ---------- Language ---------- */
  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    // Textinhalte
    $$("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"), lang);
    });

    // Attribute: data-i18n-attr="aria-label:key; title:key2"
    $$("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr")
        .split(";")
        .forEach((pair) => {
          const [attr, key] = pair.split(":");
          if (attr && key) el.setAttribute(attr.trim(), t(key.trim(), lang));
        });
    });

    // Ganze Sprachbloecke (z.B. lange Rechtstexte) ein-/ausblenden
    $$("[data-lang-block]").forEach((block) => {
      block.hidden = block.getAttribute("data-lang-block") !== lang;
    });

    // Sprach-Toggle Zustand
    $$("[data-lang-btn]").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Abhängige, sprachabhängige Inhalte neu aufbauen
    renderMenu(lang);
    renderHours(lang);
    updateLiveStatus(lang);
  }

  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage(lang);
  }

  function initLanguageControls() {
    $$("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () =>
        setLanguage(btn.getAttribute("data-lang-btn"))
      );
    });
  }

  /* ---------- Menu rendering ---------- */
  function renderMenu(lang) {
    const grid = $("#menu-grid");
    if (!grid || !window.MENU_DATA) return;

    const tagLabel = {
      new: t("menu.tag.new", lang),
      spicy: t("menu.tag.spicy", lang),
      veg: t("menu.tag.veg", lang),
    };

    grid.innerHTML = window.MENU_DATA.map((cat) => {
      const items = cat.items
        .map((item) => {
          const tags = (item.tags || [])
            .map(
              (tg) =>
                `<span class="menu-tag menu-tag--${tg}">${
                  tagLabel[tg] || tg
                }</span>`
            )
            .join("");
          return `
            <li class="menu-item">
              <div class="menu-item__head">
                <span class="menu-item__name">${item.name[lang]}</span>
                <span class="menu-item__dots" aria-hidden="true"></span>
                <span class="menu-item__price">${item.price}</span>
              </div>
              <p class="menu-item__desc">${item.desc[lang]}</p>
              ${tags ? `<div class="menu-item__tags">${tags}</div>` : ""}
            </li>`;
        })
        .join("");

      return `
        <article class="menu-card" data-reveal>
          <header class="menu-card__header">
            <span class="menu-card__icon" aria-hidden="true">${cat.icon}</span>
            <h3 class="menu-card__title">${cat.title[lang]}</h3>
          </header>
          <ul class="menu-card__list">${items}</ul>
        </article>`;
    }).join("");

    // Neu gerenderte Karten ggf. für Reveal-Animation registrieren
    initReveal();
  }

  /* ---------- Opening hours table + live status ---------- */
  function renderHours(lang) {
    const tbody = $("#hours-tbody");
    if (!tbody) return;

    const todayIdx = new Date().getDay(); // 0=So ... 6=Sa

    tbody.innerHTML = HOURS.map((entry, idx) => {
      const dayName = t("hours.day." + idx, lang);
      const isToday = idx === todayIdx;
      const timeText = entry.closed
        ? `<span class="hours-closed">${t("hours.closed", lang)}</span>`
        : `${entry.open} – ${entry.close}`;
      const todayTag = isToday
        ? `<span class="hours-today-tag">${t("hours.today", lang)}</span>`
        : "";
      return `
        <tr class="${isToday ? "is-today" : ""}">
          <th scope="row">${dayName}${todayTag}</th>
          <td>${timeText}</td>
        </tr>`;
    }).join("");
  }

  // Liefert true/false ob aktuell geöffnet
  function isOpenNow(now = new Date()) {
    const idx = now.getDay();
    const entry = HOURS[idx];
    if (!entry || entry.closed) return false;
    const mins = now.getHours() * 60 + now.getMinutes();
    return mins >= timeToMinutes(entry.open) && mins < timeToMinutes(entry.close);
  }

  function updateLiveStatus(lang) {
    const open = isOpenNow();
    $$("[data-live-status]").forEach((el) => {
      el.classList.toggle("is-open", open);
      el.classList.toggle("is-closed", !open);
      const label = $(".status-label", el);
      if (label) {
        label.textContent = open
          ? t("hero.statusOpen", lang)
          : t("hero.statusClosed", lang);
      }
    });
  }

  /* ---------- Contact / config-driven links ---------- */
  function applyConfig() {
    const phoneSet = CONFIG.phoneLink && CONFIG.phoneLink.trim() !== "";
    const telHref = phoneSet ? "tel:" + CONFIG.phoneLink : "#kontakt";
    const phoneText = CONFIG.phoneDisplay || "[TELEFONNUMMER]";

    // Telefon-Links
    $$("[data-phone-link]").forEach((a) => {
      a.setAttribute("href", telHref);
      if (!phoneSet) a.setAttribute("title", "Telefonnummer folgt");
    });
    // Telefon-Anzeige-Text
    $$("[data-phone-text]").forEach((el) => (el.textContent = phoneText));

    // WhatsApp
    const waSet = CONFIG.whatsapp && CONFIG.whatsapp.trim() !== "";
    $$("[data-whatsapp]").forEach((a) => {
      if (waSet) {
        a.setAttribute("href", "https://wa.me/" + CONFIG.whatsapp);
        a.style.display = "";
      } else {
        a.style.display = "none";
      }
    });

    // Maps Route-Links
    $$("[data-maps-link]").forEach((a) => {
      if (CONFIG.mapsLink) a.setAttribute("href", CONFIG.mapsLink);
    });
  }

  /* ---------- Cookie banner + Maps consent ---------- */
  function loadMap() {
    const placeholder = $("#map-placeholder");
    if (!placeholder) return;
    if (placeholder.dataset.loaded === "true") return;
    const src = placeholder.getAttribute("data-map-src") || CONFIG.mapsEmbed;
    if (!src) return;
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.title = t("contact.mapTitle");
    iframe.setAttribute("allowfullscreen", "");
    placeholder.innerHTML = "";
    placeholder.appendChild(iframe);
    placeholder.dataset.loaded = "true";
    placeholder.classList.add("is-loaded");
  }

  function initCookieBanner() {
    const banner = $("#cookie-banner");
    const consent = localStorage.getItem(COOKIE_KEY);

    if (consent === "accepted") {
      loadMap();
    }
    if (consent === "accepted" || consent === "declined") {
      if (banner) banner.hidden = true;
      return;
    }

    if (!banner) return;
    banner.hidden = false;

    const accept = $("[data-cookie-accept]", banner);
    const decline = $("[data-cookie-decline]", banner);

    if (accept) {
      accept.addEventListener("click", () => {
        localStorage.setItem(COOKIE_KEY, "accepted");
        banner.hidden = true;
        loadMap();
      });
    }
    if (decline) {
      decline.addEventListener("click", () => {
        localStorage.setItem(COOKIE_KEY, "declined");
        banner.hidden = true;
      });
    }
  }

  // Manuelles Laden der Karte über den Platzhalter-Button (falls abgelehnt)
  function initMapPlaceholderClick() {
    const btn = $("[data-load-map]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      localStorage.setItem(COOKIE_KEY, "accepted");
      const banner = $("#cookie-banner");
      if (banner) banner.hidden = true;
      loadMap();
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initMobileNav() {
    const toggle = $("#nav-toggle");
    const menu = $("#nav-links");
    if (!toggle || !menu) return;

    const close = () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    };
    const open = () => {
      menu.classList.add("is-open");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
    };

    toggle.addEventListener("click", () => {
      if (menu.classList.contains("is-open")) close();
      else open();
    });

    // Beim Klick auf einen Link schließen
    $$("a", menu).forEach((a) => a.addEventListener("click", close));

    // Schließen bei Resize auf Desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) close();
    });

    // Escape schließt
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- Navbar scroll state + active link ---------- */
  function initNavbarScroll() {
    const nav = $("#navbar");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initScrollSpy() {
    const links = $$("[data-spy]");
    if (!links.length) return;
    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            links.forEach((l) =>
              l.classList.toggle("is-active", l.getAttribute("href") === id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------- Reveal on scroll (dezente Animation) ---------- */
  let revealObserver = null;
  function initReveal() {
    const els = $$("[data-reveal]:not(.is-visible)");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries, o) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              o.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    els.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  /* ---------- Init ---------- */
  function init() {
    applyConfig();
    initLanguageControls();
    applyLanguage(getLang());
    initCookieBanner();
    initMapPlaceholderClick();
    initMobileNav();
    initNavbarScroll();
    initScrollSpy();
    initReveal();
    initYear();

    // Live-Status jede Minute aktualisieren
    setInterval(() => updateLiveStatus(getLang()), 60 * 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
