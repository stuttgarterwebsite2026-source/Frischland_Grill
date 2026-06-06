# Frischland Grill – Website

Eine moderne, zweisprachige (DE/EN) One-Page-Website für den Grill-Imbiss
**Frischland Grill** in Gerlingen. Reines HTML/CSS/JavaScript – **kein Build-Schritt
nötig**.

---

## 🚀 Lokal starten

Da alles statisch ist, reicht ein einfacher Webserver (wichtig, damit die
Google-Map korrekt lädt – `file://` funktioniert nicht zuverlässig).

**Option A – Python (meist vorinstalliert):**
```bash
cd "Frischland Grill"
python3 -m http.server 8000
```
Dann im Browser öffnen: <http://localhost:8000>

**Option B – Node (falls vorhanden):**
```bash
npx serve .
```

**Option C – VS Code:** Erweiterung „Live Server" installieren → Rechtsklick auf
`index.html` → „Open with Live Server".

> Schnelltest ohne Server: `index.html` per Doppelklick öffnen. Funktioniert
> weitgehend; nur die eingebettete Karte lädt evtl. erst über einen Server.

---

## 📁 Ordnerstruktur

```
Frischland Grill/
├── index.html            # Startseite (Hero, Menü, Öffnungszeiten, Kontakt, Footer)
├── impressum.html        # Impressum (§5 TMG), DE/EN
├── datenschutz.html      # Datenschutzerklärung (DSGVO), DE/EN
├── css/
│   └── styles.css        # Komplettes Stylesheet (Farben, Layout, Responsive)
├── js/
│   ├── config.js         # ⭐ Kontaktdaten: Telefon, WhatsApp, Google-Maps-Links
│   ├── translations.js   # ⭐ Alle Texte DE/EN + Öffnungszeiten
│   ├── menu-data.js      # ⭐ Beispiel-Menükarte (Gerichte & Preise)
│   └── main.js           # Logik: Sprache, Menü-Rendering, Live-Status, Cookies
├── assets/
│   └── logo/             # Hier später das echte Logo ablegen
└── README.md
```

Die mit ⭐ markierten Dateien sind die, die du am häufigsten anpasst.

---

## ✏️ Was du leicht anpassen kannst

### 1. Telefonnummer & WhatsApp → `js/config.js`
```js
phoneDisplay: "[TELEFONNUMMER]",   // Anzeigetext
phoneLink: "",                     // z.B. "+4971234567890" (ohne Leerzeichen)
whatsapp: "",                      // z.B. "4971234567890" (leer = Button versteckt)
```
- Solange `phoneLink` leer ist, bleibt der Platzhalter **[TELEFONNUMMER]** sichtbar.
- Sobald du eine WhatsApp-Nummer einträgst, erscheinen die WhatsApp-Buttons automatisch.

### 2. Menü (Gerichte & Preise) → `js/menu-data.js`
Jedes Gericht hat Name, Beschreibung (DE/EN) und Preis. Preis ändern:
```js
price: "8,90 €",
```
Neues Gericht? Einfach ein Objekt zur passenden Kategorie hinzufügen.
Tags möglich: `"new"`, `"spicy"`, `"veg"`.

> Der Hinweis **„Beispielkarte – finale Preise und Gerichte folgen"** kann
> in `js/translations.js` unter `menu.placeholderNote` entfernt/geändert werden.

### 3. Texte (DE/EN) → `js/translations.js`
Alle UI-Texte stehen dort zentral je Sprache. Öffnungszeiten ebenfalls
(`OPENING_HOURS`), inkl. „heute"-Hervorhebung und Live-Status.

### 4. Logo → `assets/logo/`
Aktuell ist ein **Schriftzug-Platzhalter** („Frischland Grill" mit 🔥) in Navbar
und Footer. So ersetzt du ihn durch ein echtes Logo:
1. Logodatei nach `assets/logo/` legen (z.B. `frischland-grill.svg`).
2. In `index.html`, `impressum.html`, `datenschutz.html` den Block
   `<a class="brand">…</a>` durch ein Bild ersetzen, z.B.:
   ```html
   <a href="index.html" class="brand">
     <img src="assets/logo/frischland-grill.svg" alt="Frischland Grill" height="42" />
   </a>
   ```

### 5. Impressum & Datenschutz
In `impressum.html` und `datenschutz.html` die farblich markierten Platzhalter
(`[VOLLSTÄNDIGER NAME / FIRMA]`, `[INHABER]`, `[TELEFONNUMMER]`, `[USt-IdNr.]`,
`[E-MAIL-ADRESSE]`, `[HOSTING-ANBIETER]` …) durch die echten Angaben ersetzen.
Vor Veröffentlichung rechtlich prüfen lassen.

---

## ✅ Enthaltene Funktionen

- **Zweisprachig DE/EN** mit Toggle in der Navbar – schaltet die ganze Seite ohne
  Neuladen um, Auswahl wird in `localStorage` gespeichert.
- **Sticky Navbar** mit Logo-Platzhalter, Ankerlinks und aktivem Abschnitts-Highlight.
- **Hero** mit Grill-Food-Bild, Slogan, „Anrufen"- und „Route"-Button.
- **Live-Status** „Jetzt geöffnet / Geschlossen" + automatische Hervorhebung des
  heutigen Tages in der Öffnungszeiten-Tabelle.
- **Datengetriebene Menükarte** mit 7 Kategorien und Beispielpreisen.
- **Kontakt** mit klickbarer Telefonnummer, optionalem WhatsApp-Button und
  eingebetteter Google-Map (lädt erst nach Cookie-Zustimmung – DSGVO-freundlich).
- **Cookie-Banner** (Akzeptieren/Ablehnen), Auswahl in `localStorage`,
  erscheint beim erneuten Besuch nicht wieder.
- **Impressum & Datenschutz** in DE/EN.
- **Responsive / Mobile-First**, dezente Scroll-Animationen, `prefers-reduced-motion`.

---

## 🖼️ Bilder

Das Hero-Bild wird per URL von **Unsplash** geladen (lizenzfrei). Du findest es in
`css/styles.css` unter `.hero__bg` und kannst es jederzeit gegen ein eigenes Bild
austauschen (z.B. `assets/hero.jpg`):
```css
.hero__bg { background-image: url("../assets/hero.jpg"); }
```

---

## 🎨 Farbwelt

| Farbe        | Bedeutung           | Wert      |
|--------------|---------------------|-----------|
| Grill-Rot    | Feuer / Grill       | `#e8412b` |
| Orange/Glut  | Wärme / Appetit     | `#f97316` |
| Frisch-Grün  | Frische / Salat     | `#2faa4b` |
| Holzkohle    | Akzent / Anthrazit  | `#1a1816` |

Alle Farben sind als CSS-Variablen in `:root` (oben in `css/styles.css`) definiert
und an einer Stelle änderbar.
