/*
 * AeroBooks – Rechtstexte (Datenschutzerklärung + Support-FAQ)
 *
 * WICHTIG: Die deutschen (de) und englischen (en) Texte stammen UNVERÄNDERT aus dem alten Repo
 * "aerobooks-site" (privacy.html / support.html). Diese Seiten sind in App Store Connect verlinkt.
 * Den Wortlaut von de/en NICHT ändern, ohne vorher App Store Connect / Rechtliches zu prüfen.
 * Die französischen Texte (fr) wurden neu ergänzt und sind eine unverbindliche Übersetzung;
 * maßgeblich ist die deutsche Fassung.
 */
(function () {
  var docs = window.I18N_DOCS = window.I18N_DOCS || {};
  Object.assign(docs, {
  "aerobooks.privacy": {
    hero: {"eyebrow": {"de": "Datenschutzerklärung", "en": "Privacy Policy", "fr": "Politique de confidentialité"}, "title": {"de": "Deine Privatsphäre ist wichtig.", "en": "Your privacy matters.", "fr": "Votre vie privée compte."}, "lead": {"de": "Diese Seite erklärt, welche Daten AeroBooks verarbeitet, wie Firebase für Konto- und Synchronisierungsfunktionen genutzt wird, wie soziale Funktionen funktionieren und welche Rechte du in Bezug auf deine personenbezogenen Daten hast.", "en": "This page explains which data AeroBooks processes, how Firebase is used for account and sync features, how social features work, and which rights you have regarding your personal data.", "fr": "Cette page explique quelles données AeroBooks traite, comment Firebase est utilisé pour les fonctions de compte et de synchronisation, comment fonctionnent les fonctions sociales et quels droits vous avez sur vos données personnelles."}},
    blocks: [
      {"t": "p", "de": "<strong>Stand:</strong> 09. April 2026", "en": "<strong>Last updated:</strong> April 9, 2026", "fr": "<strong>Dernière mise à jour :</strong> 9 avril 2026"},
      {"t": "h2", "de": "1. Verantwortlicher", "en": "1. Controller", "fr": "1. Responsable du traitement"},
      {"t": "p", "de": "Verantwortlich für die Datenverarbeitung im Sinne der anwendbaren Datenschutzgesetze ist:", "en": "The controller responsible for data processing within the meaning of applicable privacy laws is:", "fr": "Le responsable du traitement des données au sens des lois applicables en matière de protection des données est :"},
      {
        "t": "info",
        "items": [
          {
            "label": {
              "de": "Name",
              "en": "Name",
              "fr": "Nom"
            },
            "value": "Enzo Kaiser"
          },
          {
            "label": {
              "de": "E-Mail",
              "en": "Email",
              "fr": "E-mail"
            },
            "value": "<a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a>"
          }
        ]
      },
      {"t": "h2", "de": "2. Überblick", "en": "2. Overview", "fr": "2. Aperçu"},
      {"t": "p", "de": "AeroBooks ist eine iOS-App zum Entdecken, Organisieren, Tracken und Teilen von Büchern. Diese Datenschutzerklärung erklärt, welche Daten verarbeitet werden können, warum dies geschieht und welche Rechte du als Nutzer:in hast.", "en": "AeroBooks is an iOS app for discovering, organizing, tracking, and sharing books. This Privacy Policy explains which data may be processed, why it is processed, and what rights you have as a user.", "fr": "AeroBooks est une application iOS pour découvrir, organiser, suivre et partager des livres. Cette politique de confidentialité explique quelles données peuvent être traitées, pourquoi elles le sont et quels droits vous avez en tant qu’utilisateur."},
      {"t": "p", "de": "Wir verarbeiten nur Daten, die erforderlich sind, um die App, Konten, Synchronisierung, soziale Funktionen, Support, Sicherheit und die Verbesserung des Produkts bereitzustellen.", "en": "We only process data that is necessary to provide the app, accounts, synchronization, social features, support, security, and product improvement.", "fr": "Nous ne traitons que les données nécessaires pour fournir l’application, les comptes, la synchronisation, les fonctions sociales, l’assistance, la sécurité et l’amélioration du produit."},
      {"t": "h2", "de": "3. Kategorien verarbeiteter Daten", "en": "3. Categories of data processed", "fr": "3. Catégories de données traitées"},
      {"t": "h3", "de": "3.1 Kontodaten", "en": "3.1 Account data", "fr": "3.1 Données de compte"},
      {"t": "ul", "de": ["E-Mail-Adresse", "Nutzername / Anzeigename", "interne Nutzer-ID", "anmeldebezogene Kennungen, die für den Login erforderlich sind"], "en": ["email address", "username / display name", "internal user ID", "authentication-related identifiers required for sign-in"], "fr": ["adresse e-mail", "nom d’utilisateur / nom d’affichage", "identifiant utilisateur interne", "identifiants d’authentification nécessaires à la connexion"]},
      {"t": "p", "de": "AeroBooks kann Dienste wie Sign in with Apple und Firebase Authentication verwenden, um einen sicheren Kontozugang zu ermöglichen.", "en": "AeroBooks may use services such as Sign in with Apple and Firebase Authentication to enable secure account access.", "fr": "AeroBooks peut utiliser des services tels que « Se connecter avec Apple » et Firebase Authentication pour permettre un accès sécurisé au compte."},
      {"t": "h3", "de": "3.2 Profildaten", "en": "3.2 Profile data", "fr": "3.2 Données de profil"},
      {"t": "ul", "de": ["Anzeigename oder Profilname", "Geburtsdatum, sofern du es angibst", "Profilbild, sofern du eines hochlädst", "Profileinstellungen und Präferenzen"], "en": ["display name or profile name", "birthday, if you provide it", "profile image, if you upload one", "profile preferences and settings"], "fr": ["nom d’affichage ou nom de profil", "date de naissance, si vous l’indiquez", "image de profil, si vous en téléversez une", "préférences et réglages du profil"]},
      {"t": "h3", "de": "3.3 Lese- und App-Daten", "en": "3.3 Reading and app data", "fr": "3.3 Données de lecture et de l’application"},
      {"t": "ul", "de": ["gespeicherte Bücher und Bibliothekseinträge", "Lesestatus, Lesefortschritt und Leseverlauf", "Rezensionen, Bewertungen, Regale, Listen und buchbezogene Aktivitäten", "Streaks, Statistiken, Ziele und Erinnerungseinstellungen"], "en": ["saved books and library entries", "reading status, reading progress, and reading history", "reviews, ratings, shelves, lists, and book-related activity", "streaks, statistics, goals, and reminder preferences"], "fr": ["livres enregistrés et entrées de la bibliothèque", "statut de lecture, progression de lecture et historique de lecture", "avis, notes, étagères, listes et activité liée aux livres", "séries (streaks), statistiques, objectifs et préférences de rappel"]},
      {"t": "h3", "de": "3.4 Firebase-Speicherung und Synchronisierung", "en": "3.4 Firebase storage and synchronization", "fr": "3.4 Stockage et synchronisation Firebase"},
      {"t": "p", "de": "AeroBooks nutzt Google Firebase, um Daten zu speichern und zwischen Geräten zu synchronisieren. Dies ist erforderlich, damit konto- und onlinebasierte Funktionen zuverlässig funktionieren.", "en": "AeroBooks uses Google Firebase to store data and synchronize it across devices. This is necessary so that account-based and online features work reliably.", "fr": "AeroBooks utilise Google Firebase pour stocker des données et les synchroniser entre les appareils. Cela est nécessaire pour que les fonctions liées au compte et en ligne fonctionnent de manière fiable."},
      {"t": "p", "de": "Je nach genutzten Funktionen können in Firebase gespeichert werden:", "en": "Depending on the features used, Firebase may store:", "fr": "Selon les fonctions utilisées, Firebase peut stocker :"},
      {"t": "ul", "de": ["kontobezogene Daten und Nutzerkennungen", "profilbezogene Daten", "gespeicherte Bücher, Fortschritt, Rezensionen und Aktivitätsdaten", "soziale Verbindungen wie Follower- und Gefolgt-Beziehungen", "technische Informationen, die für Synchronisierung und App-Betrieb erforderlich sind"], "en": ["account-related data and user identifiers", "profile-related data", "saved books, progress, reviews, and activity data", "social connections such as followers and following relationships", "technical information needed for synchronization and app operation"], "fr": ["des données liées au compte et des identifiants d’utilisateur", "des données liées au profil", "des livres enregistrés, la progression, des avis et des données d’activité", "des liens sociaux tels que les relations d’abonnés et d’abonnements", "des informations techniques nécessaires à la synchronisation et au fonctionnement de l’application"]},
      {"t": "h3", "de": "3.5 Soziale Funktionen", "en": "3.5 Social features", "fr": "3.5 Fonctions sociales"},
      {"t": "p", "de": "AeroBooks enthält soziale Funktionen. Je nach App-Einstellungen und Funktionsdesign können Nutzer:innen andere Nutzer:innen finden, ihnen folgen und sichtbare Inhalte ansehen.", "en": "AeroBooks includes social features. Depending on app settings and feature design, users may be able to find other users, follow them, and view visible content.", "fr": "AeroBooks comprend des fonctions sociales. Selon les réglages de l’application et la conception des fonctions, les utilisateurs peuvent trouver d’autres utilisateurs, les suivre et consulter les contenus visibles."},
      {"t": "ul", "de": ["dein Nutzername kann für andere Nutzer:innen suchbar sein", "dein Profil kann innerhalb der App sichtbar sein", "andere Nutzer:innen können dir folgen", "du kannst anderen Nutzer:innen folgen", "öffentlich sichtbare buchbezogene Aktivitäten können für andere Nutzer:innen sichtbar sein"], "en": ["your username may be searchable by other users", "your profile may be visible inside the app", "other users may be able to follow you", "you may be able to follow other users", "publicly visible book-related activity may be visible to other users"], "fr": ["votre nom d’utilisateur peut être recherché par d’autres utilisateurs", "votre profil peut être visible dans l’application", "d’autres utilisateurs peuvent vous suivre", "vous pouvez suivre d’autres utilisateurs", "l’activité publique liée aux livres peut être visible par d’autres utilisateurs"]},
      {"t": "p", "de": "Falls AeroBooks Privatsphäre-Einstellungen wie öffentliche oder private Profile anbietet, hängt die Sichtbarkeit deiner Daten von diesen Einstellungen ab.", "en": "If AeroBooks offers privacy settings such as public or private profiles, the visibility of your data depends on those settings.", "fr": "Si AeroBooks propose des réglages de confidentialité tels que des profils publics ou privés, la visibilité de vos données dépend de ces réglages."},
      {"t": "h3", "de": "3.6 Analytics und Absturzberichte", "en": "3.6 Analytics and crash reports", "fr": "3.6 Analyses et rapports de plantage"},
      {"t": "p", "de": "AeroBooks kann Firebase Analytics und Firebase Crashlytics verwenden, um die App-Leistung zu verbessern, technische Probleme zu erkennen und die App stabiler zu machen.", "en": "AeroBooks may use Firebase Analytics and Firebase Crashlytics to improve app performance, identify technical issues, and make the app more stable.", "fr": "AeroBooks peut utiliser Firebase Analytics et Firebase Crashlytics pour améliorer les performances de l’application, identifier des problèmes techniques et rendre l’application plus stable."},
      {"t": "ul", "de": ["Daten zur Funktionsnutzung", "Gerätetyp und Betriebssystemversion", "technische Nutzungsinformationen", "App-Abstürze und Fehlerberichte", "pseudonyme gerätebezogene Informationen"], "en": ["feature usage data", "device type and operating system version", "technical usage information", "app crashes and error reports", "pseudonymous device-related information"], "fr": ["données d’utilisation des fonctions", "type d’appareil et version du système d’exploitation", "informations techniques d’utilisation", "plantages de l’application et rapports d’erreurs", "informations pseudonymisées liées à l’appareil"]},
      {"t": "h3", "de": "3.7 Käufe und Abonnements", "en": "3.7 Purchases and subscriptions", "fr": "3.7 Achats et abonnements"},
      {"t": "p", "de": "Käufe und Abonnements werden über Apple verarbeitet. AeroBooks speichert keine vollständigen Zahlungsdaten wie Kreditkartendaten direkt.", "en": "Purchases and subscriptions are processed through Apple. AeroBooks does not directly store full payment details such as credit card data.", "fr": "Les achats et abonnements sont traités par Apple. AeroBooks ne stocke pas directement les données de paiement complètes, telles que les données de carte bancaire."},
      {"t": "p", "de": "Wir können den Abo-Status verarbeiten, soweit dies erforderlich ist, um App-Funktionen freizuschalten.", "en": "We may process subscription status information where necessary to unlock app features.", "fr": "Nous pouvons traiter l’état de l’abonnement lorsque cela est nécessaire pour débloquer des fonctions de l’application."},
      {"t": "h3", "de": "3.8 Support-Kommunikation", "en": "3.8 Support communication", "fr": "3.8 Communication avec l’assistance"},
      {"t": "p", "de": "Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine Nachricht und die darin enthaltenen Angaben, um dein Anliegen zu bearbeiten.", "en": "If you contact us by email, we process your message and the information it contains in order to handle your request.", "fr": "Si vous nous contactez par e-mail, nous traitons votre message et les informations qu’il contient afin de traiter votre demande."},
      {"t": "h2", "de": "4. Zwecke der Verarbeitung", "en": "4. Purposes of processing", "fr": "4. Finalités du traitement"},
      {"t": "p", "de": "Wir verarbeiten Daten insbesondere, um:", "en": "We process data in particular to:", "fr": "Nous traitons des données notamment pour :"},
      {"t": "ul", "de": ["die App und ihre Funktionen bereitzustellen", "Konten zu erstellen und zu verwalten", "Daten zwischen Geräten zu synchronisieren", "soziale und Community-Funktionen zu ermöglichen", "App-Sicherheit und technische Stabilität sicherzustellen", "das Produkt zu verbessern und Fehler zu beheben", "auf Support-Anfragen zu antworten"], "en": ["provide the app and its functions", "create and manage accounts", "synchronize data across devices", "enable social and community features", "ensure app security and technical stability", "improve the product and fix bugs", "respond to support requests"], "fr": ["fournir l’application et ses fonctions", "créer et gérer des comptes", "synchroniser les données entre les appareils", "permettre les fonctions sociales et communautaires", "garantir la sécurité de l’application et sa stabilité technique", "améliorer le produit et corriger des erreurs", "répondre aux demandes d’assistance"]},
      {"t": "h2", "de": "5. Rechtsgrundlagen nach DSGVO", "en": "5. Legal bases under GDPR", "fr": "5. Bases juridiques selon le RGPD"},
      {"t": "ul", "de": ["Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung, insbesondere für Konten, Synchronisierung und App-Funktionen", "Art. 6 Abs. 1 lit. f DSGVO – berechtigte Interessen, insbesondere für Sicherheit, Stabilität, Fehleranalyse und Produktverbesserung", "Art. 6 Abs. 1 lit. a DSGVO – Einwilligung, soweit diese erforderlich ist, z. B. für bestimmte Benachrichtigungen oder optionale Verarbeitungen", "Art. 6 Abs. 1 lit. c DSGVO – Erfüllung rechtlicher Pflichten, soweit anwendbar"], "en": ["Art. 6(1)(b) GDPR – performance of a contract, especially for accounts, sync, and app features", "Art. 6(1)(f) GDPR – legitimate interests, especially for security, stability, error analysis, and product improvement", "Art. 6(1)(a) GDPR – consent, where consent is required, for example for certain notifications or optional processing", "Art. 6(1)(c) GDPR – compliance with legal obligations where applicable"], "fr": ["art. 6, par. 1, point b) RGPD – exécution d’un contrat, notamment pour les comptes, la synchronisation et les fonctions de l’application", "art. 6, par. 1, point f) RGPD – intérêts légitimes, notamment pour la sécurité, la stabilité, l’analyse des erreurs et l’amélioration du produit", "art. 6, par. 1, point a) RGPD – consentement, lorsqu’il est requis, par exemple pour certaines notifications ou certains traitements facultatifs", "art. 6, par. 1, point c) RGPD – respect d’obligations légales, le cas échéant"]},
      {"t": "h2", "de": "6. Empfänger und Drittanbieter-Dienste", "en": "6. Recipients and third-party services", "fr": "6. Destinataires et services tiers"},
      {"t": "p", "de": "AeroBooks kann Drittanbieter wie folgende nutzen:", "en": "AeroBooks may use third-party providers such as:", "fr": "AeroBooks peut faire appel à des prestataires tiers tels que :"},
      {"t": "ul", "de": ["Apple (App Store, Sign in with Apple, Käufe, Abonnements, Systemdienste)", "Google Firebase (Authentifizierung, Datenbank, Synchronisierung, Analytics, Absturzberichte)", "Google Books API (Buchsuche und Metadaten)"], "en": ["Apple (App Store, Sign in with Apple, purchases, subscriptions, system services)", "Google Firebase (Authentication, database, synchronization, analytics, crash reporting)", "Google Books API (book search and metadata)"], "fr": ["Apple (App Store, « Se connecter avec Apple », achats, abonnements, services système)", "Google Firebase (authentification, base de données, synchronisation, analyses, rapports de plantage)", "Google Books API (recherche de livres et métadonnées)"]},
      {"t": "link", "html": "<a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\" rel=\"noopener noreferrer\"> Firebase Privacy and Security </a>"},
      {"t": "h2", "de": "7. Internationale Datenübermittlungen", "en": "7. International data transfers", "fr": "7. Transferts internationaux de données"},
      {"t": "p", "de": "Daten können in Ländern außerhalb deines Wohnsitzlandes verarbeitet werden, einschließlich der USA. Soweit erforderlich, werden geeignete Garantien wie Standardvertragsklauseln verwendet.", "en": "Data may be processed in countries outside your country of residence, including the United States. Where required, appropriate safeguards such as Standard Contractual Clauses may be used.", "fr": "Les données peuvent être traitées dans des pays situés en dehors de votre pays de résidence, y compris aux États-Unis. Lorsque cela est nécessaire, des garanties appropriées, telles que des clauses contractuelles types, peuvent être utilisées."},
      {"t": "h2", "de": "8. Speicherdauer und Löschung", "en": "8. Data retention and deletion", "fr": "8. Durée de conservation et suppression"},
      {"t": "p", "de": "Wir speichern personenbezogene Daten nur so lange, wie dies für die genannten Zwecke erforderlich ist, sofern keine längere gesetzliche Aufbewahrungspflicht besteht.", "en": "We store personal data only as long as necessary for the stated purposes, unless longer retention is required by law.", "fr": "Nous ne conservons les données personnelles que le temps nécessaire aux finalités indiquées, sauf si une conservation plus longue est exigée par la loi."},
      {"t": "ul", "de": ["kontobezogene Daten werden grundsätzlich gespeichert, solange dein Konto besteht", "Synchronisierungs- und Sozialdaten werden gespeichert, solange sie für den Dienst benötigt werden", "Support-Daten können so lange gespeichert werden, wie dies zur Bearbeitung und Dokumentation des Anliegens erforderlich ist", "nach Kontolöschung werden zugehörige Daten innerhalb eines angemessenen Zeitraums gelöscht oder anonymisiert, sofern keine gesetzlichen Gründe entgegenstehen"], "en": ["account-related data is generally stored while your account exists", "synchronization and social data is stored as long as needed for the service", "support data may be stored as long as required to handle and document the request", "after account deletion, associated data is deleted or anonymized within an appropriate period unless legal reasons require otherwise"], "fr": ["les données liées au compte sont en principe conservées tant que votre compte existe", "les données de synchronisation et les données sociales sont conservées aussi longtemps que nécessaire pour le service", "les données d’assistance peuvent être conservées aussi longtemps que nécessaire pour traiter et documenter la demande", "après la suppression du compte, les données associées sont supprimées ou anonymisées dans un délai raisonnable, sauf si des motifs légaux s’y opposent"]},
      {"t": "h2", "de": "9. Deine Rechte", "en": "9. Your rights", "fr": "9. Vos droits"},
      {"t": "p", "de": "Je nach anwendbarem Recht kannst du insbesondere folgende Rechte haben:", "en": "Depending on applicable law, you may have the right to:", "fr": "Selon le droit applicable, vous pouvez notamment avoir le droit de :"},
      {"t": "ul", "de": ["Auskunft über deine gespeicherten Daten", "Berichtigung unrichtiger Daten", "Löschung deiner Daten", "Einschränkung der Verarbeitung", "Widerspruch gegen bestimmte Verarbeitungen", "Datenübertragbarkeit, soweit anwendbar", "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft, soweit die Verarbeitung auf Einwilligung beruht", "Beschwerde bei einer Aufsichtsbehörde"], "en": ["access your stored data", "request rectification of inaccurate data", "request deletion of your data", "request restriction of processing", "object to certain processing", "request data portability where applicable", "withdraw consent with effect for the future where processing is based on consent", "lodge a complaint with a supervisory authority"], "fr": ["accéder à vos données stockées", "demander la rectification de données inexactes", "demander la suppression de vos données", "demander la limitation du traitement", "vous opposer à certains traitements", "demander la portabilité des données, le cas échéant", "retirer votre consentement avec effet pour l’avenir lorsque le traitement repose sur le consentement", "introduire une réclamation auprès d’une autorité de contrôle"]},
      {"t": "p", "de": "Datenschutzanfragen kannst du senden an: <a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a>", "en": "Privacy requests can be sent to: <a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a>", "fr": "Les demandes relatives à la protection des données peuvent être envoyées à : <a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a>"},
      {"t": "h2", "de": "10. Datenschutzrechte nach kalifornischem Recht", "en": "10. California privacy rights", "fr": "10. Droits relatifs à la vie privée en Californie"},
      {"t": "p", "de": "Soweit nach kalifornischem Recht anwendbar (z. B. CCPA/CPRA), können Nutzer:innen Rechte auf Auskunft, Berichtigung, Löschung und Zugang zu bestimmten personenbezogenen Daten haben. AeroBooks verkauft keine personenbezogenen Daten im Sinne des CCPA/CPRA.", "en": "Where applicable under California law (such as CCPA/CPRA), users may have rights to know, correct, delete, and access certain personal data. AeroBooks does not sell personal data in the sense of CCPA/CPRA.", "fr": "Lorsque le droit californien est applicable (par exemple CCPA/CPRA), les utilisateurs peuvent disposer de droits d’information, de rectification, de suppression et d’accès à certaines données personnelles. AeroBooks ne vend pas de données personnelles au sens du CCPA/CPRA."},
      {"t": "h2", "de": "11. Kinder", "en": "11. Children", "fr": "11. Enfants"},
      {"t": "p", "de": "AeroBooks richtet sich nicht gezielt an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern ohne die erforderliche Rechtsgrundlage oder, soweit notwendig, ohne Zustimmung der Eltern.", "en": "AeroBooks is not specifically directed at children under 13 years of age. We do not knowingly collect personal data from children without the required legal basis or parental consent where required.", "fr": "AeroBooks ne s’adresse pas spécifiquement aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles d’enfants sans la base juridique requise ou, le cas échéant, sans le consentement des parents."},
      {"t": "h2", "de": "12. Datensicherheit", "en": "12. Data security", "fr": "12. Sécurité des données"},
      {"t": "p", "de": "Wir verwenden angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder unrechtmäßiger Verarbeitung zu schützen.", "en": "We use appropriate technical and organizational measures to protect personal data against unauthorized access, loss, misuse, or unlawful processing.", "fr": "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre l’accès non autorisé, la perte, l’utilisation abusive ou le traitement illicite."},
      {"t": "h2", "de": "13. Änderungen dieser Datenschutzerklärung", "en": "13. Changes to this Privacy Policy", "fr": "13. Modifications de cette politique de confidentialité"},
      {"t": "p", "de": "Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden, wenn sich die App, ihre Funktionen oder rechtliche Anforderungen ändern. Es gilt die jeweils veröffentlichte aktuelle Fassung.", "en": "This Privacy Policy may be updated from time to time if the app, its functions, or legal requirements change. The currently published version applies.", "fr": "Cette politique de confidentialité peut être mise à jour de temps à autre si l’application, ses fonctions ou les exigences légales changent. La version actuellement publiée s’applique."},
    ],
  },
  "aerobooks.support": {
    hero: {"eyebrow": {"de": "Support", "en": "Support", "fr": "Assistance"}, "title": {"de": "Wir helfen dir weiter.", "en": "We're here to help.", "fr": "Nous sommes là pour vous aider."}, "lead": {"de": "Hier findest du Kontaktinformationen, Hilfe bei Problemen, Antworten zu Konto und Abo, Hinweise zu Datenschutzanfragen und häufige Fragen rund um AeroBooks.", "en": "Find contact information, troubleshooting help, account answers, subscription support, privacy request guidance, and common questions about AeroBooks.", "fr": "Retrouvez ici les coordonnées de contact, de l’aide en cas de problème, des réponses sur le compte et l’abonnement, des indications sur les demandes relatives à la protection des données et les questions fréquentes sur AeroBooks."}},
    blocks: [
      {"t": "h2", "de": "Kontakt", "en": "Contact", "fr": "Contact"},
      {
        "t": "info",
        "items": [
          {
            "label": {
              "de": "E-Mail",
              "en": "Email",
              "fr": "E-mail"
            },
            "value": "<a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a>"
          },
          {
            "label": {
              "de": "Typische Antwortzeit",
              "en": "Typical response time",
              "fr": "Délai de réponse habituel"
            },
            "value": {
              "de": "In der Regel innerhalb von 1–3 Werktagen.",
              "en": "Usually within 1–3 business days.",
              "fr": "En général sous 1 à 3 jours ouvrés."
            }
          }
        ]
      },
      {"t": "p", "de": "Bitte beschreibe dein Anliegen möglichst genau und nenne wenn möglich deine iOS-Version sowie die App-Version.", "en": "Please describe your issue as clearly as possible and include your iOS version and app version if available.", "fr": "Veuillez décrire votre problème aussi précisément que possible et indiquer, si possible, votre version d’iOS ainsi que la version de l’application."},
      {"t": "h2", "de": "Häufige Fragen (FAQ)", "en": "Frequently Asked Questions", "fr": "Questions fréquentes (FAQ)"},
      {"t": "h3", "de": "Konto &amp; Registrierung", "en": "Account &amp; Registration", "fr": "Compte &amp; inscription"},
      {
        "t": "faq",
        "items": [
          {
            "q": {
              "de": "Wie erstelle ich ein Konto?",
              "en": "How do I create an account?",
              "fr": "Comment créer un compte ?"
            },
            "a": {
              "de": "Öffne AeroBooks und tippe auf „Registrieren\". Du benötigst nur eine E-Mail-Adresse und einen frei wählbaren Nutzernamen.",
              "en": "Open AeroBooks and tap \"Sign Up\". You only need an email address and a username of your choice.",
              "fr": "Ouvrez AeroBooks et touchez « S’inscrire ». Il vous suffit d’une adresse e-mail et d’un nom d’utilisateur de votre choix."
            }
          },
          {
            "q": {
              "de": "Ich habe mein Passwort vergessen. Was kann ich tun?",
              "en": "I forgot my password. What can I do?",
              "fr": "J’ai oublié mon mot de passe. Que puis-je faire ?"
            },
            "a": {
              "de": "Tippe auf der Anmeldeseite auf „Passwort vergessen\". Du erhältst eine E-Mail mit einem Link zum Zurücksetzen. Bitte prüfe auch deinen Spam-Ordner.",
              "en": "Tap \"Forgot Password\" on the login screen. You will receive an email with a reset link. Please also check your spam folder.",
              "fr": "Touchez « Mot de passe oublié » sur l’écran de connexion. Vous recevrez un e-mail contenant un lien de réinitialisation. Pensez aussi à vérifier votre dossier de courrier indésirable."
            }
          },
          {
            "q": {
              "de": "Wie kann ich mein Konto löschen?",
              "en": "How can I delete my account?",
              "fr": "Comment supprimer mon compte ?"
            },
            "a": {
              "de": "Gehe zu Einstellungen → Konto → Konto löschen. Die Löschung ist endgültig und deine Daten werden innerhalb von 30 Tagen vollständig entfernt.",
              "en": "Go to Settings → Account → Delete Account. Deletion is permanent and your data will be fully removed within 30 days.",
              "fr": "Allez dans Réglages → Compte → Supprimer le compte. La suppression est définitive et vos données seront entièrement supprimées sous 30 jours."
            }
          }
        ]
      },
      {"t": "h3", "de": "Soziale Funktionen – Folgen &amp; Suche", "en": "Social features – Following &amp; Search", "fr": "Fonctions sociales – Abonnements &amp; recherche"},
      {
        "t": "faq",
        "items": [
          {
            "q": {
              "de": "Wie folge ich anderen Nutzer:innen?",
              "en": "How do I follow other users?",
              "fr": "Comment suivre d’autres utilisateurs ?"
            },
            "a": {
              "de": "Öffne das Profil einer Person und tippe auf „Folgen\". Danach können deren Buchaktivitäten in deinem Feed erscheinen.",
              "en": "Open a person's profile and tap \"Follow\". Their book activity can then appear in your feed.",
              "fr": "Ouvrez le profil d’une personne et touchez « Suivre ». Son activité liée aux livres peut alors apparaître dans votre fil."
            }
          },
          {
            "q": {
              "de": "Kann ich von anderen gefunden werden?",
              "en": "Can I be found by other users?",
              "fr": "Puis-je être trouvé par d’autres utilisateurs ?"
            },
            "a": {
              "de": "Ja. Dein Nutzername kann standardmäßig über die Suche auffindbar sein. Wenn du das nicht möchtest, kannst du dein Profil in den Privatsphäre-Einstellungen auf privat stellen.",
              "en": "Yes. Your username may be discoverable through search by default. If you do not want that, you can set your profile to private in the privacy settings.",
              "fr": "Oui. Votre nom d’utilisateur peut être trouvable via la recherche par défaut. Si vous ne le souhaitez pas, vous pouvez définir votre profil comme privé dans les réglages de confidentialité."
            }
          },
          {
            "q": {
              "de": "Wie entferne ich einen Follower oder blockiere jemanden?",
              "en": "How do I remove a follower or block someone?",
              "fr": "Comment retirer un abonné ou bloquer quelqu’un ?"
            },
            "a": {
              "de": "Öffne das Profil der Person und tippe auf die drei Punkte oben rechts. Dort kannst du den Follower entfernen oder die Person blockieren.",
              "en": "Open the profile of that person and tap the three dots in the top-right corner. There you can remove the follower or block the user.",
              "fr": "Ouvrez le profil de la personne et touchez les trois points en haut à droite. Vous pouvez y retirer l’abonné ou bloquer l’utilisateur."
            }
          },
          {
            "q": {
              "de": "Wer kann meine Bücher und Regale sehen?",
              "en": "Who can see my books and shelves?",
              "fr": "Qui peut voir mes livres et mes étagères ?"
            },
            "a": {
              "de": "Bei öffentlichem Profil: alle AeroBooks-Nutzer:innen. Bei privatem Profil: nur deine bestehenden Follower.",
              "en": "With a public profile: all AeroBooks users. With a private profile: only your existing followers.",
              "fr": "Avec un profil public : tous les utilisateurs d’AeroBooks. Avec un profil privé : uniquement vos abonnés actuels."
            }
          }
        ]
      },
      {"t": "h3", "de": "Abo &amp; Zahlung", "en": "Subscription &amp; Payment", "fr": "Abonnement &amp; paiement"},
      {
        "t": "faq",
        "items": [
          {
            "q": {
              "de": "Was beinhaltet das AeroBooks-Abo?",
              "en": "What does the AeroBooks subscription include?",
              "fr": "Que comprend l’abonnement AeroBooks ?"
            },
            "a": {
              "de": "Das Abo ist vollständig freiwillig und unterstützt die Weiterentwicklung der App. Inhalte und Preise siehst du direkt in der App unter AeroBooks Premium.",
              "en": "The subscription is completely optional and supports ongoing app development. Subscription content and pricing are shown directly in the app under AeroBooks Premium.",
              "fr": "L’abonnement est entièrement facultatif et soutient le développement continu de l’application. Le contenu et les tarifs de l’abonnement sont affichés directement dans l’application sous AeroBooks Premium."
            }
          },
          {
            "q": {
              "de": "Wie kündige ich mein Abo?",
              "en": "How do I cancel my subscription?",
              "fr": "Comment résilier mon abonnement ?"
            },
            "a": {
              "de": "Abos werden ausschließlich über Apple verwaltet. Gehe auf deinem iPhone zu Einstellungen → [dein Name] → Abonnements → AeroBooks → Abonnement kündigen.",
              "en": "Subscriptions are managed exclusively by Apple. On your iPhone, go to Settings → [your name] → Subscriptions → AeroBooks → Cancel Subscription.",
              "fr": "Les abonnements sont gérés exclusivement par Apple. Sur votre iPhone, allez dans Réglages → [votre nom] → Abonnements → AeroBooks → Annuler l’abonnement."
            }
          },
          {
            "q": {
              "de": "Kann ich eine Rückerstattung beantragen?",
              "en": "Can I request a refund?",
              "fr": "Puis-je demander un remboursement ?"
            },
            "a": {
              "de": "Rückerstattungen für App-Store-Käufe werden von Apple bearbeitet. Besuche reportaproblem.apple.com und melde dich mit deiner Apple-ID an.",
              "en": "Refunds for App Store purchases are handled by Apple. Visit reportaproblem.apple.com and sign in with your Apple ID.",
              "fr": "Les remboursements des achats sur l’App Store sont traités par Apple. Rendez-vous sur reportaproblem.apple.com et connectez-vous avec votre identifiant Apple."
            }
          }
        ]
      },
      {"t": "h3", "de": "Datenschutz &amp; Daten", "en": "Privacy &amp; Data", "fr": "Confidentialité &amp; données"},
      {
        "t": "faq",
        "items": [
          {
            "q": {
              "de": "Welche Daten speichert AeroBooks über mich?",
              "en": "What data does AeroBooks store about me?",
              "fr": "Quelles données AeroBooks stocke-t-il sur moi ?"
            },
            "a": {
              "de": "Wir können deine E-Mail-Adresse, deinen Nutzernamen und anonymisierte Nutzungsanalysen speichern. Standort, Kontakte oder Zahlungsdaten speichern wir nicht direkt.",
              "en": "We may store your email address, username, and anonymized usage analytics. We do not store your location, contacts, or payment data directly.",
              "fr": "Nous pouvons stocker votre adresse e-mail, votre nom d’utilisateur et des analyses d’utilisation anonymisées. Nous ne stockons pas directement votre position, vos contacts ni vos données de paiement."
            }
          },
          {
            "q": {
              "de": "Wie kann ich meine Daten einsehen oder exportieren?",
              "en": "How can I access or export my data?",
              "fr": "Comment consulter ou exporter mes données ?"
            },
            "a": {
              "de": "Schreibe eine E-Mail an hello.aerostudios@gmail.com mit dem Betreff „Datenschutz – Auskunft\". Wir antworten innerhalb der gesetzlich vorgesehenen Frist.",
              "en": "Send an email to hello.aerostudios@gmail.com with the subject \"Privacy – Access Request\". We will respond within the legally required timeframe.",
              "fr": "Envoyez un e-mail à hello.aerostudios@gmail.com avec l’objet « Confidentialité – Demande d’accès ». Nous répondrons dans le délai prévu par la loi."
            }
          },
          {
            "q": {
              "de": "Wie kann ich Analytics deaktivieren?",
              "en": "How can I disable analytics?",
              "fr": "Comment désactiver les analyses ?"
            },
            "a": {
              "de": "Gehe zu Einstellungen → Datenschutz → Analytics &amp; Verbesserungen und deaktiviere dort die Datenfreigabe, sofern verfügbar. Zusätzlich kannst du entsprechende Tracking-Einstellungen in iOS verwalten.",
              "en": "Go to Settings → Privacy → Analytics &amp; Improvements and disable data sharing if available. You may also manage tracking settings through iOS privacy settings where applicable.",
              "fr": "Allez dans Réglages → Confidentialité → Analyses &amp; améliorations et désactivez le partage de données, si disponible. Vous pouvez également gérer les réglages de suivi via les réglages de confidentialité d’iOS, le cas échéant."
            }
          }
        ]
      },
      {"t": "h3", "de": "Technische Probleme", "en": "Technical problems", "fr": "Problèmes techniques"},
      {
        "t": "faq",
        "items": [
          {
            "q": {
              "de": "Die App stürzt ab oder friert ein. Was soll ich tun?",
              "en": "The app crashes or freezes. What should I do?",
              "fr": "L’application plante ou se fige. Que faire ?"
            },
            "a": {
              "de": [
                "App vollständig schließen und neu starten",
                "iOS-Updates prüfen",
                "App-Updates im App Store prüfen",
                "App bei Bedarf neu installieren"
              ],
              "en": [
                "fully close and restart the app",
                "check for iOS updates",
                "check for updates in the App Store",
                "reinstall the app if needed"
              ],
              "fr": [
                "fermer complètement l’application et la relancer",
                "vérifier les mises à jour d’iOS",
                "vérifier les mises à jour dans l’App Store",
                "réinstaller l’application si nécessaire"
              ]
            }
          },
          {
            "q": {
              "de": "Meine Bücher synchronisieren sich nicht.",
              "en": "My books are not syncing.",
              "fr": "Mes livres ne se synchronisent pas."
            },
            "a": {
              "de": "Stelle sicher, dass du mit dem Internet verbunden bist. Ziehe die Bücherliste nach unten, um eine manuelle Synchronisierung zu starten. Falls nötig, melde dich ab und wieder an.",
              "en": "Make sure you are connected to the internet. Pull down in the book list to trigger a manual sync. If needed, sign out and sign back in.",
              "fr": "Assurez-vous d’être connecté à Internet. Tirez vers le bas dans la liste de livres pour lancer une synchronisation manuelle. Si nécessaire, déconnectez-vous puis reconnectez-vous."
            }
          }
        ]
      },
      {"t": "h2", "de": "App-Version &amp; Changelog", "en": "Version &amp; Changelog", "fr": "Version &amp; journal des modifications"},
      {"t": "p", "de": "Den aktuellen Changelog findest du in der App unter Einstellungen → Über AeroBooks → Versionshinweise sowie auf der App-Store-Seite von AeroBooks.", "en": "The latest changelog can be found in the app under Settings → About AeroBooks → Release Notes and on the AeroBooks App Store page.", "fr": "Le dernier journal des modifications se trouve dans l’application sous Réglages → À propos d’AeroBooks → Notes de version, ainsi que sur la page AeroBooks de l’App Store."},
      {"t": "h2", "de": "Feedback", "en": "Feedback", "fr": "Retours"},
      {"t": "p", "de": "Wir freuen uns über jede Rückmeldung. Schreib uns an <a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a> oder hinterlasse eine Bewertung im App Store.", "en": "We appreciate every message. Send us feedback at <a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a> or leave a review in the App Store.", "fr": "Nous apprécions chaque message. Envoyez-nous vos retours à <a href=\"mailto:hello.aerostudios@gmail.com\">hello.aerostudios@gmail.com</a> ou laissez un avis sur l’App Store."},
    ],
  },
  });
})();
