# Mor Alaçatı Menü Tasarım Referansı

## 1. Proje Özeti

Mor Alaçatı için çok sayfalı bir restoran & bar menü tasarımı hazırlanacak. Tasarım dili; Alaçatı’nın zarif, romantik ve premium akşam atmosferini Mor Alaçatı’nın modern mor kimliğiyle birleştirmeli.

Menü, sadece ürün listesi gibi görünmemeli. Kapak, iç kapak, kategori sayfaları ve ürün liste sayfaları bir bütün olarak aynı marka dünyasını taşımalı.

Genel his:

- Zarif
- Premium
- Ferah
- Alaçatı ruhunu taşıyan
- Mor tonlarında güçlü ama sade
- Okunabilirliği yüksek
- Baskıya uygun
- Çok sayfalı menü sistemine uygun

Tasarımda koyu ve açık sayfalar dönüşümlü kullanılacak. Bir sayfa açık zemin / mor yazı, diğer sayfa mor zemin / beyaz yazı şeklinde ilerleyen bir sistem kurulmalı.

---

## 2. Genel Tasarım Dili

Mor Alaçatı’nın menüsü şu hissi vermeli:

**Alaçatı’da zarif bir akşam.**  
İyi müzik, iyi sofra, özenli lezzetler ve morun modern dokunuşu.

Tasarım ne fazla klasik şarap evi gibi görünmeli ne de koyu neon gece kulübü havasına dönmeli. Mor Alaçatı; restoran & bar çizgisinde, şık, sakin ama karakterli bir dünya sunmalı.

### Ana atmosfer

- Kırık beyaz ve mor geçişli sayfa düzeni
- İnce line-art çizimler
- Alaçatı taş evleri
- Begonvil / çiçek dokuları
- Taş sokak
- Deniz kıyısı
- Yelkenli detayları
- Şık masa düzeni
- Soft paper texture
- Zarif boşluk kullanımı

---

## 3. Sayfa Sistemi

Menü sayfaları dönüşümlü ilerlemeli:

### Açık Sayfa Sistemi

Açık sayfalarda zemin kırık beyaz veya çok açık lavanta tonunda olmalı.

**Kullanım:**

- İç kapak
- Bazı kategori sayfaları
- Ferah ürün liste sayfaları

**Stil:**

- Zemin: kırık beyaz / sıcak beyaz / çok açık lila
- Yazılar: koyu mor veya antrasit mor
- Çizimler: açık mor, düşük opaklık
- Genel his: ferah, zarif, premium

Açık sayfalarda çizimler arka planı desteklemeli. Ana metin alanını kapatmamalı. Özellikle alt bölümde, sağ kenarda veya köşelerde kullanılabilir.

---

### Mor Sayfa Sistemi

Mor sayfalarda zemin koyu mor olmalı.

**Kullanım:**

- Kapak
- Alternatif kategori sayfaları
- Bölüm geçişleri
- Özel bar / kokteyl sayfaları

**Stil:**

- Zemin: derin mor / patlıcan moru
- Yazılar: beyaz
- Çizimler: koyu mor üstüne açık mor veya düşük opaklıkta line-art
- Genel his: premium, sakin, güçlü

Mor sayfalarda en önemli konu okunabilirliktir. Yazılar mutlaka beyaz ve net olmalı. Arka plan çizimleri metinlerin arkasına yoğun şekilde gelmemeli.

---

## 4. Renk Paleti

Önerilen renk sistemi:

```css
--mor-deep: #211328;
--mor-main: #2B1738;
--mor-soft: #6B4A82;
--mor-light: #A996B8;
--lavender-bg: #EEE8F3;
--warm-white: #FAF7F2;
--paper-white: #FBF8F3;
--text-dark: #2A2230;
--text-muted: #5F5665;
--white: #FFFFFF;
```

### Açık sayfa renkleri

- Background: `#FAF7F2` veya `#FBF8F3`
- Başlık: `#2B1738`
- Ürün adı: `#2A2230`
- Açıklama: `#5F5665`
- Çizimler: `#A996B8` / düşük opaklık

### Mor sayfa renkleri

- Background: `#211328` veya `#2B1738`
- Başlık: `#FFFFFF`
- Ürün adı: `#FFFFFF`
- Açıklama: `#E8DFEC`
- Çizimler: `#6B4A82` / düşük opaklık

---

## 5. Tipografi

Tasarımda iki ana font dili kullanılmalı.

### Ana Font: Helvetica 45 Light

Helvetica 45 Light menünün modern, temiz ve okunabilir tarafını oluşturmalı.

**Kullanım alanları:**

- Ürün isimleri
- Ürün açıklamaları
- Fiyatlar
- Küçük açıklamalar
- Sayfa içi liste sistemi

Ürün isimleri büyük harf kullanılabilir. Harf aralığı hafif açık tutulmalı. Çok kalın font kullanılmamalı.

Örnek kullanım:

```css
.menu-item-title {
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

### Yardımcı Font: Garamond Italic

Garamond Italic menünün zarif, romantik ve premium hissini oluşturmalı.

**Kullanım alanları:**

- Kategori başlıkları
- İç kapak kısa metinleri
- Alt başlıklar
- Kısa atmosfer cümleleri

Örnek kullanım:

```css
.category-title {
  font-family: "Garamond", "EB Garamond", serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.02em;
}
```

---

## 6. Logo Kullanımı

Yeni Mor Alaçatı monogram logosu kullanılacak.

### Logo kuralları

- Yeni iletilen monogram logo kullanılmalı.
- Eski MOR wordmark kullanılmamalı.
- Logo oranı bozulmamalı.
- Logo yeniden çizilmemeli.
- Logo sıkıştırılmamalı.
- Açık sayfalarda logo koyu mor kullanılabilir.
- Mor sayfalarda logo beyaz kullanılabilir.
- Her sayfada logo kullanmak zorunlu değil.
- Kapak, iç kapak ve kategori giriş sayfalarında kullanılabilir.

### Kesinlikle kullanılmayacak logo/sembol

- Üzüm logosu
- Üzüm salkımı
- Şarap bağı
- Başka müşteriye ait sembol
- Eski marka çizgisiyle karışan herhangi bir ikon

Önemli: Üzüm veya üzüm salkımı Mor Alaçatı’ya ait değildir. Menü tasarımında asla kullanılmamalıdır.

---

## 7. İllüstrasyon Dili

İllüstrasyonlar ince çizimli, soft ve zarif olmalı. Görseller menünün atmosferini desteklemeli ama metnin önüne geçmemeli.

### Kullanılabilecek çizim motifleri

- Alaçatı taş evi
- Taş sokak
- Begonvil / çiçekli sarmaşık
- Panjurlu pencere
- Taş merdiven
- Dış mekân masa ve sandalye
- Deniz kıyısı
- Yelkenli
- Ay ışığı
- Zarif masa düzeni
- Restoran dış cephesi
- Saksılar
- İnce mimari detaylar

### Kullanılmayacak motifler

- Üzüm
- Üzüm salkımı
- Şarap bağı
- Klasik bağ evi sahnesi
- Ağır vintage desenler
- Neon ışıklar
- Club atmosferi
- Kalın dekoratif çerçeveler
- Menü metinlerinin altındaki çizgiler

---

## 8. Kapak Tasarım Referansı

Kapak tamamen mor zeminli olabilir.

### Kapak düzeni

- Koyu mor zemin
- Yeni monogram logo beyaz
- Büyük “MENU” başlığı
- Küçük alt metin: “Restaurant & Bar” veya “Alaçatı’da zarif akşamlar”
- Soft floral / taş doku / kabartma hissi veren detaylar
- Çok yoğun olmayan arka plan dokusu

Kapak sade, premium ve güçlü olmalı. İlk bakışta marka hissi vermeli.

### Kapak hissi

- Minimal
- Mor ağırlıklı
- Okunaklı
- Baskıda güçlü duran
- Marka kimliğini taşıyan

---

## 9. İç Kapak Tasarım Referansı

İç kapak açık zeminli olmalı.

### İç kapak düzeni

- Kırık beyaz zemin
- Yeni logo
- Soft Alaçatı çizimi
- Mor Alaçatı’yı anlatan kısa metin
- Zarif ve ferah boşluk kullanımı

### İç kapak metin önerisi

Mor Alaçatı; iyi müziğin, özenli lezzetlerin ve keyifli akşamların aynı sofrada buluştuğu özel bir deneyimdir. Alaçatı’nın zarif ruhunu, morun modern dokunuşuyla bir araya getirir.

Bu menü, gecenin ritmine eşlik eden seçkin tatlar için hazırlandı.

---

## 10. Kategori İç Sayfa Tasarım Sistemi

Kategori sayfalarında okunabilirlik ön planda olmalı.

### Genel yapı

1. Üstte küçük logo veya boş alan
2. Kategori başlığı
3. Ürün listesi
4. Ürün açıklamaları
5. Gerekirse fiyatlar
6. Alt veya yan bölümde soft Alaçatı çizimi

### Kategori başlığı

Kategori başlığı Garamond Italic ile büyük ve zarif olmalı.

Örnek:

```text
BAŞLANGIÇLAR
```

### Ürün adı

Ürün isimleri Helvetica 45 Light ile büyük harf kullanılmalı.

Örnek:

```text
ÇITIR TAVUK
```

### Ürün açıklaması

Ürün açıklaması daha küçük puntoda ve sade olmalı.

Örnek:

```text
Çıtır tavuk dilimleri, patates, parmesan, chili sos.
```

---

## 11. Açık Kategori Sayfası Örneği

Açık kategori sayfalarında:

- Zemin açık kırık beyaz
- Başlık koyu mor
- Ürün isimleri koyu mor / koyu antrasit
- Açıklamalar gri-mor
- İllüstrasyon açık mor
- Geniş boşluk kullanılmalı
- Fiyat varsa sağ hizalı olabilir

### Örnek içerik

```text
BAŞLANGIÇLAR

ÇITIR TAVUK
Çıtır tavuk dilimleri, patates, parmesan, chili sos.

PATATES KIZARTMASI
Patates tava, kajun baharat ile.

SOSİS TAVA
Çıtır patates, sosis, cedar sos.

PEYNİR TABAĞI
Ezine peyniri, İzmir tulum, beyaz peynir, kuru kayısı, kuru üzüm, ceviz.
```

---

## 12. Mor Kategori Sayfası Örneği

Mor kategori sayfalarında:

- Zemin koyu mor
- Başlık beyaz
- Ürün isimleri beyaz
- Açıklamalar açık gri / beyaz
- Çizimler düşük opaklıkta
- Metin alanı temiz bırakılmalı
- Kontrast güçlü olmalı

Mor sayfalarda görsel çok güzel dursa bile metni kapatmamalı. Menü okunurluğu her zaman önceliklidir.

---

## 13. Sayfa Ölçüsü ve Teknik Detaylar

Menü dikey 9:16 oranında hazırlanmalı.

Önerilen çalışma ölçüleri:

- Dijital önizleme: 1080 × 1920 px
- Baskı/PDF için: 2160 × 3840 px veya vektörel PDF
- Güvenli alan: kenarlardan en az 80 px / baskıda 8-12 mm
- Metinler editable kalmalı
- Logo mümkünse SVG/PDF vektör olarak kullanılmalı
- Arka plan çizimleri yüksek çözünürlüklü olmalı
- PDF çıktısı baskıya uygun hazırlanmalı

---

## 14. Menü Component Yapısı

Claude Code ile ilerlerken tasarım component mantığında kurulmalı.

Önerilen componentler:

```text
MenuCover
MenuIntroPage
MenuCategoryPageLight
MenuCategoryPageDark
MenuItem
MenuLogo
IllustrationLayer
PageBackground
```

### MenuItem yapısı

```ts
type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};
```

### Category yapısı

```ts
type MenuCategory = {
  title: string;
  theme: "light" | "dark";
  items: MenuItem[];
};
```

Bu sistemle diğer kategoriler kolayca çoğaltılabilmeli.

---

## 15. Claude Code İçin Ana Prompt

Aşağıdaki prompt Claude Code’a doğrudan verilebilir.

```text
Mor Alaçatı için çok sayfalı bir restoran & bar menüsü oluşturmanı istiyorum. Sana referans görselleri ve yeni monogram logo dosyasını iletiyorum. Tasarım, referanslardaki çizgiyi almalı ama birebir kopyalamamalı.

Lütfen aşağıdaki tasarım kurallarına göre ilerle:

- Menü 9:16 dikey formatta olmalı.
- Çok sayfalı PDF menü mantığında tasarlanmalı.
- Bir sayfa açık zemin / koyu mor yazı, sonraki sayfa koyu mor zemin / beyaz yazı şeklinde dönüşümlü bir sistem kurulmalı.
- Açık sayfalarda kırık beyaz veya çok açık lavanta zemin kullanılmalı.
- Mor sayfalarda derin mor / patlıcan moru zemin kullanılmalı.
- Yazılar açık sayfalarda koyu mor, mor sayfalarda beyaz olmalı.
- Menü genelinde Helvetica 45 Light kullanılmalı.
- Kategori başlıklarında Garamond Italic kullanılmalı.
- Yeni ilettiğim Mor Alaçatı monogram logosu kullanılmalı.
- Eski MOR wordmark kullanılmamalı.
- Üzüm, üzüm salkımı, şarap bağı veya farklı müşteriye ait herhangi bir sembol kesinlikle kullanılmamalı.
- Menü metinlerinin altında çizgi kullanılmamalı.
- Arka planda soft, ince çizimli Alaçatı atmosferi olmalı: taş ev, pencere, masa, sandalye, deniz, yelkenli, begonvil, taş sokak gibi detaylar olabilir.
- Çizimler metnin okunabilirliğini bozmamalı.
- Tasarım premium, zarif, ferah ve okunabilir olmalı.
- Koyu sayfalar fazla karanlık club atmosferine dönmemeli; yine restoran & bar şıklığında kalmalı.

İlk olarak şu sayfaları oluştur:

1. Kapak
Koyu mor zemin, beyaz logo, MENU başlığı, kısa alt metin. Premium ve minimal.

2. İç Kapak
Açık zemin, logo, Mor Alaçatı’yı anlatan kısa metin, soft Alaçatı çizimi.

3. Başlangıçlar Kategori Sayfası - Açık Versiyon
Açık zemin, koyu mor yazılar, Garamond Italic kategori başlığı, Helvetica 45 Light ürün listesi.

4. Başlangıçlar Kategori Sayfası - Mor Versiyon
Koyu mor zemin, beyaz yazılar, aynı içerik ama koyu sayfa sistemine uyarlanmış şekilde.

Başlangıçlar sayfasında şu içerikler kullanılacak:

BAŞLANGIÇLAR

ÇITIR TAVUK
Çıtır tavuk dilimleri, patates, parmesan, chili sos.

PATATES KIZARTMASI
Patates tava, kajun baharat ile.

SOSİS TAVA
Çıtır patates, sosis, cedar sos.

PEYNİR TABAĞI
Ezine peyniri, İzmir tulum, beyaz peynir, kuru kayısı, kuru üzüm, ceviz.

Lütfen tasarımı component mantığıyla kur. Sonrasında diğer kategori sayfalarını aynı sistemle çoğaltabileceğim şekilde temiz, düzenli ve ölçeklenebilir bir yapı hazırla.
```

---

## 16. Claude Code İçin Ek Uyarı Promptu

```text
Önemli notlar:

Bu tasarımda üzüm veya üzüm salkımı kesinlikle kullanılmayacak. Önceki referanslarda görülen üzüm başka bir müşteriye ait olduğu için Mor Alaçatı tasarımına dahil edilmemeli.

Mor Alaçatı’nın dili; üzüm/bağ/şarap evi değil, Alaçatı’da zarif akşam, iyi müzik, iyi sofra, restoran & bar atmosferi olmalı.

Lütfen çizimleri Alaçatı taş evi, begonvil, masa düzeni, deniz kıyısı, yelkenli, taş sokak ve pencere detayları üzerinden kur.

Logo olarak sadece yeni ilettiğim Mor Alaçatı monogram logosunu kullan.
```

---

## 17. Son Hedef

Ortaya çıkacak menü sistemi; kapak, iç kapak ve kategori iç sayfalarında tutarlı ilerleyen, Mor Alaçatı’nın premium restoran & bar atmosferini taşıyan, açık ve mor sayfaların dengeli kullanıldığı, okunabilir ve baskıya uygun çok sayfalı bir tasarım olmalı.
