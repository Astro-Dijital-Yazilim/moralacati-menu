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
          name: "Patates Kızartması",
          description: "Patates tava, kajun baharat ile.",
          price: "₺500",
        },
        {
          name: "Sosis Tabağı",
          lang: "tr",
          description:
            "Izgara dana sosis çeşitleri, çıtır patates, hardal ve barbekü sos.",
          price: "₺650",
        },
        {
          name: "Çıtır Tavuk",
          description: "Çıtır tavuk dilimleri, patates, parmesan, chili sos.",
          price: "₺680",
        },
        {
          name: "Şarküteri ve Peynir Tabağı",
          lang: "tr",
          description:
            "Ezine, İzmir tulum ve beyaz peynir, dana füme, salam, kuru kayısı, ceviz, kuru üzüm.",
          price: "₺1.450",
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
          price: "₺700",
        },
        {
          name: "Penne Arrabiata",
          description: "Penne makarna, domates sos, acı sos, beyaz peynir.",
          price: "₺650",
        },
        {
          name: "Penne Napoliten",
          description: "Napoliten sos, penne makarna, parmesan peynir.",
          price: "₺650",
        },
        {
          name: "Körili Penne",
          lang: "tr",
          description: "Köri sos, mantar, tavuk dilimleri, krema, parmesan.",
          price: "₺700",
        },
        {
          name: "Pesto Penne",
          description: "Penne makarna, fesleğenli pesto sos, çeri domates, parmesan.",
          price: "₺650",
        },
        {
          name: "Karidesli Penne",
          lang: "tr",
          description: "Karides, penne, sarımsak, kapya biber, krema.",
          price: "₺750",
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
          price: "₺750",
        },
        {
          name: "Dört Peynirli",
          lang: "tr",
          description: "Mozzarella, cheddar, parmesan, rokfor, domates sos.",
          price: "₺750",
        },
        {
          name: "Füme Kaburga",
          description:
            "Füme dana kaburga, mozzarella, barbekü sos, mor soğan, kapya biber.",
          price: "₺950",
        },
        {
          name: "Tavuklu",
          description:
            "Izgara tavuk, mozzarella, mantar, mısır, kapya biber, domates sos.",
          price: "₺850",
        },
        {
          name: "Vejetaryen",
          description:
            "Mozzarella, mantar, kapya biber, mısır, zeytin, domates, soğan.",
          price: "₺750",
        },
        {
          name: "Mor Special",
          description: "Mozzarella, sucuk, salam, mantar, kapya biber, mısır, zeytin.",
          price: "₺1.100",
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
          price: "₺1.100",
        },
        {
          name: "Dana Bonfile",
          lang: "tr",
          description:
            "Izgara sebze, beybi patates, mantarlı demiglas sos ile.",
          price: "₺1.200",
        },
        {
          name: "Izgara Köfte",
          description: "Kasap köfte, ızgara domates, biber, patates.",
          price: "₺950",
        },
        { subheading: "Tavuk" },
        {
          name: "Mor Tavuk Izgara",
          description:
            "Marine tavuk göğsü, ızgara biber ve domates, baharatlı patates, tortilla lavaş.",
          price: "₺750",
        },
        {
          name: "Tavuk Şinitzel",
          lang: "tr",
          description: "Pane tavuk göğsü, patates tava, coleslaw ile.",
          price: "₺750",
        },
        {
          name: "Tavuk Izgara",
          description:
            "Tavuk göğsü, patates, Akdeniz yeşillikleri, ızgara biber, domates, kekik, tortilla lavaş.",
          price: "₺750",
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
          price: "₺850",
        },
        {
          name: "Mor Tavuk Burger",
          description:
            "Tavuk pane, iceberg marul, turşu, mor özel sos, cheddar dilimi, patates ile.",
          price: "₺800",
        },
        { subheading: "Wrapler" },
        {
          name: "Et Wrap",
          description:
            "Dana antrikot, mantar, soğan, jalapeño biber, kapya biber, cheddar dilimleri.",
          price: "₺850",
        },
        {
          name: "Tavuk Wrap",
          description:
            "Tavuk bonfile, kapya biber, mantar, soya sos, cheddar sos.",
          price: "₺750",
        },
        { subheading: "Taco" },
        {
          name: "Et Taco",
          description:
            "Mısır taco, ızgara dana antrikot, iceberg marul, mor soğan, kapya biber, cheddar sos, jalapeño. 3 adet servis edilir.",
          price: "₺850",
        },
        {
          name: "Tavuk Taco",
          description:
            "Mısır taco, ızgara tavuk bonfile, iceberg marul, mısır, kapya biber, cheddar sos, jalapeño. 3 adet servis edilir.",
          price: "₺750",
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
          price: "₺700",
        },
        {
          name: "Çıtır Tavuk Salata",
          description:
            "Pane tavuk dilimleri, iceberg marul, rende havuç, parmesan peynir, zeytinyağı, limon.",
          price: "₺700",
        },
        {
          name: "Tavuklu Sezar Salata",
          description:
            "Izgara tavuk göğsü, iceberg marul, çeri domates, kruton ekmek, Sezar sos, parmesan peynir.",
          price: "₺700",
        },
        {
          name: "Ton Balıklı Salata",
          description:
            "Ton balığı, iceberg marul, mor soğan, tane mısır, çeri domates, zeytin, zeytinyağı, limon.",
          price: "₺750",
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
          price: "₺550",
        },
        {
          name: "Frambuazlı Cheesecake",
          description: "Frambuazlı cheesecake, kırmızı orman meyveleri sos.",
          price: "₺550",
        },
        {
          name: "Limonlu Cheesecake",
          lang: "tr",
          description: "Limonlu cheesecake, taze limon sos.",
          price: "₺550",
        },
        {
          name: "Meyve Tabağı",
          description: "Mevsim meyveleri.",
          price: "₺650",
        },
        {
          name: "Mor Special Meyve Tabağı",
          description: "Tropikal ve mevsim meyveleri.",
          price: "₺1.000",
        },
        { name: "Çerezler", lang: "tr", price: "₺300" },
        { name: "Jelibon", lang: "tr", price: "₺200" },
      ],
    },

    /* ---------------- NARGİLE ---------------- */
    {
      title: "Nargile",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Love", price: "₺1.000" },
        { name: "Lady", price: "₺1.000" },
        { name: "Dejavu", price: "₺1.000" },
        { name: "Quantum", price: "₺1.000" },
        { name: "Pişmiş Şeftali", lang: "tr", price: "₺1.000" },
        { name: "Turkish Mastic", price: "₺1.000" },
        { name: "Karpuz Çilek", lang: "tr", price: "₺1.000" },
        { name: "Nane", price: "₺1.000" },
        { name: "İzmir Romantik", lang: "tr", price: "₺1.000" },
        { name: "Moscow", price: "₺1.000" },
        { name: "Bakü", price: "₺1.000" },
        { name: "Yaban Mersini", lang: "tr", price: "₺1.000" },
        { name: "Üzüm Nane", price: "₺1.000" },
        { name: "Capyyy", price: "₺1.000" },
      ],
    },

    /* ---------------- İÇECEKLER ---------------- */
    {
      title: "Soft İçecekler",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Coca Cola Original", price: "₺250" },
        { name: "Coca Cola Zero", price: "₺250" },
        { name: "Fanta", price: "₺250" },
        { name: "Sprite", price: "₺250" },
        { name: "Fuse Tea Şeftali", lang: "tr", price: "₺250" },
        { name: "Fuse Tea Limon", lang: "tr", price: "₺250" },
        { name: "Schweppes Tonic", price: "₺250" },
        { name: "Soda", price: "₺200" },
        {
          name: "Red Bull",
          description: "Energy Drink, Sugar Free, Summer White – Yellow Edition",
          price: "₺350",
        },
        {
          name: "Organics by Red Bull",
          description:
            "Simply Cola, Ginger Ale, Bitter Lemon, Viva Matte, Tonic Water",
          price: "₺350",
        },
        { name: "Mor Special Churchill", price: "₺350" },
        { name: "Ayran", price: "₺200" },
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
        { name: "Mocha", price: "₺350" },
        { name: "Latte", price: "₺350" },
        { name: "Espresso", price: "₺350" },
        { name: "Americano", price: "₺350" },
        { name: "White Mocha Latte", price: "₺350" },
        { name: "Flat White", price: "₺350" },
        { subheading: "Soğuk Kahveler" },
        { name: "Iced Latte", price: "₺350" },
        { name: "Iced Mocha", price: "₺350" },
        { name: "Iced White Mocha", price: "₺350" },
        { name: "Iced Americano", price: "₺350" },
        { subheading: "Sıcak İçecekler" },
        { name: "Küçük Çay", lang: "tr", price: "₺100" },
        { name: "Fincan Çay", lang: "tr", price: "₺150" },
        { name: "Türk Kahvesi Sade", lang: "tr", price: "₺250" },
      ],
    },

    {
      title: "Frozen & Milkshake",
      theme: "dark",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Frozen" },
        { name: "Çilek", lang: "tr", price: "₺450" },
        { name: "Karadut", price: "₺450" },
        { name: "Köpük", price: "₺450" },
        { name: "Şeftali", lang: "tr", price: "₺450" },
        { subheading: "Milkshake" },
        { name: "Çikolata", lang: "tr", price: "₺450" },
        { name: "Çilek", lang: "tr", price: "₺450" },
        { name: "Karamel", price: "₺450" },
        { name: "Vanilya", lang: "tr", price: "₺450" },
      ],
    },

    {
      title: "Şaraplar",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Kırmızı" },
        { name: "Consensus 3'lü Kupaj", price: "₺4.000" },
        { name: "İdol", price: "₺3.500" },
        { name: "Kadeh", price: "₺750" },
        { subheading: "Beyaz" },
        { name: "Consensus Chardonnay", price: "₺4.500" },
        { name: "İdol", price: "₺3.000" },
        { name: "Kadeh", price: "₺750" },
        { subheading: "Blush" },
        { name: "İdol", price: "₺3.500" },
        { name: "Kadeh", price: "₺750" },
      ],
    },

    {
      title: "Şampanyalar",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Moet & Chandon Ice", price: "₺19.000" },
        { name: "Moet & Chandon N.I.R", price: "₺20.000" },
        { name: "Mumm Grand Cordon Rose", price: "₺17.000" },
        { name: "Mumm Ice Extra", price: "₺17.000" },
        { name: "Mumm Cordon Rouge", price: "₺17.000" },
        {
          name: "Belaire",
          description: "Gold / Rare Rose / Rare Lux / Lux Rose",
          price: "₺12.000",
        },
      ],
    },

    {
      title: "Kadeh Alkoller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Absolut Votka", price: "₺1.250" },
        { name: "Chivas Regal 12 Years Whiskey", price: "₺1.250" },
        { name: "Chivas Regal 12 Years Whiskey Double", price: "₺1.700" },
        { name: "Chivas Regal 18 Years Whiskey", price: "₺1.500" },
        { name: "Chivas Regal 18 Years Whiskey Double", price: "₺2.000" },
        { name: "Jameson Whiskey", price: "₺1.250" },
        { name: "Beefeater Gin", price: "₺1.250" },
        { name: "Mezcal Kadeh", price: "₺1.250" },
        { name: "Rom Kadeh", price: "₺1.250" },
        { name: "Skinos Kadeh", price: "₺1.250" },
      ],
    },

    {
      title: "Shot Alkoller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Olmeca Blanco Shot", price: "₺550" },
        { name: "Ojo de Tigre", price: "₺550" },
        { name: "Jägermeister", price: "₺550" },
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
          price: "₺1.200",
        },
        {
          name: "Margarita",
          description: "Tekila, portakal likörü, limon suyu.",
          price: "₺1.200",
        },
        {
          name: "Long Island",
          description: "Rom, cin, vodka, portakal likörü, tekila, cola.",
          price: "₺1.200",
        },
        {
          name: "Mojito",
          description: "Rom, şeker şurubu, limon suyu, soda.",
          price: "₺1.200",
        },
        {
          name: "Lynchburg Lemonade",
          description: "Viski, limon suyu, portakal likörü, Sprite.",
          price: "₺1.200",
        },
        {
          name: "Negroni",
          description: "Cin, Campari, bitter.",
          price: "₺1.200",
        },
        {
          name: "Manhattan",
          description: "Bitter, viski, Cinzano bitter.",
          price: "₺1.200",
        },
        {
          name: "Pornstar Martini",
          description: "Vanilya vodka, passion, limon suyu.",
          price: "₺1.200",
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
          price: "₺1.250",
        },
        {
          name: "Satsuma",
          description: "Cin, Skinos, citrus, satsuma.",
          price: "₺1.250",
        },
        {
          name: "Çilek Kordiyal",
          lang: "tr",
          description: "Vodka, portakal likörü, çilek kordiyal.",
          price: "₺1.250",
        },
        {
          name: "Nar Portakal",
          description: "Mezcal, portakal likörü, nar-portakal cordial.",
          price: "₺1.250",
        },
        {
          name: "Ivory",
          description: "Vanilya vodka, Malibu, süt, krema.",
          price: "₺1.250",
        },
        {
          name: "Dusty",
          description: "Rom, Passoa likörü, çilek, passion cordial.",
          price: "₺1.250",
        },
        {
          name: "Green",
          description: "Cin, maraschino, yeşil elma, fesleğen cordial.",
          price: "₺1.250",
        },
        { subheading: "Aperatifler" },
        { name: "Aperol Sprite", price: "₺1.000" },
        { name: "Campari Sprite", price: "₺1.000" },
      ],
    },

    {
      title: "Şişe Alkoller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Belvedere Votka", price: "₺17.000" },
        { name: "Absolut Votka", price: "₺13.000" },
        { name: "Chivas Regal 18 Years Whiskey", price: "₺17.000" },
        { name: "Chivas Regal 12 Years Whiskey", price: "₺13.000" },
        { name: "Jameson Black Barrel", price: "₺13.500" },
        { name: "Jameson", price: "₺13.000" },
        { name: "Malfy Gin", price: "₺15.000" },
        { name: "Beefeater Gin", price: "₺13.000" },
        { name: "Tequila Olmeca", price: "₺13.000" },
        { name: "35'lik Chivas Regal 12 Years Whiskey", price: "₺8.500" },
        { name: "50'lik Chivas Regal 12 Years Whiskey", price: "₺11.000" },
        { name: "35'lik Absolut Votka", price: "₺8.500" },
        { name: "35'lik Beefeater Gin", price: "₺8.500" },
        { name: "35'lik Tequila Olmeca", price: "₺8.500" },
      ],
    },

    {
      title: "Biralar",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Efes 33 cl", price: "₺550" },
        { name: "Becks 33 cl", price: "₺600" },
        { name: "Miller 33 cl", price: "₺650" },
        { name: "Corona 33 cl", price: "₺650" },
        { name: "Stella 40 cl", price: "₺650" },
        { name: "Küba Birası", lang: "tr", price: "₺750" },
      ],
    },
  ],
};
