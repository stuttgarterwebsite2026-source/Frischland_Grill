/* =====================================================================
   FRISCHLAND GRILL – Beispiel-Menükarte (Platzhalter-Daten)
   ---------------------------------------------------------------------
   So passt du die Karte später an:
   - Jede Kategorie hat eine `id`, einen zweisprachigen Titel (de/en),
     ein Emoji-Icon und eine Liste `items`.
   - Jedes Gericht hat: name {de,en}, desc {de,en}, price (String),
     optional `tags` (z.B. "spicy", "veg", "new").
   - Preise einfach im `price`-Feld ändern, z.B. "8,90 €".
   - Neue Gerichte: einfach ein weiteres Objekt zur `items`-Liste hinzufügen.
   ===================================================================== */

const MENU_DATA = [
  {
    id: "grill",
    icon: "🔥",
    title: { de: "Vom Grill", en: "From the Grill" },
    items: [
      {
        name: { de: "Gegrilltes Hähnchen", en: "Grilled Chicken" },
        desc: {
          de: "Saftige Hähnchenbrust, mariniert in Kräutern & Knoblauch, über offener Flamme gegrillt. Serviert mit Reis und frischem Salat.",
          en: "Juicy chicken breast, marinated in herbs & garlic, grilled over an open flame. Served with rice and fresh salad.",
        },
        price: "10,90 €",
        tags: ["new"],
      },
      {
        name: { de: "Köfte vom Grill", en: "Grilled Köfte" },
        desc: {
          de: "Würzige Hackfleischspieße nach Hausrezept, perfekt gegrillt – mit Fladenbrot und Joghurtsauce.",
          en: "Spiced minced-meat skewers, house recipe, perfectly grilled – with flatbread and yoghurt sauce.",
        },
        price: "9,90 €",
        tags: ["spicy"],
      },
      {
        name: { de: "Lammspieße", en: "Lamb Skewers" },
        desc: {
          de: "Zarte Lammstücke am Spieß, langsam gegrillt, mit gerösteten Paprika und Zwiebeln.",
          en: "Tender lamb pieces on a skewer, slow-grilled, with roasted peppers and onions.",
        },
        price: "13,50 €",
      },
      {
        name: { de: "Gemischte Grillplatte", en: "Mixed Grill Platter" },
        desc: {
          de: "Unser Klassiker für echten Hunger: Hähnchen, Köfte und Lamm mit Reis, Pommes, Salat und Saucen.",
          en: "Our classic for a real appetite: chicken, köfte and lamb with rice, fries, salad and sauces.",
        },
        price: "18,90 €",
        tags: ["new"],
      },
    ],
  },
  {
    id: "doener",
    icon: "🥙",
    title: { de: "Döner & Dürüm", en: "Döner & Dürüm" },
    items: [
      {
        name: { de: "Döner im Brot", en: "Döner in Bread" },
        desc: {
          de: "Knuspriges Fladenbrot, saftiges Fleisch frisch vom Drehspieß, knackiger Salat und hausgemachte Saucen.",
          en: "Crispy flatbread, juicy meat fresh from the rotisserie, crunchy salad and homemade sauces.",
        },
        price: "7,50 €",
      },
      {
        name: { de: "Dürüm", en: "Dürüm Wrap" },
        desc: {
          de: "Dünnes Yufka-Brot, gefüllt mit Fleisch, frischem Gemüse und Sauce – fest gerollt zum Mitnehmen.",
          en: "Thin yufka bread filled with meat, fresh vegetables and sauce – tightly rolled to go.",
        },
        price: "8,50 €",
      },
      {
        name: { de: "Dönerteller mit Pommes", en: "Döner Plate with Fries" },
        desc: {
          de: "Großzügige Portion Fleisch mit goldgelben Pommes, Salat und Sauce. Sättigend und lecker.",
          en: "Generous portion of meat with golden fries, salad and sauce. Filling and delicious.",
        },
        price: "11,90 €",
      },
      {
        name: { de: "Dönerteller mit Reis", en: "Döner Plate with Rice" },
        desc: {
          de: "Aromatischer Reis mit zartem Fleisch, buntem Salat und cremiger Sauce.",
          en: "Aromatic rice with tender meat, colourful salad and creamy sauce.",
        },
        price: "11,90 €",
      },
      {
        name: { de: "Veggie-Dürüm", en: "Veggie Dürüm" },
        desc: {
          de: "Gegrilltes Gemüse, Falafel, frischer Salat und Knoblauchsauce – herzhaft und fleischlos.",
          en: "Grilled vegetables, falafel, fresh salad and garlic sauce – hearty and meat-free.",
        },
        price: "8,90 €",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "burger",
    icon: "🍔",
    title: { de: "Burger", en: "Burgers" },
    items: [
      {
        name: { de: "Classic Burger", en: "Classic Burger" },
        desc: {
          de: "Saftiges Rindfleisch-Patty, frischer Salat, Tomate, Zwiebel und unsere Burgersauce im weichen Bun.",
          en: "Juicy beef patty, fresh lettuce, tomato, onion and our burger sauce in a soft bun.",
        },
        price: "8,90 €",
      },
      {
        name: { de: "Cheeseburger", en: "Cheeseburger" },
        desc: {
          de: "Der Classic mit doppelt geschmolzenem Käse – herzhaft, würzig und genau richtig.",
          en: "The Classic with double melted cheese – savoury, tasty and just right.",
        },
        price: "9,90 €",
      },
      {
        name: { de: "Frischland-Spezial", en: "Frischland Special" },
        desc: {
          de: "Unser Signature-Burger: doppeltes Patty, Käse, knuspriger Bacon, gegrillte Zwiebeln und Spezialsauce.",
          en: "Our signature burger: double patty, cheese, crispy bacon, grilled onions and special sauce.",
        },
        price: "12,90 €",
        tags: ["new"],
      },
    ],
  },
  {
    id: "sides",
    icon: "🍟",
    title: { de: "Beilagen & Snacks", en: "Sides & Snacks" },
    items: [
      {
        name: { de: "Pommes Frites", en: "French Fries" },
        desc: {
          de: "Goldgelb und knusprig – frisch frittiert, mit einer Prise Salz.",
          en: "Golden and crispy – freshly fried, with a pinch of salt.",
        },
        price: "3,50 €",
        tags: ["veg"],
      },
      {
        name: { de: "Falafel (6 Stück)", en: "Falafel (6 pcs)" },
        desc: {
          de: "Knusprige Kichererbsenbällchen mit Kräutern, dazu Knoblauchsauce.",
          en: "Crispy chickpea balls with herbs, served with garlic sauce.",
        },
        price: "4,90 €",
        tags: ["veg"],
      },
      {
        name: { de: "Joghurt-/Knoblauchsauce", en: "Yoghurt / Garlic Sauce" },
        desc: {
          de: "Cremige hausgemachte Sauce – perfekt zu allem vom Grill.",
          en: "Creamy homemade sauce – perfect with everything from the grill.",
        },
        price: "1,00 €",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "salads",
    icon: "🥗",
    title: { de: "Salate", en: "Salads" },
    items: [
      {
        name: { de: "Gemischter Salat", en: "Mixed Salad" },
        desc: {
          de: "Frische Blattsalate, Tomaten, Gurken, Paprika und Zwiebeln mit hausgemachtem Dressing.",
          en: "Fresh leafy greens, tomatoes, cucumber, peppers and onions with homemade dressing.",
        },
        price: "5,90 €",
        tags: ["veg"],
      },
      {
        name: { de: "Hähnchensalat", en: "Chicken Salad" },
        desc: {
          de: "Bunter Salat mit gegrillten Hähnchenstreifen – leicht, frisch und sättigend.",
          en: "Colourful salad with grilled chicken strips – light, fresh and filling.",
        },
        price: "9,50 €",
      },
    ],
  },
  {
    id: "drinks",
    icon: "🥤",
    title: { de: "Getränke", en: "Drinks" },
    items: [
      {
        name: { de: "Softdrinks (0,33 l)", en: "Soft Drinks (0.33 l)" },
        desc: {
          de: "Cola, Fanta, Sprite & mehr – eiskalt serviert.",
          en: "Cola, Fanta, Sprite & more – served ice-cold.",
        },
        price: "2,50 €",
      },
      {
        name: { de: "Ayran", en: "Ayran" },
        desc: {
          de: "Erfrischendes Joghurtgetränk – der perfekte Begleiter zum Grill.",
          en: "Refreshing yoghurt drink – the perfect companion to grilled food.",
        },
        price: "2,00 €",
      },
      {
        name: { de: "Wasser (0,5 l)", en: "Water (0.5 l)" },
        desc: {
          de: "Still oder mit Kohlensäure.",
          en: "Still or sparkling.",
        },
        price: "1,80 €",
      },
    ],
  },
  {
    id: "desserts",
    icon: "🍮",
    title: { de: "Desserts", en: "Desserts" },
    items: [
      {
        name: { de: "Baklava (2 Stück)", en: "Baklava (2 pcs)" },
        desc: {
          de: "Süßes Blätterteiggebäck mit Pistazien und Honig – knusprig und unwiderstehlich.",
          en: "Sweet filo pastry with pistachios and honey – crispy and irresistible.",
        },
        price: "3,90 €",
        tags: ["veg"],
      },
      {
        name: { de: "Pudding des Tages", en: "Pudding of the Day" },
        desc: {
          de: "Hausgemachter cremiger Pudding – frag nach der Sorte des Tages.",
          en: "Homemade creamy pudding – ask for today's flavour.",
        },
        price: "3,50 €",
        tags: ["veg"],
      },
    ],
  },
];

// Für andere Skripte verfügbar machen
window.MENU_DATA = MENU_DATA;
