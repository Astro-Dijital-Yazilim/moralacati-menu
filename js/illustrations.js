/* ============================================================
   MOR ALAÇATI — İllüstrasyon Kütüphanesi (line-art SVG)
   Tüm çizimler stroke="currentColor" kullanır; renk + opaklık
   sayfa temasından (.illu) gelir. Üzüm / bağ / şarap motifi YOK.
   ============================================================ */
window.Illustrations = (function () {

  /* ---- Mor Alaçatı monogram (M + A interlock) ---- */
  function monogramMark(size) {
    const w = size || 120;
    return `
    <svg class="monogram__mark" viewBox="0 0 120 150" width="${w}" fill="none"
         stroke="currentColor" stroke-width="2.2"
         stroke-linecap="round" stroke-linejoin="round" aria-label="Mor Alaçatı monogram">
      <!-- A dış bacaklar -->
      <path d="M28 126 L60 22"/>
      <path d="M92 126 L60 22"/>
      <!-- M iç V (dış bacaklarla birlikte M okunur) -->
      <path d="M48 28 L60 70 L72 28"/>
      <!-- A çapraz -->
      <path d="M43 86 L77 86"/>
      <!-- apeks zarif serif -->
      <path d="M53 27 L67 27" stroke-width="1.8"/>
      <!-- ayak serifleri -->
      <path d="M21 126 L35 126"/>
      <path d="M85 126 L99 126"/>
    </svg>`;
  }

  /* ---- Başlık altı zarif rozet (çizgi değil) ---- */
  function flourish() {
    return `
    <svg viewBox="0 0 60 18" fill="none" stroke="currentColor"
         stroke-width="1.1" stroke-linecap="round">
      <path d="M4 9 C 14 9, 18 4, 26 9"/>
      <path d="M56 9 C 46 9, 42 4, 34 9"/>
      <circle cx="30" cy="9" r="2.1" fill="currentColor" stroke="none"/>
    </svg>`;
  }

  /* ---- Begonvil dalı (köşe süsü) ---- */
  function bougainvillea(opts) {
    const o = opts || {};
    const flip = o.flip ? 'scale(-1,1) translate(-220,0)' : '';
    // begonvil = üçlü üçgen brakteler (üzüm değil)
    function bloom(x, y, s) {
      return `
        <g transform="translate(${x} ${y}) scale(${s})" stroke-width="1">
          <path d="M0 0 L-6 -7 L6 -7 Z"/>
          <path d="M0 0 L-9 -1 L-4 -9 Z"/>
          <path d="M0 0 L9 -1 L4 -9 Z"/>
          <circle cx="0" cy="-5" r="0.9" fill="currentColor" stroke="none"/>
        </g>`;
    }
    function leaf(x, y, r) {
      return `<path transform="translate(${x} ${y}) rotate(${r})"
                d="M0 0 Q7 -5 14 0 Q7 5 0 0 Z" stroke-width="0.9"/>`;
    }
    return `
    <svg viewBox="0 0 220 260" fill="none" stroke="currentColor"
         stroke-linecap="round" stroke-linejoin="round">
      <g transform="${flip}">
        <path d="M22 6 C 60 40, 70 110, 50 180 C 40 215, 60 240, 90 252" stroke-width="1.3"/>
        <path d="M40 60 C 75 70, 95 95, 120 92" stroke-width="1"/>
        <path d="M52 150 C 88 150, 110 168, 140 158" stroke-width="1"/>
        ${leaf(78,86,20)} ${leaf(120,92,-15)} ${leaf(102,150,10)} ${leaf(140,158,-25)}
        ${leaf(46,40,60)} ${leaf(56,200,-10)}
        ${bloom(130,90,1.3)} ${bloom(150,100,1)} ${bloom(150,150,1.3)}
        ${bloom(172,160,1)} ${bloom(40,30,1.2)} ${bloom(64,210,1.1)}
        ${bloom(96,240,1)} ${bloom(118,108,0.9)}
      </g>
    </svg>`;
  }

  /* ---- Fener / sokak lambası ---- */
  function lampPost() {
    return `
    <svg viewBox="0 0 60 200" fill="none" stroke="currentColor"
         stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M30 200 L30 60"/>
      <path d="M22 196 L38 196"/>
      <path d="M18 60 L42 60 L36 30 L24 30 Z"/>
      <path d="M22 30 C22 18 38 18 38 30"/>
      <path d="M30 14 L30 18"/>
      <path d="M24 50 L36 50 M27 60 L27 32 M33 60 L33 32"/>
    </svg>`;
  }

  /* ---- Bistro masa + iki sandalye ---- */
  function bistroTable() {
    return `
    <svg viewBox="0 0 200 150" fill="none" stroke="currentColor"
         stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
      <!-- örtülü yuvarlak masa -->
      <ellipse cx="100" cy="58" rx="52" ry="15"/>
      <path d="M48 58 C 50 100, 60 130, 70 142 L130 142 C 140 130, 150 100, 152 58"/>
      <path d="M70 142 C 85 134, 115 134, 130 142" opacity="0.6"/>
      <!-- ince vazo + tek dal -->
      <path d="M97 44 L97 30 L103 30 L103 44"/>
      <path d="M100 30 C 96 20 92 22 94 14 M100 30 C 104 22 108 24 106 16"/>
      <!-- sol sandalye sırtı -->
      <path d="M24 64 C 14 60 14 96 22 120 M24 64 L42 60 M22 120 L40 116
               M27 70 L27 112 M33 68 L33 114 M39 66 L39 116"/>
      <!-- sağ sandalye sırtı -->
      <path d="M176 64 C 186 60 186 96 178 120 M176 64 L158 60 M178 120 L160 116
               M173 70 L173 112 M167 68 L167 114 M161 66 L161 116"/>
    </svg>`;
  }

  /* ---- Yelkenli + deniz ufku ---- */
  function sailboat() {
    return `
    <svg viewBox="0 0 160 120" fill="none" stroke="currentColor"
         stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
      <path d="M70 30 L70 86"/>
      <path d="M70 34 C 96 44 100 70 98 84 L70 84 Z"/>
      <path d="M70 40 C 50 50 46 74 50 84 L70 84 Z"/>
      <path d="M44 88 L104 88 L96 100 L52 100 Z"/>
      <path d="M6 104 C 40 110 60 100 80 105 C 104 111 130 102 154 106" opacity="0.7"/>
      <path d="M14 113 C 44 118 66 110 86 114 C 110 119 134 112 150 115" opacity="0.45"/>
    </svg>`;
  }

  /* ---- Panjurlu pencere ---- */
  function shutterWindow() {
    return `
    <svg viewBox="0 0 120 150" fill="none" stroke="currentColor"
         stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 26 L104 26 L104 132 L16 132 Z"/>
      <path d="M60 26 L60 132"/>
      <path d="M10 22 L110 22"/>
      <!-- sol panjur -->
      <g stroke-width="0.9">
        <path d="M24 34 L52 34 M24 44 L52 44 M24 54 L52 54 M24 64 L52 64
                 M24 78 L52 78 M24 88 L52 88 M24 98 L52 98 M24 108 L52 108 M24 118 L52 118"/>
      </g>
      <!-- sağ panjur -->
      <g stroke-width="0.9">
        <path d="M68 34 L96 34 M68 44 L96 44 M68 54 L96 54 M68 64 L96 64
                 M68 78 L96 78 M68 88 L96 88 M68 98 L96 98 M68 108 L96 108 M68 118 L96 118"/>
      </g>
      <!-- denizlik saksı -->
      <path d="M8 132 L112 132 L108 140 L12 140 Z"/>
    </svg>`;
  }

  /* ============================================================
     Büyük sahne: Alaçatı taş evi + begonvil + masa + deniz
     İç kapak için ana illüstrasyon.
     ============================================================ */
  function stoneHouseScene() {
    return `
    <svg viewBox="0 0 520 560" fill="none" stroke="currentColor"
         stroke-linecap="round" stroke-linejoin="round">
      <g stroke-width="1.2">
        <!-- uzak deniz + ufuk (sağ) -->
        <path d="M300 196 L516 196" opacity="0.55"/>
        <path d="M330 210 C 380 216 430 206 516 212" opacity="0.4"/>
        <path d="M360 224 C 410 230 470 222 516 226" opacity="0.3"/>
        <!-- ay -->
        <circle cx="470" cy="150" r="22" opacity="0.6"/>
        <!-- uzak yelkenli -->
        <g transform="translate(420 168) scale(0.5)" opacity="0.7">
          <path d="M70 30 L70 86 M70 34 C 96 44 100 70 98 84 L70 84 Z
                   M70 40 C 50 50 46 74 50 84 L70 84 Z M44 88 L104 88 L96 100 L52 100 Z"/>
        </g>
      </g>

      <!-- Taş ev gövdesi -->
      <g stroke-width="1.5">
        <path d="M70 250 L70 470 L300 470 L300 230"/>
        <path d="M70 250 L185 168 L300 230"/>      <!-- çatı -->
        <path d="M60 256 L195 160 L312 224" opacity="0.7"/>  <!-- saçak -->
        <!-- baca -->
        <path d="M250 196 L250 168 L272 158 L272 184"/>
      </g>

      <!-- Taş doku (hafif) -->
      <g stroke-width="0.7" opacity="0.45">
        <path d="M70 300 L300 300 M70 350 L300 350 M70 410 L300 410
                 M120 250 L120 300 M180 300 L180 350 M120 350 L120 410
                 M240 250 L240 300 M150 410 L150 470 M230 410 L230 470"/>
      </g>

      <!-- Kapı (kemerli) -->
      <g stroke-width="1.3">
        <path d="M110 470 L110 360 C 110 332 168 332 168 360 L168 470"/>
        <path d="M139 360 L139 470" opacity="0.7"/>
        <path d="M110 360 C 110 332 168 332 168 360"/>
      </g>

      <!-- Pencere (panjurlu) -->
      <g stroke-width="1.2">
        <path d="M210 320 L276 320 L276 400 L210 400 Z"/>
        <path d="M243 320 L243 400"/>
        <path d="M204 314 L282 314"/>
        <g stroke-width="0.7">
          <path d="M216 330 L238 330 M216 342 L238 342 M216 354 L238 354 M216 366 L238 366 M216 378 L238 378 M216 390 L238 390"/>
          <path d="M248 330 L270 330 M248 342 L270 342 M248 354 L270 354 M248 366 L270 366 M248 378 L270 378 M248 390 L270 390"/>
        </g>
        <path d="M204 400 L282 400 L278 410 L208 410 Z"/>
      </g>

      <!-- Sol duvarda tırmanan begonvil -->
      <g stroke-width="1">
        <path d="M70 250 C 40 290 52 360 40 430 C 34 460 48 478 60 470"/>
        <path d="M60 300 C 90 304 96 280 120 286"/>
        <path d="M50 380 C 82 384 92 360 116 366"/>
      </g>
      <g stroke-width="0.9">
        <g transform="translate(118 286) scale(1.1)"><path d="M0 0 L-6 -7 L6 -7 Z"/><path d="M0 0 L-9 -1 L-4 -9 Z"/><path d="M0 0 L9 -1 L4 -9 Z"/></g>
        <g transform="translate(112 366) scale(1.1)"><path d="M0 0 L-6 -7 L6 -7 Z"/><path d="M0 0 L-9 -1 L-4 -9 Z"/><path d="M0 0 L9 -1 L4 -9 Z"/></g>
        <g transform="translate(44 250) scale(1)"><path d="M0 0 L-6 -7 L6 -7 Z"/><path d="M0 0 L-9 -1 L-4 -9 Z"/><path d="M0 0 L9 -1 L4 -9 Z"/></g>
        <g transform="translate(42 420) scale(1)"><path d="M0 0 L-6 -7 L6 -7 Z"/><path d="M0 0 L-9 -1 L-4 -9 Z"/><path d="M0 0 L9 -1 L4 -9 Z"/></g>
        <g transform="translate(96 282) scale(0.8)"><path d="M0 0 L-6 -7 L6 -7 Z"/><path d="M0 0 L-9 -1 L-4 -9 Z"/><path d="M0 0 L9 -1 L4 -9 Z"/></g>
      </g>

      <!-- Zemin / taş teras çizgisi -->
      <path d="M20 470 L500 470" stroke-width="1.3"/>
      <path d="M20 470 C 120 482 360 482 500 472" stroke-width="0.7" opacity="0.5"/>

      <!-- Ön planda örtülü masa + iki sandalye -->
      <g stroke-width="1.2" transform="translate(300 392) scale(0.95)">
        <ellipse cx="100" cy="58" rx="58" ry="16"/>
        <path d="M42 58 C 44 104 56 140 66 152 L134 152 C 144 140 156 104 158 58"/>
        <path d="M66 152 C 84 144 116 144 134 152" opacity="0.55"/>
        <path d="M96 44 L96 28 L104 28 L104 44 M100 28 C 95 16 90 18 92 9 M100 28 C 106 18 112 20 109 11"/>
        <path d="M22 66 C 10 60 10 104 20 130 M22 66 L44 60 M20 130 L42 124
                 M27 72 L27 122 M34 70 L34 124 M40 68 L40 126" stroke-width="1"/>
        <path d="M178 66 C 190 60 190 104 180 130 M178 66 L156 60 M180 130 L158 124
                 M173 72 L173 122 M166 70 L166 124 M160 68 L160 126" stroke-width="1"/>
      </g>

      <!-- Saksılı bitki -->
      <g stroke-width="1.1">
        <path d="M150 470 L142 470 L146 446 L162 446 L158 470" />
        <path d="M150 446 C 148 426 134 424 140 408 M150 446 C 152 428 166 426 160 410 M150 446 L150 420"/>
      </g>

      <!-- Sokak lambası (sağ) -->
      <g stroke-width="1.1" transform="translate(440 300) scale(0.85)">
        <path d="M30 200 L30 60 M22 196 L38 196 M18 60 L42 60 L36 30 L24 30 Z
                 M22 30 C22 18 38 18 38 30 M30 14 L30 18"/>
      </g>
    </svg>`;
  }

  /* ============================================================
     Geniş alt sahne: kıyı + yelkenli + bistro masa + saksılar
     Kategori sayfalarının alt bandı için.
     ============================================================ */
  function coastlineScene() {
    return `
    <svg viewBox="0 0 620 300" fill="none" stroke="currentColor"
         stroke-linecap="round" stroke-linejoin="round">
      <!-- deniz ufku + dalgalar -->
      <g stroke-width="1">
        <path d="M0 96 L620 96" opacity="0.5"/>
        <path d="M30 112 C 110 118 200 108 300 113 C 420 119 520 109 620 114" opacity="0.4"/>
        <path d="M0 128 C 120 134 240 124 360 129 C 480 134 560 126 620 130" opacity="0.3"/>
      </g>

      <!-- uzak ada evleri -->
      <g stroke-width="0.9" opacity="0.6">
        <path d="M60 96 L60 74 L84 60 L108 74 L108 96"/>
        <path d="M84 80 L84 96 M92 78 L100 78 L100 88 L92 88 Z"/>
        <path d="M500 96 L500 78 L520 66 L540 78 L540 96"/>
        <path d="M512 84 L512 96"/>
      </g>

      <!-- yelkenli -->
      <g stroke-width="1.1" transform="translate(360 36) scale(0.85)">
        <path d="M70 30 L70 86 M70 34 C 96 44 100 70 98 84 L70 84 Z
                 M70 40 C 50 50 46 74 50 84 L70 84 Z M44 88 L104 88 L96 100 L52 100 Z"/>
      </g>

      <!-- taş rıhtım duvarı -->
      <g stroke-width="1.2">
        <path d="M0 168 L620 168"/>
        <g stroke-width="0.6" opacity="0.45">
          <path d="M0 184 L620 184 M0 200 L620 200
                   M70 168 L70 200 M150 168 L150 184 M220 184 L220 200
                   M300 168 L300 200 M380 168 L380 184 M460 184 L460 200 M540 168 L540 200"/>
        </g>
      </g>

      <!-- sol: saksılı begonvil -->
      <g stroke-width="1" transform="translate(20 150)">
        <path d="M40 18 L30 18 L35 -16 L65 -16 L60 18"/>
        <path d="M48 -16 C 44 -44 22 -46 32 -70 M48 -16 C 52 -42 74 -44 64 -68 M48 -16 L48 -52"/>
        <g stroke-width="0.8">
          <g transform="translate(30 -68)"><path d="M0 0 L-5 -6 L5 -6 Z"/><path d="M0 0 L-7 -1 L-3 -7 Z"/><path d="M0 0 L7 -1 L3 -7 Z"/></g>
          <g transform="translate(66 -66)"><path d="M0 0 L-5 -6 L5 -6 Z"/><path d="M0 0 L-7 -1 L-3 -7 Z"/><path d="M0 0 L7 -1 L3 -7 Z"/></g>
          <g transform="translate(48 -54)"><path d="M0 0 L-5 -6 L5 -6 Z"/><path d="M0 0 L-7 -1 L-3 -7 Z"/><path d="M0 0 L7 -1 L3 -7 Z"/></g>
        </g>
      </g>

      <!-- sağ: bistro masa + sandalyeler -->
      <g stroke-width="1.1" transform="translate(430 92) scale(0.8)">
        <ellipse cx="100" cy="58" rx="52" ry="15"/>
        <path d="M48 58 C 50 100 60 130 70 142 L130 142 C 140 130 150 100 152 58"/>
        <path d="M97 44 L97 30 L103 30 L103 44 M100 30 C 96 20 92 22 94 14 M100 30 C 104 22 108 24 106 16"/>
        <path d="M24 64 C 14 60 14 96 22 120 M24 64 L42 60 M22 120 L40 116 M30 68 L30 118" stroke-width="1"/>
        <path d="M176 64 C 186 60 186 96 178 120 M176 64 L158 60 M178 120 L160 116 M170 68 L170 118" stroke-width="1"/>
      </g>

      <!-- sokak lambası -->
      <g stroke-width="1" transform="translate(250 80) scale(0.7)">
        <path d="M30 200 L30 60 M22 196 L38 196 M18 60 L42 60 L36 30 L24 30 Z
                 M22 30 C22 18 38 18 38 30 M30 14 L30 18"/>
      </g>
    </svg>`;
  }

  /* ---- İnce floral doku (kapak arka planı için tekrarlı motif) ---- */
  function coverFloral() {
    function sprig(x, y, s, r) {
      return `
      <g transform="translate(${x} ${y}) scale(${s}) rotate(${r})" stroke-width="1">
        <path d="M0 0 C 14 -10 22 -34 18 -58"/>
        <path d="M6 -16 C 18 -18 24 -30 22 -40"/>
        <path d="M2 -38 C 14 -40 20 -52 18 -62"/>
        <g><path d="M22 -42 L17 -49 L27 -49 Z"/><path d="M22 -42 L15 -43 L19 -51 Z"/><path d="M22 -42 L29 -43 L25 -51 Z"/></g>
        <g><path d="M18 -62 L13 -69 L23 -69 Z"/><path d="M18 -62 L11 -63 L15 -71 Z"/><path d="M18 -62 L25 -63 L21 -71 Z"/></g>
        <g><path d="M24 -30 L19 -37 L29 -37 Z"/></g>
      </g>`;
    }
    return `
    <svg viewBox="0 0 420 760" fill="none" stroke="currentColor"
         stroke-linecap="round" stroke-linejoin="round">
      ${sprig(40, 740, 1.6, 0)}
      ${sprig(120, 752, 1.2, 14)}
      ${sprig(20, 600, 1.1, -8)}
      ${sprig(380, 60, 1.4, 184)}
      ${sprig(300, 30, 1.0, 196)}
      ${sprig(398, 200, 1.0, 172)}
    </svg>`;
  }

  return {
    monogramMark, flourish, bougainvillea, lampPost, bistroTable,
    sailboat, shutterWindow, stoneHouseScene, coastlineScene, coverFloral
  };
})();
