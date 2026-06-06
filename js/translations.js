/* =====================================================================
   FRISCHLAND GRILL – Übersetzungen (DE / EN)
   ---------------------------------------------------------------------
   Alle UI-Texte zentral hier. Verwendung im HTML über das Attribut
   data-i18n="schluessel" (Textinhalt) bzw. data-i18n-attr für
   Attribute wie aria-label/placeholder (siehe main.js).
   Sprache wird in localStorage ("fg_lang") gespeichert.
   ===================================================================== */

const TRANSLATIONS = {
  de: {
    // --- Navbar ---
    "nav.start": "Start",
    "nav.menu": "Menü",
    "nav.hours": "Öffnungszeiten",
    "nav.contact": "Kontakt",
    "nav.langLabel": "Sprache wechseln",
    "nav.menuToggle": "Menü öffnen",

    // --- Hero ---
    "hero.badge": "Frisch · Herzhaft · Vom Grill",
    "hero.title": "Frischland Grill",
    "hero.subtitle":
      "Frische Zutaten, herzhaft gegrillt. Döner, Burger & Grillplatten – mitten in Gerlingen.",
    "hero.callBtn": "Anrufen / Bestellen",
    "hero.routeBtn": "Route planen",
    "hero.statusOpen": "Jetzt geöffnet",
    "hero.statusClosed": "Jetzt geschlossen",

    // --- Menu ---
    "menu.title": "Unsere Karte",
    "menu.subtitle": "Frisch zubereitet – mit Liebe gegrillt.",
    "menu.placeholderNote":
      "Beispielkarte – finale Preise und Gerichte folgen.",
    "menu.tag.new": "Neu",
    "menu.tag.spicy": "Scharf",
    "menu.tag.veg": "Vegetarisch",

    // --- Hours ---
    "hours.title": "Öffnungszeiten",
    "hours.subtitle": "Wir freuen uns auf deinen Besuch.",
    "hours.today": "Heute",
    "hours.closed": "Geschlossen",
    "hours.openNow": "Jetzt geöffnet",
    "hours.closedNow": "Geschlossen",
    "hours.day.0": "Sonntag",
    "hours.day.1": "Montag",
    "hours.day.2": "Dienstag",
    "hours.day.3": "Mittwoch",
    "hours.day.4": "Donnerstag",
    "hours.day.5": "Freitag",
    "hours.day.6": "Samstag",

    // --- Contact ---
    "contact.title": "Standort & Kontakt",
    "contact.subtitle": "Komm vorbei oder ruf uns an.",
    "contact.addressTitle": "Adresse",
    "contact.phoneTitle": "Telefon",
    "contact.hoursTitle": "Öffnungszeiten",
    "contact.callBtn": "Anrufen",
    "contact.whatsappBtn": "WhatsApp",
    "contact.routeBtn": "Route auf Google Maps",
    "contact.mapTitle": "Karte – Standort Frischland Grill",

    // --- Footer ---
    "footer.tagline":
      "Frische Zutaten, herzhaft gegrillt – dein Imbiss in Gerlingen.",
    "footer.navTitle": "Navigation",
    "footer.contactTitle": "Kontakt",
    "footer.hoursTitle": "Öffnungszeiten",
    "footer.legalTitle": "Rechtliches",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.backHome": "Zurück zur Startseite",

    // --- Cookie banner ---
    "cookie.text":
      "Wir verwenden Cookies, um die Karte (Google Maps) anzuzeigen und die Website zu verbessern. Du entscheidest, was geladen wird.",
    "cookie.accept": "Akzeptieren",
    "cookie.decline": "Ablehnen",
    "cookie.more": "Mehr erfahren",

    // --- Legal pages (shared) ---
    "legal.imprintTitle": "Impressum",
    "legal.privacyTitle": "Datenschutzerklärung",
  },

  en: {
    // --- Navbar ---
    "nav.start": "Home",
    "nav.menu": "Menu",
    "nav.hours": "Opening Hours",
    "nav.contact": "Contact",
    "nav.langLabel": "Switch language",
    "nav.menuToggle": "Open menu",

    // --- Hero ---
    "hero.badge": "Fresh · Hearty · From the Grill",
    "hero.title": "Frischland Grill",
    "hero.subtitle":
      "Fresh ingredients, heartily grilled. Döner, burgers & grill platters – in the heart of Gerlingen.",
    "hero.callBtn": "Call / Order",
    "hero.routeBtn": "Get Directions",
    "hero.statusOpen": "Open now",
    "hero.statusClosed": "Closed now",

    // --- Menu ---
    "menu.title": "Our Menu",
    "menu.subtitle": "Freshly prepared – grilled with love.",
    "menu.placeholderNote":
      "Sample menu – final prices and dishes to follow.",
    "menu.tag.new": "New",
    "menu.tag.spicy": "Spicy",
    "menu.tag.veg": "Vegetarian",

    // --- Hours ---
    "hours.title": "Opening Hours",
    "hours.subtitle": "We look forward to your visit.",
    "hours.today": "Today",
    "hours.closed": "Closed",
    "hours.openNow": "Open now",
    "hours.closedNow": "Closed",
    "hours.day.0": "Sunday",
    "hours.day.1": "Monday",
    "hours.day.2": "Tuesday",
    "hours.day.3": "Wednesday",
    "hours.day.4": "Thursday",
    "hours.day.5": "Friday",
    "hours.day.6": "Saturday",

    // --- Contact ---
    "contact.title": "Location & Contact",
    "contact.subtitle": "Drop by or give us a call.",
    "contact.addressTitle": "Address",
    "contact.phoneTitle": "Phone",
    "contact.hoursTitle": "Opening Hours",
    "contact.callBtn": "Call",
    "contact.whatsappBtn": "WhatsApp",
    "contact.routeBtn": "Directions on Google Maps",
    "contact.mapTitle": "Map – Frischland Grill location",

    // --- Footer ---
    "footer.tagline":
      "Fresh ingredients, heartily grilled – your snack bar in Gerlingen.",
    "footer.navTitle": "Navigation",
    "footer.contactTitle": "Contact",
    "footer.hoursTitle": "Opening Hours",
    "footer.legalTitle": "Legal",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "All rights reserved.",
    "footer.backHome": "Back to home",

    // --- Cookie banner ---
    "cookie.text":
      "We use cookies to display the map (Google Maps) and improve the website. You decide what gets loaded.",
    "cookie.accept": "Accept",
    "cookie.decline": "Decline",
    "cookie.more": "Learn more",

    // --- Legal pages (shared) ---
    "legal.imprintTitle": "Imprint",
    "legal.privacyTitle": "Privacy Policy",
  },
};

// Öffnungszeiten zentral (24h-Format). Index 0 = Sonntag ... 6 = Samstag.
// closed: true => an diesem Tag geschlossen.
const OPENING_HOURS = [
  { closed: true }, // So
  { open: "09:00", close: "21:00" }, // Mo
  { open: "09:00", close: "21:00" }, // Di
  { open: "09:00", close: "21:00" }, // Mi
  { open: "09:00", close: "21:00" }, // Do
  { open: "09:00", close: "21:00" }, // Fr
  { open: "09:00", close: "21:00" }, // Sa
];

window.TRANSLATIONS = TRANSLATIONS;
window.OPENING_HOURS = OPENING_HOURS;
