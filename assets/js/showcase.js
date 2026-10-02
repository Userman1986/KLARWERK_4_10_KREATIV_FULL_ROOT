(function () {
 const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 let current = THEMES[0].id;
 let busy = false;
 const root = () => document.getElementById("demo-root");
 const sleep = ms => new Promise(r => setTimeout(r, ms));

 window.THEMES = THEMES;

 const PREVIEWS = {
 arch:"photo-1487958449943-2429e8be8625", rest:"photo-1414235077428-338989a2e8c0",
 hotel:"beauty-face", crea:"photo-1524758631624-e2822e304c36",
 shop:"photo-1493663284031-b7e3aefcae8e", med:"photo-1631217868264-e5b90bb7e133",
 law:"photo-1589829545856-d10d557cf95f", real:"photo-1600596542815-ffad4c1539a9",
 tech:"photo-1518770660439-4636190af475", fash:"photo-1469334031218-e382a71b716b"
 };

 const EXTRA = {
 arch: "", rest: "", hotel: "", crea: "", shop: "",
 med: "", law: "", real: "", tech: "", fash: ""
 };

 
 function hardenImages(el){
 el.querySelectorAll("img").forEach(img=>{
 img.addEventListener("error",function(){
 this.onerror=null;this.removeAttribute("srcset");
 this.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='900'%3E%3Crect fill='%231a1916' width='1400' height='900'/%3E%3C/svg%3E";
 this.style.background="#1a1916";
 },{once:true});
 });
 }

 function themeBy(id){ return THEMES.find(t=>t.id===id)||THEMES[0]; }

 function paintRails(){
 document.querySelectorAll("[data-theme-id]").forEach(el=>{
 el.classList.toggle("active",el.dataset.themeId===current);
 el.setAttribute("aria-selected",el.dataset.themeId===current?"true":"false");
 });
 const t=themeBy(current), label=document.getElementById("show-label");
 window.__KW_THEME_CURRENT=t;
 const lang=localStorage.getItem("klarwerk-lang")||"de";
 const displayName=window.KW_SHOW_I18N?.names?.[lang]?.[t.name]||t.name;
 if(label) label.textContent=t.n+" · "+displayName;
 window.KW_SHOW_I18N?.apply?.(lang);
 }

 function buildRails(){
 const desk=document.getElementById("show-rail"), mob=document.getElementById("show-mobile-rail");
 const items=THEMES.map(t=>{
 const base=(window.KLARWERK_SHOWCASE_IMG||"/assets/showcase/img/"); const bg=`${base}${PREVIEWS[t.id]}.jpg`;
 return `<button type="button" class="rail-item" style="--rail-bg:url('${bg}')" data-theme-id="${t.id}" role="tab" aria-selected="false"><span class="rail-preview"></span><b>${t.n}</b><span>${t.short}</span></button>`;
 }).join("");
 if(desk) desk.innerHTML=items;
 if(mob) mob.innerHTML=THEMES.map(t=>`<button type="button" data-theme-id="${t.id}">${t.n} ${t.short}</button>`).join("");
 window.KW_SHOW_I18N?.refreshRails?.(localStorage.getItem("klarwerk-lang")||"de");
 document.querySelectorAll("[data-theme-id]").forEach(btn=>btn.addEventListener("click",()=>select(btn.dataset.themeId,true)));
 }

 function wireDemoLinks(el){
 const sectionMap={
 arch:["#demo-work","#demo-studio","#demo-work","#demo-studio"],
 rest:["#demo-evening","#demo-evening","#demo-reserve","#demo-reserve"],
 hotel:["#demo-experience","#demo-experience","#demo-book","#demo-book"],
 crea:["#demo-services","#demo-services","#demo-brief","#demo-brief"],
 shop:["#demo-collection","#demo-collection","#demo-story","#demo-collection"],
 med:["#demo-team","#demo-team","#demo-appointment","#demo-appointment"],
 law:["#demo-fields","#demo-mandate","#demo-fields","#demo-mandate"],
 real:["#demo-services","#demo-services","#demo-contact","#demo-contact"],
 tech:["#demo-platform","#demo-platform","#demo-security","#demo-security"],
 fash:["#demo-lookbook","#demo-atelier","#demo-atelier","#demo-lookbook"]
 };
 const map=sectionMap[current]||["#demo-work","#demo-work","#demo-work","#demo-work"];
 el.querySelectorAll(".d-links a").forEach((a,i)=>{
 a.setAttribute("href", map[i]||map[0]);
 a.addEventListener("click",e=>{
 const href=a.getAttribute("href");
 if(href&&href.startsWith("#")){
 const target=el.querySelector(href);
 if(target){e.preventDefault();target.scrollIntoView({behavior:reduced?"auto":"smooth",block:"start"});}
 }
 });
 });
 el.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));
 }

 async function select(id,animate){
 if(!id || id===current && root()?.dataset.theme===id || busy) return;
 const t=themeBy(id), el=root();
 if(!el) return;
 busy=true;
 const overlay=document.getElementById("rebuild-overlay");
 const name=document.getElementById("rebuild-name");
 if(animate && !reduced){
 if(name) name.textContent=t.n+" / "+t.name.toUpperCase();
 overlay?.classList.add("active");
 el.classList.remove("is-in"); el.classList.add("is-out","rebuilding");
 await sleep(120);
 }
  let html;
 if (t.fullUrl) {
   // Full multi-page demo site (not the mini themes.js stub)
   html = '<div class="demo-full">' +
     '<div class="demo-full-bar">' +
       '<span>Vollständige Demo-Website</span>' +
       '<a class="demo-full-open" href="' + t.fullUrl + '" target="_blank" rel="noopener">In neuem Tab öffnen ↗</a>' +
     '</div>' +
     '<iframe class="demo-frame" src="' + t.fullUrl + '" title="' + (t.name || 'Demo') + '" loading="eager"></iframe>' +
   '</div>';
 } else {
   const base = t.html();
   const extra = EXTRA[t.id] || "";
   html = base.replace(/<footer class="d-foot/g, extra + '<footer class="d-foot');
 }
 el.classList.add("is-out","rebuilding");
 el.innerHTML = html;
 try{el.scrollTop=0;const st=el.closest(".show-stage");if(st)st.scrollTop=0;window.scrollTo(0,0);}catch(e){}
 el.className="demo "+t.cls+" is-out rebuilding";
 el.dataset.theme=t.id;
 current=t.id;
 paintRails();
 hardenImages(el);
 wireDemoLinks(el);
 // double rAF: paint hidden frame, then fade in
 requestAnimationFrame(()=>{
   requestAnimationFrame(()=>{
     el.classList.remove("is-out","rebuilding");
     el.classList.add("is-in");
   });
 });
 await sleep(reduced?0:200);
 overlay?.classList.remove("active");
 busy=false;
 }

 document.addEventListener("keydown",e=>{
 if(busy)return;
 const i=THEMES.findIndex(t=>t.id===current);
 if(e.key==="ArrowDown"||e.key==="ArrowRight"){e.preventDefault();select(THEMES[(i+1)%THEMES.length].id,true)}
 if(e.key==="ArrowUp"||e.key==="ArrowLeft"){e.preventDefault();select(THEMES[(i-1+THEMES.length)%THEMES.length].id,true)}
 });

 window.selectTheme=select;
document.addEventListener("DOMContentLoaded",()=>{
 buildRails();
 select(THEMES[0].id,false);
 });
})();

// Demo internal nav: smooth scroll to anchors inside #demo-root
document.addEventListener('click', (e) => {
 const a = e.target.closest('#demo-root a[href^="#demo-"], #demo-root a.d-top, #home-demo-root a[href^="#demo-"]');
 if (!a) return;
 const id = a.getAttribute('href');
 if (!id || id === '#') return;
 const target = document.querySelector(id);
 if (!target) return;
 e.preventDefault();
 target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


/* Scroll to top on showcase page */
(function(){
  function init(){
    if (document.getElementById('kw-scroll-top')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'kw-scroll-top';
    btn.className = 'kw-scroll-top';
    btn.setAttribute('aria-label', 'Nach oben');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(btn);
    function toggle(){
      var y = window.scrollY || document.documentElement.scrollTop;
      btn.classList.toggle('is-visible', y > 320);
    }
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    btn.addEventListener('click', function(){
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
