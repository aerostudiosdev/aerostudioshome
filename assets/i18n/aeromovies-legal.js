/*
 * AeroMovies – Datenschutzerklärung, Nutzungsbedingungen und Support-FAQ
 *
 * ENTWURF, NICHT ANWALTLICH GEPRÜFT.
 * Grundlage der Datenschutzerklärung: der Code der App (Stand Oktober 2026). Ändert sich, was die App
 * speichert, muss dieser Text mit angepasst werden. Die Datenschutzerklärung gibt es auf Deutsch und Englisch;
 * Französisch fällt auf Deutsch zurück.
 * Maßgeblich ist die deutsche Fassung (de); en/fr sind Übersetzungen.
 *
 * Blockformat: { t: "h2"|"h3"|"p"|"ul"|"info"|"faq"|"link", de, en, fr }  (siehe aerobooks-legal.js)
 */
(function () {
  var docs = window.I18N_DOCS = window.I18N_DOCS || {};

  var RIGHTS = {
    de: ["Auskunft über deine gespeicherten Daten", "Berichtigung unrichtiger Daten", "Löschung deiner Daten", "Einschränkung der Verarbeitung", "Widerspruch gegen bestimmte Verarbeitungen", "Datenübertragbarkeit, soweit anwendbar", "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft, soweit die Verarbeitung auf Einwilligung beruht", "Beschwerde bei einer Aufsichtsbehörde"],
    en: ["access your stored data", "request rectification of inaccurate data", "request deletion of your data", "request restriction of processing", "object to certain processing", "request data portability where applicable", "withdraw consent with effect for the future where processing is based on consent", "lodge a complaint with a supervisory authority"],
    fr: ["accéder à vos données stockées", "demander la rectification de données inexactes", "demander la suppression de vos données", "demander la limitation du traitement", "vous opposer à certains traitements", "demander la portabilité des données, le cas échéant", "retirer votre consentement avec effet pour l’avenir lorsque le traitement repose sur le consentement", "introduire une réclamation auprès d’une autorité de contrôle"]
  };

  var TMDB_NOTICE = `<span lang="en">This product uses the TMDB API but is not endorsed or certified by TMDB.</span>`;

  Object.assign(docs, {

    /* ====================================================================
       AeroMovies – Nutzungsbedingungen (gleicher Inhalt wie in der App)
       ==================================================================== */
    "aeromovies.terms": {
      hero: {
        eyebrow: { de: "Nutzungsbedingungen", en: "Terms of Use", fr: "Conditions d’utilisation" },
        title: { de: "Die Regeln für AeroMovies.", en: "The rules for AeroMovies.", fr: "Les règles d’AeroMovies." },
        lead: {
          de: "Diese Bedingungen gelten für die Nutzung der App AeroMovies.",
          en: "These terms apply to your use of the AeroMovies app.",
          fr: "Ces conditions s’appliquent à l’utilisation de l’application AeroMovies."
        }
      },
      blocks: [
        { t: "p",
          de: "<strong>Stand:</strong> Oktober 2026",
          en: "<strong>Last updated:</strong> October 2026",
          fr: "<strong>Dernière mise à jour :</strong> octobre 2026" },

        { t: "h2", de: "1. Geltungsbereich", en: "1. Scope", fr: "1. Champ d’application" },
        { t: "p",
          de: "Diese Bedingungen gelten für die Nutzung der App AeroMovies. Zusätzlich gelten die Standard-Lizenzbedingungen für Apps von Apple (<a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Licensed Application End User License Agreement</a>).",
          en: "These terms apply to your use of the AeroMovies app. Apple’s standard license terms for apps (<a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Licensed Application End User License Agreement</a>) apply in addition." },

        { t: "h2", de: "2. Leistung", en: "2. Service", fr: "2. Service" },
        { t: "p",
          de: "AeroMovies ist ein Tagebuch zum Bewerten und Verwalten von Filmen und Serien. Film- und Seriendaten stammen von Drittanbietern (TMDB); Vollständigkeit und Richtigkeit werden nicht zugesichert. Streaming-Angaben können sich jederzeit ändern.",
          en: "AeroMovies is a diary for rating and managing movies and TV shows. Movie and TV data comes from third parties (TMDB); completeness and accuracy are not guaranteed. Streaming information may change at any time." },

        { t: "h2", de: "3. Konto", en: "3. Account", fr: "3. Compte" },
        { t: "p",
          de: "Für Cloud-Sicherung, Online-Vergleich und gemeinsame Listen ist die Anmeldung mit Apple nötig. Du bist für Inhalte verantwortlich, die du eingibst oder für andere sichtbar machst (z. B. Benutzername).",
          en: "Signing in with Apple is required for cloud backup, online comparison and shared lists. You are responsible for the content you enter or make visible to others (e.g. your username)." },

        { t: "h2", de: "4. Benutzernamen &amp; Verhalten", en: "4. Usernames &amp; conduct", fr: "4. Noms d’utilisateur &amp; comportement" },
        { t: "p",
          de: "Für anstößige Inhalte und missbräuchliches Verhalten gibt es in AeroMovies keine Toleranz. Benutzernamen, Anzeigenamen und Listennamen dürfen keine Rechte Dritter verletzen und nicht beleidigend, diskriminierend, sexuell, irreführend oder rechtswidrig sein. Andere Personen zu belästigen ist verboten.",
          en: "AeroMovies has zero tolerance for objectionable content and abusive behavior. Usernames, display names and list names must not infringe the rights of others and must not be offensive, discriminatory, sexual, misleading or unlawful. Harassing other people is prohibited." },
        { t: "p",
          de: "Du kannst Profile und gemeinsame Listen in der App melden und Personen blockieren. Wir prüfen Meldungen innerhalb von 24 Stunden, entfernen verstoßende Inhalte und sperren oder löschen Profile, die gegen diese Regeln verstoßen.",
          en: "You can report profiles and shared lists in the app and block people. We review reports within 24 hours, remove violating content and suspend or delete profiles that break these rules." },

        { t: "h2", de: "5. Eigene Inhalte", en: "5. Your content", fr: "5. Vos contenus" },
        { t: "p",
          de: "Von dir angelegte eigene Titel und Bilder bleiben deine Inhalte. Du versicherst, dass du hierfür die nötigen Rechte hast.",
          en: "Custom titles and images you create remain your content. You confirm that you hold the necessary rights to them." },

        { t: "h2", de: "6. Haftung", en: "6. Liability", fr: "6. Responsabilité" },
        { t: "p",
          de: "Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper und Gesundheit. Bei leichter Fahrlässigkeit haften wir nur für die Verletzung wesentlicher Vertragspflichten und begrenzt auf den vorhersehbaren, typischen Schaden. Sichere deine Daten regelmäßig über die Backup-Funktion.",
          en: "We are liable without limitation for intent and gross negligence and for injury to life, body or health. For slight negligence we are liable only for breaches of essential contractual obligations, limited to the foreseeable, typical damage. Back up your data regularly using the backup feature." },

        { t: "h2", de: "7. Kündigung", en: "7. Termination", fr: "7. Résiliation" },
        { t: "p",
          de: "Du kannst die Nutzung jederzeit beenden und deinen Account in den Einstellungen der App löschen.",
          en: "You can stop using the app at any time and delete your account in the app’s settings." },

        { t: "h2", de: "8. Kontakt", en: "8. Contact", fr: "8. Contact" },
        { t: "p",
          de: "Fragen zu diesen Bedingungen: <a href=\"mailto:{contactEmail}\">{contactEmail}</a>. Anbieterangaben findest du im <a href=\"{root}impressum/\">Impressum</a>.",
          en: "Questions about these terms: <a href=\"mailto:{contactEmail}\">{contactEmail}</a>. Provider details are in the <a href=\"{root}impressum/\">imprint</a>." }
      ]
    },

    /* ====================================================================
       AeroMovies – Datenschutzerklärung
       ==================================================================== */
    "aeromovies.privacy": {
      hero: {
        eyebrow: { de: "Datenschutzerklärung", en: "Privacy Policy", fr: "Politique de confidentialité" },
        title: { de: "Deine Privatsphäre ist wichtig.", en: "Your privacy matters.", fr: "Votre vie privée compte." },
        lead: {
          de: "Hier steht, welche Daten AeroMovies verarbeitet, wo sie liegen, wer sie sehen kann und welche Rechte du hast.",
          en: "This page explains which data AeroMovies processes, where it is stored, who can see it and which rights you have.",
          fr: "Cette page explique quelles données AeroMovies traite, où elles sont stockées, qui peut les voir et quels droits vous avez."
        }
      },
      blocks: [
        { t: "p",
          de: "<strong>Stand:</strong> Oktober 2026",
          en: "<strong>Last updated:</strong> October 2026" },

        { t: "h2", de: "1. Verantwortlicher", en: "1. Controller" },
        { t: "p",
          de: "Verantwortlich für die Datenverarbeitung in AeroMovies ist:",
          en: "The controller responsible for data processing in AeroMovies is:" },
        { t: "info", items: [
          { label: { de: "Name", en: "Name" }, value: "Enzo Kaiser" },
          { label: { de: "E-Mail", en: "Email" }, value: "<a href=\"mailto:{contactEmail}\">{contactEmail}</a>" }
        ] },

        { t: "h2", de: "2. Kurz gesagt", en: "2. In short" },
        { t: "ul",
          de: ["Du kannst AeroMovies ohne Konto nutzen. Dann bleibt alles auf deinem Gerät bzw. in deiner eigenen iCloud.",
               "Ein Konto (Anmeldung mit Apple) brauchst du nur für die Sicherung über Firebase, den Online-Vergleich und gemeinsame Listen.",
               "Für andere sichtbar wird nur, was du selbst freigibst: dein Vergleichsprofil und die gemeinsamen Listen, in denen du Mitglied bist.",
               "Keine Werbung, kein Tracking, kein Verkauf von Daten, keine Analyse-Tools.",
               "Du kannst deinen Account samt aller Daten jederzeit in der App löschen."],
          en: ["You can use AeroMovies without an account. Everything then stays on your device or in your own iCloud.",
               "You only need an account (Sign in with Apple) for the Firebase backup, the online comparison and shared lists.",
               "Others only see what you share yourself: your comparison profile and the shared lists you are a member of.",
               "No ads, no tracking, no selling of data, no analytics tools.",
               "You can delete your account and all its data at any time in the app."] },

        { t: "h2", de: "3. Daten auf deinem Gerät", en: "3. Data on your device" },
        { t: "p",
          de: "Deine Bibliothek – Bewertungen, Bewertungsverlauf, Watchlist und Status, gesehene Episoden, Franchises, Listen, gefolgte Personen, eigene Titel und Bilder sowie deine Einstellungen – wird auf deinem Gerät gespeichert. Die Widgets lesen einen kleinen Auszug daraus aus einem geschützten Speicherbereich der App. Erinnerungen an neue Folgen und Filmstarts plant die App lokal; dafür fragt iOS nach deiner Erlaubnis. Diese Daten verlassen dein Gerät nur über die Sicherung (Abschnitt 5) oder wenn du selbst ein Backup exportierst.",
          en: "Your library – ratings, rating history, watchlist and status, watched episodes, franchises, lists, followed people, custom titles and images, and your settings – is stored on your device. The widgets read a small extract of it from a protected storage area of the app. Reminders for new episodes and releases are scheduled locally; iOS asks for your permission. This data only leaves your device through the backup (section 5) or when you export a backup yourself." },

        { t: "h2", de: "4. Anmeldung mit Apple", en: "4. Sign in with Apple" },
        { t: "p",
          de: "Zum Anmelden nutzt AeroMovies ausschließlich „Mit Apple anmelden“. Die App erhält dabei eine Nutzerkennung und – nur wenn du es freigibst – deinen Namen und deine E-Mail-Adresse (auf Wunsch eine anonyme Weiterleitungsadresse von Apple). Die Anmeldung wird über Firebase Authentication von Google abgewickelt, wo diese Angaben zu deinem Konto gespeichert werden. Beim Löschen deines Accounts wird auch die Verbindung zu deiner Apple-ID widerrufen.",
          en: "AeroMovies only uses “Sign in with Apple”. The app receives a user identifier and – only if you agree – your name and email address (optionally an anonymous relay address from Apple). Sign-in is handled by Google’s Firebase Authentication, where these details are stored with your account. When you delete your account, the link to your Apple ID is revoked as well." },
        { t: "p", de: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der Funktionen, die du nutzt).", en: "Legal basis: Art. 6(1)(b) GDPR (providing the features you use)." },

        { t: "h2", de: "5. Sicherung deiner Bibliothek", en: "5. Backing up your library" },
        { t: "p", de: "In den Einstellungen wählst du, wohin deine Bibliothek gesichert wird:", en: "In the settings you choose where your library is backed up:" },
        { t: "ul",
          de: ["<strong>iCloud (Standard):</strong> Die Daten liegen im privaten CloudKit-Bereich deines iCloud-Kontos bei Apple und werden zwischen deinen Geräten abgeglichen. Wir haben darauf keinen Zugriff. Dafür brauchst du kein AeroMovies-Konto.",
               "<strong>Firebase:</strong> Die Daten liegen verschlüsselt übertragen in Cloud Firestore (Google) unter deiner Nutzerkennung. Nur du kannst sie lesen und ändern. Dafür ist die Anmeldung mit Apple nötig."],
          en: ["<strong>iCloud (default):</strong> The data is stored in the private CloudKit area of your iCloud account at Apple and synced between your devices. We have no access to it. No AeroMovies account is needed.",
               "<strong>Firebase:</strong> The data is transferred encrypted and stored in Cloud Firestore (Google) under your user identifier. Only you can read and change it. This requires Sign in with Apple."] },
        { t: "p", de: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.", en: "Legal basis: Art. 6(1)(b) GDPR." },

        { t: "h2", de: "6. Online-Vergleich (freiwillig)", en: "6. Online comparison (optional)" },
        { t: "p",
          de: "Nur wenn du dich unter „Vergleich“ ausdrücklich sichtbar machst, werden ein von dir gewählter Benutzername, dein Anzeigename, Zähler und Durchschnitte deiner Bewertungen, deine Top- und Flop-Titel, deine Merkliste und die Liste der Titel, die du gesehen hast, in Firestore abgelegt. Andere angemeldete Personen können dich dann über Benutzername oder Namen finden und ihre Bibliothek mit deiner vergleichen. Mit „Unsichtbar machen“ werden diese Daten wieder entfernt.",
          en: "Only if you explicitly make yourself visible under “Compare” are a username you choose, your display name, counts and averages of your ratings, your top and flop titles, your watchlist and the list of titles you have seen stored in Firestore. Other signed-in people can then find you by username or name and compare their library with yours. “Make invisible” removes this data again." },
        { t: "p", de: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (die Funktion, die du einschaltest).", en: "Legal basis: Art. 6(1)(b) GDPR (the feature you switch on)." },

        { t: "h2", de: "7. Gemeinsame Listen", en: "7. Shared lists" },
        { t: "p",
          de: "Eine gemeinsame Liste legst du an und lädst Personen aus dem Online-Vergleich ein. Gespeichert werden der Name der Liste, die Nutzerkennungen und Anzeigenamen der Mitglieder, die hinzugefügten Titel (mit der Angabe, wer sie hinzugefügt hat) und die Stimmen. Alle Mitglieder sehen diese Angaben. Wer die Liste anlegt, kann sie löschen; Mitglieder können jederzeit austreten.",
          en: "You create a shared list and invite people from the online comparison. The list name, the members’ user identifiers and display names, the added titles (including who added them) and the votes are stored. All members can see this information. The creator can delete the list; members can leave at any time." },
        { t: "p", de: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.", en: "Legal basis: Art. 6(1)(b) GDPR." },

        { t: "h2", de: "8. Melden und Blockieren", en: "8. Reporting and blocking" },
        { t: "p",
          de: "Du kannst Profile und gemeinsame Listen melden und Personen blockieren. Bei einer Meldung speichern wir deine Nutzerkennung, die Kennung und den Namen der gemeldeten Person, ggf. Kennung und Namen der Liste, den Grund, deinen optionalen Hinweis und den Zeitpunkt. Die gemeldete Person erfährt nicht, wer sie gemeldet hat. Meldungen werden nach ihrer Bearbeitung gelöscht, spätestens nach 12 Monaten. Wen du blockiert hast, wird unter deiner Nutzerkennung gespeichert, damit blockierte Personen dein Profil nicht öffnen und dich nicht zu Listen hinzufügen können.",
          en: "You can report profiles and shared lists and block people. For a report we store your user identifier, the identifier and name of the reported person, where applicable the list’s identifier and name, the reason, your optional note and the time. The reported person is not told who reported them. Reports are deleted once handled, at the latest after 12 months. Who you have blocked is stored under your user identifier so blocked people cannot open your profile or add you to lists." },
        { t: "p", de: "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Schutz der Nutzer:innen vor Missbrauch).", en: "Legal basis: Art. 6(1)(f) GDPR (protecting users from abuse)." },

        { t: "h2", de: "9. Film- und Seriendaten (TMDB)", en: "9. Movie and TV data (TMDB)" },
        { t: "p",
          de: "Titel, Poster, Besetzung und Streaming-Angebote lädt die App direkt von The Movie Database (TMDB, USA). Dabei werden technisch bedingt deine IP-Adresse und die Anfrage (z. B. Titel-ID, Sprache, Region) an TMDB übertragen. Wir verknüpfen das nicht mit deinem Konto. Die Streaming-Angaben stellt JustWatch über TMDB bereit.",
          en: "The app loads titles, posters, cast and streaming offers directly from The Movie Database (TMDB, USA). For technical reasons your IP address and the request (e.g. title ID, language, region) are transmitted to TMDB. We do not link this to your account. Streaming information is provided by JustWatch through TMDB." },
        { t: "p", de: "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.", en: "Legal basis: Art. 6(1)(b) GDPR." },
        { t: "p", de: TMDB_NOTICE, en: TMDB_NOTICE },

        { t: "h2", de: "10. Empfänger und Speicherort", en: "10. Recipients and storage location" },
        { t: "ul",
          de: ["<strong>Google Ireland Limited</strong> (Firebase Authentication, Cloud Firestore) als Auftragsverarbeiter. Die Firestore-Datenbank liegt in der EU (Region europe-west3, Frankfurt am Main). Google kann Daten auch in den USA verarbeiten; Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert, zusätzlich gelten die Standardvertragsklauseln der EU-Kommission.",
               "<strong>Apple</strong> (Anmeldung mit Apple, iCloud/CloudKit, Mitteilungen, App Store) in eigener Verantwortung nach den Datenschutzbestimmungen von Apple.",
               "<strong>TMDB, Inc.</strong> (USA), siehe Abschnitt 9. Die Übermittlung ist nötig, damit die App Film- und Seriendaten anzeigen kann (Art. 49 Abs. 1 lit. b DSGVO)."],
          en: ["<strong>Google Ireland Limited</strong> (Firebase Authentication, Cloud Firestore) as processor. The Firestore database is located in the EU (region europe-west3, Frankfurt am Main). Google may also process data in the US; Google LLC is certified under the EU-US Data Privacy Framework, and the European Commission’s Standard Contractual Clauses apply in addition.",
               "<strong>Apple</strong> (Sign in with Apple, iCloud/CloudKit, notifications, App Store) as an independent controller under Apple’s privacy policy.",
               "<strong>TMDB, Inc.</strong> (USA), see section 9. The transfer is necessary for the app to show movie and TV data (Art. 49(1)(b) GDPR)."] },
        { t: "link", html: "<a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Firebase Privacy and Security</a> · <a href=\"https://www.apple.com/legal/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">Apple Privacy</a> · <a href=\"https://www.themoviedb.org/privacy-policy\" target=\"_blank\" rel=\"noopener noreferrer\">TMDB Privacy Policy</a>" },

        { t: "h2", de: "11. Kontakt per E-Mail", en: "11. Contact by email" },
        { t: "p",
          de: "Wenn du uns schreibst, verarbeiten wir deine Nachricht und deine E-Mail-Adresse, um dein Anliegen zu beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO), und löschen sie, wenn sie dafür nicht mehr gebraucht werden.",
          en: "If you write to us, we process your message and email address to answer your request (Art. 6(1)(b) or (f) GDPR) and delete them once they are no longer needed for that." },

        { t: "h2", de: "12. Speicherdauer und Löschung", en: "12. Retention and deletion" },
        { t: "p",
          de: "Deine Daten bleiben gespeichert, bis du sie löschst. Unter Einstellungen → „Account löschen“ entfernt die App sofort: deine Sicherung in Firebase und in iCloud, dein Vergleichsprofil und deinen Benutzernamen, deine Blockierliste, alle gemeinsamen Listen, die du angelegt hast (für alle Mitglieder), deine Mitgliedschaft in anderen Listen, dein Firebase-Konto und alle Daten auf dem Gerät. Die Verbindung zu deiner Apple-ID wird widerrufen. Titel, die du in fremde Listen eingetragen hast, bleiben dort ohne deine Mitgliedschaft stehen. Ohne Konto löschst du die Daten, indem du die App entfernst; eine iCloud-Sicherung lässt sich zusätzlich in den iOS-Einstellungen unter iCloud löschen.",
          en: "Your data is kept until you delete it. Under Settings → “Delete account” the app immediately removes: your backup in Firebase and in iCloud, your comparison profile and username, your block list, all shared lists you created (for all members), your membership in other lists, your Firebase account and all data on the device. The link to your Apple ID is revoked. Titles you added to other people’s lists remain there without your membership. Without an account, you delete the data by removing the app; an iCloud backup can also be deleted in the iOS settings under iCloud." },

        { t: "h2", de: "13. Deine Rechte", en: "13. Your rights" },
        { t: "p", de: "Du hast nach der DSGVO insbesondere das Recht auf:", en: "Under the GDPR you have in particular the right to:" },
        { t: "ul", de: RIGHTS.de, en: RIGHTS.en },
        { t: "p",
          de: "Eine Kopie deiner Bibliothek kannst du jederzeit in den Einstellungen als Backup exportieren. Für alle anderen Anfragen schreib an <a href=\"mailto:{contactEmail}\">{contactEmail}</a>. Beschweren kannst du dich bei jeder Datenschutz-Aufsichtsbehörde, insbesondere in dem EU-Land, in dem du wohnst (Art. 77 DSGVO).",
          en: "You can export a copy of your library as a backup in the settings at any time. For all other requests write to <a href=\"mailto:{contactEmail}\">{contactEmail}</a>. You can lodge a complaint with any data protection supervisory authority, in particular in the EU country where you live (Art. 77 GDPR)." },

        { t: "h2", de: "14. Kinder", en: "14. Children" },
        { t: "p",
          de: "Für AeroMovies gilt die Altersfreigabe im App Store. Wer noch nicht 16 ist, sollte die Online-Funktionen (Konto, Online-Vergleich, gemeinsame Listen) nur mit Zustimmung der Eltern nutzen.",
          en: "The App Store age rating applies to AeroMovies. Anyone under 16 should only use the online features (account, online comparison, shared lists) with their parents’ consent." },

        { t: "h2", de: "15. Datensicherheit", en: "15. Data security" },
        { t: "p",
          de: "Alle Verbindungen sind verschlüsselt. In Firestore regeln Sicherheitsregeln, dass jede Person nur ihre eigenen Daten lesen und ändern kann und fremde Daten nur dort sieht, wo die andere Person sie freigegeben hat.",
          en: "All connections are encrypted. In Firestore, security rules ensure that each person can only read and change their own data and only sees other people’s data where they have shared it." },

        { t: "h2", de: "16. Änderungen", en: "16. Changes" },
        { t: "p",
          de: "Wenn sich die App oder die Rechtslage ändert, passen wir diese Erklärung an. Es gilt die hier veröffentlichte Fassung.",
          en: "If the app or the legal situation changes, we update this policy. The version published here applies." }
      ]
    },

    /* ====================================================================
       AeroMovies – Support
       ==================================================================== */
    "aeromovies.support": {
      hero: {
        eyebrow: { de: "Support", en: "Support", fr: "Assistance" },
        title: { de: "Wir helfen dir weiter.", en: "We’re here to help.", fr: "Nous sommes là pour vous aider." },
        lead: {
          de: "Hier findest du Kontaktinformationen und Antworten auf häufige Fragen rund um AeroMovies.",
          en: "Find contact information and answers to common questions about AeroMovies.",
          fr: "Retrouvez ici les coordonnées de contact et les réponses aux questions fréquentes sur AeroMovies."
        }
      },
      blocks: [
        { t: "h2", de: "Kontakt", en: "Contact", fr: "Contact" },
        { t: "info", items: [
          { label: { de: "E-Mail", en: "Email", fr: "E-mail" }, value: "<a href=\"mailto:{contactEmail}\">{contactEmail}</a>" },
          { label: { de: "Typische Antwortzeit", en: "Typical response time", fr: "Délai de réponse habituel" },
            value: { de: "meist innerhalb von 1–2 Tagen", en: "usually within 1–2 days", fr: "généralement sous 1 à 2 jours" } }
        ] },
        { t: "p",
          de: "Bitte beschreibe dein Anliegen möglichst genau und nenne wenn möglich deine iOS-Version sowie die App-Version.",
          en: "Please describe your issue as clearly as possible and include your iOS version and app version if available.",
          fr: "Veuillez décrire votre problème aussi précisément que possible et indiquer, si possible, votre version d’iOS ainsi que la version de l’application." },

        { t: "h2", de: "Häufige Fragen (FAQ)", en: "Frequently Asked Questions", fr: "Questions fréquentes (FAQ)" },

        { t: "h3", de: "Konto &amp; Anmeldung", en: "Account &amp; Sign-in", fr: "Compte &amp; connexion" },
        { t: "faq", items: [
          { q: { de: "Wie melde ich mich an?", en: "How do I sign in?", fr: "Comment me connecter ?" },
            a: { de: "Mit „Mit Apple anmelden“ beim ersten Start oder später unter Profil → Einstellungen. Ohne Konto kannst du AeroMovies auch nutzen; dann bleibt alles auf deinem Gerät bzw. in deiner iCloud.", en: "With “Sign in with Apple” on first launch or later under Profile → Settings. You can also use AeroMovies without an account; everything then stays on your device or in your iCloud." } },
          { q: { de: "Wie kann ich mein Konto löschen?", en: "How can I delete my account?", fr: "Comment supprimer mon compte ?" },
            a: { de: "In der App unter Profil → Einstellungen → „Account löschen“. Nach einer Bestätigung mit Apple werden dein Konto und alle Daten sofort gelöscht. Details stehen in der <a href=\"{root}aeromovies/privacy/\">Datenschutzerklärung</a>.", en: "In the app under Profile → Settings → “Delete account”. After confirming with Apple, your account and all data are deleted immediately. Details are in the <a href=\"{root}aeromovies/privacy/\">Privacy Policy</a>." } }
        ] },

        { t: "h3", de: "Soziale Funktionen", en: "Social features", fr: "Fonctions sociales" },
        { t: "faq", items: [
          { q: { de: "Wie finde ich andere Nutzer:innen?", en: "How do I find other users?", fr: "Comment trouver d’autres utilisateurs ?" },
            a: { de: "Unter Profil → Vergleich suchst du nach Benutzername oder Namen. Gefunden werden nur Personen, die sich dort sichtbar gemacht haben.", en: "Under Profile → Compare you search by username or name. Only people who made themselves visible there can be found." } },
          { q: { de: "Wie vergleiche ich Profile?", en: "How do I compare profiles?", fr: "Comment comparer des profils ?" },
            a: { de: "Tippe in der Suche unter Profil → Vergleich auf die Person. Du siehst dann, wie ähnlich euer Geschmack ist, wo ihr euch einig seid und was ihr zusammen schauen könntet. Ohne Konto geht das auch per Snapshot-Datei.", en: "Tap the person in the search under Profile → Compare. You then see how similar your taste is, where you agree and what you could watch together. Without an account this also works with a snapshot file." } },
          { q: { de: "Wie funktionieren gemeinsame Listen?", en: "How do shared lists work?", fr: "Comment fonctionnent les listes partagées ?" },
            a: { de: "Unter Profil → Listen → Gemeinsame Listen legst du eine Liste an und lädst Personen aus dem Vergleich ein. Alle Mitglieder können Titel hinzufügen und mit 👍 abstimmen. Wer die Liste angelegt hat, kann einladen und sie löschen; alle anderen können jederzeit austreten.", en: "Under Profile → Lists → Shared lists you create a list and invite people from Compare. All members can add titles and vote with 👍. The creator can invite people and delete the list; everyone else can leave at any time." } },
          { q: { de: "Kann ich von anderen gefunden werden?", en: "Can I be found by other users?", fr: "Puis-je être trouvé par d’autres utilisateurs ?" },
            a: { de: "Nur wenn du dich unter Profil → Vergleich sichtbar machst. Mit „Unsichtbar machen“ verschwindest du wieder. Personen, die dich stören, kannst du melden oder blockieren (Menü ⋯ auf ihrem Profil).", en: "Only if you make yourself visible under Profile → Compare. “Make invisible” removes you again. You can report or block people who bother you (⋯ menu on their profile)." } }
        ] },

        { t: "h3", de: "Film- und Serieninformationen", en: "Movie and TV information", fr: "Informations sur les films et séries" },
        { t: "faq", items: [
          { q: { de: "Woher stammen die Film- und Serieninformationen?", en: "Where does the movie and TV information come from?", fr: "D’où proviennent les informations sur les films et séries ?" },
            a: { de: "Die Informationen stammen von TMDB. Dieses Produkt nutzt die TMDB-API, wird von TMDB aber weder unterstützt noch zertifiziert.", en: "The information comes from TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB.", fr: "Les informations proviennent de TMDB. Ce produit utilise l’API de TMDB mais n’est ni approuvé ni certifié par TMDB." } },
          { q: { de: "Eine Information ist falsch oder fehlt.", en: "Some information is wrong or missing.", fr: "Une information est erronée ou manquante." },
            a: { de: "Da die Daten von TMDB stammen, erfolgen Korrekturen an Titeln und Beschreibungen bei TMDB. Wenn dir ein Problem in der App selbst auffällt, schreib uns.", en: "Since the data comes from TMDB, corrections to titles and descriptions are made at TMDB. If you notice a problem in the app itself, please contact us.", fr: "Les données provenant de TMDB, les corrections des titres et descriptions se font auprès de TMDB. Si vous remarquez un problème dans l’application elle-même, contactez-nous." } },
          { q: { de: "Wann erscheint AeroMovies?", en: "When will AeroMovies be released?", fr: "Quand AeroMovies sortira-t-elle ?" },
            a: { de: "AeroMovies ist bald im App Store verfügbar.", en: "AeroMovies is coming soon to the App Store." } }
        ] },

        { t: "h3", de: "Datenschutz &amp; Daten", en: "Privacy &amp; Data", fr: "Confidentialité &amp; données" },
        { t: "faq", items: [
          { q: { de: "Welche Daten speichert AeroMovies über mich?", en: "What data does AeroMovies store about me?", fr: "Quelles données AeroMovies stocke-t-elle sur moi ?" },
            a: { de: "Details findest du in der <a href=\"{root}aeromovies/privacy/\">Datenschutzerklärung</a>.", en: "You can find details in the <a href=\"{root}aeromovies/privacy/\">Privacy Policy</a>.", fr: "Vous trouverez les détails dans la <a href=\"{root}aeromovies/privacy/\">politique de confidentialité</a>." } },
          { q: { de: "Wie kann ich meine Daten einsehen oder exportieren?", en: "How can I access or export my data?", fr: "Comment consulter ou exporter mes données ?" },
            a: { de: "Schreibe eine E-Mail an {contactEmail} mit dem Betreff „Datenschutz – Auskunft“. Wir antworten innerhalb der gesetzlich vorgesehenen Frist.", en: "Send an email to {contactEmail} with the subject “Privacy – Access Request”. We will respond within the legally required timeframe.", fr: "Envoyez un e-mail à {contactEmail} avec l’objet « Confidentialité – Demande d’accès ». Nous répondrons dans le délai prévu par la loi." } }
        ] },

        { t: "h3", de: "Technische Probleme", en: "Technical problems", fr: "Problèmes techniques" },
        { t: "faq", items: [
          { q: { de: "Die App stürzt ab oder friert ein. Was soll ich tun?", en: "The app crashes or freezes. What should I do?", fr: "L’application plante ou se fige. Que faire ?" },
            a: { de: ["App vollständig schließen und neu starten", "iOS-Updates prüfen", "App-Updates im App Store prüfen", "App bei Bedarf neu installieren"], en: ["fully close and restart the app", "check for iOS updates", "check for updates in the App Store", "reinstall the app if needed"], fr: ["fermer complètement l’application et la relancer", "vérifier les mises à jour d’iOS", "vérifier les mises à jour dans l’App Store", "réinstaller l’application si nécessaire"] } },
          { q: { de: "Meine Daten werden nicht synchronisiert.", en: "My data is not syncing.", fr: "Mes données ne se synchronisent pas." },
            a: { de: "Prüf zuerst die Internetverbindung und starte die App neu. Unter Profil → Einstellungen siehst du, wohin gesichert wird (iCloud oder Firebase) und wann zuletzt. Für iCloud musst du in den iOS-Einstellungen bei iCloud angemeldet sein, für Firebase in AeroMovies mit Apple. Geänderte Daten werden nicht sofort, sondern nach wenigen Minuten bzw. beim Schließen der App hochgeladen.", en: "First check your internet connection and restart the app. Under Profile → Settings you can see where your data is backed up (iCloud or Firebase) and when it last happened. For iCloud you must be signed in to iCloud in the iOS settings, for Firebase signed in to AeroMovies with Apple. Changes are uploaded after a few minutes or when you close the app, not instantly." } }
        ] },

        { t: "h2", de: "Feedback", en: "Feedback", fr: "Retours" },
        { t: "p",
          de: "Wir freuen uns über jede Rückmeldung. Schreib uns an <a href=\"mailto:{contactEmail}\">{contactEmail}</a>.",
          en: "We appreciate every message. Send us feedback at <a href=\"mailto:{contactEmail}\">{contactEmail}</a>.",
          fr: "Nous apprécions chaque message. Envoyez-nous vos retours à <a href=\"mailto:{contactEmail}\">{contactEmail}</a>." }
      ]
    }
  });
})();
