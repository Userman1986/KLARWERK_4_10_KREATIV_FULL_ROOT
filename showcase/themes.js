const U = (id, alt, eager) => {
  // Local showcase images — no third-party CDN (DSGVO)
  const base = (typeof window !== "undefined" && window.KLARWERK_SHOWCASE_IMG)
    ? window.KLARWERK_SHOWCASE_IMG
    : (document.body && document.body.dataset && document.body.dataset.root
        ? document.body.dataset.root + "assets/showcase/img/"
        : "/assets/showcase/img/");
  const src = `${base}${id}.jpg`;
  const fb = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect fill='%232a2825' width='1200' height='800'/%3E%3C/svg%3E";
  return `<img class="${eager ? "bg" : ""}" src="${src}" alt="${alt || ""}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="1200" height="800" onerror="this.onerror=null;this.src='${fb}'">`;
};

const THEMES = [
 {
 id: "arch", n: "01", name: "Handwerk", short: "Handwerk", cls: "t-arch", fullUrl: "/demos/handwerk/",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">SANIERUNG HAMBURG</a>
 <nav class="d-links">
 <a href="#demo-work">Referenzen</a>
 <a href="#demo-approach">So arbeiten wir</a>
 <a href="#demo-studio">Betrieb</a>
 <a href="#demo-contact">Kontakt</a>
 </nav>
 <a class="d-cta" href="#demo-contact">Jetzt anfragen</a>
 </header>
 <section id="demo-top" class="d-hero">${U("photo-1487958449943-2429e8be8625", "Museum building", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Handwerk · Hamburg & Umland</p><h1>Arbeit, die man sieht.</h1><p>Sanierung, Ausbau, Neubau. Lokales SEO, schnelle Anfragen auf Aufmaß, Portfolio der fertigen Arbeiten.</p></div></section>
 <section id="demo-work" class="d-sec"><div class="d-wrap"><p class="d-k">Referenzen</p><h2>Drei Baustellen. Ein Standard.</h2>
 <div class="d-grid d-grid-3">
 <article class="d-card">${U("photo-1503387762-592deb58ef4e", "Construction")}<h3>Dachausbau Eppendorf</h3><p>Komplettausbau · 2022. Dämmung, Trockenbau, Elektro-Koordination.</p></article>
 <article class="d-card">${U("photo-1511818966892-d7d671e672a2", "Modern villa")}<h3>Bad & Fliese Altona</h3><p>Komplettbad · 3 Wochen. Aufmaß online, Termin vor Ort.</p></article>
 <article class="d-card">${U("photo-1600210492486-724fe5c67fb0", "Interior")}<h3>Fassade Winterhude</h3><p>WDVS & Anstrich · Dokumentation für die Abnahme.</p></article>
 </div>
 </div></section>
 <section id="demo-approach" class="d-band"><div class="d-wrap d-sec">
 <p class="d-k">So arbeiten wir</p>
 <div class="d-grid d-grid-3">
 <article class="d-stat"><b>01</b><h3>Anfrage</h3><p>Lokal gefunden. Formular, Rückruf, Aufmaß-Termin in 48 Stunden.</p></article>
 <article class="d-stat"><b>02</b><h3>Aufmaß</h3><p>Vor Ort oder per Skizze. Klare Leistung, fester Rahmen.</p></article>
 <article class="d-stat"><b>03</b><h3>Ausführung</h3><p>Fotos der Baustelle, Abnahme, Gewährleistung nach VOB/BGB.</p></article>
 </div>
 </div></section>
 <section id="demo-studio" class="d-sec"><div class="d-wrap">
 <div class="d-grid d-grid-2 d-split">
 <div><p class="d-k">Betrieb</p><h2>Weniger Show. Mehr fertige Fläche.</h2><p>Portfolio echter Baustellen. Google-Sichtbarkeit in Hamburg. Anfragen, die auf Aufmaß zielen — nicht auf „Info“.</p><a class="d-cta" href="#demo-contact">Aufmaß anfragen</a></div>
 <div class="d-split-img">${U("photo-1487017159836-4e23ece2e4cf", "Model")}</div>
 </div>
 </div></section>
 <section id="demo-contact" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Kontakt</p><h2>Jetzt anfragen. Aufmaß folgt.</h2><p>Hamburg & Umland · Handwerk mit digitalem Vorsprung</p>
 <a class="d-cta" href="/pages/kontakt.html">Jetzt anfragen</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Sanierung Hamburg</strong> <span>Hamburg</span></div>
 <nav class="d-foot-links"><a href="#demo-work">Referenzen</a> <a href="#demo-approach">So arbeiten wir</a> <a href="#demo-studio">Betrieb</a> <a href="#demo-contact">Kontakt</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "rest", n: "02", name: "Restaurant", short: "Restaurant", cls: "t-rest", fullUrl: "/demos/gastro/",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">OSTERIA VERDE</a>
 <nav class="d-links"><a href="#demo-menu">Menü</a> <a href="#demo-house">Haus</a> <a href="#demo-wine">Wein</a> <a href="#demo-reserve">Tisch</a></nav>
 <a class="d-cta" href="#demo-reserve">Reservieren</a>
 </header>
 <section id="demo-top" class="d-hero">${U("photo-1414235077428-338989a2e8c0", "Plated dish", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Schanzenviertel · Hamburg</p><h1>Italienisch essen in Hamburg.</h1><p>Französische Brasserie, deutsche Produkte. Offene Küche, 42 Plätze.</p></div></section>
 <section id="demo-menu" class="d-sec"><div class="d-wrap"><p class="d-k">Heute Abend</p><h2>Menü</h2>
 <div class="menu-row"><span><b>Jakobsmuschel</b> · braune Butter, Kapern</span><span>24</span></div>
 <div class="menu-row"><span><b>Suprême de volaille</b> · Moreln, Riesling</span><span>32</span></div>
 <div class="menu-row"><span><b>Kalbsbäckchen</b> · Sellerie, Jus</span><span>36</span></div>
 <div class="menu-row"><span><b>Île flottante</b> · Vanille, Karamell</span><span>14</span></div>
 <p class="d-note">Menü 3 Gänge 58 · mit Weinbegleitung 86</p>
 </div></section>
 <section id="demo-house" class="d-sec"><div class="d-wrap"><p class="d-k">Das Haus</p>
 <div class="d-grid d-grid-3">
 <article class="d-card">${U("photo-1517248135467-4c7edcad34c4", "Dining room")}<h3>Saal</h3><p>Di–Sa 18:00–23:00 · 42 Plätze</p></article>
 <article class="d-card">${U("photo-1559339352-11d035aa65de", "Pasta")}<h3>Küche</h3><p>Saison, Markt, max. 12 Positionen</p></article>
 <article class="d-card">${U("photo-1544025162-d76694265947", "Grill")}<h3>Feuer</h3><p>Holzkohle, eine Pfanne, Geduld</p></article>
 </div>
 </div></section>
 <section id="demo-wine" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Wein</p><h2>Kurze Liste. Ehrliche Flaschen.</h2><p>Burgund, Loire, Rheingau. Glas ab 7, Flasche ab 32.</p></div></section>
 <section id="demo-reserve" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Reservierung</p><h2>Ihr Tisch ist bereit.</h2><p>Schulterblatt 9 · 20357 Hamburg · Di–Sa ab 18 Uhr</p>
 <a class="d-cta" href="/pages/kontakt.html">Tisch reservieren</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Osteria Verde</strong> <span>Schanzenviertel</span></div>
 <nav class="d-foot-links"><a href="#demo-menu">Menü</a> <a href="#demo-house">Haus</a> <a href="#demo-wine">Wein</a> <a href="#demo-reserve">Tisch</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "hotel", n: "03", name: "Kosmetik", short: "Kosmetik", cls: "t-hotel", fullUrl: "/demos/kosmetik/",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">STUDIO SAMT</a>
 <nav class="d-links"><a href="#demo-rooms">Suiten</a> <a href="#demo-spa">Spa</a> <a href="#demo-house">Haus</a> <a href="#demo-stay">Anfrage</a></nav>
 <a class="d-cta" href="#demo-stay">Anfrage</a>
 </header>
 <section id="demo-top" class="d-hero">${U("beauty-face", "Pool evening", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Eppendorf · Hamburg</p><h1>Kosmetik, die man sieht.</h1><p>Haus am Watt. Leinen, Eiche, Nordsee vor dem Fenster.</p></div></section>
 <section id="demo-rooms" class="d-sec"><div class="d-wrap"><p class="d-k">Suiten</p><h2>Drei Typen. Ein Haus.</h2>
 <div class="d-grid d-grid-3">
 <article class="d-card">${U("beauty-skincare", "Room")}<h3>Düne</h3><p>32 m² · ab 290 € / Nacht</p></article>
 <article class="d-card">${U("beauty-nails", "Suite")}<h3>Watt</h3><p>48 m² · ab 420 € / Nacht</p></article>
 <article class="d-card">${U("beauty-lashes", "Bath")}<h3>Haus 1</h3><p>Eigene Suite · auf Anfrage</p></article>
 </div>
 </div></section>
 <section id="demo-spa" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Tag im Haus</p>
 <div class="d-grid d-grid-3">
 <article class="d-stat"><h3>Morgen</h3><p>Frühstück bis 11. Brot, Kaffee, Meer.</p></article>
 <article class="d-stat"><h3>Nachmittag</h3><p>Sauna zum Watt, Leseraum, Spaziergänge.</p></article>
 <article class="d-stat"><h3>Abend</h3><p>Ruhige Küche, ein Glas Wein, keine Animation.</p></article>
 </div>
 </div></section>
 <section id="demo-house" class="d-sec"><div class="d-wrap">
 <div class="d-grid d-grid-2 d-split">
 <div><p class="d-k">Haus</p><h2>Weniger Programm. Mehr Anwesenheit.</h2><p>Wir verkaufen keine Erlebnisse. Wir halten das Haus in Ordnung.</p></div>
 <div class="d-split-img">${U("beauty-salon", "Lobby")}</div>
 </div>
 </div></section>
 <section id="demo-stay" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Aufenthalt</p><h2>Drei Nächte. Kein Itinerary nötig.</h2><p>Check-in ab 15 Uhr · Amrum</p>
 <a class="d-cta" href="/pages/kontakt.html">Aufenthalt anfragen</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Studio Samt</strong> <span>Amrum</span></div>
 <nav class="d-foot-links"><a href="#demo-rooms">Suiten</a> <a href="#demo-spa">Spa</a> <a href="#demo-stay">Anfrage</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "crea", n: "04", name: "Creative Agency", short: "Creative", cls: "t-crea", fullUrl: "/demos/creative/",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">STUDIO MORSE</a>
 <nav class="d-links"><a href="#demo-work">Work</a> <a href="#demo-services">Studio</a> <a href="#demo-brief">Kontakt</a></nav>
 <a class="d-cta" href="#demo-brief">Brief senden</a>
 </header>
 <section id="demo-top" class="d-hero">${U("photo-1561070791-2526d30994b5", "Editorial design studio", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Identity · Print · Motion</p><h1>Zeichen, die man nicht überliest.</h1><p>Unabhängig. Berlin. Marken, die man anfasst.</p></div></section>
 <section id="demo-work" class="d-sec"><div class="d-wrap"><p class="d-k">Selected work</p>
 <div class="d-grid d-grid-2">
 <article class="work">${U("photo-1561070791-2526d30994b5", "Posters")}<span>Aurora Press</span></article>
 <article class="work">${U("photo-1558655146-d09347e92766", "Type")}<span>Kollektiv Nord</span></article>
 <article class="work">${U("photo-1497366216548-37526070297c", "Space")}<span>Haus 27</span></article>
 <article class="work">${U("photo-1492691527719-9d1e07e534b4", "Motion")}<span>Reel 04</span></article>
 </div>
 </div></section>
 <section id="demo-services" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Capabilities</p>
 <div class="d-grid d-grid-3">
 <article class="d-stat"><h3>Identity</h3><p>Naming, visuelle Sprache, Systeme und Details.</p></article>
 <article class="d-stat"><h3>Campaigns</h3><p>Print, Digital, Film und Social — ein Konzept.</p></article>
 <article class="d-stat"><h3>Motion</h3><p>Rhythmus, Übergänge, bewegte Typografie.</p></article>
 </div>
 </div></section>
 <section id="demo-brief" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Brief</p><h2>Eine gute Frage startet das System.</h2><p>Kontext, Ambition, Constraints.</p>
 <a class="d-cta" href="/pages/kontakt.html">Brief senden</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Studio Morse</strong> <span>Berlin</span></div>
 <nav class="d-foot-links"><a href="#demo-work">Work</a> <a href="#demo-services">Studio</a> <a href="#demo-brief">Kontakt</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "shop", n: "05", name: "E-Commerce", short: "Shop", cls: "t-shop",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">NORD FORM</a>
 <nav class="d-links"><a href="#demo-products">Möbel</a> <a href="#demo-service">Service</a> <a href="#demo-about">Über uns</a></nav>
 <a class="d-cta" href="#">Warenkorb (0)</a>
 </header>
 <section id="demo-top" class="d-hero" style="min-height:52vh">${U("photo-1586023492125-27b2c045efd7", "Living room", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Möbel aus dem Norden</p><h1>Form, die man täglich sieht.</h1><p>Sofas, Tische, Leuchten. Lager in Schleswig-Holstein. Versand DE / AT / CH.</p></div></section>
 <section id="demo-products" class="d-sec"><div class="d-wrap"><p class="d-k">Diese Woche</p><h2>Ausgewählt, nicht angehäuft.</h2>
 <div class="d-grid d-grid-4">
 <article class="d-card">${U("photo-1555041469-a586c61ea9bc", "Sofa")}<h3>Sofa Aalto</h3><p>3-Sitzer, Wolle</p><div class="price">1.890 €</div></article>
 <article class="d-card">${U("photo-1538688525198-9b88f6f53126", "Chair")}<h3>Stuhl Ribe</h3><p>Eiche geölt</p><div class="price">320 €</div></article>
 <article class="d-card">${U("photo-1513506003901-1e6a229e2d15", "Lamp")}<h3>Leuchte Arc</h3><p>Stahl, Leinen</p><div class="price">540 €</div></article>
 <article class="d-card">${U("photo-1493663284031-b7e3aefcae8e", "Sideboard")}<h3>Sideboard 210</h3><p>Esche</p><div class="price">1.240 €</div></article>
 </div>
 </div></section>
 <section id="demo-service" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Service</p>
 <div class="d-grid d-grid-3">
 <article class="d-stat"><h3>Versand</h3><p>DE 2–4 Werktage · AT/CH auf Anfrage · ab 49 €</p></article>
 <article class="d-stat"><h3>Retouren</h3><p>30 Tage · unkompliziert · Originalzustand</p></article>
 <article class="d-stat"><h3>Material</h3><p>Maße, Pflege, Herkunft — klar dokumentiert</p></article>
 </div>
 </div></section>
 <section id="demo-about" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Nord Form</p><h2>Objekte für Räume, nicht für Feeds.</h2><p>Kleine Serien. Ehrliche Materialien.</p>
 <a class="d-cta" href="/pages/kontakt.html">Kollektion öffnen</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Nord Form</strong> <span>Schleswig-Holstein</span></div>
 <nav class="d-foot-links"><a href="#demo-products">Möbel</a> <a href="#demo-service">Service</a> <a href="#demo-about">Über uns</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "med", n: "06", name: "Medical", short: "Praxis", cls: "t-med",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">PRAXIS ELBE</a>
 <nav class="d-links"><a href="#demo-services">Leistungen</a> <a href="#demo-team">Team</a> <a href="#demo-appointment">Termine</a></nav>
 <a class="d-cta" href="#demo-appointment">Termin buchen</a>
 </header>
 <section id="demo-top" class="d-hero" style="min-height:52vh">${U("photo-1631217868264-e5b90bb7e133", "Clinic", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Hausarztpraxis · Hamburg-Ottensen</p><h1>Ruhige Medizin. DSGVO-sicher vernetzt.</h1><p>Allgemeinmedizin mit Online-Termin, Consent Mode und verschlüsselter Datenhaltung — ohne Tracking-Wildwuchs.</p></div></section>
 <section id="demo-services" class="d-sec"><div class="d-wrap"><p class="d-k">Leistungen</p>
 <div class="d-grid d-grid-3">
 <article class="d-card">${U("photo-1576091160399-112ba8d25d1d", "Consult")}<h3>Allgemeinmedizin</h3><p>Akut, Vorsorge, DMP — klar strukturiert</p></article>
 <article class="d-card">${U("photo-1579684453423-f84349ef60b0", "Exam")}<h3>Online-Termin</h3><p>Terminbuchung ohne Telefonwarteschleife, DSGVO-konform angebunden</p></article>
 <article class="d-card">${U("photo-1559757175-0eb30cd8c063", "Team")}<h3>Datenschutz</h3><p>Consent Mode, verschlüsselte Formulare, Audit-fähige Prozesse</p></article>
 </div>
 </div></section>
 <section id="demo-team" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Team</p>
 <div class="d-grid d-grid-3">
 <article class="d-stat"><h3>Dr. Lena Vogt</h3><p>Hausärztin · Vorsorge</p></article>
 <article class="d-stat"><h3>Dr. Jan Meier</h3><p>Allgemeinmedizin · Akut</p></article>
 <article class="d-stat"><h3>Praxisteam</h3><p>Empfang, Labor, Termine</p></article>
 </div>
 </div></section>
 <section id="demo-appointment" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Termin</p><h2>Termin online. Daten geschützt.</h2><p>Online-Termin · Consent & Verschlüsselung · Mo–Fr 8–12 · Di+Do 15–18</p>
 <a class="d-cta" href="/pages/kontakt.html">Termin wählen</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Praxis Elbe</strong> <span>Hamburg-Ottensen</span></div>
 <nav class="d-foot-links"><a href="#demo-services">Leistungen</a> <a href="#demo-team">Team</a> <a href="#demo-appointment">Termine</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "law", n: "07", name: "Law Firm", short: "Kanzlei", cls: "t-law",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">HARTMANN</a>
 <nav class="d-links"><a href="#demo-fields">Felder</a> <a href="#demo-approach">Mandat</a> <a href="#demo-contact">Kanzlei</a></nav>
 <a class="d-cta" href="#demo-contact">Erstgespräch</a>
 </header>
 <section id="demo-top" class="d-hero" style="min-height:56vh">${U("photo-1589829545856-d10d557cf95f", "Law library", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Wirtschaftskanzlei · Hamburg</p><h1>Klarheit vor Volumen.</h1><p>Gesellschaftsrecht, Verträge, Streit. Wir schreiben, was zählt.</p></div></section>
 <section id="demo-fields" class="d-sec"><div class="d-wrap"><p class="d-k">Tätigkeitsfelder</p>
 <div class="d-grid d-grid-3">
 <article class="d-card d-card-text"><h3>Corporate</h3><p>Gründung, Gesellschafter, Governance, Transaktionen.</p></article>
 <article class="d-card d-card-text"><h3>Commercial</h3><p>Verträge, Vertrieb, SaaS, Einkauf.</p></article>
 <article class="d-card d-card-text"><h3>Disputes</h3><p>Verhandlung, Vergleich, Prozessstrategie.</p></article>
 </div>
 </div></section>
 <section id="demo-approach" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Arbeitsweise</p>
 <div class="d-grid d-grid-3">
 <article class="d-stat"><b>01</b><h3>Fakten</h3><p>Unterlagen zuerst. Rechtsfrage vor der Uhr.</p></article>
 <article class="d-stat"><b>02</b><h3>Scope</h3><p>Schriftlicher Auftrag. Kein offener Stundenlauf.</p></article>
 <article class="d-stat"><b>03</b><h3>Ergebnis</h3><p>Entscheidung, Vertrag, Vergleich — messbar.</p></article>
 </div>
 </div></section>
 <section id="demo-contact" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Mandat</p><h2>Mit den Fakten beginnen.</h2><p>Hamburg · Antwort innerhalb von 24 Stunden</p>
 <a class="d-cta" href="/pages/kontakt.html">Erstgespräch anfragen</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Hartmann Rechtsanwälte</strong> <span>Hamburg</span></div>
 <nav class="d-foot-links"><a href="#demo-fields">Felder</a> <a href="#demo-approach">Mandat</a> <a href="#demo-contact">Kontakt</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "real", n: "08", name: "Real Estate", short: "Immobilien", cls: "t-real",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">QUARTIER 12</a>
 <nav class="d-links"><a href="#demo-listings">Objekte</a> <a href="#demo-service">Service</a> <a href="#demo-contact">Kontakt</a></nav>
 <a class="d-cta" href="#demo-contact">Exposé</a>
 </header>
 <section id="demo-top" class="d-hero" style="min-height:52vh">${U("photo-1600596542815-ffad4c1539a9", "Residential", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Wohnen & Gewerbe · Hamburg</p><h1>Objekte mit vollständigen Unterlagen.</h1><p>Exposé, Grundrisse, Energieausweis — bevor die Besichtigung beginnt.</p></div></section>
 <section id="demo-listings" class="d-sec"><div class="d-wrap"><p class="d-k">Aktuell</p>
 <div class="d-grid d-grid-3">
 <article class="d-card prop">${U("photo-1600585154526-990dced4db0d", "Townhouse")}<div class="prop-body"><span>Eppendorf</span><b>Stadthaus, 168 m²</b><p>4 Zi · EBK · Garten · 1.190.000 €</p></div></article>
 <article class="d-card prop">${U("photo-1600607687644-c7171b42498f", "Apartment")}<div class="prop-body"><span>HafenCity</span><b>Wohnung, 92 m²</b><p>3 Zi · 2. OG · Balkon · 685.000 €</p></div></article>
 <article class="d-card prop">${U("photo-1497366216548-37526070297c", "Office")}<div class="prop-body"><span>Altona</span><b>Bürofläche, 210 m²</b><p>EG · barrierefrei · 18 € / m²</p></div></article>
 </div>
 </div></section>
 <section id="demo-service" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Service</p>
 <div class="d-grid d-grid-3">
 <article class="d-stat"><h3>Kaufen</h3><p>Suche, Due Diligence, Besichtigung, Verhandlung.</p></article>
 <article class="d-stat"><h3>Verkaufen</h3><p>Positionierung, Dokumentation, qualifizierte Interessenten.</p></article>
 <article class="d-stat"><h3>Vermieten</h3><p>Auswahl, Verträge, Übergabe — ohne Chaos.</p></article>
 </div>
 </div></section>
 <section id="demo-contact" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Kontakt</p><h2>Eine Adresse. Vollständige Unterlagen.</h2><p>Hamburg · Exposé auf Anfrage</p>
 <a class="d-cta" href="/pages/kontakt.html">Exposé anfordern</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Quartier 12</strong> <span>Hamburg</span></div>
 <nav class="d-foot-links"><a href="#demo-listings">Objekte</a> <a href="#demo-service">Service</a> <a href="#demo-contact">Kontakt</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "tech", n: "09", name: "Technology", short: "Tech", cls: "t-tech",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">HELIX</a>
 <nav class="d-links"><a href="#demo-product">Product</a> <a href="#demo-platform">Platform</a> <a href="#demo-security">Security</a></nav>
 <a class="d-cta" href="/pages/kontakt.html">Projekt anfragen</a>
 </header>
 <section id="demo-top" class="d-hero" style="min-height:56vh">${U("photo-1518770660439-4636190af475", "Circuit", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Industrial IoT · On-premise first</p><h1>Signale, bevor es teuer wird.</h1><p>Telemetrie an der Edge. Anomalien vor dem Stillstand.</p></div></section>
 <section id="demo-product" class="d-sec"><div class="d-wrap"><p class="d-k">Product</p>
 <div class="d-grid d-grid-3">
 <article class="d-card d-card-text"><h3>Ingest</h3><p>Maschinensignale an der Edge. Auch bei Netzausfall.</p></article>
 <article class="d-card d-card-text"><h3>Analyze</h3><p>Telemetrie normalisieren. Anomalien erkennen.</p></article>
 <article class="d-card d-card-text"><h3>Act</h3><p>Alerts, Dashboards, API — für den Betrieb.</p></article>
 </div>
 </div></section>
 <section id="demo-platform" class="d-band"><div class="d-wrap d-sec"><p class="d-k">Platform</p>
 <div class="d-grid d-grid-2 d-split">
 <div><h2>Daten bleiben, wo der Betrieb sie braucht.</h2><p>On-premise first. Explizite Rechte. Kein Cloud-Zwang.</p></div>
 <div class="d-stat-list">
 <div class="d-stat"><b>12 ms</b><span>Median latency edge → dashboard</span></div>
 <div class="d-stat"><b>99.95%</b><span>Uptime letzte 12 Monate</span></div>
 <div class="d-stat"><b>0</b><span>Vendor lock-in für Rohdaten</span></div>
 </div>
 </div>
 </div></section>
 <section id="demo-security" class="d-sec"><div class="d-wrap"><p class="d-k">Security</p><h2>Rechte, die man erklären kann.</h2><p>Rollen, Audit-Log, Verschlüsselung in Transit und at Rest.</p></div></section>
 <section id="demo-contact" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Nächster Schritt</p><h2>Konzept, das zu Ihrem Betrieb passt.</h2><p>Showcase zeigt die Richtung. Das Projekt beginnt mit einem kurzen Briefing.</p>
 <a class="d-cta" href="/pages/kontakt.html">Projekt anfragen</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Helix Systems</strong> <span>Industrial IoT</span></div>
 <nav class="d-foot-links"><a href="#demo-product">Product</a> <a href="#demo-platform">Platform</a> <a href="#demo-contact">Kontakt</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 },
 {
 id: "fash", n: "10", name: "Beauty / Fashion", short: "Fashion", cls: "t-fash",
 html: () => `
 <header class="d-nav d-wrap">
 <a class="d-brand" href="#demo-top">STUDIO SAMT</a>
 <nav class="d-links"><a href="#demo-lookbook">Lookbook</a> <a href="#demo-atelier">Atelier</a> <a href="#demo-book">Termine</a></nav>
 <a class="d-cta" href="#demo-book">Termin</a>
 </header>
 <section id="demo-top" class="d-hero">${U("photo-1469334031218-e382a71b716b", "Editorial", true)}<div class="veil"></div><div class="copy d-wrap"><p class="d-k">Ready-to-wear · SS26</p><h1>Stoffe, die Licht halten.</h1><p>Kleine Kollektion. Leinen, Seide, Werkstatt in Neukölln.</p></div></section>
 <section id="demo-lookbook" class="d-sec"><div class="d-wrap"><p class="d-k">Collection</p>
 <div class="d-grid d-grid-3">
 <article class="look">${U("photo-1485230895905-ec40ba36b9bc", "Look 1")}</article>
 <article class="look">${U("photo-1485968579580-b6d095142e6e", "Look 2")}</article>
 <article class="look">${U("photo-1483985988355-763728e1935b", "Look 3")}</article>
 </div>
 </div></section>
 <section id="demo-atelier" class="d-band"><div class="d-wrap d-sec">
 <div class="d-grid d-grid-2 d-split">
 <div><p class="d-k">Atelier</p><h2>Fitting ist Teil des Produkts.</h2>
 <ul class="d-list"><li>Leinen & Seide, kleine Serien</li><li>Änderungen im Haus</li><li>Termin statt Warteschlange</li></ul>
 </div>
 <div class="d-split-img">${U("photo-1558171813-4c088753af8f", "Atelier")}</div>
 </div>
 </div></section>
 <section id="demo-book" class="d-cta-band d-band"><div class="d-wrap">
 <p class="d-k">Termin</p><h2>Atelier in Neukölln.</h2><p>Do–Sa nach Vereinbarung · SS26 auf Anfrage</p>
 <a class="d-cta" href="/pages/kontakt.html">Termin buchen</a>
 </div></section>
 <footer class="d-foot"><div class="d-wrap d-foot-inner">
 <div class="d-foot-brand"><strong>Studio Samt</strong> <span>Berlin-Neukölln</span></div>
 <nav class="d-foot-links"><a href="#demo-lookbook">Lookbook</a> <a href="#demo-atelier">Atelier</a> <a href="#demo-book">Termine</a></nav>
 <div class="d-foot-meta"><a href="#demo-top" class="d-top">Nach oben ↑</a><span>© Concept by KLARWERK</span></div>
 </div></footer>`
 }
];
