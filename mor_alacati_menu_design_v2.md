# Mor Alaçatı — Menü Tasarım Sistemi v2

> Bu doküman geçerli tasarım yönüdür. v1 (`mor_alacati_menu_design_reference.md`)
> marka temeli için referanstır; **çelişki olduğunda bu doküman (v2) geçerlidir.**

---

## 0. Karar verilen yön

| Eksen | Karar |
|------|-------|
| Estetik | **Minimal & lüks** — bol boşluk, ince tipografi, az öğe, sakin fine-dining |
| Renk ritmi | **Karışık ritim** — açık ve koyu mor sayfalar dönüşümlü |
| Düzen | **Sol hizalı editorial** — güçlü tipografi hiyerarşisi, geniş sağ boşluk |

Bir cümleyle: **bir moda/yemek dergisinin editorial sayfası gibi** — sola yaslı,
nefes alan, tipografiyle konuşan; süslemeyle değil **boşlukla** lüks hisseden bir menü.

---

## 1. Tasarım ilkeleri (pusula)

1. **Boşluk lükstür.** Her sayfada içerik en fazla yatayda ~%60-65 genişlik kaplar;
   sağda kasıtlı geniş bir boşluk şeridi kalır. Dikeyde öğeler arası nefes payı cömert.
2. **Az ama net.** Bir sayfada tek güçlü başlık + temiz liste. Dekoratif çizgi, çerçeve,
   yoğun illüstrasyon **yok**. (Eski "her yer line-art" yaklaşımı terk edildi.)
3. **Tipografi ana karakterdir.** Hiyerarşi punto + ağırlık + harf aralığıyla kurulur,
   kutu/çizgi/renk bloğuyla değil.
4. **Hizalama: sol.** Başlık, ürünler, açıklamalar hep aynı sol kılavuz çizgisinden başlar.
   Fiyatlar sağda, aynı sağ kılavuz çizgisine hizalı.
5. **Süsleme minimum.** İzinli tek dekor: çok soluk büyük logo filigranı **veya** ince bir
   keyline — ikisi birden değil, ve her zaman düşük kontrast.
6. **Okunabilirlik kutsaldır.** Arka plandaki hiçbir öğe metnin kontrastını düşürmez.

---

## 2. Sayfa ritmi (karışık)

Sayfalar açık → koyu → açık şeklinde dönüşümlü ilerler. Hedef akış:

| # | Sayfa | Zemin |
|---|-------|-------|
| 1 | Kapak / Başlık | Görsel ya da koyu mor |
| 2 | İç kapak (karşılama) | **Açık** |
| 3 | Kategori — örn. Başlangıçlar | **Açık** |
| 4 | Bölüm ayracı — örn. İmza Kokteyller | **Koyu mor** |
| 5 | Kategori (ayraçtan sonra) | **Koyu mor** |
| … | sonraki kategoriler | dönüşümlü |

Kural: iki **kategori liste** sayfası art arda aynı zeminde gelmez; ayraç sayfaları
ritmi kıran "nefes" anlarıdır.

---

## 3. Renk paleti

```css
--mor-deep:    #211328;  /* koyu zemin */
--mor-main:    #2B1738;  /* koyu zemin alternatif / açık sayfa başlık */
--mor-soft:    #6B4A82;  /* vurgu, ikon, ince çizgi (açık sayfa) */
--mor-light:   #A996B8;  /* vurgu, ikon (koyu sayfa) */
--lavender-bg: #EEE8F3;
--warm-white:  #FAF7F2;  /* açık zemin */
--paper-white: #FBF8F3;
--text-dark:   #2A2230;  /* ürün adı (açık) */
--text-muted:  #5F5665;  /* açıklama (açık) */
--cream-muted: #E8DFEC;  /* açıklama (koyu) */
--white:       #FFFFFF;
```

**Açık sayfa:** zemin `--warm-white` · başlık `--mor-main` · ürün adı `--text-dark`
· açıklama `--text-muted` · vurgu/ikon/çizgi `--mor-soft`.

**Koyu sayfa:** zemin `--mor-deep` · başlık & ürün adı `--white`
· açıklama `--cream-muted` · vurgu/ikon/çizgi `--mor-light`.

---

## 4. Tipografi ve ölçek

İki font: **EB Garamond** (serif, italic — zarif başlıklar) ve
**Helvetica Neue / 45 Light** (sans — liste, fiyat, açıklama).

| Öğe | Font | Stil | Boyut | Aralık |
|-----|------|------|-------|--------|
| Kategori başlığı (liste sayfası) | Garamond | italic 500 | 46–54px | 0.01em |
| Ayraç sayfa başlığı | Garamond | italic 600 | 72–88px | 0.01em |
| Ürün adı | Helvetica | 400, UPPERCASE | 18–20px | 0.12em |
| Fiyat | Helvetica | 600 | 17–19px | 0.04em |
| Açıklama | Helvetica | 300 | 12.5–13.5px | 0.01em, satır 1.6 |
| Üst etiket / footer | Helvetica | 300, UPPERCASE | 9px | 0.3em |

Kalın (700+) font kullanılmaz; lüks his ince ağırlıklardan gelir.

---

## 5. Editorial düzen (kategori liste sayfası)

```
┌──────────────────────────────────────────────┐
│  [logo — küçük, sol üst]                       │  ← üst marj 16mm
│                                                │
│  Başlangıçlar               ← Garamond italic  │
│  ─────────                  ← çok kısa ince çizgi (opsiyonel, 24mm)
│                                                │
│  ⌁ ÇITIR TAVUK ················· ₺320          │
│    çıtır tavuk dilimleri, patates, parmesan…   │
│                                                │
│  ⌁ PATATES KIZARTMASI ·········· ₺180          │
│    patates tava, kajun baharat ile             │
│                                                │
│  …                              (sağda boşluk) →│
│                                                │
│  FOOD · DRINK · COCKTAIL · HOOKAH   ← footer    │
└──────────────────────────────────────────────┘
```

Kurallar:
- **Sol kılavuz:** sayfa padding'i ~18mm. Logo, başlık, ürün adları, açıklamalar
  hep bu sol çizgiden başlar.
- **İçerik genişliği:** liste bloğu ~115–125mm; geri kalan sağ boşluk **kasıtlı** korunur
  (dikey başlık veya ayraç çizgisi yok — boşluğun kendisi tasarım).
- **Başlık konumu:** sayfanın üst-solunda, listeden net bir boşlukla ayrılır.
- **Fiyat:** ürün adıyla aynı satırda, sağ kılavuza hizalı. Araya **çok soluk** noktalı
  leader (opacity ≤ 0.3) gelebilir ya da hiç gelmez — minimal tercih.
- **Açıklama:** ürün adının altında, ad ile aynı sola hizalı (ikonun değil metnin hizasında).
- Ürünler arası dikey boşluk cömert (~9–11mm).

---

## 6. MenuItem anatomisi

```
[ikon]  ÜRÜN ADI                         ₺000
        açıklama metni, küçük ve sade
```

- **İkon:** Lucide, başlığa uygun, **küçük ve ince** (20–22px, stroke 1.5–1.6),
  vurgu renginde (`--mor-soft` / `--mor-light`). İkon sadece bir **aksan**dır;
  öne çıkmaz. İstenirse tamamen kapatılabilir olmalı (data'da opsiyonel alan).
- **Ürün adı:** UPPERCASE Helvetica light, harf aralığı açık.
- **Fiyat:** sağda, ince.
- **Açıklama:** küçük, gri-mor (açık) / krem (koyu).

Veri tipi:

```ts
type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  icon?: string;        // Lucide ikon adı — opsiyonel aksan
};
type MenuCategory = {
  title: string;
  theme: "light" | "dark";
  note?: string;        // footer etiketi
  separator?: boolean;  // true ise liste değil, ayraç sayfası
  items: MenuItem[];
};
```

---

## 7. Arka plan / doku (minimal)

Sayfa "düz" görünmemeli ama **kalabalık da olmamalı**. İzinli yaklaşımlar (sayfa başına
**en fazla biri**):

1. **Soluk büyük logo filigranı** — sağ-alt veya merkez-dışı, kenardan taşan, çok düşük
   opaklık (açık %4–6, koyu %8–10). Tercih edilen yöntem.
2. **İnce keyline çerçeve** — kenardan ~8mm içeride, 1px, çok düşük kontrast (opsiyonel).
3. **Tek yönlü çok hafif tonal gradyan** — koyu sayfalarda derinlik için (radial, çok soft).

Yapılmayacaklar: yoğun line-art sahneler, metnin altına denk gelen çizimler, tekrarlı
desen/texture dolgusu, çapraz çizgiler. (Bunlar denendi ve **kalabalık/ucuz** durdu.)

---

## 8. Logo

- Kullanılacak dosyalar: `assets/logo-mor.png` (açık zemin) ve `assets/logo-white.png` (koyu zemin).
- Liste sayfalarında **küçük**, sol üstte (~40–48mm genişlik).
- Ayraç sayfalarında biraz daha belirgin olabilir, yine sade.
- Oran bozulmaz, yeniden çizilmez. Eski "MOR wordmark / SVG monogram emblem" **kullanılmaz**.

---

## 9. Ayraç (separator) sayfaları

Bölüm geçişleri için. Menü detayı / ürün listesi **yok**.

- Tercihen **koyu mor** zemin (ritimde nefes).
- Büyük Garamond italic başlık — sola yaslı veya optik merkez (editorial his için sol-üst
  tercih edilir), sayfanın çoğunu boş bırakacak şekilde.
- Logo + en fazla bir soft filigran. Süs yok.
- Footer etiketi (FOOD · DRINK · COCKTAIL · HOOKAH) kalabilir.

---

## 10. Kesin yasaklar

- **Üzüm / üzüm salkımı / şarap bağı / bağ evi** — başka markaya ait, asla kullanılmaz.
- Metin altı çizgiler, kalın dekoratif çerçeveler, neon/club estetiği.
- Yoğun arka plan illüstrasyonu (özellikle metnin arkasında).
- Eski MOR wordmark ve SVG monogram emblem.
- Kalın (heavy/bold 700+) gövde fontu.

---

## 11. Footer / üst etiket

- Footer: `FOOD · DRINK · COCKTAIL · HOOKAH` — küçük, harf aralığı geniş, UPPERCASE, düşük opaklık.
- Sayfa numarası kullanılmaz (akış görsel ritimle taşınır).

---

## 12. Teknik

- Format: A4 dikey (mevcut sistem) — ekranda ikişerli yan yana önizleme, baskıda sayfa/sayfa.
- Metinler data.js'te editable kalır; kategoriler `MenuCategory` ile çoğaltılır.
- Fontlar ve Lucide CDN'den; baskıda zemin renkleri korunur (`print-color-adjust: exact`).

---

## 13. Component yapısı (hedef)

```text
MenuTitlePage        — kapak/başlık (görsel)
MenuIntroPage        — iç kapak, açık zemin, karşılama
MenuCategoryPage     — editorial liste (light | dark), opts.separator ile ayraç moduna geçer
MenuItem             — ikon + ad + fiyat + açıklama
BrandLogo            — tema bazlı png
PageBackground       — minimal filigran/keyline (opsiyonel)
```
