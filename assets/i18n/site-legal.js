/*
 * AeroStudios – Impressum und Datenschutzerklärung der Website
 *
 * ENTWURF, NICHT ANWALTLICH GEPRÜFT.
 * Impressum: bewusst nur Platzhalter – Name, Anschrift und E-Mail trägst du selbst ein.
 * Datenschutz: beschreibt die tatsächliche Technik der Seite (statisch, keine Cookies, keine Tracker,
 * keine externen Skripte/Schriften, Sprache/Theme nur im localStorage). Hosting-Angaben bitte prüfen.
 * Maßgeblich ist die deutsche Fassung (de); en/fr sind Übersetzungen.
 */
(function () {
  var docs = window.I18N_DOCS = window.I18N_DOCS || {};

  Object.assign(docs, {

    /* ====================================================================
       Impressum
       ==================================================================== */
    "site.imprint": {
      hero: {
        eyebrow: { de: "Rechtliches", en: "Legal", fr: "Mentions" },
        title: { de: "Impressum", en: "Legal notice", fr: "Mentions légales" },
        lead: {
          de: "Anbieterkennzeichnung für diese Website.",
          en: "Provider identification for this website.",
          fr: "Identification de l’éditeur de ce site web."
        }
      },
      blocks: [
        { t: "h2", de: "Anbieter", en: "Provider", fr: "Éditeur" },
        { t: "info", items: [
          { label: { de: "Name", en: "Name", fr: "Nom" }, value: "Enzo Kaiser" },
          { label: { de: "E-Mail", en: "Email", fr: "E-mail" }, value: "<a href=\"mailto:{contactEmail}\">{contactEmail}</a>" }
        ] },
        { t: "p",
          de: "AeroStudios ist ein privates Ein-Personen-Projekt. Am schnellsten erreichst du mich per E-Mail.",
          en: "AeroStudios is a private one-person project. The fastest way to reach me is by email." }
      ]
    },

    /* ====================================================================
       Datenschutzerklärung der Website
       ==================================================================== */
    "site.privacy": {
      hero: {
        eyebrow: { de: "Datenschutzerklärung (Website)", en: "Privacy Policy (website)", fr: "Politique de confidentialité (site web)" },
        title: { de: "Datenschutz auf dieser Website", en: "Privacy on this website", fr: "Confidentialité sur ce site web" },
        lead: {
          de: "Diese Seite erklärt, welche Daten beim Besuch dieser Website verarbeitet werden. Die Datenschutzerklärungen der Apps findest du auf den jeweiligen Projektseiten.",
          en: "This page explains which data is processed when you visit this website. The privacy policies of the apps can be found on the respective project pages.",
          fr: "Cette page explique quelles données sont traitées lors de la visite de ce site web. Les politiques de confidentialité des applications se trouvent sur les pages des projets respectifs."
        }
      },
      blocks: [
        { t: "p",
          de: "<strong>Stand:</strong> Oktober 2026",
          en: "<strong>Last updated:</strong> October 2026",
          fr: "<strong>Dernière mise à jour :</strong> octobre 2026" },

        { t: "h2", de: "1. Verantwortlicher", en: "1. Controller", fr: "1. Responsable du traitement" },
        { t: "p",
          de: "Verantwortlich für die Datenverarbeitung auf dieser Website ist die im <a href=\"{root}impressum/\">Impressum</a> genannte Person.",
          en: "The person named in the <a href=\"{root}impressum/\">legal notice</a> is responsible for data processing on this website.",
          fr: "La personne indiquée dans les <a href=\"{root}impressum/\">mentions légales</a> est responsable du traitement des données sur ce site web." },

        { t: "h2", de: "2. Überblick", en: "2. Overview", fr: "2. Aperçu" },
        { t: "p",
          de: "Diese Website ist eine statische Informationsseite. Es gibt kein Benutzerkonto, wir setzen keine Cookies, keine Tracking- oder Analyse-Dienste und laden keine externen Skripte, Schriften oder anderen Inhalte von Drittservern nach. Dargestellt wird die Schrift deines Geräts.",
          en: "This website is a static information site. There are no user accounts, we do not set cookies, we do not use tracking or analytics services, and we do not load external scripts, fonts or other content from third-party servers. Text is displayed in your device’s own font.",
          fr: "Ce site web est un site d’information statique. Il n’y a pas de compte utilisateur, nous ne déposons pas de cookies, nous n’utilisons aucun service de suivi ou d’analyse et nous ne chargeons ni scripts, ni polices, ni autres contenus depuis des serveurs tiers. Le texte s’affiche avec la police de votre appareil." },

        { t: "h2", de: "3. Hosting und Server-Logfiles", en: "3. Hosting and server log files", fr: "3. Hébergement et fichiers journaux du serveur" },
        { t: "p",
          de: "Die Website wird über GitHub Pages bereitgestellt (GitHub, Inc., eine Gesellschaft der Microsoft-Gruppe, USA). Beim Aufruf der Seite verarbeitet der Hosting-Anbieter technisch notwendige Daten, insbesondere die IP-Adresse, Datum und Uhrzeit des Abrufs, die aufgerufene Seite sowie Angaben zu Browser und Betriebssystem, um die Seite auszuliefern und den sicheren Betrieb zu gewährleisten. Wir selbst werten diese Daten nicht aus.",
          en: "The website is provided via GitHub Pages (GitHub, Inc., a Microsoft group company, USA). When you visit the site, the hosting provider processes technically necessary data, in particular your IP address, the date and time of the request, the page requested and information about your browser and operating system, in order to deliver the page and ensure secure operation. We do not analyze this data ourselves.",
          fr: "Le site web est fourni via GitHub Pages (GitHub, Inc., société du groupe Microsoft, États-Unis). Lors de la consultation du site, l’hébergeur traite des données techniquement nécessaires, notamment l’adresse IP, la date et l’heure de la requête, la page demandée ainsi que des informations sur le navigateur et le système d’exploitation, afin de diffuser la page et d’assurer un fonctionnement sécurisé. Nous n’analysons pas ces données nous-mêmes." },
        { t: "p",
          de: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).",
          en: "The legal basis is Art. 6(1)(f) GDPR (legitimate interest in a secure and stable operation of the website).",
          fr: "La base juridique est l’art. 6, par. 1, point f) RGPD (intérêt légitime à un fonctionnement sûr et stable du site web)." },

        { t: "h2", de: "4. Speicherung im Browser (Sprache und Darstellung)", en: "4. Browser storage (language and appearance)", fr: "4. Stockage dans le navigateur (langue et apparence)" },
        { t: "p",
          de: "Wenn du die Sprache oder die Darstellung (Hell, Dunkel, Automatisch) umschaltest, speichert dein Browser diese Auswahl im lokalen Speicher (localStorage), damit sie beim nächsten Besuch erhalten bleibt. Diese Information bleibt auf deinem Gerät und wird nicht an uns oder Dritte übertragen. Es werden keine Cookies verwendet. Du kannst den Eintrag jederzeit in den Einstellungen deines Browsers löschen.",
          en: "If you switch the language or the appearance (light, dark, automatic), your browser stores this choice in local storage (localStorage) so that it is kept for your next visit. This information stays on your device and is not transmitted to us or to third parties. No cookies are used. You can delete the entry at any time in your browser settings.",
          fr: "Si vous changez la langue ou l’apparence (clair, sombre, automatique), votre navigateur enregistre ce choix dans le stockage local (localStorage) afin qu’il soit conservé lors de votre prochaine visite. Cette information reste sur votre appareil et n’est transmise ni à nous ni à des tiers. Aucun cookie n’est utilisé. Vous pouvez supprimer cette entrée à tout moment dans les réglages de votre navigateur." },
        { t: "p",
          de: "Das ist ohne Einwilligung zulässig, weil du diese Speicherung mit deiner Auswahl selbst anforderst (§ 25 Abs. 2 Nr. 2 TDDDG).",
          en: "No consent is needed for this because you request the storage yourself by making the choice (§ 25(2) no. 2 TDDDG)." },

        { t: "h2", de: "5. Kontakt per E-Mail", en: "5. Contact by email", fr: "5. Contact par e-mail" },
        { t: "p",
          de: "Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine Nachricht und die darin enthaltenen Angaben, um dein Anliegen zu bearbeiten (Art. 6 Abs. 1 lit. b oder f DSGVO). Wir speichern die Daten, solange dies zur Bearbeitung erforderlich ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
          en: "If you contact us by email, we process your message and the information it contains in order to handle your request (Art. 6(1)(b) or (f) GDPR). We store the data as long as necessary to handle it and as long as no statutory retention obligations apply.",
          fr: "Si vous nous contactez par e-mail, nous traitons votre message et les informations qu’il contient afin de traiter votre demande (art. 6, par. 1, point b) ou f) RGPD). Nous conservons les données aussi longtemps que nécessaire au traitement et tant qu’aucune obligation légale de conservation ne s’y oppose." },

        { t: "h2", de: "6. Externe Links", en: "6. External links", fr: "6. Liens externes" },
        { t: "p",
          de: "Diese Website enthält Links zu externen Seiten, zum Beispiel zum App Store von Apple. Beim Anklicken eines Links verlässt du diese Website; für die Datenverarbeitung auf der Zielseite gilt die Datenschutzerklärung des jeweiligen Anbieters.",
          en: "This website contains links to external sites, for example to Apple’s App Store. When you click a link you leave this website; the privacy policy of the respective provider applies to data processing on the target site.",
          fr: "Ce site web contient des liens vers des sites externes, par exemple vers l’App Store d’Apple. En cliquant sur un lien, vous quittez ce site ; la politique de confidentialité du prestataire concerné s’applique au traitement des données sur le site de destination." },

        { t: "h2", de: "7. Internationale Datenübermittlungen", en: "7. International data transfers", fr: "7. Transferts internationaux de données" },
        { t: "p",
          de: "Der Hosting-Anbieter kann Daten in den USA verarbeiten. GitHub, Inc. ist unter dem EU-US Data Privacy Framework zertifiziert; für die Übermittlung gilt damit der Angemessenheitsbeschluss der EU-Kommission.",
          en: "The hosting provider may process data in the United States. GitHub, Inc. is certified under the EU-US Data Privacy Framework, so the European Commission’s adequacy decision applies to the transfer.",
          fr: "L’hébergeur peut traiter des données aux États-Unis. GitHub, Inc. est certifiée dans le cadre du EU-US Data Privacy Framework ; la décision d’adéquation de la Commission européenne s’applique donc au transfert." },

        { t: "h2", de: "8. Deine Rechte", en: "8. Your rights", fr: "8. Vos droits" },
        { t: "p", de: "Je nach anwendbarem Recht kannst du insbesondere folgende Rechte haben:", en: "Depending on applicable law, you may have the right to:", fr: "Selon le droit applicable, vous pouvez notamment avoir le droit de :" },
        { t: "ul",
          de: ["Auskunft über deine gespeicherten Daten", "Berichtigung unrichtiger Daten", "Löschung deiner Daten", "Einschränkung der Verarbeitung", "Widerspruch gegen bestimmte Verarbeitungen", "Datenübertragbarkeit, soweit anwendbar", "Beschwerde bei einer Aufsichtsbehörde"],
          en: ["access your stored data", "request rectification of inaccurate data", "request deletion of your data", "request restriction of processing", "object to certain processing", "request data portability where applicable", "lodge a complaint with a supervisory authority"],
          fr: ["accéder à vos données stockées", "demander la rectification de données inexactes", "demander la suppression de vos données", "demander la limitation du traitement", "vous opposer à certains traitements", "demander la portabilité des données, le cas échéant", "introduire une réclamation auprès d’une autorité de contrôle"] },
        { t: "p",
          de: "Anfragen kannst du an die im <a href=\"{root}impressum/\">Impressum</a> genannte E-Mail-Adresse senden. Beschweren kannst du dich bei jeder Datenschutz-Aufsichtsbehörde, insbesondere in dem EU-Land, in dem du wohnst (Art. 77 DSGVO).",
          en: "You can send requests to the email address given in the <a href=\"{root}impressum/\">legal notice</a>. You can lodge a complaint with any data protection supervisory authority, in particular in the EU country where you live (Art. 77 GDPR).",
          fr: "Vous pouvez envoyer vos demandes à l’adresse e-mail indiquée dans les <a href=\"{root}impressum/\">mentions légales</a>. Vous pouvez introduire une réclamation auprès de toute autorité de contrôle, notamment dans le pays de l’UE où vous résidez (art. 77 RGPD)." },

        { t: "h2", de: "9. Änderungen", en: "9. Changes", fr: "9. Modifications" },
        { t: "p",
          de: "Diese Datenschutzerklärung kann aktualisiert werden, wenn sich die Website oder rechtliche Anforderungen ändern. Es gilt die jeweils veröffentlichte aktuelle Fassung.",
          en: "This Privacy Policy may be updated if the website or legal requirements change. The currently published version applies.",
          fr: "Cette politique de confidentialité peut être mise à jour si le site web ou les exigences légales changent. La version actuellement publiée s’applique." }
      ]
    }
  });
})();
