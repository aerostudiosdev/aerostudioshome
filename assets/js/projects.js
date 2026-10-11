/*
 * Projektliste des Studios.
 *
 * Neue App hinzufügen:
 *   1. Eintrag unten ergänzen (slug = Ordnername, status = "live" | "soon").
 *   2. Texte in assets/i18n/site.js anlegen:  project.<slug>.tagline  und  project.<slug>.summary
 *   3. Ordner /<slug>/ mit index.html, privacy/index.html und support/index.html anlegen
 *      (am einfachsten /aeromovies/ kopieren) und Rechtstexte in assets/i18n/<slug>-legal.js schreiben.
 * Startseite und Footer übernehmen die neue App automatisch.
 */
window.AERO_SITE = {
  // [TODO: bestätigen] – Adresse stammt aus den bestehenden AeroBooks-Seiten
  contactEmail: "hello.aerostudios@gmail.com"
};

window.AERO_PROJECTS = [
  {
    slug: "aerobooks",
    name: "AeroBooks",
    status: "live",
    appStoreUrl: "https://apps.apple.com/app/id6761075548",
    icon: "book",
    colors: ["#ff9f0a", "#ff375f"] // Platzhalter-Farben für das Icon
  },
  {
    slug: "aeromovies",
    name: "AeroMovies",
    status: "soon",
    appStoreUrl: null, // [TODO: App-Store-Link eintragen, sobald veröffentlicht]
    icon: "film",
    colors: ["#bf5af2", "#5e5ce6"] // Platzhalter-Farben für das Icon
  }
];
