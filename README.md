# AeroStudios – Website

Website des Ein-Mann-iOS-Studios **AeroStudios** (GitHub Pages, rein statisch: HTML, CSS, JavaScript – kein Build-Schritt, keine Cookies, keine externen Skripte/Schriften).

## Seiten

| URL | Inhalt |
| --- | --- |
| `/` | Studio-Startseite (Projektkarten, Kontakt) |
| `/aerobooks/` · `/aerobooks/privacy/` · `/aerobooks/support/` | AeroBooks (Rechtstexte unverändert aus `aerobooks-site`) |
| `/aeromovies/` · `/aeromovies/privacy/` · `/aeromovies/terms/` · `/aeromovies/support/` | AeroMovies (Rechtstexte = Entwurf) |
| `/impressum/` · `/datenschutz/` | Studio-weit (Entwurf, Platzhalter) |
| `/privacy.html` · `/support.html` | Weiterleitungen der alten AeroBooks-URLs |

## Texte ändern (DE / EN / FR)

Alle Texte stehen in `assets/i18n/`, jeweils als `{ de, en, fr }`:

- `site.js` – Oberfläche, Startseite, Projektseiten
- `aerobooks-legal.js`, `aeromovies-legal.js`, `site-legal.js` – Rechtstexte und FAQ
- Fehlende Übersetzung → es wird Deutsch angezeigt. Bei Rechtstexten ist Deutsch maßgeblich.

## Neue App hinzufügen

1. Eintrag in `assets/js/projects.js` (Name, Status `live`/`soon`, App-Store-Link, Icon, Farben).
2. `project.<slug>.tagline` / `.summary` in `assets/i18n/site.js`.
3. Ordner `/<slug>/` (am einfachsten `/aeromovies/` kopieren) und `assets/i18n/<slug>-legal.js`.

Startseite und Footer übernehmen die App automatisch.

## Lokal ansehen

```bash
python3 -m http.server 8000
```

Dann <http://localhost:8000/> öffnen.

## Wichtig

Die AeroBooks-Datenschutz- und Support-Seiten sind in App Store Connect verlinkt. Deutsche und englische Texte in `assets/i18n/aerobooks-legal.js` nicht ändern, ohne App Store Connect zu prüfen.
