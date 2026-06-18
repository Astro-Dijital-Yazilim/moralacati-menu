/* ============================================================
   MOR ALAÇATI — Menü İçeriği (data)
   Yeni kategori eklemek için MENU dizisine bir kategori objesi
   ekleyin. Açık/mor sayfa düzeni otomatik dönüşümlüdür; istersen
   kategori bazında `theme: "light" | "dark"` ile sabitleyebilirsin.

   type MenuItem    = { name, description?, price? }
   type MenuCategory= { title, items: MenuItem[], theme?, note? }
   ============================================================ */
window.MENU_DATA = {

  brand: {
    name: "MOR ALAÇATI",
    cover: {
      title: "MENU",
      subtitle: "Alaçatı’da zarif akşamlar",
    },
    intro: {
      heading: "Mor Deneyimine Hoş Geldiniz",
      verse: [
        "İlk an, zarif bir davet.",
        "İkinci an, sohbete açılan bir masa.",
        "Üçüncü an, Alaçatı gecesinin büyüsü.",
      ],
      body:
        "Mor Alaçatı; iyi müziğin, özenli lezzetlerin ve keyifli akşamların " +
        "aynı sofrada buluştuğu özel bir deneyimdir. Alaçatı’nın zarif ruhunu, " +
        "morun modern dokunuşuyla bir araya getirir. Bu menü, gecenin ritmine " +
        "eşlik eden seçkin tatlar için hazırlandı.",
    },
    outro: {
      heading: "Afiyet Olsun",
      verse: [
        "Lezzetler son bulsa da,",
        "gecenin keyfi sürsün.",
      ],
      body:
        "Bu güzel deneyimde bizi tercih ettiğiniz için teşekkür ederiz. " +
        "Mor Alaçatı’da geçirdiğiniz keyifli anların izinde, sizleri yeniden " +
        "aramızda görmekten mutluluk duyarız.",
    },
  },

  /* Kategoriler — sırayla açık / mor olarak çoğaltılabilir */
  categories: [
    {
      title: "Başlangıçlar",
      theme: "light",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Şarküteri ve Peynir Tabağı",
          lang: "tr",
          description:
            "Ezine, İzmir tulum ve beyaz peynir, dana füme, salam, kuru kayısı, ceviz, kuru üzüm.",
          price: "₺520",
        },
        {
          name: "Çıtır Tavuk",
          description: "Çıtır tavuk dilimleri, patates, parmesan, chili sos.",
          price: "₺320",
        },
        {
          name: "Nachos Tabağı",
          description:
            "Mısır cipsi, cheddar sos, jalapeño, salsa, guacamole, ekşi krema.",
          price: "₺300",
        },
        {
          name: "Patates Kızartması",
          description: "Patates tava, kajun baharat ile.",
          price: "₺220",
        },
        {
          name: "Sosis Tabağı",
          lang: "tr",
          description:
            "Izgara dana sosis çeşitleri, çıtır patates, hardal ve barbekü sos.",
          price: "₺320",
        },
      ],
    },

    {
      title: "İmza Kokteyller",
      theme: "dark",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Mor Akşam",
          icon: "martini",
          description: "Lavanta şurubu, cin, taze limon, prosecco dokunuşu.",
          price: "₺480",
        },
        {
          name: "Alaçatı Esintisi",
          icon: "wine",
          description: "Tekila, deniz börülcesi tuzu, salatalık, taze nane.",
          price: "₺460",
        },
        {
          name: "Sakız Bahçesi",
          icon: "cup-soda",
          description: "Sakız likörü, beyaz rom, bergamot, tonik.",
          price: "₺440",
        },
        {
          name: "Gün Batımı 1850",
          icon: "glass-water",
          description: "Bourbon, incir reçeli, portakal kabuğu, Angostura.",
          price: "₺520",
        },
      ],
    },

    {
      title: "Makarnalar",
      theme: "light",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Fettuccine Alfredo",
          description:
            "Fettuccine, tavuk dilimleri, mantar, krema, parmesan peynir.",
          price: "₺420",
        },
        {
          name: "Penne Arrabiata",
          description: "Penne makarna, domates sos, acı sos, beyaz peynir.",
          price: "₺360",
        },
        {
          name: "Penne Napoliten",
          description: "Napoliten sos, penne makarna, parmesan peynir.",
          price: "₺350",
        },
        {
          name: "Körili Penne",
          lang: "tr",
          description: "Köri sos, mantar, tavuk dilimleri, krema, parmesan.",
          price: "₺400",
        },
        {
          name: "Pesto Penne",
          description: "Penne makarna, fesleğenli pesto sos, çeri domates, parmesan.",
          price: "₺380",
        },
        {
          name: "Karidesli Penne",
          lang: "tr",
          description: "Karides, penne, sarımsak, kapya biber, krema.",
          price: "₺520",
        },
      ],
    },

    {
      title: "Pizzalar",
      theme: "light",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Margherita",
          description: "Domates sos, mozzarella, taze fesleğen, zeytinyağı.",
          price: "₺320",
        },
        {
          name: "Dört Peynirli",
          lang: "tr",
          description: "Mozzarella, cheddar, parmesan, rokfor, domates sos.",
          price: "₺400",
        },
        {
          name: "Füme Kaburga",
          description:
            "Füme dana kaburga, mozzarella, barbekü sos, mor soğan, kapya biber.",
          price: "₺480",
        },
        {
          name: "Tavuk",
          description:
            "Izgara tavuk, mozzarella, mantar, mısır, kapya biber, domates sos.",
          price: "₺390",
        },
        {
          name: "Vejetaryen",
          description:
            "Mozzarella, mantar, kapya biber, mısır, zeytin, domates, soğan.",
          price: "₺350",
        },
        {
          name: "Karışık Pizza",
          lang: "tr",
          description: "Mozzarella, sucuk, salam, mantar, kapya biber, mısır, zeytin.",
          price: "₺430",
        },
      ],
    },

    {
      title: "Ana Yemekler",
      theme: "light",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Et" },
        {
          name: "Et Fajita",
          description:
            "Dana bonfile dilimleri, kapya biber, yeşil biber, sarı biber, soğan, sarımsak.",
          price: "₺620",
        },
        {
          name: "Dana Bonfile",
          lang: "tr",
          description:
            "Izgara sebze, beybi patates, mantarlı demiglas sos ile.",
          price: "₺780",
        },
        {
          name: "Izgara Köfte",
          description: "Kasap köfte, ızgara domates, biber, patates.",
          price: "₺480",
        },
        { subheading: "Tavuk" },
        {
          name: "Mor Tavuk Izgara",
          description:
            "Marine tavuk göğsü, ızgara biber ve domates, baharatlı patates, tortilla lavaş.",
          price: "₺460",
        },
        {
          name: "Tavuk Şinitzel",
          lang: "tr",
          description: "Pane tavuk göğsü, patates tava, coleslaw ile.",
          price: "₺440",
        },
        {
          name: "Tavuk Izgara",
          description:
            "Tavuk göğsü, patates, Akdeniz yeşillikleri, ızgara biber, domates, kekik, tortilla lavaş.",
          price: "₺440",
        },
      ],
    },

    {
      title: "Hamburgerler & Wrapler & Taco",
      theme: "light",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Hamburgerler" },
        {
          name: "Mor Cheeseburger",
          description:
            "Hamburger köftesi, cheddar dilimi, marul, domates, çubuk turşu, mor özel burger sos, patates ile.",
          price: "₺420",
        },
        {
          name: "Mor Tavuk Burger",
          description:
            "Tavuk pane, iceberg marul, turşu, mor özel sos, cheddar dilimi, patates ile.",
          price: "₺400",
        },
        { subheading: "Wrapler" },
        {
          name: "Et Wrap",
          description:
            "Dana antrikot, mantar, soğan, jalapeño biber, kapya biber, cheddar dilimleri.",
          price: "₺420",
        },
        {
          name: "Tavuk Wrap",
          description:
            "Tavuk bonfile, kapya biber, mantar, soya sos, cheddar sos.",
          price: "₺380",
        },
        { subheading: "Taco" },
        {
          name: "Tavuk Taco",
          description:
            "Mısır taco, ızgara tavuk bonfile, iceberg marul, mısır, kapya biber, cheddar sos, jalapeño.",
          price: "₺390",
        },
        {
          name: "Kaburga Taco",
          description:
            "Mısır taco, fırın dana kaburga, mor soğan, taze kişniş, lime, acı barbekü sos.",
          price: "₺470",
        },
      ],
    },

    {
      title: "Salatalar",
      theme: "light",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Izgara Tavuk Salata",
          description:
            "Izgara tavuk dilimleri, Akdeniz yeşillikleri, çeri domates, zeytinyağı, limon, nar ekşisi.",
          price: "₺380",
        },
        {
          name: "Çıtır Tavuk Salata",
          description:
            "Pane tavuk dilimleri, iceberg marul, rende havuç, parmesan peynir, zeytinyağı, limon.",
          price: "₺360",
        },
        {
          name: "Tavuklu Sezar Salata",
          description:
            "Izgara tavuk göğsü, iceberg marul, çeri domates, kruton ekmek, Sezar sos, parmesan peynir.",
          price: "₺390",
        },
        {
          name: "Ton Balıklı Salata",
          description:
            "Ton balığı, iceberg marul, mor soğan, tane mısır, çeri domates, zeytin, zeytinyağı, limon.",
          price: "₺360",
        },
      ],
    },

    {
      title: "Tatlılar & Meyveler",
      theme: "light",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Dondurmalı Brownie",
          description: "Sıcak çikolatalı brownie, vanilyalı dondurma, çikolata sos.",
          price: "₺240",
        },
        {
          name: "Frambuazlı Cheesecake",
          description: "Frambuazlı cheesecake, kırmızı orman meyveleri sos.",
          price: "₺220",
        },
        {
          name: "Limonlu Cheesecake",
          lang: "tr",
          description: "Limonlu cheesecake, taze limon sos.",
          price: "₺220",
        },
        {
          name: "Special Mor Meyve Tabağı",
          description: "Tropikal ve mevsim meyveleri.",
          price: "₺320",
        },
        {
          name: "Meyve Tabağı",
          description: "Mevsim meyveleri.",
          price: "₺260",
        },
      ],
    },

    /* ---------------- İÇECEKLER ---------------- */
    {
      title: "Soft İçecekler",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Coca Cola Original", price: "₺200" },
        { name: "Coca Cola Zero", price: "₺200" },
        { name: "Fanta", price: "₺200" },
        { name: "Sprite", price: "₺200" },
        { name: "Fuse Tea Şeftali", lang: "tr", price: "₺200" },
        { name: "Fuse Tea Limon", lang: "tr", price: "₺200" },
        { name: "Schweppes Tonic", price: "₺200" },
        { name: "Soda", price: "₺150" },
        {
          name: "Red Bull",
          description: "Energy Drink, Sugar Free, Summer White – Yellow Edition",
          price: "₺250",
        },
        {
          name: "Organics by Red Bull",
          description:
            "Simply Cola, Ginger Ale, Bitter Lemon, Viva Matte, Tonic Water",
          price: "₺250",
        },
        { name: "Ayran", price: "₺150" },
        { name: "Damla Su (250 ml)", price: "₺100" },
      ],
    },

    {
      title: "Kahveler & Sıcak İçecekler",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Sıcak Kahveler" },
        { name: "Mocha", price: "₺180" },
        { name: "Latte", price: "₺170" },
        { name: "Americano", price: "₺150" },
        { name: "White Mocha Latte", price: "₺190" },
        { name: "Flat White", price: "₺180" },
        { subheading: "Soğuk Kahveler" },
        { name: "Iced Latte", price: "₺190" },
        { name: "Iced Mocha", price: "₺210" },
        { name: "Iced White Mocha", price: "₺220" },
        { name: "Iced Americano", price: "₺170" },
        { subheading: "Sıcak İçecekler" },
        { name: "Çay", price: "₺100" },
        { name: "Türk Kahvesi Sade", lang: "tr", price: "₺200" },
        { name: "Türk Kahvesi Damla Sakızlı", lang: "tr", price: "₺250" },
      ],
    },

    {
      title: "Frozen & Milkshake",
      theme: "dark",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Frozen" },
        { name: "Çilek", lang: "tr", price: "₺220" },
        { name: "Karadut", price: "₺220" },
        { name: "Köpük", price: "₺220" },
        { name: "Şeftali", lang: "tr", price: "₺220" },
        { subheading: "Milkshake" },
        { name: "Çikolata", lang: "tr", price: "₺240" },
        { name: "Çilek", lang: "tr", price: "₺240" },
        { name: "Karamel", price: "₺240" },
        { name: "Vanilya", lang: "tr", price: "₺240" },
      ],
    },

    {
      title: "Şaraplar",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Pool" },
        { name: "Beyaz", price: "₺2.150" },
        { name: "Kırmızı", price: "₺2.150" },
        { name: "Blush", price: "₺2.150" },
        { subheading: "Antre" },
        { name: "Beyaz", price: "₺2.450" },
        { name: "Kırmızı", price: "₺2.450" },
        { name: "Blush", price: "₺2.450" },
        { subheading: "Consensus" },
        { name: "Beyaz", price: "₺3.600" },
        { name: "Kırmızı", price: "₺3.600" },
        { name: "Blush", price: "₺3.600" },
      ],
    },

    {
      title: "Şampanyalar",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Moet & Chandon Ice", price: "₺13.000" },
        { name: "Moet & Chandon N.I.R", price: "₺14.000" },
        { name: "Mumm Grand Cordon Rose", price: "₺10.000" },
        { name: "Mumm Ice Extra", price: "₺10.000" },
        { name: "Mumm Cordon Rouge", price: "₺10.000" },
        {
          name: "Belaire",
          description: "Gold / Rare Rose / Rare Lux / Lux Rose",
          price: "₺8.000",
        },
      ],
    },

    {
      title: "Kadeh Alkoller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Belvedere Votka", price: "₺1.000" },
        { name: "Absolut Votka", price: "₺800" },
        { name: "Chivas Regal 12 Years Whiskey", price: "₺800" },
        { name: "Chivas Regal 12 Years Whiskey Double", price: "₺1.100" },
        { name: "Chivas Regal 18 Years Whiskey", price: "₺1.000" },
        { name: "Chivas Regal 18 Years Whiskey Double", price: "₺1.400" },
        { name: "Jameson Whiskey", price: "₺800" },
        { name: "Beefeater Gin", price: "₺800" },
        { name: "Mezcal Kadeh", price: "₺900" },
        { name: "Rom Kadeh", price: "₺800" },
        { name: "Skinos Kadeh", price: "₺850" },
      ],
    },

    {
      title: "Shot Alkoller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Olmeca Blanco Shot", price: "₺450" },
        { name: "Ojo de Tigre", price: "₺450" },
        { name: "Jägermeister", price: "₺450" },
      ],
    },

    {
      title: "Kokteyller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Espresso Martini",
          description: "Vodka, espresso, Kahlua.",
          price: "₺750",
        },
        {
          name: "Margarita",
          description: "Tekila, portakal likörü, limon suyu.",
          price: "₺750",
        },
        {
          name: "Long Island",
          description: "Rom, cin, vodka, portakal likörü, tekila, cola.",
          price: "₺750",
        },
        {
          name: "Mojito",
          description: "Rom, şeker şurubu, limon suyu, soda.",
          price: "₺750",
        },
        {
          name: "Lynchburg Lemonade",
          description: "Viski, limon suyu, portakal likörü, Sprite.",
          price: "₺750",
        },
        {
          name: "Negroni",
          description: "Cin, Campari, bitter.",
          price: "₺750",
        },
        {
          name: "Manhattan",
          description: "Bitter, viski, Cinzano bitter.",
          price: "₺750",
        },
        {
          name: "Pornstar Martini",
          description: "Vanilya vodka, passion, limon suyu.",
          price: "₺750",
        },
      ],
    },

    {
      title: "Mor Special",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        {
          name: "Kuzu Kulağı",
          description: "Cin, portakal likörü, citrus, kuzu kulağı sos.",
          price: "₺800",
        },
        {
          name: "Satsuma",
          description: "Cin, Skinos, citrus, satsuma.",
          price: "₺800",
        },
        {
          name: "Çilek Kordiyal",
          lang: "tr",
          description: "Vodka, portakal likörü, çilek kordiyal.",
          price: "₺800",
        },
        {
          name: "Nar Portakal",
          description: "Mezcal, portakal likörü, nar-portakal cordial.",
          price: "₺800",
        },
        {
          name: "Ivory",
          description: "Vanilya vodka, Malibu, süt, krema.",
          price: "₺800",
        },
        {
          name: "Dusty",
          description: "Rom, Passoa likörü, çilek, passion cordial.",
          price: "₺800",
        },
        {
          name: "Green",
          description: "Cin, maraschino, yeşil elma, fesleğen cordial.",
          price: "₺800",
        },
        { subheading: "Aperatifler" },
        { name: "Aperol Sprite", price: "₺650" },
        { name: "Campari Sprite", price: "₺650" },
      ],
    },

    {
      title: "Şişe Alkoller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Belvedere Votka", price: "₺13.000" },
        { name: "Absolut Votka", price: "₺8.000" },
        { name: "Chivas Regal 18 Years Whiskey", price: "₺13.000" },
        { name: "Chivas Regal 15 Years Whiskey", price: "₺10.500" },
        { name: "Chivas Regal 13 Years Whiskey", price: "₺8.500" },
        { name: "Chivas Regal 12 Years Whiskey", price: "₺8.000" },
        { name: "Jameson Black Barrel", price: "₺8.500" },
        { name: "Jameson", price: "₺8.000" },
        { name: "Malfy Gin", price: "₺9.000" },
        { name: "Beefeater Gin", price: "₺8.000" },
        { name: "Tequila Olmeca", price: "₺8.000" },
        { name: "35'lik Chivas Regal 12 Years Whiskey", price: "₺4.500" },
        { name: "50'lik Chivas Regal 12 Years Whiskey", price: "₺6.250" },
        { name: "35'lik Absolut Votka", price: "₺4.500" },
        { name: "35'lik Beefeater Gin", price: "₺4.500" },
        { name: "35'lik Tequila Olmeca", price: "₺4.500" },
      ],
    },

    {
      title: "Biralar",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Efes 33 cl", price: "₺400" },
        { name: "Becks 33 cl", price: "₺400" },
        { name: "Stella 40 cl", price: "₺500" },
        { name: "Küba Birası", lang: "tr", price: "₺500" },
      ],
    },
  ],
};
