(function(){
  // Keys must match THEMES[].name exactly
  const names = {
    de: {
      "Handwerk":"Handwerk","Restaurant":"Restaurant","Luxury Hotel":"Luxushotel","Kosmetik":"Kosmetik",
      "Creative Agency":"Kreativstudio","E-Commerce":"E-Commerce","Medical":"Praxis",
      "Law Firm":"Kanzlei","Real Estate":"Immobilien","Technology":"Technologie",
      "Beauty / Fashion":"Beauty / Fashion"
    },
    en: {
      "Handwerk":"Craft","Restaurant":"Restaurant","Luxury Hotel":"Luxury Hotel","Kosmetik":"Kosmetik",
      "Creative Agency":"Creative Agency","E-Commerce":"E-Commerce","Medical":"Practice",
      "Law Firm":"Law Firm","Real Estate":"Real Estate","Technology":"Technology",
      "Beauty / Fashion":"Beauty / Fashion"
    },
    uk: {
      "Handwerk":"Ремонт","Restaurant":"Ресторан","Luxury Hotel":"Готель",
      "Creative Agency":"Креативна студія","E-Commerce":"Магазин","Medical":"Практика",
      "Law Firm":"Юрфірма","Real Estate":"Нерухомість","Technology":"Технології",
      "Beauty / Fashion":"Мода / краса"
    },
    he: {
      "Handwerk":"שיפוצים","Restaurant":"מסעדה","Luxury Hotel":"מלון",
      "Creative Agency":"סטודיו","E-Commerce":"חנות","Medical":"מרפאה",
      "Law Firm":"משרד עו\"ד","Real Estate":"נדל\"ן","Technology":"טכנולוגיה",
      "Beauty / Fashion":"יופי / אופנה"
    }
  };
  const shorts = {
    de: {
      "Handwerk":"Handwerk","Restaurant":"Restaurant","Luxury Hotel":"Hotel","Kosmetik":"Kosmetik",
      "Creative Agency":"Kreativ","E-Commerce":"Shop","Medical":"Praxis",
      "Law Firm":"Kanzlei","Real Estate":"Immobilien","Technology":"Tech",
      "Beauty / Fashion":"Fashion"
    },
    en: {
      "Handwerk":"Craft","Restaurant":"Restaurant","Luxury Hotel":"Hotel","Kosmetik":"Kosmetik",
      "Creative Agency":"Creative","E-Commerce":"Shop","Medical":"Practice",
      "Law Firm":"Law","Real Estate":"Estate","Technology":"Tech",
      "Beauty / Fashion":"Fashion"
    },
    uk: {
      "Handwerk":"Ремонт","Restaurant":"Ресторан","Luxury Hotel":"Готель",
      "Creative Agency":"Креатив","E-Commerce":"Shop","Medical":"Практика",
      "Law Firm":"Юр.","Real Estate":"Нер.","Technology":"Tech",
      "Beauty / Fashion":"Мода"
    },
    he: {
      "Handwerk":"שיפוץ","Restaurant":"מסעדה","Luxury Hotel":"מלון",
      "Creative Agency":"קריאייטיב","E-Commerce":"חנות","Medical":"מרפאה",
      "Law Firm":"עו\"ד","Real Estate":"נדל\"ן","Technology":"Tech",
      "Beauty / Fashion":"אופנה"
    }
  };

  // Chrome strings on showcase shell (not inside demo HTML)
  const chrome = {
    de: {
      back: "← KLARWERK",
      concept: "Concept · not a live client",
      rebuilding: "REBUILDING"
    },
    en: {
      back: "← KLARWERK",
      concept: "Concept · not a live client",
      rebuilding: "REBUILDING"
    },
    uk: {
      back: "← KLARWERK",
      concept: "Концепт · не живий клієнт",
      rebuilding: "ОНОВЛЕННЯ"
    },
    he: {
      back: "← KLARWERK",
      concept: "קונספט · לא לקוח חי",
      rebuilding: "בונה מחדש"
    }
  };

  function lang(){
    return localStorage.getItem("klarwerk-lang") || "de";
  }

  // Ukrainian body map (optional deep translate of demo text nodes)
  const copy = { uk: {
 'Werk':'Роботи','Studio':'Студія','Ansätze':'Підходи','Kontakt':'Контакти','Projekt anfragen':'Запросити проєкт','Architektur · Hamburg':'Архітектура · Гамбург','Raum, der bleibt.':'Простір, що залишається.','Atelier für Museen, Wohnungsbau und öffentliche Bauten. Präzise, zurückhaltend, materialgerecht.':'Студія для музеїв, житлових і громадських будівель. Точно, стримано, відповідно до матеріалу.','Selected work':'Вибрані роботи','Drei Bauten, eine Haltung.':'Три будівлі, один підхід.','Wohn- und Atelierhaus. Sichtbeton, Eiche, Nordlicht.':'Житловий будинок і студія. Видимий бетон, дуб, північне світло.','Einfamilienhaus, 280 m². Landschaft als Raumgrenze.':'Приватний будинок, 280 м². Ландшафт як межа простору.','Öffentlicher Saal. Akustik, Tageslicht, eine große Treppe.':'Громадський зал. Акустика, денне світло, великі сходи.','Weniger Volumen. Mehr Entscheidung.':'Менше об’єму. Більше рішень.','Wir zeichnen, bis das Material spricht. Modelle vor Renderings. Baustelle vor Broschüre.':'Ми креслимo, доки матеріал не починає говорити. Моделі важливіші за рендери. Будівництво важливіше за брошуру.','Besichtigung vereinbaren':'Домовитися про перегляд','Featured project':'Вибраний проєкт','Eine reduzierte Wohnarchitektur, bei der Tageslicht und Landschaft die Grundrisse bestimmen.':'Стримана житлова архітектура, де денне світло й ландшафт визначають планування.','Wohnbau · 2026 · Hamburg':'Житловий проєкт · 2026 · Гамбург','Process':'Процес','Ort':'Місце','Kontext, Licht, Bestand.':'Контекст, світло, наявна будівля.','Entwurf':'Проєктування','Grundriss vor Oberfläche.':'Планування перед оздобленням.','Material':'Матеріал','Details mit Konsequenz.':'Послідовність у деталях.','Bau':'Будівництво','Planung bis Übergabe.':'Від проєктування до передачі.','Menü':'Меню','Abend':'Вечір','Wein':'Вино','Tisch':'Столик','Reservieren':'Забронювати','Schanzenviertel · Hamburg':'Шанценфіртель · Гамбург','Feuer, Butter, Zeit.':'Вогонь, масло, час.','Französische Brasserie, deutsche Produkte. Offene Küche, 42 Plätze.':'Французька брассері, німецькі продукти. Відкрита кухня, 42 місця.','Heute Abend':'Сьогодні ввечері','braune Butter, Kapern':'коричневе масло, каперси','Moreln, Riesling':'моралі, рислінг','Sellerie, Jus':'селера, соус','Vanille, Karamell':'ваніль, карамель','Saal':'Зал','Di–Sa 18–23 Uhr':'Вт–Сб 18–23','Küche':'Кухня','Saison, Markt, keine Karte über 12 Positionen.':'Сезонні продукти з ринку, меню не більше 12 позицій.','Grill':'Гриль','Holzkohle, eine Pfanne, Geduld.':'Вугілля, одна сковорода, терпіння.','Kitchen':'Кухня','Vom Markt auf den Teller.':'Від ринку до тарілки.','Die Karte folgt dem Einkauf. Gemüse, Fisch und Fleisch werden täglich nach Qualität ausgewählt.':'Меню залежить від закупівель. Овочі, риба та м’ясо щодня обираються за якістю.','Menü ansehen':'Переглянути меню','Evening':'Вечір','Ein Tisch für den ganzen Abend.':'Один столик на весь вечір.','Ankommen, Aperitif, offene Küche.':'Прибуття, аперитив, відкрита кухня.','Menü, Weinbegleitung auf Wunsch.':'Меню, винний супровід за бажанням.','Dessert, Kaffee, letzter Digestif.':'Десерт, кава, останній дижестив.','Reservierung ab 18 Uhr':'Бронювання з 18:00','Suiten':'Люкс-номери','Spa':'SPA','Haus':'Будинок','Lage':'Розташування','Anfrage':'Запит','42 Zimmer · Amrum':'42 номери · Амрум','Stille, die man bucht.':'Тиша, яку можна забронювати.','Haus am Watt. Leinen, Eiche, Nordsee vor dem Fenster.':'Будинок біля ваттів. Льон, дуб, Північне море за вікном.','Drei Typen. Ein Haus.':'Три типи. Один будинок.','32 m² · ab 290 € / Nacht':'32 м² · від 290 € / ніч','48 m² · ab 420 € / Nacht':'48 м² · від 420 € / ніч','Eigene Terasse · auf Anfrage':'Власна тераса · за запитом','Spa, Küche, keine Animation.':'SPA, кухня, жодної анімації.','Sauna zum Watt. Frühstück bis 11. Kein Kinderclub, keine Lobby-Musik.':'Сауна з видом на ватти. Сніданок до 11:00. Без дитячого клубу й музики в лобі.','Aufenthalt anfragen':'Запитати про проживання','Experience':'Враження','Geführter Spaziergang bei Ebbe.':'Прогулянка з гідом під час відпливу.','Sauna, Ruhebereich und kaltes Wasser.':'Сауна, зона відпочинку та холодна вода.','Frühstück aus der Region, Abendmenü im Haus.':'Місцевий сніданок, вечірнє меню в будинку.','Booking':'Бронювання','Der Aufenthalt beginnt vor dem Check-in.':'Відпочинок починається ще до check-in.','Zimmer, Anreise, Wünsche und Aktivitäten werden in einer Anfrage zusammengeführt.':'Номер, приїзд, побажання та активності об’єднуються в одному запиті.','Aufenthalt planen':'Спланувати проживання','Check-in ab 15 Uhr':'Check-in з 15:00','Work':'Роботи','Index':'Індекс','Brief senden':'Надіслати бриф','Identity · Print · Motion':'Айдентика · друк · motion','Zeichen, die man nicht überliest.':'Знаки, які неможливо не помітити.','Unabhängig. Berlin. Marken, die man anfasst.':'Незалежна студія. Берлін / Тель-Авів. Бренди, які хочеться відчути.','Keine Pitch-Theater. Ein Brief, ein Termin, eine Entscheidung.':'Без pitch-театру. Один бриф, одна зустріч, одне рішення.','Neues Briefing':'Новий бриф','Services':'Послуги','Identity':'Айдентика','Positionierung, Zeichen, Typografie und Systeme.':'Позиціонування, знаки, типографіка та системи.','Campaign':'Кампанія','Konzept, Art Direction, Film und digitale Ausspielung.':'Концепція, art direction, відео та цифрове розміщення.','Digital':'Digital','Websites, Motion, Interfaces und Launch.':'Сайти, motion, інтерфейси та запуск.','Studio notes':'Нотатки студії','Gute Arbeit braucht nicht zehn Freigabestufen.':'Хороша робота не потребує десяти рівнів погодження.','Ein kleines Team arbeitet direkt mit den Menschen, die die Entscheidung treffen.':'Невелика команда працює безпосередньо з тими, хто ухвалює рішення.','Möbel':'Меблі','Leuchten':'Світильники','Objekte':'Об’єкти','Warenkorb (0)':'Кошик (0)','Möbel aus dem Norden':'Меблі з Півночі','Form, die man täglich sieht.':'Форма, яку бачиш щодня.','Sofas, Tische, Leuchten. Lager in Schleswig-Holstein. Versand DE / AT / CH.':'Дивани, столи, світильники. Склад у Шлезвіг-Гольштейні. Доставка DE / AT / CH.','Diese Woche':'Цього тижня','3-Sitzer, Wolle':'3-місний, вовна','Eiche geölt':'Промаслений дуб','Stahl, Leinen':'Сталь, льон','Esche':'Ясен','Kollektion öffnen':'Відкрити колекцію','Collection':'Колекція','Wolle · 1.890 €':'Вовна · 1 890 €','Eiche · 690 €':'Дуб · 690 €','Leinen · 320 €':'Льон · 320 €','Messing · 240 €':'Латунь · 240 €','Service':'Сервіс','Material vor Marketing.':'Матеріал важливіший за маркетинг.','Produktdaten, Maße, Lieferung und Pflegehinweise stehen dort, wo der Kunde sie braucht.':'Дані про товар, розміри, доставку та догляд знаходяться там, де вони потрібні клієнту.','Lieferung':'Доставка','DE 2–4 Werktage · AT/CH auf Anfrage':'DE 2–4 робочі дні · AT/CH за запитом','Retouren':'Повернення','30 Tage · unkomplizierte Rückgabe':'30 днів · просте повернення','Hausarztpraxis · Hamburg-Ottensen':'Сімейна лікарська практика · Гамбург-Оттензен','Ruhige Medizin. Klare Abläufe.':'Спокійна медицина. Чіткі процеси.','Allgemeinmedizin, Vorsorge, chronische Versorgung. Termine online, nicht über Warteschlange.':'Сімейна медицина, профілактика, лікування хронічних станів. Запис онлайн, без черги.','Termin buchen':'Записатися','Allgemeinmedizin':'Сімейна медицина','Akut, Vorsorge, DMP. Eine Ärztin, ein Hausarzt, ein Team.':'Гострі стани, профілактика, DMP. Лікарка, сімейний лікар і команда.','Impfen & Check-up':'Вакцинація та check-up','STIKO, Reise, Hautkrebsscreening. Ohne Werbeversprechen.':'STIKO, подорожі, скринінг раку шкіри. Без рекламних обіцянок.','Chronisch':'Хронічні стани','Diabetes, Hypertonie, Asthma — strukturiert, nicht gehetzt.':'Діабет, гіпертонія, астма — структуровано, без поспіху.','Termin':'Запис','Online buchen. In der Praxis ankommen.':'Запишіться онлайн. Прийдіть до практики.','Neue Patienten: bitte Versicherungsstatus angeben. Rezepte nach Rücksprache.':'Новим пацієнтам: вкажіть страховий статус. Рецепти — після узгодження.','Termin wählen':'Обрати час','Care':'Допомога','Vorsorge':'Профілактика','Check-ups und Prävention.':'Обстеження та профілактика.','Akut':'Гострі стани','Termine für aktuelle Beschwerden.':'Запис із приводу актуальних скарг.','Langzeit':'Довготривала допомога','Begleitung chronischer Erkrankungen.':'Супровід хронічних захворювань.','Patient information':'Інформація для пацієнтів','Was Sie zum Termin mitbringen.':'Що взяти із собою на прийом.','Medikamentenliste, Vorbefunde und relevante Fragen. Die Praxis erklärt den nächsten Schritt nach dem Termin.':'Список ліків, попередні результати та важливі запитання. Практика пояснить наступний крок після прийому.','Felder':'Напрямки','Mandat':'Доручення','Kanzlei':'Юридична фірма','Erstgespräch':'Перша консультація','Wirtschaftsrecht · Hamburg':'Господарське право · Гамбург','Recht, das man führen kann.':'Право, яким можна керувати.','Gesellschaftsrecht, Verträge, Streit. Keine Werbesprüche. Ein Mandat, ein Partner.':'Корпоративне право, договори, спори. Без рекламних гасел. Одне доручення, один партнер.','Gesellschaft':'Корпоративне право','GmbH, Beteiligung, Gesellschafterstreit. Satzung vor Folie.':'GmbH, участь, спори між учасниками. Статут важливіший за презентацію.','Vertrag':'Договори','Einkauf, SaaS, Distribution. Deutsch / Englisch.':'Закупівлі, SaaS, дистрибуція. Німецька / англійська.','Streit':'Спори','Mahnwesen, Vergleich, Prozess. Nur wenn es sich lohnt.':'Стягнення, мирові угоди, процес. Лише коли це має сенс.','Erstgespräch, 30 Minuten. Schriftlich, nicht telefonisch.':'Перша консультація, 30 хвилин. Письмово, а не телефоном.','Unterlagen vorab. Keine Gratis-Gutachten. Transparente Honorare nach RVG oder Pauschale.':'Документи заздалегідь. Без безкоштовних висновків. Прозорий гонорар за RVG або фіксована сума.','Unterlagen senden':'Надіслати документи','Expertise':'Експертиза','Contracts':'Договори','Commercial agreements.':'Комерційні договори.','Corporate':'Корпоративне право','Governance and transactions.':'Корпоративне управління та угоди.','Disputes':'Спори','Negotiation and litigation.':'Переговори та судові спори.','SaaS, data and platforms.':'SaaS, дані та платформи.','Consultation':'Консультація','Erst die Frage. Dann das Mandat.':'Спочатку питання. Потім доручення.','Ein kurzer Erstkontakt klärt Sachverhalt, Unterlagen, Zuständigkeit und den nächsten sinnvollen Schritt.':'Короткий перший контакт допомагає визначити обставини, документи, компетенцію та наступний доцільний крок.','Beratung anfragen':'Запросити консультацію','Wohnen':'Житло','Gewerbe':'Комерція','Exposé':'Експозе','Besichtigung':'Перегляд','Hamburg & Umland':'Гамбург і околиці','Häuser mit Adresse, nicht mit Filter.':'Будинки з адресою, а не з фільтрами.','Wenige Objekte. Vollständige Unterlagen. Keine Fake-Inserate.':'Небагато об’єктів. Повний пакет документів. Жодних фейкових оголошень.','Aktuell':'Актуальне','Villa, 6 Zi., Grundstück 780 m²':'Вілла, 6 кімнат, ділянка 780 м²','Penthouse, 4 Zi., 3. OG':'Пентхаус, 4 кімнати, 3-й поверх','Stadthaus, saniert 2024':'Міський будинок, відремонтований у 2024','Exposé anfordern':'Запросити експозе','Locations':'Локації','City apartments and houses.':'Міські квартири та будинки.','Waterfront residential.':'Житло біля води.','Family homes and land.':'Сімейні будинки та земельні ділянки.','Buying process':'Процес купівлі','Search':'Пошук','Viewing':'Перегляд','Documents':'Документи','Closing':'Угода','Nur mit Nachweis':'Лише за наявності підтвердження','Product':'Продукт','Docs':'Документація','Demo':'Демо','Industrial telemetry':'Промислова телеметрія','Signale, bevor die Linie steht.':'Сигнали ще до зупинки лінії.','Helix sammelt Maschinendaten on-prem. Kein Cloud-Zwang. Eine API, ein Dashboard.':'Helix збирає дані машин on-prem. Без примусової хмари. Один API, один dashboard.','Edge first':'Спочатку edge','Collector auf der Steuerung. Puffer bei Netzausfall. Kein Datenabfluss ohne Vertrag.':'Collector на контролері. Буферизація при втраті мережі. Жодного витоку даних без договору.','Eine Schnittstelle':'Один інтерфейс','REST + MQTT. Keine zehn Connectors, die niemand wartet.':'REST + MQTT. Без десяти конекторів, які ніхто не підтримує.','Rechte, nicht Rollen-Theater':'Права, а не театр ролей','Wer darf welche Linie sehen — in der Software, nicht in der Folie.':'Хто має бачити яку лінію — у програмі, а не на слайді.','Technische Übersicht':'Технічний огляд','Use cases':'Сценарії використання','Manufacturing':'Виробництво','Detect anomalies before a production stop.':'Виявляти аномалії до зупинки виробництва.','Energy':'Енергетика','Track systems across sites and assets.':'Відстежувати системи на різних об’єктах та активах.','Infrastructure':'Інфраструктура','Keep operational signals available and traceable.':'Зберігати операційні сигнали доступними та відстежуваними.','Architecture':'Архітектура','Edge first. API where it helps.':'Спочатку edge. API там, де він допомагає.','Devices, ingestion, normalization, dashboards and controlled integrations form one operational path.':'Пристрої, збір, нормалізація, дашборди та контрольовані інтеграції утворюють єдиний операційний шлях.','Technical overview':'Технічний огляд','Docs intern':'Внутрішня документація','Lookbook':'Lookbook','Atelier':'Ательє','Ready-to-wear · SS26':'Ready-to-wear · SS26','Stoffe, die Licht halten.':'Тканини, що утримують світло.','Kleine Kollektion. Leinen, Seide, eine Werkstatt in Neukölln.':'Невелика колекція. Льон, шовк, майстерня в Нойкельні.','Anprobe, nicht Warenkorb-Theater.':'Примірка, а не театр кошика.','Termine Mi–Sa. Größen 34–44. Änderungen im Haus.':'Запис Ср–Сб. Розміри 34–44. Підгонка в ательє.','Termin Atelier':'Запис в ательє','Designed slowly. Worn often.':'Створено повільно. Носиться часто.','Material, cut, alteration and repair are part of the product instead of an afterthought.':'Матеріал, крій, підгонка та ремонт є частиною продукту, а не думкою після покупки.','Atelier besuchen':'Відвідати ательє','SS26':'SS26'
 } };

  function translateDemo(l){
    if (l !== "uk") return;
    const map = copy.uk;
    if (!map) return;
    const root = document.getElementById("demo-root");
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      const t = n.nodeValue.replace(/\s+/g, " ").trim();
      if (t && map[t] !== undefined) {
        const lead = (n.nodeValue.match(/^\s*/) || [""])[0];
        const trail = (n.nodeValue.match(/\s*$/) || [""])[0];
        n.nodeValue = lead + map[t] + trail;
      }
    }
  }

  function applyChrome(l){
    const c = chrome[l] || chrome.de;
    const back = document.querySelector(".show-back");
    if (back) back.textContent = c.back;
    const concept = document.querySelector(".show-concept, .show-bar em, [data-show-concept]");
    // try common selectors
    document.querySelectorAll(".show-bar span, .show-bar em").forEach(function(el){
      const txt = (el.textContent || "").trim();
      if (/Concept|Konzept|not a live|не живий|קונספט/i.test(txt) || el.hasAttribute("data-show-concept")) {
        el.textContent = c.concept;
      }
    });
  }

  function apply(l){
    l = l || lang();
    window.KW_LANG = l;
    document.documentElement.lang = l === "uk" ? "uk" : l;
    document.documentElement.dir = l === "he" ? "rtl" : "ltr";

    document.querySelectorAll("[data-show-lang]").forEach(function(b){
      b.classList.toggle("active", b.getAttribute("data-show-lang") === l);
    });

    const t = window.__KW_THEME_CURRENT;
    const label = document.getElementById("show-label");
    if (label && t) {
      const nm = (names[l] && names[l][t.name]) || t.name;
      label.textContent = t.n + " · " + nm;
    }

    applyChrome(l);
    refreshRails(l);

    if (window.KW_I18N && typeof window.KW_I18N.apply === "function") {
      try { window.KW_I18N.apply(l); } catch (e) {}
    }

    setTimeout(function(){ translateDemo(l); }, 0);
  }

  function refreshRails(l){
    l = l || lang();
    document.querySelectorAll("[data-theme-id]").forEach(function(btn){
      const id = btn.getAttribute("data-theme-id");
      const t = window.THEMES && window.THEMES.find(function(x){ return x.id === id; });
      if (!t) return;
      const b = btn.querySelector("b");
      if (b) b.textContent = t.n;
      const spans = btn.querySelectorAll("span");
      const short = (shorts[l] && shorts[l][t.name]) || t.short;
      if (spans.length) {
        spans[spans.length - 1].textContent = short;
      }
    });
    // mobile rail
    document.querySelectorAll(".show-mobile-rail button, [data-mobile-theme]").forEach(function(btn){
      const id = btn.getAttribute("data-theme-id") || btn.getAttribute("data-mobile-theme");
      const t = window.THEMES && window.THEMES.find(function(x){ return x.id === id; });
      if (!t) return;
      const short = (shorts[l] && shorts[l][t.name]) || t.short;
      const label = btn.querySelector("span, b, em") || btn;
      // keep number if present
      if (btn.querySelector("b") && btn.querySelector("span")) {
        btn.querySelector("b").textContent = t.n;
        btn.querySelector("span").textContent = short;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("[data-show-lang]").forEach(function(b){
      b.addEventListener("click", function(){
        const next = b.getAttribute("data-show-lang");
        localStorage.setItem("klarwerk-lang", next);
        window.KW_LANG = next;
        // soft apply without full reload when possible
        apply(next);
        // rebuild current theme so label stays in sync after any DE-only HTML
        if (window.__KW_THEME_CURRENT && typeof window.selectTheme === "function") {
          window.selectTheme(window.__KW_THEME_CURRENT.id, false);
        } else {
          location.reload();
        }
      });
    });
    apply(lang());
  });

  window.KW_SHOW_I18N = { apply: apply, names: names, shorts: shorts, refreshRails: refreshRails };
})();
