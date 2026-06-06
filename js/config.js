/* =====================================================================
   FRISCHLAND GRILL – Zentrale Konfiguration
   ---------------------------------------------------------------------
   Hier später die echten Daten eintragen. Diese Werte werden überall
   auf der Seite verwendet (Buttons, Links, Footer, Impressum).
   ===================================================================== */

const SITE_CONFIG = {
  name: "Frischland Grill",

  // Adresse
  address: {
    street: "Weilimdorfer Str. 95",
    zip: "70839",
    city: "Gerlingen",
    country: "Deutschland",
  },

  // Telefon: PLATZHALTER – später echte Nummer eintragen.
  // Format fuer tel:-Link OHNE Leerzeichen, z.B. "+4971234567890".
  phoneDisplay: "[TELEFONNUMMER]",
  phoneLink: "", // z.B. "+4971234567890" – leer => Platzhalter aktiv

  // WhatsApp: optional. Nummer im internationalen Format ohne + und ohne 0,
  // z.B. "4971234567890". Leer => Button wird ausgeblendet.
  whatsapp: "",

  // Google Maps
  // Link zur Routenplanung:
  mapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=Weilimdorfer+Str.+95,+70839+Gerlingen",
  // Eingebettete Karte (iframe src):
  mapsEmbed:
    "https://www.google.com/maps?q=Weilimdorfer+Str.+95,+70839+Gerlingen&output=embed",
};

window.SITE_CONFIG = SITE_CONFIG;
