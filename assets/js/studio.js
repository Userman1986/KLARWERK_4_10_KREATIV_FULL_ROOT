
 function initReveal(){
  const els = document.querySelectorAll('.kw-reveal');
  if (!els.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  els.forEach(el => io.observe(el));
 }

const ROOT = document.body?.dataset.root || "";
const PAGES = ROOT + "pages/";
const NAV = [
 [ROOT, "Home", "home"],
 [PAGES + "services/web-development.html", "Services", "svc"],
 [PAGES + "showcase/index.html", "Showcase", "show"],
 [PAGES + "projekte.html", "Projects", "proj"],
 [PAGES + "team.html", "Team", "team"],
 [PAGES + "prozess.html", "Process", "proc"],
 [PAGES + "preise.html", "Pricing", "price"],
 [PAGES + "kontakt.html", "Contact", "contact"]
];

function logoSvg() {
 return `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M8 6V26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M8 16L22 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M8 16L22 26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="24" cy="16" r="3" fill="#C4A574"/></svg>`;
}

function navHTML(page) {
 const links = NAV.map(([href, label, id]) =>
 `<a href="${href}" class="${page === id ? "active" : ""}">${label}</a>`
 ).join("");
 return `
 <div class="mobile-backdrop" id="mobile-backdrop"></div>
 <nav id="navbar"><div class="wrap nav-inner">
 <a class="brand" href="${ROOT}"><span class="logo-mark">${logoSvg()}</span>KLARWERK</a>
 <div class="nav-links">${links}</div>
 <div class="nav-right">
 <div class="lang-switcher" aria-label="Language">
 <button type="button" class="lang-trigger" id="lang-trigger">DE</button>
 <div class="lang-menu" id="lang-menu">
 <button type="button" data-lang="de">DE</button>
 <button type="button" data-lang="en">EN</button>
 <button type="button" data-lang="uk">UA</button>
 <button type="button" data-lang="he">HE</button>
 </div>
 </div>
 <a class="btn btn-primary" href="${PAGES}kontakt.html">Start a project</a>
 <button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
 </div>
 </div></nav>
 <div id="mobile-menu">
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
 <strong>KLARWERK</strong>
 <button id="close-menu" type="button" aria-label="Schließen" style="width:44px;height:44px;border:0;background:transparent;color:#fff;font-size:28px">×</button>
 </div>
 ${links}
 <div class="mobile-langs">
 <span>LANGUAGE</span>
 <button type="button" data-lang="de">DE</button><button type="button" data-lang="en">EN</button><button type="button" data-lang="uk">UA</button><button type="button" data-lang="he">HE</button>
 </div>
 <a class="btn btn-primary" href="${PAGES}kontakt.html" style="margin-top:16px">Start a project</a>
 </div>
 <button id="to-top" type="button" aria-label="Nach oben">↑</button>`;
}

function footerHTML() {
 return `<div class="wrap">
 <div class="foot-mark" aria-hidden="true">K<span>.</span></div>
 <div class="foot-grid">
 <div>
 <div class="brand"><span class="logo-mark">${logoSvg()}</span>KLARWERK</div>
 <p>Full-Cycle Digital Studio.<br>Web, Security, Analytics, Performance Marketing.<br>Deutschland / EU</p>
 <p><a href="mailto:main@klarwerk.studio">main@klarwerk.studio</a></p>
 </div>
 <div>
 <strong data-i18n="footer_services">Services</strong>
 <a href="${PAGES}services/web-development.html">Web Development</a>
 <a href="${PAGES}services/security.html">Cybersecurity</a>
 <a href="${PAGES}services/business-analytics.html">Business Analytics</a>
 <a href="${PAGES}services/performance-marketing.html">Performance Marketing</a>
 </div>
 <div>
 <strong data-i18n="footer_studio">Studio</strong>
 <a href="${PAGES}team.html">Team</a>
 <a href="${PAGES}showcase/index.html">Showcase</a>
 <a href="${PAGES}projekte.html">Projekte</a>
 <a href="${PAGES}prozess.html">Prozess</a>
 <a href="${PAGES}preise.html">Preise</a>
 </div>
 <div>
 <strong data-i18n="footer_contact">Contact</strong>
 <a href="${PAGES}kontakt.html">Start a project</a>
 <a href="${ROOT}legal/impressum.html">Impressum</a>
 <a href="${ROOT}legal/datenschutz.html">Datenschutz</a>
 </div>
 </div>
 <div class="foot-copy"><span>© 2026 KLARWERK</span><span>Made in Germany</span></div>
 </div>`;
}

function mountChrome() {
 const page = document.body.dataset.page || "";
 const holder = document.getElementById("chrome");
 if (holder) holder.innerHTML = navHTML(page);
 const foot = document.getElementById("site-footer");
 if (foot) foot.innerHTML = footerHTML();

 const nav = document.getElementById("navbar");
 const onScroll = () => {
 nav && nav.classList.toggle("scrolled", window.scrollY > 8);
 const top = document.getElementById("to-top");
 if (top) top.classList.toggle("show", window.scrollY > 600);
 };
 window.addEventListener("scroll", onScroll, { passive: true });
 onScroll();

 const menu = document.getElementById("mobile-menu");
 const backdrop = document.getElementById("mobile-backdrop");
 const burger = document.getElementById("burger");
 const close = () => {
 menu && menu.classList.remove("open");
 backdrop && backdrop.classList.remove("show");
 burger && burger.setAttribute("aria-expanded", "false");
 document.body.style.overflow = "";
 };
 const open = () => {
 menu && menu.classList.add("open");
 backdrop && backdrop.classList.add("show");
 burger && burger.setAttribute("aria-expanded", "true");
 document.body.style.overflow = "hidden";
 };
 burger && burger.addEventListener("click", open);
 document.getElementById("close-menu")?.addEventListener("click", close);
 backdrop && backdrop.addEventListener("click", close);
 menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
 document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
 document.getElementById("to-top")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function wireForm() {
 const form = document.getElementById("contact-form");
 if (!form) return;
 const params = new URLSearchParams(location.search);
 const need = params.get("need");
 if (need) {
 const radio = form.querySelector(`input[name="need"][value="${CSS.escape(need)}"]`);
 if (radio) radio.checked = true;
 }
 form.addEventListener("submit", e => {
 e.preventDefault();
 const data = new FormData(form);
 const body = [
 `Bedarf: ${data.get("need") || "—"}`,
 `Ziel: ${data.get("goal") || "—"}`,
 `Name: ${data.get("name") || "—"}`,
 `Unternehmen: ${data.get("company") || "—"}`,
 `E-Mail: ${data.get("email") || "—"}`
 ].join("\n");
 location.href = `mailto:main@klarwerk.studio?subject=${encodeURIComponent("Projektanfrage KLARWERK")}&body=${encodeURIComponent(body)}`;
 });
}

function initProcessNodes() {
 document.querySelectorAll('.process-node').forEach((node, i) => {
 node.tabIndex = 0;
 node.setAttribute('role','button');
 if (!node.querySelector('.node-detail')) {
 const p = node.querySelector('p');
 if (p) {
 const detail = document.createElement('div');
 detail.className='node-detail';
 detail.innerHTML='<p>'+p.textContent+'</p>';
 p.style.display='none';
 node.appendChild(detail);
 }
 }
 const toggle=()=>{document.querySelectorAll('.process-node').forEach(n=>{if(n!==node)n.classList.remove('is-active')});node.classList.toggle('is-active')};
 node.addEventListener('click',toggle);
 node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}});
 });
}

function initLanguageUI() {
 const saved = localStorage.getItem("klarwerk-lang") || "de";
 window.KW_LANG = saved;
 const apply = (lang) => {
 window.KW_LANG = lang;
 localStorage.setItem("klarwerk-lang", lang);
 document.documentElement.lang = lang === "uk" ? "uk" : lang;
 document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
 const trigger = document.getElementById("lang-trigger");
 if (trigger) trigger.textContent = lang === "uk" ? "UA" : lang.toUpperCase();
 document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
 if (window.KW_I18N && typeof window.KW_I18N.apply === "function") window.KW_I18N.apply(lang);
 };
 document.querySelectorAll("[data-lang]").forEach(btn => {
 btn.addEventListener("click", () => apply(btn.dataset.lang));
 });
 const trigger = document.getElementById("lang-trigger");
 trigger?.addEventListener("click", () => document.getElementById("lang-menu")?.classList.toggle("open"));
 document.addEventListener("click", e => {
 if (!e.target.closest(".lang-switcher")) document.getElementById("lang-menu")?.classList.remove("open");
 });
 apply(saved);
}

document.addEventListener("DOMContentLoaded", () => {
 mountChrome();
 wireForm();
 initLanguageUI();
 initProcessNodes();
});

/* ===== 4.4 UX / ACCESSIBILITY / PERFORMANCE ===== */
(function(){
 function improveImages(){
 document.querySelectorAll('img').forEach((img, i) => {
 if (!img.getAttribute('alt')) img.setAttribute('alt','');
 img.decoding = img.decoding || 'async';
 if (i > 0 && !img.hasAttribute('loading')) img.setAttribute('loading','lazy');
 });
 }

 function improveMobileMenu(){
 const menu=document.getElementById('mobile-menu');
 const burger=document.getElementById('burger');
 const close=document.getElementById('close-menu');
 if(!menu || !burger) return;
 menu.setAttribute('aria-hidden', menu.classList.contains('open') ? 'false' : 'true');
 const sync=()=>{
 const open=menu.classList.contains('open');
 menu.setAttribute('aria-hidden', open ? 'false' : 'true');
 burger.setAttribute('aria-expanded', String(open));
 if(close) close.setAttribute('aria-label', window.KW_LANG==='de'?'Menü schließen':window.KW_LANG==='uk'?'Закрити меню':window.KW_LANG==='he'?'סגירת תפריט':'Close menu');
 };
 const observer=new MutationObserver(sync);
 observer.observe(menu,{attributes:true,attributeFilter:['class']});
 sync();
 }

 function improveExternalLinks(){
 document.querySelectorAll('a[target="_blank"]').forEach(a=>{
 const rel=(a.getAttribute('rel')||'').split(/\s+/).filter(Boolean);
 if(!rel.includes('noopener')) rel.push('noopener');
 if(!rel.includes('noreferrer')) rel.push('noreferrer');
 a.setAttribute('rel',rel.join(' '));
 });
 }

 function improveForms(){
 document.querySelectorAll('input, textarea, select').forEach(el=>{
 if(el.required && !el.getAttribute('aria-required')) el.setAttribute('aria-required','true');
 });
 }

 
 function initScrollTop(){
  if (document.getElementById('kw-scroll-top')) return;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'kw-scroll-top';
  btn.className = 'kw-scroll-top';
  btn.setAttribute('aria-label', 'Nach oben');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(btn);
  const toggle = () => {
   const y = window.scrollY || document.documentElement.scrollTop;
   btn.classList.toggle('is-visible', y > 400);
  };
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
  btn.addEventListener('click', () => {
   const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });
 }

document.addEventListener('DOMContentLoaded',()=>{
 improveImages();
 improveMobileMenu();
 improveExternalLinks();
 improveForms();
 initScrollTop();
 initReveal();
 });
})();
