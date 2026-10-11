/*
 * AeroMovies – Datenschutzerklärung und Support-FAQ
 *
 * ENTWURF, NICHT ANWALTLICH GEPRÜFT.
 * Grundlage: Angaben des Betreibers (Firebase/Firestore, iCloud, Anmeldung mit Apple, TMDB,
 * Benutzernamen, Profilvergleich, gemeinsame Listen) und Aufbau der AeroBooks-Datenschutzerklärung.
 * Alles Unklare ist als [TODO: …] markiert und erscheint auf der Seite gelb hervorgehoben.
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
       AeroMovies – Datenschutzerklärung
       ==================================================================== */
    "aeromovies.privacy": {
      hero: {
        eyebrow: { de: "Datenschutzerklärung", en: "Privacy Policy", fr: "Politique de confidentialité" },
        title: { de: "Deine Privatsphäre ist wichtig.", en: "Your privacy matters.", fr: "Votre vie privée compte." },
        lead: {
          de: "Diese Seite erklärt, welche Daten AeroMovies verarbeitet, wie Firebase und iCloud genutzt werden, wie die sozialen Funktionen arbeiten und welche Rechte du in Bezug auf deine personenbezogenen Daten hast.",
          en: "This page explains which data AeroMovies processes, how Firebase and iCloud are used, how the social features work, and which rights you have regarding your personal data.",
          fr: "Cette page explique quelles données AeroMovies traite, comment Firebase et iCloud sont utilisés, comment fonctionnent les fonctions sociales et quels droits vous avez sur vos données personnelles."
        }
      },
      blocks: [
        { t: "p",
          de: "[TODO: ENTWURF – vor Veröffentlichung rechtlich prüfen lassen und alle TODOs in diesem Text ausfüllen oder streichen]",
          en: "[TODO: DRAFT – have this reviewed legally before publishing and fill in or remove all TODOs in this text]",
          fr: "[TODO: PROJET – faire vérifier juridiquement avant publication et compléter ou supprimer tous les TODO de ce texte]" },
        { t: "p",
          de: "<strong>Stand:</strong> [TODO: Datum eintragen]",
          en: "<strong>Last updated:</strong> [TODO: enter date]",
          fr: "<strong>Dernière mise à jour :</strong> [TODO: indiquer la date]" },

        { t: "h2", de: "1. Verantwortlicher", en: "1. Controller", fr: "1. Responsable du traitement" },
        { t: "p",
          de: "Verantwortlich für die Datenverarbeitung im Sinne der anwendbaren Datenschutzgesetze ist:",
          en: "The controller responsible for data processing within the meaning of applicable privacy laws is:",
          fr: "Le responsable du traitement des données au sens des lois applicables en matière de protection des données est :" },
        { t: "info", items: [
          { label: { de: "Name", en: "Name", fr: "Nom" }, value: "[TODO: Name – wie im Impressum]" },
          { label: { de: "Anschrift", en: "Address", fr: "Adresse" }, value: "[TODO: Anschrift – wie im Impressum]" },
          { label: { de: "E-Mail", en: "Email", fr: "E-mail" }, value: "<a href=\"mailto:{contactEmail}\">{contactEmail}</a>" }
        ] },

        { t: "h2", de: "2. Überblick", en: "2. Overview", fr: "2. Aperçu" },
        { t: "p",
          de: "AeroMovies ist eine App zum Tracken von Filmen und Serien. Die Film- und Serieninformationen stammen von TMDB. Die App enthält soziale Funktionen: Du kannst andere Nutzer:innen per Benutzername finden, Profile vergleichen und gemeinsame Listen führen. Diese Datenschutzerklärung erklärt, welche Daten verarbeitet werden können, warum dies geschieht und welche Rechte du hast.",
          en: "AeroMovies is an app for tracking movies and TV shows. Movie and TV information comes from TMDB. The app includes social features: you can find other users by username, compare profiles and keep shared lists. This Privacy Policy explains which data may be processed, why it is processed, and what rights you have.",
          fr: "AeroMovies est une app de suivi de films et de séries. Les informations sur les films et séries proviennent de TMDB. L’application comprend des fonctions sociales : vous pouvez trouver d’autres utilisateurs par nom d’utilisateur, comparer des profils et gérer des listes partagées. Cette politique de confidentialité explique quelles données peuvent être traitées, pourquoi elles le sont et quels droits vous avez." },
        { t: "p",
          de: "Wir verarbeiten nur Daten, die erforderlich sind, um die App, Konten, Synchronisierung, soziale Funktionen, Support und Sicherheit bereitzustellen.",
          en: "We only process data that is necessary to provide the app, accounts, synchronization, social features, support and security.",
          fr: "Nous ne traitons que les données nécessaires pour fournir l’application, les comptes, la synchronisation, les fonctions sociales, l’assistance et la sécurité." },

        { t: "h2", de: "3. Kategorien verarbeiteter Daten", en: "3. Categories of data processed", fr: "3. Catégories de données traitées" },

        { t: "h3", de: "3.1 Kontodaten und Anmeldung mit Apple", en: "3.1 Account data and Sign in with Apple", fr: "3.1 Données de compte et connexion avec Apple" },
        { t: "p",
          de: "Die Anmeldung erfolgt mit „Anmelden mit Apple“. Dabei erhält AeroMovies von Apple eine nutzerbezogene Kennung und – je nach deiner Auswahl bei der Anmeldung – deinen Namen sowie deine E-Mail-Adresse oder eine von Apple erzeugte Weiterleitungsadresse.",
          en: "Sign-in uses “Sign in with Apple”. AeroMovies receives a user-specific identifier from Apple and – depending on your choice during sign-in – your name and either your email address or an email relay address generated by Apple.",
          fr: "La connexion s’effectue avec « Se connecter avec Apple ». AeroMovies reçoit alors d’Apple un identifiant propre à l’utilisateur et – selon votre choix lors de la connexion – votre nom ainsi que votre adresse e-mail ou une adresse de transfert générée par Apple." },
        { t: "ul",
          de: ["nutzerbezogene Kennung", "Name und E-Mail-Adresse bzw. Weiterleitungsadresse, soweit du sie bei der Anmeldung freigibst", "Benutzername", "[TODO: weitere Kontodaten, falls vorhanden]"],
          en: ["user-specific identifier", "name and email address or relay address, to the extent you share them during sign-in", "username", "[TODO: further account data, if any]"],
          fr: ["identifiant propre à l’utilisateur", "nom et adresse e-mail ou adresse de transfert, dans la mesure où vous les partagez lors de la connexion", "nom d’utilisateur", "[TODO: autres données de compte, le cas échéant]"] },
        { t: "p",
          de: "[TODO: bestätigen, ob Firebase Authentication für die Anmeldung genutzt wird, und ggf. hier ergänzen]",
          en: "[TODO: confirm whether Firebase Authentication is used for sign-in and add it here if so]",
          fr: "[TODO: confirmer si Firebase Authentication est utilisé pour la connexion et l’ajouter ici le cas échéant]" },

        { t: "h3", de: "3.2 Profildaten", en: "3.2 Profile data", fr: "3.2 Données de profil" },
        { t: "ul",
          de: ["Benutzername (für andere Nutzer:innen suchbar)", "[TODO: weitere Profilangaben, z. B. Anzeigename oder Profilbild, falls vorhanden]", "[TODO: Profileinstellungen, falls vorhanden]"],
          en: ["username (searchable by other users)", "[TODO: further profile details, e.g. display name or profile picture, if any]", "[TODO: profile settings, if any]"],
          fr: ["nom d’utilisateur (recherchable par d’autres utilisateurs)", "[TODO: autres informations de profil, par ex. nom d’affichage ou photo de profil, le cas échéant]", "[TODO: réglages du profil, le cas échéant]"] },

        { t: "h3", de: "3.3 Film- und Serien-Daten", en: "3.3 Movie and TV data", fr: "3.3 Données de films et de séries" },
        { t: "p",
          de: "Daten, die du in der App zu Filmen und Serien speicherst, zum Beispiel:",
          en: "Data you store in the app about movies and TV shows, for example:",
          fr: "Données que vous enregistrez dans l’application au sujet de films et de séries, par exemple :" },
        { t: "ul",
          de: ["Titel in deinen Listen und in deinem Profil", "gemeinsame Listen und ihre Mitglieder", "[TODO: weitere Datenarten, z. B. Status, Bewertungen, Notizen – nur angeben, was die App tatsächlich speichert]"],
          en: ["titles in your lists and in your profile", "shared lists and their members", "[TODO: further data types, e.g. status, ratings, notes – only list what the app actually stores]"],
          fr: ["titres dans vos listes et dans votre profil", "listes partagées et leurs membres", "[TODO: autres types de données, par ex. statut, notes, remarques – n’indiquer que ce que l’application enregistre réellement]"] },

        { t: "h3", de: "3.4 Speicherung und Synchronisierung (Firebase/Firestore, iCloud)", en: "3.4 Storage and synchronization (Firebase/Firestore, iCloud)", fr: "3.4 Stockage et synchronisation (Firebase/Firestore, iCloud)" },
        { t: "p",
          de: "AeroMovies nutzt Google Firebase (Cloud Firestore), um Daten zu speichern und für Konto- und soziale Funktionen bereitzustellen. Dies ist erforderlich, damit konto- und onlinebasierte Funktionen zuverlässig funktionieren.",
          en: "AeroMovies uses Google Firebase (Cloud Firestore) to store data and make it available for account and social features. This is necessary so that account-based and online features work reliably.",
          fr: "AeroMovies utilise Google Firebase (Cloud Firestore) pour stocker des données et les mettre à disposition des fonctions de compte et des fonctions sociales. Cela est nécessaire pour que les fonctions liées au compte et en ligne fonctionnent de manière fiable." },
        { t: "p",
          de: "Zusätzlich wird iCloud (Apple) genutzt. [TODO: Zweck und Umfang der iCloud-Nutzung beschreiben, z. B. Geräte-Synchronisierung oder Sicherung]",
          en: "iCloud (Apple) is also used. [TODO: describe the purpose and scope of iCloud use, e.g. device synchronization or backup]",
          fr: "iCloud (Apple) est également utilisé. [TODO: décrire la finalité et l’étendue de l’utilisation d’iCloud, par ex. synchronisation entre appareils ou sauvegarde]" },
        { t: "p",
          de: "Je nach genutzten Funktionen können in Firebase gespeichert werden:",
          en: "Depending on the features used, Firebase may store:",
          fr: "Selon les fonctions utilisées, Firebase peut stocker :" },
        { t: "ul",
          de: ["kontobezogene Daten und Nutzerkennungen", "Profildaten (z. B. Benutzername)", "Film- und Serien-Daten sowie Listen", "soziale Verbindungen und gemeinsame Listen", "technische Informationen, die für Synchronisierung und App-Betrieb erforderlich sind"],
          en: ["account-related data and user identifiers", "profile data (e.g. username)", "movie and TV data and lists", "social connections and shared lists", "technical information needed for synchronization and app operation"],
          fr: ["données liées au compte et identifiants d’utilisateur", "données de profil (par ex. nom d’utilisateur)", "données de films et de séries ainsi que listes", "liens sociaux et listes partagées", "informations techniques nécessaires à la synchronisation et au fonctionnement de l’application"] },
        { t: "p",
          de: "[TODO: Firestore-Region / Serverstandort angeben (EU oder USA)]",
          en: "[TODO: state the Firestore region / server location (EU or US)]",
          fr: "[TODO: indiquer la région Firestore / le lieu des serveurs (UE ou États-Unis)]" },

        { t: "h3", de: "3.5 Soziale Funktionen", en: "3.5 Social features", fr: "3.5 Fonctions sociales" },
        { t: "p",
          de: "AeroMovies enthält soziale Funktionen. Je nach App-Einstellungen und Funktionsdesign können Nutzer:innen andere Nutzer:innen finden, Profile vergleichen und gemeinsame Listen führen.",
          en: "AeroMovies includes social features. Depending on app settings and feature design, users may be able to find other users, compare profiles and keep shared lists.",
          fr: "AeroMovies comprend des fonctions sociales. Selon les réglages de l’application et la conception des fonctions, les utilisateurs peuvent trouver d’autres utilisateurs, comparer des profils et gérer des listes partagées." },
        { t: "ul",
          de: ["dein Benutzername kann für andere Nutzer:innen suchbar sein", "andere Nutzer:innen können ihr Profil mit deinem vergleichen [TODO: festlegen, welche Profildaten dabei sichtbar sind]", "in gemeinsamen Listen sind die Inhalte der Liste für alle Mitglieder sichtbar"],
          en: ["your username may be searchable by other users", "other users may be able to compare their profile with yours [TODO: specify which profile data is visible]", "in shared lists, the contents of the list are visible to all members"],
          fr: ["votre nom d’utilisateur peut être recherché par d’autres utilisateurs", "d’autres utilisateurs peuvent comparer leur profil avec le vôtre [TODO: préciser quelles données de profil sont visibles]", "dans les listes partagées, le contenu de la liste est visible par tous les membres"] },
        { t: "p",
          de: "[TODO: Privatsphäre-Einstellungen beschreiben (z. B. öffentlich/privat, Blockieren, Melden), falls vorhanden – sonst Satz streichen]",
          en: "[TODO: describe privacy settings (e.g. public/private, blocking, reporting), if any – otherwise delete this sentence]",
          fr: "[TODO: décrire les réglages de confidentialité (par ex. public/privé, blocage, signalement), le cas échéant – sinon supprimer cette phrase]" },

        { t: "h3", de: "3.6 Film- und Serieninformationen von TMDB", en: "3.6 Movie and TV information from TMDB", fr: "3.6 Informations sur les films et séries de TMDB" },
        { t: "p",
          de: "Film- und Serieninformationen werden über die Schnittstelle (API) von The Movie Database (TMDB) abgerufen. Dabei werden Suchanfragen und Abrufe von Titeln an TMDB übermittelt. [TODO: bestätigen, ob die Anfragen direkt vom Gerät oder über einen eigenen Server erfolgen – bei direkten Anfragen erhält TMDB technisch bedingt die IP-Adresse des Geräts]",
          en: "Movie and TV information is retrieved through the interface (API) of The Movie Database (TMDB). Search queries and title lookups are sent to TMDB for this purpose. [TODO: confirm whether requests are made directly from the device or via your own server – with direct requests TMDB technically receives the device’s IP address]",
          fr: "Les informations sur les films et séries sont récupérées via l’interface (API) de The Movie Database (TMDB). Les requêtes de recherche et de consultation de titres sont transmises à TMDB à cet effet. [TODO: confirmer si les requêtes sont effectuées directement depuis l’appareil ou via un serveur propre – pour des requêtes directes, TMDB reçoit techniquement l’adresse IP de l’appareil]" },
        { t: "p", de: TMDB_NOTICE, en: TMDB_NOTICE, fr: TMDB_NOTICE },

        { t: "h3", de: "3.7 Analytics und Absturzberichte", en: "3.7 Analytics and crash reports", fr: "3.7 Analyses et rapports de plantage" },
        { t: "p",
          de: "[TODO: angeben, ob Firebase Analytics, Firebase Crashlytics oder andere Dienste eingesetzt werden und welche Daten sie verarbeiten. Falls nein: diesen Abschnitt durch die Aussage ersetzen, dass keine Analyse- oder Tracking-Dienste eingesetzt werden.]",
          en: "[TODO: state whether Firebase Analytics, Firebase Crashlytics or other services are used and which data they process. If not: replace this section with a statement that no analytics or tracking services are used.]",
          fr: "[TODO: indiquer si Firebase Analytics, Firebase Crashlytics ou d’autres services sont utilisés et quelles données ils traitent. Sinon : remplacer cette section par la mention qu’aucun service d’analyse ou de suivi n’est utilisé.]" },

        { t: "h3", de: "3.8 Käufe und Abonnements", en: "3.8 Purchases and subscriptions", fr: "3.8 Achats et abonnements" },
        { t: "p",
          de: "[TODO: ausfüllen, falls In-App-Käufe oder Abonnements angeboten werden (Abwicklung über Apple); andernfalls Abschnitt streichen]",
          en: "[TODO: fill in if in-app purchases or subscriptions are offered (handled by Apple); otherwise delete this section]",
          fr: "[TODO: compléter si des achats intégrés ou abonnements sont proposés (traités par Apple) ; sinon supprimer cette section]" },

        { t: "h3", de: "3.9 Support-Kommunikation", en: "3.9 Support communication", fr: "3.9 Communication avec l’assistance" },
        { t: "p",
          de: "Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine Nachricht und die darin enthaltenen Angaben, um dein Anliegen zu bearbeiten.",
          en: "If you contact us by email, we process your message and the information it contains in order to handle your request.",
          fr: "Si vous nous contactez par e-mail, nous traitons votre message et les informations qu’il contient afin de traiter votre demande." },

        { t: "h2", de: "4. Zwecke der Verarbeitung", en: "4. Purposes of processing", fr: "4. Finalités du traitement" },
        { t: "p", de: "Wir verarbeiten Daten insbesondere, um:", en: "We process data in particular to:", fr: "Nous traitons des données notamment pour :" },
        { t: "ul",
          de: ["die App und ihre Funktionen bereitzustellen", "Konten zu erstellen und zu verwalten (Anmeldung mit Apple)", "Daten zu speichern und zu synchronisieren", "soziale Funktionen zu ermöglichen (Benutzernamen-Suche, Profilvergleich, gemeinsame Listen)", "App-Sicherheit und technische Stabilität sicherzustellen", "auf Support-Anfragen zu antworten"],
          en: ["provide the app and its functions", "create and manage accounts (Sign in with Apple)", "store and synchronize data", "enable social features (username search, profile comparison, shared lists)", "ensure app security and technical stability", "respond to support requests"],
          fr: ["fournir l’application et ses fonctions", "créer et gérer des comptes (connexion avec Apple)", "stocker et synchroniser des données", "permettre les fonctions sociales (recherche par nom d’utilisateur, comparaison de profils, listes partagées)", "garantir la sécurité de l’application et sa stabilité technique", "répondre aux demandes d’assistance"] },

        { t: "h2", de: "5. Rechtsgrundlagen nach DSGVO", en: "5. Legal bases under GDPR", fr: "5. Bases juridiques selon le RGPD" },
        { t: "ul",
          de: ["Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung, insbesondere für Konten, Speicherung und App-Funktionen", "Art. 6 Abs. 1 lit. f DSGVO – berechtigte Interessen, insbesondere für Sicherheit und Stabilität", "Art. 6 Abs. 1 lit. a DSGVO – Einwilligung, soweit diese erforderlich ist, z. B. bei der Freigabe von Name und E-Mail-Adresse bei „Anmelden mit Apple“", "Art. 6 Abs. 1 lit. c DSGVO – Erfüllung rechtlicher Pflichten, soweit anwendbar"],
          en: ["Art. 6(1)(b) GDPR – performance of a contract, especially for accounts, storage and app features", "Art. 6(1)(f) GDPR – legitimate interests, especially for security and stability", "Art. 6(1)(a) GDPR – consent, where required, for example when sharing your name and email address with “Sign in with Apple”", "Art. 6(1)(c) GDPR – compliance with legal obligations where applicable"],
          fr: ["art. 6, par. 1, point b) RGPD – exécution d’un contrat, notamment pour les comptes, le stockage et les fonctions de l’application", "art. 6, par. 1, point f) RGPD – intérêts légitimes, notamment pour la sécurité et la stabilité", "art. 6, par. 1, point a) RGPD – consentement, lorsqu’il est requis, par exemple lors du partage de votre nom et de votre adresse e-mail avec « Se connecter avec Apple »", "art. 6, par. 1, point c) RGPD – respect d’obligations légales, le cas échéant"] },
        { t: "p",
          de: "[TODO: Rechtsgrundlagen anhand der tatsächlichen Verarbeitungen prüfen]",
          en: "[TODO: verify the legal bases against the actual processing activities]",
          fr: "[TODO: vérifier les bases juridiques au regard des traitements réellement effectués]" },

        { t: "h2", de: "6. Empfänger und Drittanbieter-Dienste", en: "6. Recipients and third-party services", fr: "6. Destinataires et services tiers" },
        { t: "p", de: "AeroMovies nutzt Drittanbieter, insbesondere:", en: "AeroMovies uses third-party providers, in particular:", fr: "AeroMovies fait appel à des prestataires tiers, notamment :" },
        { t: "ul",
          de: ["Apple (App Store, Anmeldung mit Apple, iCloud, Systemdienste)", "Google Firebase / Cloud Firestore (Datenbank und Speicherung)", "The Movie Database – TMDB (Film- und Serieninformationen)", "[TODO: weitere Dienste, falls vorhanden]"],
          en: ["Apple (App Store, Sign in with Apple, iCloud, system services)", "Google Firebase / Cloud Firestore (database and storage)", "The Movie Database – TMDB (movie and TV information)", "[TODO: further services, if any]"],
          fr: ["Apple (App Store, connexion avec Apple, iCloud, services système)", "Google Firebase / Cloud Firestore (base de données et stockage)", "The Movie Database – TMDB (informations sur les films et séries)", "[TODO: autres services, le cas échéant]"] },
        { t: "link", html: "<a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Firebase Privacy and Security</a> · <a href=\"https://www.themoviedb.org/privacy-policy\" target=\"_blank\" rel=\"noopener noreferrer\">TMDB Privacy Policy</a>" },

        { t: "h2", de: "7. Internationale Datenübermittlungen", en: "7. International data transfers", fr: "7. Transferts internationaux de données" },
        { t: "p",
          de: "Daten können in Ländern außerhalb deines Wohnsitzlandes verarbeitet werden, einschließlich der USA. Soweit erforderlich, werden geeignete Garantien wie Standardvertragsklauseln verwendet. [TODO: anhand der gewählten Firestore-Region und der Anbieter prüfen und konkretisieren]",
          en: "Data may be processed in countries outside your country of residence, including the United States. Where required, appropriate safeguards such as Standard Contractual Clauses may be used. [TODO: verify and specify based on the chosen Firestore region and the providers]",
          fr: "Les données peuvent être traitées dans des pays situés en dehors de votre pays de résidence, y compris aux États-Unis. Lorsque cela est nécessaire, des garanties appropriées, telles que des clauses contractuelles types, peuvent être utilisées. [TODO: vérifier et préciser en fonction de la région Firestore choisie et des prestataires]" },

        { t: "h2", de: "8. Speicherdauer und Löschung", en: "8. Data retention and deletion", fr: "8. Durée de conservation et suppression" },
        { t: "p",
          de: "Wir speichern personenbezogene Daten nur so lange, wie dies für die genannten Zwecke erforderlich ist, sofern keine längere gesetzliche Aufbewahrungspflicht besteht.",
          en: "We store personal data only as long as necessary for the stated purposes, unless longer retention is required by law.",
          fr: "Nous ne conservons les données personnelles que le temps nécessaire aux finalités indiquées, sauf si une conservation plus longue est exigée par la loi." },
        { t: "ul",
          de: ["kontobezogene Daten werden grundsätzlich gespeichert, solange dein Konto besteht", "[TODO: konkrete Speicherdauer für Profil-, Listen- und Sozialdaten festlegen]", "[TODO: Löschung von Konten beschreiben – wie (in der App oder per E-Mail), welche Daten gelöscht werden und innerhalb welcher Frist]", "[TODO: festlegen, was mit gemeinsamen Listen passiert, wenn ein Mitglied sein Konto löscht]", "Support-Daten können so lange gespeichert werden, wie dies zur Bearbeitung und Dokumentation des Anliegens erforderlich ist"],
          en: ["account-related data is generally stored while your account exists", "[TODO: set concrete retention periods for profile, list and social data]", "[TODO: describe account deletion – how (in the app or by email), which data is deleted and within what period]", "[TODO: define what happens to shared lists when a member deletes their account]", "support data may be stored as long as required to handle and document the request"],
          fr: ["les données liées au compte sont en principe conservées tant que votre compte existe", "[TODO: fixer les durées de conservation concrètes pour les données de profil, de listes et sociales]", "[TODO: décrire la suppression du compte – comment (dans l’application ou par e-mail), quelles données sont supprimées et dans quel délai]", "[TODO: définir ce qui arrive aux listes partagées lorsqu’un membre supprime son compte]", "les données d’assistance peuvent être conservées aussi longtemps que nécessaire pour traiter et documenter la demande"] },

        { t: "h2", de: "9. Deine Rechte", en: "9. Your rights", fr: "9. Vos droits" },
        { t: "p", de: "Je nach anwendbarem Recht kannst du insbesondere folgende Rechte haben:", en: "Depending on applicable law, you may have the right to:", fr: "Selon le droit applicable, vous pouvez notamment avoir le droit de :" },
        { t: "ul", de: RIGHTS.de, en: RIGHTS.en, fr: RIGHTS.fr },
        { t: "p",
          de: "Datenschutzanfragen kannst du senden an: <a href=\"mailto:{contactEmail}\">{contactEmail}</a>",
          en: "Privacy requests can be sent to: <a href=\"mailto:{contactEmail}\">{contactEmail}</a>",
          fr: "Les demandes relatives à la protection des données peuvent être envoyées à : <a href=\"mailto:{contactEmail}\">{contactEmail}</a>" },
        { t: "p",
          de: "[TODO: zuständige Datenschutz-Aufsichtsbehörde eintragen]",
          en: "[TODO: enter the competent data protection supervisory authority]",
          fr: "[TODO: indiquer l’autorité de contrôle de la protection des données compétente]" },

        { t: "h2", de: "10. Kinder", en: "10. Children", fr: "10. Enfants" },
        { t: "p",
          de: "[TODO: Altersfreigabe und Zielgruppe der App angeben und die Aussage zu Kindern entsprechend formulieren]",
          en: "[TODO: state the age rating and target audience of the app and word the statement on children accordingly]",
          fr: "[TODO: indiquer la classification d’âge et le public cible de l’application et formuler la déclaration sur les enfants en conséquence]" },

        { t: "h2", de: "11. Datensicherheit", en: "11. Data security", fr: "11. Sécurité des données" },
        { t: "p",
          de: "Wir verwenden angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder unrechtmäßiger Verarbeitung zu schützen.",
          en: "We use appropriate technical and organizational measures to protect personal data against unauthorized access, loss, misuse, or unlawful processing.",
          fr: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre l’accès non autorisé, la perte, l’utilisation abusive ou le traitement illicite." },

        { t: "h2", de: "12. Änderungen dieser Datenschutzerklärung", en: "12. Changes to this Privacy Policy", fr: "12. Modifications de cette politique de confidentialité" },
        { t: "p",
          de: "Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden, wenn sich die App, ihre Funktionen oder rechtliche Anforderungen ändern. Es gilt die jeweils veröffentlichte aktuelle Fassung.",
          en: "This Privacy Policy may be updated from time to time if the app, its functions, or legal requirements change. The currently published version applies.",
          fr: "Cette politique de confidentialité peut être mise à jour de temps à autre si l’application, ses fonctions ou les exigences légales changent. La version actuellement publiée s’applique." }
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
            value: { de: "[TODO: typische Antwortzeit angeben]", en: "[TODO: state typical response time]", fr: "[TODO: indiquer le délai de réponse habituel]" } }
        ] },
        { t: "p",
          de: "Bitte beschreibe dein Anliegen möglichst genau und nenne wenn möglich deine iOS-Version sowie die App-Version.",
          en: "Please describe your issue as clearly as possible and include your iOS version and app version if available.",
          fr: "Veuillez décrire votre problème aussi précisément que possible et indiquer, si possible, votre version d’iOS ainsi que la version de l’application." },

        { t: "h2", de: "Häufige Fragen (FAQ)", en: "Frequently Asked Questions", fr: "Questions fréquentes (FAQ)" },

        { t: "h3", de: "Konto &amp; Anmeldung", en: "Account &amp; Sign-in", fr: "Compte &amp; connexion" },
        { t: "faq", items: [
          { q: { de: "Wie melde ich mich an?", en: "How do I sign in?", fr: "Comment me connecter ?" },
            a: { de: "Die Anmeldung erfolgt mit Apple. [TODO: genaue Schritte in der App ergänzen]", en: "Sign-in is done with Apple. [TODO: add the exact steps in the app]", fr: "La connexion s’effectue avec Apple. [TODO: ajouter les étapes exactes dans l’application]" } },
          { q: { de: "Wie kann ich mein Konto löschen?", en: "How can I delete my account?", fr: "Comment supprimer mon compte ?" },
            a: { de: "[TODO: Vorgehen und Frist zur Kontolöschung ergänzen]", en: "[TODO: add the account deletion procedure and timeframe]", fr: "[TODO: ajouter la procédure et le délai de suppression du compte]" } }
        ] },

        { t: "h3", de: "Soziale Funktionen", en: "Social features", fr: "Fonctions sociales" },
        { t: "faq", items: [
          { q: { de: "Wie finde ich andere Nutzer:innen?", en: "How do I find other users?", fr: "Comment trouver d’autres utilisateurs ?" },
            a: { de: "Du kannst andere Nutzer:innen per Benutzername finden. [TODO: Ort in der App ergänzen]", en: "You can find other users by username. [TODO: add where to find it in the app]", fr: "Vous pouvez trouver d’autres utilisateurs par nom d’utilisateur. [TODO: indiquer où le trouver dans l’application]" } },
          { q: { de: "Wie vergleiche ich Profile?", en: "How do I compare profiles?", fr: "Comment comparer des profils ?" },
            a: { de: "Hast du eine Person gefunden, kannst du euer beider Profile vergleichen. [TODO: genaue Schritte in der App ergänzen]", en: "Once you have found a person, you can compare both of your profiles. [TODO: add the exact steps in the app]", fr: "Une fois la personne trouvée, vous pouvez comparer vos deux profils. [TODO: ajouter les étapes exactes dans l’application]" } },
          { q: { de: "Wie funktionieren gemeinsame Listen?", en: "How do shared lists work?", fr: "Comment fonctionnent les listes partagées ?" },
            a: { de: "Mit gemeinsamen Listen führst du Listen zusammen mit anderen. [TODO: Erstellen, Einladen, Mitglieder und Rechte beschreiben]", en: "With shared lists you keep lists together with others. [TODO: describe creating, inviting, members and permissions]", fr: "Avec les listes partagées, vous gérez des listes avec d’autres personnes. [TODO: décrire la création, l’invitation, les membres et les droits]" } },
          { q: { de: "Kann ich von anderen gefunden werden?", en: "Can I be found by other users?", fr: "Puis-je être trouvé par d’autres utilisateurs ?" },
            a: { de: "Ja, dein Benutzername kann für andere Nutzer:innen suchbar sein. [TODO: Privatsphäre-Einstellungen ergänzen, falls vorhanden]", en: "Yes, your username may be searchable by other users. [TODO: add privacy settings, if any]", fr: "Oui, votre nom d’utilisateur peut être recherché par d’autres utilisateurs. [TODO: ajouter les réglages de confidentialité, le cas échéant]" } }
        ] },

        { t: "h3", de: "Film- und Serieninformationen", en: "Movie and TV information", fr: "Informations sur les films et séries" },
        { t: "faq", items: [
          { q: { de: "Woher stammen die Film- und Serieninformationen?", en: "Where does the movie and TV information come from?", fr: "D’où proviennent les informations sur les films et séries ?" },
            a: { de: "Die Informationen stammen von TMDB. Dieses Produkt nutzt die TMDB-API, wird von TMDB aber weder unterstützt noch zertifiziert.", en: "The information comes from TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB.", fr: "Les informations proviennent de TMDB. Ce produit utilise l’API de TMDB mais n’est ni approuvé ni certifié par TMDB." } },
          { q: { de: "Eine Information ist falsch oder fehlt.", en: "Some information is wrong or missing.", fr: "Une information est erronée ou manquante." },
            a: { de: "Da die Daten von TMDB stammen, erfolgen Korrekturen an Titeln und Beschreibungen bei TMDB. Wenn dir ein Problem in der App selbst auffällt, schreib uns.", en: "Since the data comes from TMDB, corrections to titles and descriptions are made at TMDB. If you notice a problem in the app itself, please contact us.", fr: "Les données provenant de TMDB, les corrections des titres et descriptions se font auprès de TMDB. Si vous remarquez un problème dans l’application elle-même, contactez-nous." } },
          { q: { de: "Wann erscheint AeroMovies?", en: "When will AeroMovies be released?", fr: "Quand AeroMovies sortira-t-elle ?" },
            a: { de: "AeroMovies ist bald im App Store verfügbar. [TODO: Release-Datum ergänzen]", en: "AeroMovies is coming soon to the App Store. [TODO: add release date]", fr: "AeroMovies sera bientôt disponible sur l’App Store. [TODO: ajouter la date de sortie]" } }
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
            a: { de: "Stelle sicher, dass du mit dem Internet verbunden bist, und starte die App neu. [TODO: Hinweise zu iCloud und Synchronisierung ergänzen]", en: "Make sure you are connected to the internet and restart the app. [TODO: add notes on iCloud and synchronization]", fr: "Assurez-vous d’être connecté à Internet et relancez l’application. [TODO: ajouter des indications sur iCloud et la synchronisation]" } }
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
