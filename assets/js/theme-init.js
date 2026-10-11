/* Läuft synchron im <head>: setzt das gespeicherte Theme vor dem ersten Rendern (kein Aufblitzen). */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  try {
    var theme = localStorage.getItem("aerostudios-theme");
    if (theme === "light" || theme === "dark") root.setAttribute("data-theme", theme);
  } catch (e) { /* localStorage nicht verfügbar – Auto-Modus */ }
  // Sicherheitsnetz: Seite nie dauerhaft ausgeblendet lassen, falls app.js nicht lädt.
  setTimeout(function () { root.classList.add("is-ready"); }, 1500);
})();
