/* ============================================================
   MOR ALAÇATI — Component / Render katmanı
   Componentler:  MenuLogo, IllustrationLayer, MenuItem,
                  MenuCover, MenuIntroPage,
                  MenuCategoryPage (light | dark)
   ============================================================ */
(function () {
  const I = window.Illustrations;
  const D = window.MENU_DATA;

  /* ---------- başlıkların İngilizce karşılıkları ---------- */
  const EN = {
    // bölüm ayraçları
    "Yemek": "Food",
    "İçecek": "Drinks",
    "Nargile": "Hookah",
    // yemek kategorileri
    "Başlangıçlar": "Starters",
    "Hamburgerler & Wrapler & Taco": "Burgers, Wraps & Tacos",
    "Makarnalar": "Pasta",
    "Pizzalar": "Pizzas",
    "Salatalar": "Salads",
    "Ana Yemekler": "Main Courses",
    "Tatlılar & Meyveler": "Desserts & Fruits",
    // içecek kategorileri
    "Soft İçecekler": "Soft Drinks",
    "Kahveler & Sıcak İçecekler": "Coffees & Hot Drinks",
    "Frozen & Milkshake": "Frozen & Milkshake",
    "Şaraplar": "Wines",
    "Şampanyalar": "Champagnes",
    "Kadeh Alkoller": "Spirits by the Glass",
    "Shot Alkoller": "Shots",
    "Kokteyller": "Cocktails",
    "Mor Special": "Signature Cocktails",
    "Şişe Alkoller": "Bottle Spirits",
    "Biralar": "Beers",
  };
  const enFor = (t) => EN[t] || "";

  /* ---------- alt başlıkların (subheading) İngilizce karşılıkları ---------- */
  const SUB_EN = {
    "Et": "Meat",
    "Tavuk": "Chicken",
    "Hamburgerler": "Burgers",
    "Wrapler": "Wraps",
    "Taco": "Tacos",
    "Sıcak Kahveler": "Hot Coffees",
    "Soğuk Kahveler": "Iced Coffees",
    "Sıcak İçecekler": "Hot Drinks",
    "Frozen": "Frozen",
    "Milkshake": "Milkshake",
    "Kırmızı": "Red",
    "Beyaz": "White",
    "Blush": "Blush",
    "Aperitifler": "Aperitifs",
  };
  const subEnFor = (t) => SUB_EN[t] || "";

  /* ---------- küçük yardımcılar ---------- */
  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* ---------- MenuLogo (yalnızca kelime markası — amblem kaldırıldı) ---------- */
  function MenuLogo() {
    return `
      <span class="monogram">
        <span class="monogram__word">${D.brand.name}</span>
      </span>`;
  }

  /* ---------- IllustrationLayer ---------- */
  // parçalar: [{ svg, css }]  -> .illu konumlandırma css ile
  function IllustrationLayer(parts) {
    const inner = parts
      .map((p) => `<div class="illu" style="${p.css}">${p.svg}</div>`)
      .join("");
    return `<div class="illustration-layer">${inner}</div>`;
  }

  /* ---------- MenuItem ---------- */
  function MenuItem(item) {
    const price = item.price
      ? `<span class="menu-item__dots"></span><span class="menu-item__price">${item.price}</span>`
      : "";
    const desc = item.description
      ? `<p class="menu-item__desc">${item.description}</p>`
      : "";
    const icon = item.icon
      ? `<i class="menu-item__icon" data-lucide="${item.icon}"></i>`
      : "";
    return `
      <div class="menu-item">
        <div class="menu-item__row">
          ${icon}<span class="menu-item__name">${item.name}</span>
          ${price}
        </div>
        ${desc}
      </div>`;
  }

  /* ============================================================
     KAPAK
     ============================================================ */
  function MenuCover() {
    // Kapak tek parça hazır görsel (logo + MENÜ + alt yazı + floral dahil).
    // Türkçe aksanlar (Ü) görselde gömülü olduğu için font sorunu yaşanmaz.
    return el(`
      <section class="page cover cover--image"></section>`);
  }

  /* ============================================================
     İÇ KAPAK
     ============================================================ */
  function MenuIntroPage() {
    const n = D.brand.intro;
    const headingEn = n.headingEn
      ? `<p class="intro__heading-en" lang="en">${n.headingEn}</p>` : "";
    const verseEn = n.verseEn
      ? `<p class="intro__verse intro__verse-en" lang="en">${n.verseEn.join("<br>")}</p>` : "";
    const bodyEn = n.bodyEn
      ? `<p class="intro__body intro__body-en" lang="en">${n.bodyEn}</p>` : "";
    // Arka plan: kapak-gorseli.png (CSS .intro--image), karşılama yazıları üstte
    return el(`
      <section class="page intro intro--photo">
        <div class="content intro__overlay">
          <h2 class="intro__heading">${n.heading}</h2>
          ${headingEn}
          <p class="intro__verse">${n.verse.join("<br>")}</p>
          ${verseEn}
          <p class="intro__body">${n.body}</p>
          ${bodyEn}
          <span class="intro__dot"></span>
        </div>
      </section>`);
  }

  /* ============================================================
     KAPANIŞ — "Afiyet Olsun" (giriş sayfasıyla aynı görsel)
     ============================================================ */
  function MenuOutroPage() {
    const n = D.brand.outro;
    const headingEn = n.headingEn
      ? `<p class="intro__heading-en" lang="en">${n.headingEn}</p>` : "";
    const verseEn = n.verseEn
      ? `<p class="intro__verse intro__verse-en" lang="en">${n.verseEn.join("<br>")}</p>` : "";
    const bodyEn = n.bodyEn
      ? `<p class="intro__body intro__body-en" lang="en">${n.bodyEn}</p>` : "";
    return el(`
      <section class="page intro intro--photo">
        <div class="content intro__overlay">
          <h2 class="intro__heading">${n.heading}</h2>
          ${headingEn}
          <p class="intro__verse">${n.verse.join("<br>")}</p>
          ${verseEn}
          <p class="intro__body">${n.body}</p>
          ${bodyEn}
          <span class="intro__dot"></span>
        </div>
      </section>`);
  }

  /* ============================================================
     İÇ KAPAK — sade varyant (yalnızca logo + MENU başlığı)
     İkinci sayfanın kopyası; arka plan aynı, içerik boşaltıldı.
     ============================================================ */
  function MenuTitlePage() {
    // Arka plan görselinde (kapak-gorseli.png) zaten MOR ALAÇATI + MENU yazısı var;
    // tekrar eden overlay metni eklenmez.
    return el(`
      <section class="page intro intro--image intro--title"></section>`);
  }

  /* ============================================================
     KATEGORİ SAYFASI  (light | dark)
     ============================================================ */
  function MenuCategoryPage(category, theme, opts) {
    opts = opts || {};
    const isDark = theme === "dark";
    const pageClass = isDark ? "page--deep" : "page--light";

    const items = category.items.map(MenuItem).join("");

    // Tema bazlı gerçek logo (koyu zeminde beyaz, açık zeminde mor)
    const logoSrc = isDark ? "assets/logo-white.png" : "assets/logo-mor.png";

    // Atmosferik arka plan: yumuşak ışık hüzmeleri + büyük soluk logo filigranı
    const ambient = `
      <div class="ambient" aria-hidden="true"></div>
      <img class="watermark" src="${logoSrc}" alt="" aria-hidden="true" />`;

    const logo = `<img class="brand-logo" src="${logoSrc}" alt="${D.brand.name}" />`;

    const noteHtml = opts.note
      ? `<div class="page-footer"><span class="page-note">${opts.note}</span></div>`
      : "";

    // Ayraç (separator) sayfası — menü detayı yok, sadece başlık + logo
    if (opts.separator) {
      return el(`
        <section class="page ${pageClass} category category--sep">
          ${ambient}
          <div class="page-header category__logo">${logo}</div>
          <div class="content category__sep-body">
            <h2 class="category__sep-title">${category.title}</h2>
            <div class="category__flourish">${I.flourish()}</div>
          </div>
          ${noteHtml}
        </section>`);
    }

    return el(`
      <section class="page ${pageClass} category">
        ${ambient}
        <div class="page-header category__logo">${logo}</div>
        <div class="content category__body">
          <div class="category__side">
            <h2 class="category__title">${category.title}</h2>
          </div>
          <div class="category__rule"></div>
          <div class="menu-list">${items}</div>
        </div>
        ${noteHtml}
      </section>`);
  }

  /* ============================================================
     EDITORIAL KATEGORİ SAYFASI  (tasarım sistemi v2)
     Sol hizalı, minimal & lüks: küçük logo + Garamond başlık,
     sol kılavuza hizalı ürün listesi, sağda kasıtlı boşluk.
     ============================================================ */
  function EditorialItem(item) {
    // Alt başlık (ör. "Et", "Hamburgerler") — normal ürün değil
    if (item.subheading) {
      const en = subEnFor(item.subheading)
        ? ` <span class="ed-subhead__en" lang="en">(${subEnFor(item.subheading)})</span>`
        : "";
      return `<div class="ed-subhead">${item.subheading}${en}</div>`;
    }
    const price = item.price
      ? `<span class="ed-item__price">${item.price}</span>`
      : "";
    const desc = item.description
      ? `<p class="ed-item__desc">${item.description}</p>`
      : "";
    // İngilizce açıklama — Türkçenin altında, italik & soluk
    const descEn = item.descEn
      ? `<p class="ed-item__desc ed-item__desc--en" lang="en">${item.descEn}</p>`
      : "";
    // İngilizce ad — Türkçe adın altında, küçük italik
    const nameEn = item.nameEn
      ? `<span class="ed-item__name-en" lang="en">${item.nameEn}</span>`
      : "";
    // İngilizce kelimelerde büyük "I" (noktasız), Türkçe adlarda lang:"tr" → "İ"
    const nameLang = item.lang || "en";
    return `
      <div class="ed-item">
        <div class="ed-item__row">
          <span class="ed-item__name">
            <span class="ed-item__name-tr" lang="${nameLang}">${item.name}</span>
            ${nameEn}
          </span>
          <span class="ed-item__lead"></span>
          ${price}
        </div>
        ${desc}
        ${descEn}
      </div>`;
  }

  /* ---------- Separator (bölüm geçiş) sayfası — tamamen mor ---------- */
  function MenuSeparatorPage(title) {
    const en = enFor(title)
      ? `<p class="sep__en" lang="en">${enFor(title)}</p>`
      : "";
    return el(`
      <section class="page page--deep sep">
        <h2 class="sep__title">${title}</h2>
        ${en}
      </section>`);
  }

  function MenuEditorialPage(category) {
    // Menü detay sayfalarının tüm zeminleri beyaz; yalnızca separatorler mor.
    const pageClass = "page--light";
    const compact = category.compact ? " ed--compact" : "";
    const logoSrc = "assets/logo-mor.png";
    const items = category.items.map(EditorialItem).join("");
    const note = category.note ? `<div class="ed-footer">${category.note}</div>` : "";

    return el(`
      <section class="page ${pageClass} ed${compact}">
        <img class="ed-watermark" src="${logoSrc}" alt="" aria-hidden="true" />
        <img class="ed-logo" src="${logoSrc}" alt="${D.brand.name}" />
        <div class="ed-row">
          <div class="ed-side"><h2 class="ed-title">${category.title}${
            enFor(category.title)
              ? `<span class="ed-title__en" lang="en">${enFor(category.title)}</span>`
              : ""
          }</h2></div>
          <div class="ed-list">${items}</div>
        </div>
        ${note}
      </section>`);
  }

  /* ============================================================
     SAYFALARI MONTE ET
     İstenen ilk sayfa seti:
       1) Kapak (mor)
       2) İç kapak (açık)
       3) Başlangıçlar — açık versiyon
       4) Başlangıçlar — mor versiyon
     ============================================================ */
  function build() {
    const root = document.getElementById("menu");

    // başlığa göre kategori bul
    const cat = (t) => D.categories.find((c) => c.title === t);

    const pages = [
      MenuCover(),
      MenuIntroPage(),

      /* ---------------- YEMEK ---------------- */
      MenuSeparatorPage("Yemek"),
      MenuEditorialPage(cat("Başlangıçlar")),
      MenuEditorialPage(cat("Hamburgerler & Wrapler & Taco")),
      MenuEditorialPage(cat("Makarnalar")),
      MenuEditorialPage(cat("Pizzalar")),
      MenuEditorialPage(cat("Salatalar")),
      MenuEditorialPage(cat("Ana Yemekler")),
      MenuEditorialPage(cat("Tatlılar & Meyveler")),

      /* ---------------- İÇECEK ---------------- */
      MenuSeparatorPage("İçecek"),
      MenuEditorialPage(cat("Soft İçecekler")),
      MenuEditorialPage(cat("Kahveler & Sıcak İçecekler")),
      MenuEditorialPage(cat("Frozen & Milkshake")),
      MenuEditorialPage(cat("Şaraplar")),
      MenuEditorialPage(cat("Şampanyalar")),
      MenuEditorialPage(cat("Kadeh Alkoller")),
      MenuEditorialPage(cat("Shot Alkoller")),
      MenuEditorialPage(cat("Kokteyller")),
      MenuEditorialPage(cat("Mor Special")),
      MenuEditorialPage(cat("Şişe Alkoller")),
      MenuEditorialPage(cat("Biralar")),

      /* ---------------- NARGİLE ---------------- */
      MenuSeparatorPage("Nargile"),
      MenuEditorialPage(cat("Nargile")),

      /* ---------------- KAPANIŞ ---------------- */
      MenuOutroPage(),
    ];

    pages.forEach((p) => root.appendChild(p));

    // Lucide ikonlarını DOM'a yerleştir
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* ---------- baskı / pdf yardımcıları ---------- */
  window.MorAlacatiMenu = {
    build,
    setCols: function (n) {
      const b = document.body;
      b.classList.remove("view-1up", "view-2up", "view-3up");
      b.classList.add("view-" + n + "up");
    },
    print: function () {
      document.body.classList.add("printing");
      window.print();
      setTimeout(() => document.body.classList.remove("printing"), 500);
    },
  };

  document.addEventListener("DOMContentLoaded", function () {
    build();
    MorAlacatiMenu.setCols(3); // varsayılan: 3 sayfa yan yana
  });
})();
