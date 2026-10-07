(function () {
  "use strict";

  var KEY = "theme";
  var root = document.documentElement;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀ 日间" : "☾ 夜间";
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {}
  }

  function load() {
    try {
      return localStorage.getItem(KEY) === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  }

  apply(load());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    apply(current());
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      apply(next);
      save(next);
    });
  });
})();