/** Shared demo UI: mobile menu + scroll reveal + persistent scroll-to-top */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var burger = document.getElementById("burger");
    var panel = document.getElementById("mobile-panel") || document.getElementById("drawer");
    if (burger && panel) {
      burger.setAttribute("aria-expanded", "false");
      burger.addEventListener("click", function () {
        var open = !panel.classList.contains("open");
        panel.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      panel.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          panel.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var els = document.querySelectorAll(".reveal");
    if (reduced) {
      els.forEach(function (el) { el.classList.add("is-in"); });
    } else if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );
      els.forEach(function (el) { io.observe(el); });
    }

    /* Scroll-to-top: hidden at the top, appears after scrolling (original demo behavior). */
    if (!document.getElementById("kw-scroll-top")) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.id = "kw-scroll-top";
      btn.className = "kw-scroll-top";
      btn.setAttribute("aria-label", "Nach oben");
      btn.title = "Nach oben";
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
      document.body.appendChild(btn);
      function toggleScrollTop() {
        var y = window.scrollY || document.documentElement.scrollTop;
        btn.classList.toggle("is-visible", y > 400);
      }
      window.addEventListener("scroll", toggleScrollTop, { passive: true });
      toggleScrollTop();
      btn.addEventListener("click", function () {
        var rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: rm ? "auto" : "smooth" });
      });
    }
  });
})();
