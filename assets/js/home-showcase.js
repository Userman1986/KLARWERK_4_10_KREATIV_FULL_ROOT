(function () {
 const root = document.getElementById("home-demo-root");
 const rail = document.getElementById("home-theme-rail");
 if (!root || !rail || typeof THEMES === "undefined") return;

 const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
 const PREVIEWS = {
 arch: "photo-1487958449943-2429e8be8625",
 rest: "photo-1414235077428-338989a2e8c0",
 hotel: "beauty-face",
 crea: "photo-1524758631624-e2822e304c36",
 shop: "photo-1586023492125-27b2c045efd7",
 med: "photo-1631217868264-e5b90bb7e133",
 law: "photo-1589829545856-d10d557cf95f",
 real: "photo-1600596542815-ffad4c1539a9",
 tech: "photo-1518770660439-4636190af475",
 fash: "photo-1469334031218-e382a71b716b"
 };
 const FALLBACK =
 "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='160'%3E%3Crect fill='%231a1916' width='240' height='160'/%3E%3C/svg%3E";

 let current = THEMES[0].id;
 let busy = false;
 const name = document.getElementById("home-theme-name");
 const no = document.getElementById("home-theme-no");
 const overlay = document.getElementById("home-rebuild");
 const rebuildName = document.getElementById("home-rebuild-name");

 function theme(id) {
 return THEMES.find((t) => t.id === id) || THEMES[0];
 }

 function railBg(id) {
 const pid = PREVIEWS[id];
 if (!pid) return FALLBACK;
 var base=(window.KLARWERK_SHOWCASE_IMG||"assets/showcase/img/"); return base + pid + ".jpg";
 }

 function buildRail() {
 rail.innerHTML = THEMES.map(function (t) {
 return (
 '<button type="button" data-home-theme="' +
 t.id +
 '" class="' +
 (t.id === current ? "active" : "") +
 '" aria-pressed="' +
 (t.id === current) +
 '"><span class="home-rail-img" style="background-image:url(\'' +
 railBg(t.id) +
 '\')"></span><b>' +
 t.n +
 "</b><small>" +
 t.short +
 "</small></button>"
 );
 }).join("");
 rail.querySelectorAll("button").forEach(function (b) {
 b.addEventListener("click", function () {
 select(b.dataset.homeTheme);
 });
 var img = b.querySelector(".home-rail-img");
 if (img) {
 var test = new Image();
 test.onerror = function () {
 img.style.backgroundImage = "url('" + FALLBACK + "')";
 };
 test.src = railBg(b.dataset.homeTheme);
 }
 });
 }

 function paint() {
 rail.querySelectorAll("button").forEach(function (b) {
 var on = b.dataset.homeTheme === current;
 b.classList.toggle("active", on);
 b.setAttribute("aria-pressed", on ? "true" : "false");
 });
 var t = theme(current);
 if (no) no.textContent = t.n;
 var lang = localStorage.getItem("klarwerk-lang") || "de";
 var names = window.KW_SHOW_I18N && window.KW_SHOW_I18N.names && window.KW_SHOW_I18N.names[lang];
 if (name) name.textContent = (names && names[t.name]) || t.name;
 }

 function hardenImages(el) {
 el.querySelectorAll("img").forEach(function (img) {
 img.addEventListener(
 "error",
 function () {
 this.onerror = null;
 this.removeAttribute("srcset");
 this.src = FALLBACK;
 this.style.objectFit = "cover";
 this.style.background = "#1a1916";
 },
 { once: true }
 );
 });
 }

 function wireLinks(el) {
 el.querySelectorAll('a[href="#"]').forEach(function (a) {
 a.addEventListener("click", function (e) {
 e.preventDefault();
 });
 });
 }

 async function select(id) {
 if (busy || (id === current && root.dataset.theme === id)) return;
 var t = theme(id);
 busy = true;

 if (!reduced) {
 if (rebuildName) rebuildName.textContent = t.n + " / " + t.name.toUpperCase();
 if (overlay) {
 overlay.dataset.theme = id;
 overlay.classList.add("active");
 overlay.setAttribute("aria-hidden", "false");
 }
 root.classList.remove("home-in");
 root.classList.add("home-out");
 await new Promise(function (r) {
 setTimeout(r, 120);
 });
 }

 if (t.fullUrl) {
    root.innerHTML = '<div class="demo-full"><iframe class="demo-frame" src="' + t.fullUrl + '" title="' + (t.name||'Demo') + '" loading="eager"></iframe></div>';
  } else {
    root.innerHTML = t.html();
  }
 root.className = "demo " + t.cls + " home-out";
 root.dataset.theme = id;
 current = id;
 paint();
 hardenImages(root);
 wireLinks(root);

 requestAnimationFrame(function () {
 root.classList.remove("home-out");
 root.classList.add("home-in");
 });

 if (!reduced)
 await new Promise(function (r) {
 setTimeout(r, 180);
 });
 if (overlay) {
 overlay.classList.remove("active");
 overlay.setAttribute("aria-hidden", "true");
 }
 busy = false;
 }

 buildRail();
 select(current);
 window.addEventListener("storage", paint);
})();
