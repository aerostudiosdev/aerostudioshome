/*
 * AeroStudios – zentrale Übersetzungsdatei (Oberfläche, Startseite, Projektseiten)
 *
 * Jeder Eintrag:  "schlüssel": { de: "…", en: "…", fr: "…" }
 *  - de ist die Hauptsprache (Fallback, falls en/fr fehlt).
 *  - HTML ist erlaubt (<a>, <strong>, <span>…).
 *  - wird auf der Seite automatisch gelb markiert.
 *  - {root} = Pfad zur Site-Wurzel, {contactEmail} = Kontakt-Adresse aus assets/js/projects.js.
 *
 * Rechtstexte stehen in eigenen Dateien in diesem Ordner:
 *   aerobooks-legal.js · aeromovies-legal.js · site-legal.js
 */
(window.I18N_DATA = window.I18N_DATA || []).push({

  /* ---------- Allgemein / Navigation ---------- */
  "skip":          { de: "Zum Inhalt springen", en: "Skip to content", fr: "Aller au contenu" },
  "brand.home":    { de: "AeroStudios – Startseite", en: "AeroStudios – Home", fr: "AeroStudios – Accueil" },
  "nav.label":     { de: "Hauptnavigation", en: "Main navigation", fr: "Navigation principale" },
  "nav.home":      { de: "Start", en: "Home", fr: "Accueil" },
  "nav.projects":  { de: "Projekte", en: "Projects", fr: "Projets" },
  "nav.contact":   { de: "Kontakt", en: "Contact", fr: "Contact" },
  "nav.studio":    { de: "← Studio", en: "← Studio", fr: "← Studio" },
  "nav.privacy":   { de: "Datenschutz", en: "Privacy", fr: "Confidentialité" },
  "nav.support":   { de: "Support", en: "Support", fr: "Assistance" },
  "ctrl.language": { de: "Sprache", en: "Language", fr: "Langue" },
  "ctrl.theme":    { de: "Darstellung", en: "Appearance", fr: "Apparence" },
  "theme.light":   { de: "Hell", en: "Light", fr: "Clair" },
  "theme.auto":    { de: "Automatisch", en: "Automatic", fr: "Automatique" },
  "theme.dark":    { de: "Dunkel", en: "Dark", fr: "Sombre" },

  /* ---------- Footer ---------- */
  "footer.tagline":    { de: "Apps für iOS – unabhängig entwickelt.", en: "iOS apps, independently built.", fr: "Des apps iOS, développées en toute indépendance." },
  "footer.studio":     { de: "Studio", en: "Studio", fr: "Studio" },
  "footer.overview":   { de: "Übersicht", en: "Overview", fr: "Aperçu" },
  "footer.imprint":    { de: "Impressum", en: "Legal notice", fr: "Mentions légales" },
  "footer.sitePrivacy":{ de: "Datenschutz (Website)", en: "Privacy (website)", fr: "Confidentialité (site web)" },
  "footer.legalNote":  { de: "Bei Rechtstexten gilt die deutsche Fassung.", en: "For legal texts, the German version prevails.", fr: "Pour les textes juridiques, la version allemande fait foi." },

  /* ---------- Status / Buttons ---------- */
  "status.live":   { de: "Verfügbar", en: "Available", fr: "Disponible" },
  "status.soon":   { de: "Bald verfügbar", en: "Coming soon", fr: "Bientôt disponible" },
  "btn.learnMore": { de: "Mehr erfahren", en: "Learn more", fr: "En savoir plus" },
  "btn.appStore":  { de: "Im App Store ansehen", en: "View on the App Store", fr: "Voir sur l’App Store" },
  "btn.privacy":   { de: "Datenschutzerklärung", en: "Privacy Policy", fr: "Politique de confidentialité" },
  "btn.terms":     { de: "Nutzungsbedingungen", en: "Terms of Use", fr: "Conditions d’utilisation" },
  "btn.support":   { de: "Support", en: "Support", fr: "Assistance" },
  "btn.email":     { de: "E-Mail schreiben", en: "Send an email", fr: "Envoyer un e-mail" },
  "btn.projects":  { de: "Projekte ansehen", en: "View projects", fr: "Voir les projets" },
  "btn.contact":   { de: "Kontakt aufnehmen", en: "Get in touch", fr: "Nous contacter" },
  "btn.openSupport":    { de: "Support öffnen", en: "Open Support", fr: "Ouvrir l’assistance" },
  "btn.contactPrivacy": { de: "Datenschutz kontaktieren", en: "Contact Privacy Support", fr: "Contacter la protection des données" },
  "btn.emailSupport":   { de: "Support per E-Mail", en: "Email Support", fr: "Assistance par e-mail" },
  "btn.openPrivacy":    { de: "Datenschutz öffnen", en: "Open Privacy Policy", fr: "Ouvrir la politique de confidentialité" },

  "notice.legal": {
    de: "Es gilt die deutsche Fassung dieses Textes. Übersetzungen dienen nur dem besseren Verständnis und sind rechtlich nicht verbindlich.",
    en: "The German version of this text is authoritative. Translations are provided for convenience only and are not legally binding.",
    fr: "La version allemande de ce texte fait foi. Les traductions sont fournies à titre indicatif et n’ont pas de valeur juridique."
  },
  /* ---------- Seitentitel / Beschreibungen ---------- */
  "title.home": { de: "AeroStudios – Unabhängiges iOS-Studio", en: "AeroStudios – Independent iOS studio", fr: "AeroStudios – Studio iOS indépendant" },
  "desc.home":  { de: "AeroStudios entwickelt iOS-Apps. Hier findest du AeroBooks, AeroMovies sowie Datenschutz und Support.", en: "AeroStudios builds iOS apps. Find AeroBooks, AeroMovies, privacy information and support here.", fr: "AeroStudios développe des apps iOS. Retrouvez ici AeroBooks, AeroMovies, la confidentialité et l’assistance." },

  "title.aerobooks": { de: "AeroBooks – Lese-Tracker | AeroStudios", en: "AeroBooks – Reading tracker | AeroStudios", fr: "AeroBooks – Suivi de lecture | AeroStudios" },
  "desc.aerobooks":  { de: "AeroBooks ist ein Lese-Tracker für iPhone, iPad und Mac.", en: "AeroBooks is a reading tracker for iPhone, iPad and Mac.", fr: "AeroBooks est une app de suivi de lecture pour iPhone, iPad et Mac." },
  "title.aerobooks.privacy": { de: "AeroBooks — Datenschutzerklärung", en: "AeroBooks — Privacy Policy", fr: "AeroBooks — Politique de confidentialité" },
  "desc.aerobooks.privacy":  { de: "Datenschutzerklärung für AeroBooks mit Informationen zu Accounts, Firebase-Synchronisierung, sozialen Funktionen, Analytics und deinen Rechten.", en: "Privacy Policy for AeroBooks with information on accounts, Firebase synchronization, social features, analytics and your rights.", fr: "Politique de confidentialité d’AeroBooks : comptes, synchronisation Firebase, fonctions sociales, analyses et vos droits." },
  "title.aerobooks.support": { de: "AeroBooks — Support", en: "AeroBooks — Support", fr: "AeroBooks — Assistance" },
  "desc.aerobooks.support":  { de: "AeroBooks-Support mit Kontaktdaten, FAQ, Fehlerbehebung und Hilfe zum Datenschutz.", en: "AeroBooks support page with contact details, FAQ, troubleshooting, and privacy-related help.", fr: "Assistance AeroBooks : contact, FAQ, dépannage et aide sur la confidentialité." },

  "title.aeromovies": { de: "AeroMovies – Film- und Serien-Tracker | AeroStudios", en: "AeroMovies – Movie and TV tracker | AeroStudios", fr: "AeroMovies – Suivi de films et séries | AeroStudios" },
  "desc.aeromovies":  { de: "AeroMovies ist ein Film- und Serien-Tracker mit Daten von TMDB. Bald im App Store.", en: "AeroMovies is a movie and TV tracker with data from TMDB. Coming soon to the App Store.", fr: "AeroMovies est une app de suivi de films et séries avec des données de TMDB. Bientôt sur l’App Store." },
  "title.aeromovies.privacy": { de: "AeroMovies – Datenschutzerklärung", en: "AeroMovies – Privacy Policy", fr: "AeroMovies – Politique de confidentialité" },
  "desc.aeromovies.privacy":  { de: "Datenschutzerklärung für AeroMovies (Entwurf).", en: "Privacy Policy for AeroMovies (draft).", fr: "Politique de confidentialité d’AeroMovies (projet)." },
  "title.aeromovies.terms": { de: "AeroMovies – Nutzungsbedingungen", en: "AeroMovies – Terms of Use", fr: "AeroMovies – Conditions d’utilisation" },
  "desc.aeromovies.terms":  { de: "Nutzungsbedingungen für AeroMovies (Entwurf).", en: "Terms of Use for AeroMovies (draft).", fr: "Conditions d’utilisation d’AeroMovies (projet)." },
  "title.aeromovies.support": { de: "AeroMovies – Support", en: "AeroMovies – Support", fr: "AeroMovies – Assistance" },
  "desc.aeromovies.support":  { de: "AeroMovies-Support mit Kontakt und häufigen Fragen.", en: "AeroMovies support with contact details and frequently asked questions.", fr: "Assistance AeroMovies : contact et questions fréquentes." },

  "title.imprint": { de: "Impressum | AeroStudios", en: "Legal notice | AeroStudios", fr: "Mentions légales | AeroStudios" },
  "desc.imprint":  { de: "Impressum von AeroStudios.", en: "Legal notice of AeroStudios.", fr: "Mentions légales d’AeroStudios." },
  "title.sitePrivacy": { de: "Datenschutzerklärung (Website) | AeroStudios", en: "Privacy Policy (website) | AeroStudios", fr: "Politique de confidentialité (site web) | AeroStudios" },
  "desc.sitePrivacy":  { de: "Datenschutzerklärung für die Website von AeroStudios.", en: "Privacy Policy for the AeroStudios website.", fr: "Politique de confidentialité du site web d’AeroStudios." },

  /* ---------- Startseite ---------- */
  "home.eyebrow": { de: "Unabhängiges iOS-Studio", en: "Independent iOS studio", fr: "Studio iOS indépendant" },
  "home.title": {
    de: 'Kleine Apps. <span class="grad">Mit Liebe zum Detail.</span>',
    en: 'Small apps. <span class="grad">Crafted with care.</span>',
    fr: 'De petites apps, <span class="grad">conçues avec soin.</span>'
  },
  "home.lead": {
    de: "AeroStudios ist ein unabhängiges Ein-Personen-Studio für iOS-Apps.",
    en: "AeroStudios is an independent one-person studio building iOS apps.",
    fr: "AeroStudios est un studio indépendant, tenu par une seule personne, qui développe des apps iOS."
  },
  "home.projects.title": { de: "Projekte", en: "Projects", fr: "Projets" },
  "home.projects.sub":   { de: "Die Apps von AeroStudios.", en: "Apps by AeroStudios.", fr: "Les apps d’AeroStudios." },
  "home.about.title": { de: "Über das Studio", en: "About the studio", fr: "À propos du studio" },
  "home.about.text": {
    de: "Hier findest du alle Projekte von AeroStudios, ihre Datenschutzerklärungen und den Support an einem Ort.",
    en: "Find all AeroStudios projects, their privacy policies and support in one place.",
    fr: "Retrouvez ici tous les projets d’AeroStudios, leurs politiques de confidentialité et l’assistance au même endroit."
  },
  "home.contact.title": { de: "Kontakt", en: "Contact", fr: "Contact" },
  "home.contact.text": {
    de: "Fragen, Feedback oder ein Anliegen zu einer App? Schreib uns eine E-Mail.",
    en: "Questions, feedback or an issue with an app? Send us an email.",
    fr: "Une question, un retour ou un problème avec une app ? Écrivez-nous un e-mail."
  },
  "home.contact.label": { de: "E-Mail", en: "Email", fr: "E-mail" },

  /* ---------- Projekt-Kurztexte (Karten auf der Startseite) ---------- */
  "project.aerobooks.tagline": { de: "Lese-Tracker für iPhone, iPad und Mac", en: "Reading tracker for iPhone, iPad and Mac", fr: "Suivi de lecture pour iPhone, iPad et Mac" },
  "project.aerobooks.summary": { de: "Bücher entdecken, organisieren, tracken und teilen.", en: "Discover, organize, track and share your books.", fr: "Découvrez, organisez, suivez et partagez vos livres." },
  "project.aeromovies.tagline": { de: "Film- und Serien-Tracker", en: "Movie and TV tracker", fr: "Suivi de films et de séries" },
  "project.aeromovies.summary": {
    de: "Filme und Serien tracken, andere per Benutzername finden, Profile vergleichen und gemeinsame Listen führen.",
    en: "Track movies and TV shows, find other people by username, compare profiles and keep shared lists.",
    fr: "Suivez films et séries, trouvez d’autres personnes par nom d’utilisateur, comparez vos profils et gérez des listes partagées."
  },

  /* ---------- AeroBooks (Projektseite) ---------- */
  "aerobooks.eyebrow": { de: "App für iPhone, iPad und Mac", en: "App for iPhone, iPad and Mac", fr: "App pour iPhone, iPad et Mac" },
  "aerobooks.title":   { de: "Dein Lese-Tracker.", en: "Your reading tracker.", fr: "Votre suivi de lecture." },
  "aerobooks.lead": {
    de: "AeroBooks ist ein Lese-Tracker für iPhone, iPad und Mac. Entdecke, organisiere, tracke und teile deine Bücher.",
    en: "AeroBooks is a reading tracker for iPhone, iPad and Mac. Discover, organize, track and share your books.",
    fr: "AeroBooks est une app de suivi de lecture pour iPhone, iPad et Mac. Découvrez, organisez, suivez et partagez vos livres."
  },
  "aerobooks.features.title": { de: "Was AeroBooks kann", en: "What AeroBooks does", fr: "Ce que fait AeroBooks" },
  "aerobooks.f1.title": { de: "Bibliothek &amp; Regale", en: "Library &amp; shelves", fr: "Bibliothèque &amp; étagères" },
  "aerobooks.f1.text":  { de: "Speichere Bücher in deiner Bibliothek und ordne sie in Regalen und Listen.", en: "Save books to your library and organize them in shelves and lists.", fr: "Enregistrez vos livres dans votre bibliothèque et classez-les dans des étagères et des listes." },
  "aerobooks.f2.title": { de: "Lesefortschritt", en: "Reading progress", fr: "Progression de lecture" },
  "aerobooks.f2.text":  { de: "Halte Lesestatus und Fortschritt fest – mit Statistiken, Streaks und Zielen.", en: "Keep track of your reading status and progress – with statistics, streaks and goals.", fr: "Suivez votre statut et votre progression de lecture – avec statistiques, séries et objectifs." },
  "aerobooks.f3.title": { de: "Bewertungen &amp; Rezensionen", en: "Ratings &amp; reviews", fr: "Notes &amp; avis" },
  "aerobooks.f3.text":  { de: "Bewerte Bücher und schreibe Rezensionen.", en: "Rate books and write reviews.", fr: "Notez des livres et rédigez des avis." },
  "aerobooks.f4.title": { de: "Soziale Funktionen", en: "Social features", fr: "Fonctions sociales" },
  "aerobooks.f4.text":  { de: "Finde andere Leser:innen und folge ihnen.", en: "Find other readers and follow them.", fr: "Trouvez d’autres lecteurs et suivez-les." },
  "aerobooks.f5.title": { de: "Synchronisierung", en: "Sync", fr: "Synchronisation" },
  "aerobooks.f5.text":  { de: "Deine Daten werden zwischen deinen Geräten synchronisiert.", en: "Your data is synchronized between your devices.", fr: "Vos données sont synchronisées entre vos appareils." },
  "aerobooks.f6.title": { de: "Bücher entdecken", en: "Discover books", fr: "Découvrir des livres" },
  "aerobooks.f6.text":  { de: "Suche nach Büchern und entdecke neue Titel.", en: "Search for books and discover new titles.", fr: "Recherchez des livres et découvrez de nouveaux titres." },
  "aerobooks.more.title": { de: "Rechtliches &amp; Hilfe", en: "Legal &amp; help", fr: "Mentions légales &amp; aide" },
  "aerobooks.more.text": {
    de: "Datenschutzerklärung und Support zu AeroBooks.",
    en: "Privacy policy and support for AeroBooks.",
    fr: "Politique de confidentialité et assistance pour AeroBooks."
  },

  /* ---------- AeroMovies (Projektseite) ---------- */
  "aeromovies.eyebrow": { de: "App von AeroStudios", en: "An app by AeroStudios", fr: "Une app d’AeroStudios" },
  "aeromovies.title":   { de: "Dein Film- und Serien-Tracker.", en: "Your movie and TV tracker.", fr: "Votre suivi de films et séries." },
  "aeromovies.lead": {
    de: "AeroMovies ist ein Film- und Serien-Tracker. Die Film- und Serieninformationen stammen von TMDB.",
    en: "AeroMovies is a movie and TV tracker. Movie and TV information comes from TMDB.",
    fr: "AeroMovies est une app de suivi de films et de séries. Les informations sur les films et séries proviennent de TMDB."
  },
  "aeromovies.status": {
    de: "AeroMovies erscheint bald im App Store.",
    en: "AeroMovies is coming soon to the App Store.",
    fr: "AeroMovies arrive bientôt sur l’App Store."
  },
  "aeromovies.features.title": { de: "Was AeroMovies kann", en: "What AeroMovies does", fr: "Ce que fait AeroMovies" },
  "aeromovies.f1.title": { de: "Filme &amp; Serien tracken", en: "Track movies &amp; TV", fr: "Suivre films &amp; séries" },
  "aeromovies.f1.text":  { de: "Behalte deine Filme und Serien an einem Ort im Blick. Die Daten stammen von TMDB.", en: "Keep your movies and TV shows in one place. The data comes from TMDB.", fr: "Gardez vos films et séries au même endroit. Les données proviennent de TMDB." },
  "aeromovies.f2.title": { de: "Anmeldung mit Apple", en: "Sign in with Apple", fr: "Connexion avec Apple" },
  "aeromovies.f2.text":  { de: "Melde dich mit Apple an.", en: "Sign in with Apple.", fr: "Connectez-vous avec Apple." },
  "aeromovies.f3.title": { de: "Nutzer finden", en: "Find people", fr: "Trouver des personnes" },
  "aeromovies.f3.text":  { de: "Finde andere Nutzer:innen per Benutzername.", en: "Find other users by username.", fr: "Trouvez d’autres utilisateurs par nom d’utilisateur." },
  "aeromovies.f4.title": { de: "Profile vergleichen", en: "Compare profiles", fr: "Comparer les profils" },
  "aeromovies.f4.text":  { de: "Vergleiche dein Profil mit dem anderer Nutzer:innen.", en: "Compare your profile with other users’ profiles.", fr: "Comparez votre profil avec celui d’autres utilisateurs." },
  "aeromovies.f5.title": { de: "Gemeinsame Listen", en: "Shared lists", fr: "Listes partagées" },
  "aeromovies.f5.text":  { de: "Führe gemeinsame Listen mit anderen.", en: "Keep shared lists with others.", fr: "Gérez des listes partagées avec d’autres personnes." },
  "aeromovies.more.title": { de: "Rechtliches &amp; Hilfe", en: "Legal &amp; help", fr: "Mentions légales &amp; aide" },
  "aeromovies.more.text": {
    de: "Datenschutzerklärung und Support zu AeroMovies.",
    en: "Privacy policy and support for AeroMovies.",
    fr: "Politique de confidentialité et assistance pour AeroMovies."
  },
  "aeromovies.credits.title": { de: "Quellenhinweis", en: "Credits", fr: "Crédits" },
  "tmdb.notice": {
    /* Pflichttext laut TMDB – bewusst in allen Sprachen auf Englisch */
    de: '<span lang="en">This product uses the TMDB API but is not endorsed or certified by TMDB.</span>',
    en: '<span lang="en">This product uses the TMDB API but is not endorsed or certified by TMDB.</span>',
    fr: '<span lang="en">This product uses the TMDB API but is not endorsed or certified by TMDB.</span>'
  }
});
