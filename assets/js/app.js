/*
 * AeroStudios – Seiten-Logik (kein Framework, keine externen Abhängigkeiten, keine Cookies)
 *
 *  - Sprache: gespeicherte Wahl → Browsersprache (de/en/fr) → Deutsch. Gespeichert wird nur im localStorage.
 *  - Theme:   Hell / Auto / Dunkel (Attribut data-theme auf <html>; Auto = kein Attribut).
 *  - Texte:   kommen ausschließlich aus assets/i18n/*.js (siehe dort). Im HTML stehen nur Schlüssel:
 *             data-i18n="key"                      → setzt innerHTML
 *             data-i18n-attr="aria-label:key;…"    → setzt Attribute
 *             data-doc="doc.key"                   → rendert einen Langtext (Rechtstexte, FAQ)
 *             data-doc-hero="doc.key.eyebrow|title|lead"
 *  - Header, Footer und Projektkarten werden hier aus assets/js/projects.js erzeugt.
 *  - Platzhalter im Text:  [TODO: …] wird automatisch gelb markiert;  {root} = Pfad zur Site-Wurzel;
 *    {contactEmail} = Kontakt-Adresse (assets/js/projects.js).
 */
(function () {
  "use strict";

  var LANGS = ["de", "en", "fr"];
  var DEFAULT_LANG = "de";
  var KEY_LANG = "aerostudios-lang";
  var KEY_THEME = "aerostudios-theme";

  var root = document.documentElement;
  var body = document.body;
  var ROOT = body.getAttribute("data-root") || "./";
  var PAGE = body.getAttribute("data-page") || "home";
  var PROJECT = body.getAttribute("data-project") || "";

  var STR = {};
  (window.I18N_DATA || []).forEach(function (chunk) { Object.assign(STR, chunk); });
  var DOCS = window.I18N_DOCS || {};
  var PROJECTS = window.AERO_PROJECTS || [];
  var SITE = window.AERO_SITE || { contactEmail: "" };

  /* ---------- Storage (darf fehlschlagen) ---------- */
  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { /* ignorieren */ }
    return null;
  }

  /* ---------- Icons ---------- */
  var ICON_PATHS = {
    book: '<path d="M12 6.8C10.4 5.2 8 4.6 4 4.6v12.9c4 0 6.4.6 8 2.1 1.6-1.5 4-2.1 8-2.1V4.6c-4 0-6.4.6-8 2.2z"/><path d="M12 6.8v12.8"/>',
    film: '<rect x="3" y="4.5" width="18" height="15" rx="3.5"/><path d="M10.2 9.2l4.6 2.8-4.6 2.8z"/>',
    chart: '<path d="M5 20V11M12 20V4M19 20v-6"/>',
    star: '<path d="M12 3.6l2.5 5.3 5.8.8-4.2 4.1 1 5.8-5.1-2.8-5.1 2.8 1-5.8-4.2-4.1 5.8-.8z"/>',
    people: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c0-3.3 2.7-5.8 6-5.8s6 2.5 6 5.8"/><path d="M16.5 5.6a3 3 0 0 1 0 5.8M18 14.2c2 .6 3.2 2.4 3.2 5.3"/>',
    sync: '<path d="M19.5 9A8 8 0 0 0 5.2 7.2L4 9"/><path d="M4 4.5V9h4.5"/><path d="M4.5 15a8 8 0 0 0 14.3 1.8L20 15"/><path d="M20 19.5V15h-4.5"/>',
    shield: '<path d="M12 3l7 3v5.2c0 4.4-3 7.8-7 9.8-4-2-7-5.4-7-9.8V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    compare: '<rect x="3.5" y="5" width="7" height="14" rx="2"/><rect x="13.5" y="5" width="7" height="14" rx="2"/>',
    list: '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><path d="M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01" stroke-width="2.6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.2M12 7.9h.01" stroke-width="2"/>',
    chat: '<path d="M5 5.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 3.5v-3.5H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="M4 8l8 5.5L20 8"/>',
    download: '<path d="M12 4v11M7.5 10.8L12 15.3l4.5-4.5M5 20h14"/>',
    plane: '<path d="M3.5 11.4L20.5 4l-5.3 16-3.1-6.4z"/><path d="M12.1 13.6L20.5 4"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4"/>',
    half: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',
    moon: '<path d="M20 14.3A8.2 8.2 0 1 1 9.7 4a6.6 6.6 0 0 0 10.3 10.3z"/>'
  };
  function icon(name, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"' +
      (extra || "") + ">" + (ICON_PATHS[name] || "") + "</svg>";
  }

  /* ---------- Texte ---------- */
  var lang = DEFAULT_LANG;

  function pick(value, l) {
    if (value == null) return "";
    if (typeof value === "string" || Array.isArray(value)) return value;
    var v = value[l];
    return v != null ? v : value[DEFAULT_LANG];
  }

  function fmt(html) {
    return String(html)
      .replace(/\{root\}/g, ROOT)
      .replace(/\{contactEmail\}/g, SITE.contactEmail)
      .replace(/\[TODO:[^\]]*\]/g, '<mark class="todo">$&</mark>');
  }

  function t(key) {
    var entry = STR[key];
    if (!entry) {
      if (window.console) console.warn("[i18n] fehlender Schlüssel:", key);
      return key;
    }
    return fmt(pick(entry, lang));
  }

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

  /* ---------- Langtexte (Rechtstexte, FAQ) ---------- */
  function renderBlock(b) {
    switch (b.t) {
      case "h2": case "h3": case "p":
        return "<" + b.t + ">" + fmt(pick(b, lang)) + "</" + b.t + ">";
      case "ul":
        return "<ul>" + pick(b, lang).map(function (li) { return "<li>" + fmt(li) + "</li>"; }).join("") + "</ul>";
      case "link":
        return "<p>" + fmt(b.html) + "</p>";
      case "info":
        return '<div class="info-list">' + b.items.map(function (it) {
          return '<div class="info-item"><strong>' + fmt(pick(it.label, lang)) + "</strong><span>" + fmt(pick(it.value, lang)) + "</span></div>";
        }).join("") + "</div>";
      case "faq":
        return '<div class="faq-list">' + b.items.map(function (it) {
          var a = pick(it.a, lang);
          var answer = Array.isArray(a)
            ? "<ul>" + a.map(function (li) { return "<li>" + fmt(li) + "</li>"; }).join("") + "</ul>"
            : "<p>" + fmt(a) + "</p>";
          return '<div class="faq-item"><strong>' + fmt(pick(it.q, lang)) + "</strong>" + answer + "</div>";
        }).join("") + "</div>";
    }
    return "";
  }

  function renderDoc(el) {
    var doc = DOCS[el.getAttribute("data-doc")];
    el.innerHTML = doc ? doc.blocks.map(renderBlock).join("") : "";
  }

  /* ---------- Aufbau: Header / Footer / Projektkarten ---------- */
  function navItems() {
    var items = [];
    if (PROJECT) {
      var p = PROJECTS.filter(function (x) { return x.slug === PROJECT; })[0];
      items.push({ k: "nav.studio", href: ROOT });
      items.push({ text: p ? p.name : PROJECT, href: ROOT + PROJECT + "/", page: "overview" });
      items.push({ k: "nav.privacy", href: ROOT + PROJECT + "/privacy/", page: "privacy" });
      items.push({ k: "nav.support", href: ROOT + PROJECT + "/support/", page: "support" });
    } else {
      items.push({ k: "nav.home", href: ROOT, page: "home" });
      items.push({ k: "nav.projects", href: ROOT + "#projects" });
      items.push({ k: "nav.contact", href: ROOT + "#contact" });
    }
    return items;
  }

  function buildHeader() {
    var links = navItems().map(function (it) {
      var cur = it.page && it.page === PAGE ? ' aria-current="page"' : "";
      return '<a href="' + it.href + '"' + cur + (it.k ? ' data-i18n="' + it.k + '"' : "") + ">" + (it.text ? esc(it.text) : "") + "</a>";
    }).join("");

    var langBtns = [["de", "DE", "Deutsch"], ["en", "EN", "English"], ["fr", "FR", "Français"]].map(function (l) {
      return '<button type="button" data-lang-button="' + l[0] + '" lang="' + l[0] + '" aria-label="' + l[2] + '">' + l[1] + "</button>";
    }).join("");

    var themeBtns = [["light", "sun"], ["auto", "half"], ["dark", "moon"]].map(function (th) {
      return '<button type="button" data-theme-button="' + th[0] + '" data-i18n-attr="aria-label:theme.' + th[0] + ";title:theme." + th[0] + '">' + icon(th[1]) + "</button>";
    }).join("");

    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="container"><div class="nav glass">' +
        '<a class="brand" href="' + ROOT + '" data-i18n-attr="aria-label:brand.home"><span class="brand-mark">' + icon("plane") + "</span><span>AeroStudios</span></a>" +
        '<nav class="nav-links" data-i18n-attr="aria-label:nav.label">' + links + "</nav>" +
        '<div class="controls">' +
          '<div class="segmented" role="group" data-i18n-attr="aria-label:ctrl.language">' + langBtns + "</div>" +
          '<div class="segmented" role="group" data-i18n-attr="aria-label:ctrl.theme">' + themeBtns + "</div>" +
        "</div></div></div>";

    var skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#main";
    skip.setAttribute("data-i18n", "skip");

    body.insertBefore(header, body.firstChild);
    body.insertBefore(skip, body.firstChild);
  }

  function buildFooter() {
    var projectCols = PROJECTS.map(function (p) {
      return '<div class="footer-sub"><h2>' + esc(p.name) + "</h2><ul>" +
        '<li><a href="' + ROOT + p.slug + '/" data-i18n="footer.overview"></a></li>' +
        '<li><a href="' + ROOT + p.slug + '/privacy/" data-i18n="nav.privacy"></a></li>' +
        '<li><a href="' + ROOT + p.slug + '/support/" data-i18n="nav.support"></a></li>' +
        "</ul></div>";
    }).join("");

    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML =
      '<div class="container"><div class="footer-inner glass">' +
        '<div><div class="footer-brand">AeroStudios</div><p data-i18n="footer.tagline"></p></div>' +
        '<div class="footer-cols">' +
          '<div><h2 data-i18n="footer.studio"></h2><ul>' +
            '<li><a href="' + ROOT + '" data-i18n="nav.home"></a></li>' +
            '<li><a href="' + ROOT + 'impressum/" data-i18n="footer.imprint"></a></li>' +
            '<li><a href="' + ROOT + 'datenschutz/" data-i18n="footer.sitePrivacy"></a></li>' +
          "</ul></div>" + projectCols +
        "</div>" +
        '<div class="footer-note"><span>© ' + new Date().getFullYear() + ' AeroStudios</span><span data-i18n="footer.legalNote"></span></div>' +
      "</div></div>";
    body.appendChild(footer);
  }

  function buildProjects() {
    document.querySelectorAll("[data-projects]").forEach(function (host) {
      host.innerHTML = PROJECTS.map(function (p, i) {
        var storeBtn = p.appStoreUrl
          ? '<a class="btn btn-glass" href="' + p.appStoreUrl + '" rel="noopener">' + icon("download") + '<span data-i18n="btn.appStore"></span></a>'
          : "";
        return '<article class="card glass project-card reveal" style="--i:' + (i + 2) + '">' +
          '<div class="project-top"><span class="app-icon" style="--a:' + p.colors[0] + ";--b:" + p.colors[1] + '">' + icon(p.icon) + "</span>" +
          '<span class="status status-' + p.status + '" data-i18n="status.' + p.status + '"></span></div>' +
          "<h3>" + esc(p.name) + "</h3>" +
          '<p class="tagline" data-i18n="project.' + p.slug + '.tagline"></p>' +
          '<p data-i18n="project.' + p.slug + '.summary"></p>' +
          '<div class="actions"><a class="btn btn-primary" href="' + ROOT + p.slug + '/" data-i18n="btn.learnMore"></a>' + storeBtn + "</div>" +
          "</article>";
      }).join("");
    });
  }

  function projectBySlug(slug) {
    return PROJECTS.filter(function (x) { return x.slug === slug; })[0];
  }

  /* Seiten-Bausteine, die ihre Daten aus projects.js beziehen (eine Quelle für Icons, Status, Links) */
  function bindData() {
    document.querySelectorAll("[data-app-icon]").forEach(function (el) {
      var p = projectBySlug(el.getAttribute("data-app-icon"));
      if (!p) return;
      el.style.setProperty("--a", p.colors[0]);
      el.style.setProperty("--b", p.colors[1]);
      el.innerHTML = icon(p.icon);
    });
    document.querySelectorAll("[data-app-store]").forEach(function (el) {
      var p = projectBySlug(el.getAttribute("data-app-store"));
      if (p && p.appStoreUrl) el.setAttribute("href", p.appStoreUrl);
      else el.hidden = true;
    });
    document.querySelectorAll("[data-project-status]").forEach(function (el) {
      var p = projectBySlug(el.getAttribute("data-project-status"));
      if (!p) return;
      el.className = "status status-" + p.status;
      el.setAttribute("data-i18n", "status." + p.status);
    });
    document.querySelectorAll("[data-mailto]").forEach(function (el) {
      el.setAttribute("href", "mailto:" + SITE.contactEmail);
      if (el.hasAttribute("data-mailto-text")) el.textContent = SITE.contactEmail;
    });
  }

  function injectIcons() {
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      el.innerHTML = icon(el.getAttribute("data-icon"));
    });
  }

  /* ---------- Rendern ---------- */
  function render() {
    root.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var i = pair.indexOf(":");
        if (i > 0) el.setAttribute(pair.slice(0, i).trim(), t(pair.slice(i + 1).trim()).replace(/<[^>]+>/g, ""));
      });
    });

    document.querySelectorAll("[data-doc]").forEach(renderDoc);

    document.querySelectorAll("[data-doc-hero]").forEach(function (el) {
      var ref = el.getAttribute("data-doc-hero");
      var dot = ref.lastIndexOf(".");
      var doc = DOCS[ref.slice(0, dot)];
      if (doc) el.innerHTML = fmt(pick(doc.hero[ref.slice(dot + 1)], lang));
    });

    document.querySelectorAll("[data-lang-button]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang-button") === lang ? "true" : "false");
    });

    var titleKey = body.getAttribute("data-title");
    if (titleKey) document.title = t(titleKey).replace(/<[^>]+>/g, "");
    var descKey = body.getAttribute("data-desc");
    var meta = document.querySelector('meta[name="description"]');
    if (descKey && meta) meta.setAttribute("content", t(descKey).replace(/<[^>]+>/g, ""));
  }

  function setLang(next) {
    if (LANGS.indexOf(next) < 0) next = DEFAULT_LANG;
    lang = next;
    store(KEY_LANG, lang);
    render();
  }

  function detectLang() {
    var saved = store(KEY_LANG);
    if (LANGS.indexOf(saved) >= 0) return saved;
    var prefs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""]);
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).toLowerCase().split("-")[0];
      if (LANGS.indexOf(code) >= 0) return code;
    }
    return DEFAULT_LANG;
  }

  /* ---------- Theme ---------- */
  function setTheme(theme, persist) {
    if (theme === "light" || theme === "dark") root.setAttribute("data-theme", theme);
    else { theme = "auto"; root.removeAttribute("data-theme"); }
    document.querySelectorAll("[data-theme-button]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-theme-button") === theme ? "true" : "false");
    });
    if (persist) store(KEY_THEME, theme);
  }

  /* ---------- Start ---------- */
  buildHeader();
  buildFooter();
  buildProjects();
  bindData();
  injectIcons();

  lang = detectLang();
  render();
  var savedTheme = store(KEY_THEME);
  setTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : "auto", false);

  document.addEventListener("click", function (e) {
    var l = e.target.closest("[data-lang-button]");
    if (l) setLang(l.getAttribute("data-lang-button"));
    var th = e.target.closest("[data-theme-button]");
    if (th) setTheme(th.getAttribute("data-theme-button"), true);
  });

  /* Sanftes Einblenden beim Scrollen (ohne IntersectionObserver oder bei reduzierter Bewegung: sofort sichtbar) */
  var reveals = document.querySelectorAll(".reveal");
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || calm) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  root.classList.add("is-ready");
})();
