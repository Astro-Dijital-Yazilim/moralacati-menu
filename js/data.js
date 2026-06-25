/* ============================================================
   MOR ALAÇATI — Menü İçeriği (data)
   Yeni kategori eklemek için MENU dizisine bir kategori objesi
   ekleyin. Açık/mor sayfa düzeni otomatik dönüşümlüdür; istersen
   kategori bazında `theme: "light" | "dark"` ile sabitleyebilirsin.

   type MenuItem    = { name, nameEn?, description?, descEn?, price? }
   type MenuCategory= { title, items: MenuItem[], theme?, note? }
   ============================================================ */
window.MENU_DATA = {

  brand: {
    name: "MOR ALAÇATI",
    cover: {
      title: "MENÜ",
      subtitle: "Alaçatı’da zarif akşamlar",
    },
    intro: {
      heading: "Mor Deneyimine Hoş Geldiniz",
      headingEn: "Welcome to the Mor Experience",
      verse: [
        "İlk an, zarif bir davet.",
        "İkinci an, sohbete açılan bir masa.",
        "Üçüncü an, Alaçatı gecesinin büyüsü.",
      ],
      verseEn: [
        "The first moment, an elegant invitation.",
        "The second, a table open to conversation.",
        "The third, the magic of an Alaçatı night.",
      ],
      body:
        "Mor Alaçatı; iyi müziğin, özenli lezzetlerin ve keyifli akşamların " +
        "aynı sofrada buluştuğu özel bir deneyimdir. Alaçatı’nın zarif ruhunu, " +
        "morun modern dokunuşuyla bir araya getirir. Bu menü, gecenin ritmine " +
        "eşlik eden seçkin tatlar için hazırlandı.",
      bodyEn:
        "Mor Alaçatı is a special experience where good music, refined flavors " +
        "and delightful evenings meet at the same table. It unites the elegant " +
        "spirit of Alaçatı with the modern touch of purple. This menu was crafted " +
        "for the distinguished tastes that accompany the rhythm of the night.",
    },
    outro: {
      heading: "Afiyet Olsun",
      headingEn: "Bon Appétit",
      verse: [
        "Lezzetler son bulsa da,",
        "gecenin keyfi sürsün.",
      ],
      verseEn: [
        "Though the flavors come to an end,",
        "may the joy of the night go on.",
      ],
      body:
        "Bu güzel deneyimde bizi tercih ettiğiniz için teşekkür ederiz. " +
        "Mor Alaçatı’da geçirdiğiniz keyifli anların izinde, sizleri yeniden " +
        "aramızda görmekten mutluluk duyarız.",
      bodyEn:
        "Thank you for choosing us for this wonderful experience. Tracing the " +
        "pleasant moments you spent at Mor Alaçatı, we would be delighted to " +
        "welcome you among us once again.",
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
          nameEn: "French Fries",
          description: "Patates tava, kajun baharat ile.",
          descEn: "Pan-fried potatoes with cajun spice.",
          price: "₺500",
        },
        {
          name: "Sosis Tabağı",
          lang: "tr",
          nameEn: "Sausage Platter",
          description:
            "Izgara dana sosis çeşitleri, çıtır patates, hardal ve barbekü sos.",
          descEn:
            "Assorted grilled beef sausages, crispy fries, mustard and barbecue sauce.",
          price: "₺650",
        },
        {
          name: "Çıtır Tavuk",
          nameEn: "Crispy Chicken",
          description: "Çıtır tavuk dilimleri, patates, parmesan, chili sos.",
          descEn: "Crispy chicken strips, fries, parmesan, chili sauce.",
          price: "₺680",
        },
        {
          name: "Şarküteri ve Peynir Tabağı",
          lang: "tr",
          nameEn: "Charcuterie & Cheese Platter",
          description:
            "Ezine, İzmir tulum ve beyaz peynir, dana füme, salam, kuru kayısı, ceviz, kuru üzüm.",
          descEn:
            "Ezine, İzmir tulum and white cheese, smoked beef, salami, dried apricot, walnut, raisin.",
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
          nameEn: "Purple Evening",
          description: "Lavanta şurubu, cin, taze limon, prosecco dokunuşu.",
          descEn: "Lavender syrup, gin, fresh lemon, a touch of prosecco.",
          price: "₺480",
        },
        {
          name: "Alaçatı Esintisi",
          icon: "wine",
          nameEn: "Alaçatı Breeze",
          description: "Tekila, deniz börülcesi tuzu, salatalık, taze nane.",
          descEn: "Tequila, samphire salt, cucumber, fresh mint.",
          price: "₺460",
        },
        {
          name: "Sakız Bahçesi",
          icon: "cup-soda",
          nameEn: "Mastic Garden",
          description: "Sakız likörü, beyaz rom, bergamot, tonik.",
          descEn: "Mastic liqueur, white rum, bergamot, tonic.",
          price: "₺440",
        },
        {
          name: "Gün Batımı 1850",
          icon: "glass-water",
          nameEn: "Sunset 1850",
          description: "Bourbon, incir reçeli, portakal kabuğu, Angostura.",
          descEn: "Bourbon, fig jam, orange peel, Angostura.",
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
          nameEn: "Fettuccine Alfredo",
          description:
            "Fettuccine, tavuk dilimleri, mantar, krema, parmesan peynir.",
          descEn: "Fettuccine, chicken strips, mushroom, cream, parmesan cheese.",
          price: "₺700",
        },
        {
          name: "Penne Arrabiata",
          nameEn: "Penne Arrabiata",
          description: "Penne makarna, domates sos, acı sos, beyaz peynir.",
          descEn: "Penne pasta, tomato sauce, spicy sauce, white cheese.",
          price: "₺650",
        },
        {
          name: "Penne Napoliten",
          nameEn: "Penne Napolitan",
          description: "Napoliten sos, penne makarna, parmesan peynir.",
          descEn: "Napolitan sauce, penne pasta, parmesan cheese.",
          price: "₺650",
        },
        {
          name: "Körili Penne",
          lang: "tr",
          nameEn: "Curry Penne",
          description: "Köri sos, mantar, tavuk dilimleri, krema, parmesan.",
          descEn: "Curry sauce, mushroom, chicken strips, cream, parmesan.",
          price: "₺700",
        },
        {
          name: "Pesto Penne",
          nameEn: "Pesto Penne",
          description: "Penne makarna, fesleğenli pesto sos, çeri domates, parmesan.",
          descEn: "Penne pasta, basil pesto sauce, cherry tomato, parmesan.",
          price: "₺650",
        },
        {
          name: "Karidesli Penne",
          lang: "tr",
          nameEn: "Shrimp Penne",
          description: "Karides, penne, sarımsak, kapya biber, krema.",
          descEn: "Shrimp, penne, garlic, red pepper, cream.",
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
          nameEn: "Margherita",
          description: "Domates sos, mozzarella, taze fesleğen, zeytinyağı.",
          descEn: "Tomato sauce, mozzarella, fresh basil, olive oil.",
          price: "₺750",
        },
        {
          name: "Dört Peynirli",
          lang: "tr",
          nameEn: "Four Cheese",
          description: "Mozzarella, cheddar, parmesan, rokfor, domates sos.",
          descEn: "Mozzarella, cheddar, parmesan, blue cheese, tomato sauce.",
          price: "₺750",
        },
        {
          name: "Füme Kaburga",
          nameEn: "Smoked Ribs",
          description:
            "Füme dana kaburga, mozzarella, barbekü sos, mor soğan, kapya biber.",
          descEn:
            "Smoked beef ribs, mozzarella, barbecue sauce, red onion, red pepper.",
          price: "₺950",
        },
        {
          name: "Tavuklu",
          nameEn: "Chicken",
          description:
            "Izgara tavuk, mozzarella, mantar, mısır, kapya biber, domates sos.",
          descEn:
            "Grilled chicken, mozzarella, mushroom, corn, red pepper, tomato sauce.",
          price: "₺850",
        },
        {
          name: "Vejetaryen",
          nameEn: "Vegetarian",
          description:
            "Mozzarella, mantar, kapya biber, mısır, zeytin, domates, soğan.",
          descEn:
            "Mozzarella, mushroom, red pepper, corn, olives, tomato, onion.",
          price: "₺750",
        },
        {
          name: "Mor Special",
          nameEn: "Mor Special",
          description: "Mozzarella, sucuk, salam, mantar, kapya biber, mısır, zeytin.",
          descEn: "Mozzarella, sujuk, salami, mushroom, red pepper, corn, olives.",
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
          nameEn: "Beef Fajita",
          description:
            "Dana bonfile dilimleri, kapya biber, yeşil biber, sarı biber, soğan, sarımsak.",
          descEn:
            "Beef tenderloin strips, red pepper, green pepper, yellow pepper, onion, garlic.",
          price: "₺1.100",
        },
        {
          name: "Dana Bonfile",
          lang: "tr",
          nameEn: "Beef Tenderloin",
          description:
            "Izgara sebze, beybi patates, mantarlı demiglas sos ile.",
          descEn:
            "With grilled vegetables, baby potatoes and mushroom demi-glace sauce.",
          price: "₺1.200",
        },
        {
          name: "Izgara Köfte",
          nameEn: "Grilled Meatballs",
          description: "Kasap köfte, ızgara domates, biber, patates.",
          descEn: "Butcher's meatballs, grilled tomato, pepper, fries.",
          price: "₺950",
        },
        { subheading: "Tavuk" },
        {
          name: "Mor Tavuk Izgara",
          nameEn: "Mor Grilled Chicken",
          description:
            "Marine tavuk göğsü, ızgara biber ve domates, baharatlı patates, tortilla lavaş.",
          descEn:
            "Marinated chicken breast, grilled peppers and tomato, spiced potatoes, tortilla flatbread.",
          price: "₺750",
        },
        {
          name: "Tavuk Şinitzel",
          lang: "tr",
          nameEn: "Chicken Schnitzel",
          description: "Pane tavuk göğsü, patates tava, coleslaw ile.",
          descEn: "Breaded chicken breast, with pan-fried potatoes and coleslaw.",
          price: "₺750",
        },
        {
          name: "Tavuk Izgara",
          nameEn: "Grilled Chicken",
          description:
            "Tavuk göğsü, patates, Akdeniz yeşillikleri, ızgara biber, domates, kekik, tortilla lavaş.",
          descEn:
            "Chicken breast, fries, Mediterranean greens, grilled pepper, tomato, thyme, tortilla flatbread.",
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
          nameEn: "Mor Cheeseburger",
          description:
            "Hamburger köftesi, cheddar dilimi, marul, domates, çubuk turşu, mor özel burger sos, patates ile.",
          descEn:
            "Beef patty, cheddar slice, lettuce, tomato, pickle, Mor special burger sauce, with fries.",
          price: "₺850",
        },
        {
          name: "Mor Tavuk Burger",
          nameEn: "Mor Chicken Burger",
          description:
            "Tavuk pane, iceberg marul, turşu, mor özel sos, cheddar dilimi, patates ile.",
          descEn:
            "Breaded chicken, iceberg lettuce, pickle, Mor special sauce, cheddar slice, with fries.",
          price: "₺800",
        },
        { subheading: "Wrapler" },
        {
          name: "Et Wrap",
          nameEn: "Beef Wrap",
          description:
            "Dana antrikot, mantar, soğan, jalapeño biber, kapya biber, cheddar dilimleri.",
          descEn:
            "Beef ribeye, mushroom, onion, jalapeño, red pepper, cheddar slices.",
          price: "₺850",
        },
        {
          name: "Tavuk Wrap",
          nameEn: "Chicken Wrap",
          description:
            "Tavuk bonfile, kapya biber, mantar, soya sos, cheddar sos.",
          descEn:
            "Chicken tenderloin, red pepper, mushroom, soy sauce, cheddar sauce.",
          price: "₺750",
        },
        { subheading: "Taco" },
        {
          name: "Et Taco",
          nameEn: "Beef Taco",
          description:
            "Mısır taco, ızgara dana antrikot, iceberg marul, mor soğan, kapya biber, cheddar sos, jalapeño. 3 adet servis edilir.",
          descEn:
            "Corn taco, grilled beef ribeye, iceberg lettuce, red onion, red pepper, cheddar sauce, jalapeño. Served as 3 pieces.",
          price: "₺850",
        },
        {
          name: "Tavuk Taco",
          nameEn: "Chicken Taco",
          description:
            "Mısır taco, ızgara tavuk bonfile, iceberg marul, mısır, kapya biber, cheddar sos, jalapeño. 3 adet servis edilir.",
          descEn:
            "Corn taco, grilled chicken tenderloin, iceberg lettuce, corn, red pepper, cheddar sauce, jalapeño. Served as 3 pieces.",
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
          nameEn: "Grilled Chicken Salad",
          description:
            "Izgara tavuk dilimleri, Akdeniz yeşillikleri, çeri domates, zeytinyağı, limon, nar ekşisi.",
          descEn:
            "Grilled chicken strips, Mediterranean greens, cherry tomato, olive oil, lemon, pomegranate molasses.",
          price: "₺700",
        },
        {
          name: "Çıtır Tavuk Salata",
          nameEn: "Crispy Chicken Salad",
          description:
            "Pane tavuk dilimleri, iceberg marul, rende havuç, parmesan peynir, zeytinyağı, limon.",
          descEn:
            "Breaded chicken strips, iceberg lettuce, grated carrot, parmesan cheese, olive oil, lemon.",
          price: "₺700",
        },
        {
          name: "Tavuklu Sezar Salata",
          nameEn: "Chicken Caesar Salad",
          description:
            "Izgara tavuk göğsü, iceberg marul, çeri domates, kruton ekmek, Sezar sos, parmesan peynir.",
          descEn:
            "Grilled chicken breast, iceberg lettuce, cherry tomato, croutons, Caesar dressing, parmesan cheese.",
          price: "₺700",
        },
        {
          name: "Ton Balıklı Salata",
          nameEn: "Tuna Salad",
          description:
            "Ton balığı, iceberg marul, mor soğan, tane mısır, çeri domates, zeytin, zeytinyağı, limon.",
          descEn:
            "Tuna, iceberg lettuce, red onion, corn, cherry tomato, olives, olive oil, lemon.",
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
          nameEn: "Brownie with Ice Cream",
          description: "Sıcak çikolatalı brownie, vanilyalı dondurma, çikolata sos.",
          descEn: "Warm chocolate brownie, vanilla ice cream, chocolate sauce.",
          price: "₺550",
        },
        {
          name: "Frambuazlı Cheesecake",
          nameEn: "Raspberry Cheesecake",
          description: "Frambuazlı cheesecake, kırmızı orman meyveleri sos.",
          descEn: "Raspberry cheesecake, mixed berry sauce.",
          price: "₺550",
        },
        {
          name: "Limonlu Cheesecake",
          lang: "tr",
          nameEn: "Lemon Cheesecake",
          description: "Limonlu cheesecake, taze limon sos.",
          descEn: "Lemon cheesecake, fresh lemon sauce.",
          price: "₺550",
        },
        {
          name: "Meyve Tabağı",
          nameEn: "Fruit Platter",
          description: "Mevsim meyveleri.",
          descEn: "Seasonal fruits.",
          price: "₺650",
        },
        {
          name: "Mor Special Meyve Tabağı",
          nameEn: "Mor Special Fruit Platter",
          description: "Tropikal ve mevsim meyveleri.",
          descEn: "Tropical and seasonal fruits.",
          price: "₺1.000",
        },
        { name: "Çerezler", lang: "tr", nameEn: "Nuts", price: "₺300" },
        { name: "Jelibon", lang: "tr", nameEn: "Jelly Candy", price: "₺200" },
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
        { name: "Pişmiş Şeftali", lang: "tr", nameEn: "Baked Peach", price: "₺1.000" },
        { name: "Turkish Mastic", price: "₺1.000" },
        { name: "Karpuz Çilek", lang: "tr", nameEn: "Watermelon Strawberry", price: "₺1.000" },
        { name: "Nane", nameEn: "Mint", price: "₺1.000" },
        { name: "İzmir Romantik", lang: "tr", nameEn: "İzmir Romantic", price: "₺1.000" },
        { name: "Moscow", price: "₺1.000" },
        { name: "Bakü", nameEn: "Baku", price: "₺1.000" },
        { name: "Yaban Mersini", lang: "tr", nameEn: "Blueberry", price: "₺1.000" },
        { name: "Üzüm Nane", nameEn: "Grape Mint", price: "₺1.000" },
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
        { name: "Fuse Tea Şeftali", lang: "tr", nameEn: "Fuse Tea Peach", price: "₺250" },
        { name: "Fuse Tea Limon", lang: "tr", nameEn: "Fuse Tea Lemon", price: "₺250" },
        { name: "Schweppes Tonic", price: "₺250" },
        { name: "Soda", nameEn: "Soda Water", price: "₺200" },
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
        { name: "Ayran", nameEn: "Yogurt Drink", price: "₺200" },
        { name: "Damla Su (250 ml)", nameEn: "Still Water (250 ml)", price: "₺100" },
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
        { name: "Küçük Çay", lang: "tr", nameEn: "Small Tea", price: "₺100" },
        { name: "Fincan Çay", lang: "tr", nameEn: "Cup of Tea", price: "₺150" },
        { name: "Türk Kahvesi Sade", lang: "tr", nameEn: "Turkish Coffee (Plain)", price: "₺250" },
      ],
    },

    {
      title: "Frozen & Milkshake",
      theme: "dark",
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Frozen" },
        { name: "Çilek", lang: "tr", nameEn: "Strawberry", price: "₺450" },
        { name: "Karadut", nameEn: "Black Mulberry", price: "₺450" },
        { name: "Köpük", nameEn: "Foam", price: "₺450" },
        { name: "Şeftali", lang: "tr", nameEn: "Peach", price: "₺450" },
        { subheading: "Milkshake" },
        { name: "Çikolata", lang: "tr", nameEn: "Chocolate", price: "₺450" },
        { name: "Çilek", lang: "tr", nameEn: "Strawberry", price: "₺450" },
        { name: "Karamel", nameEn: "Caramel", price: "₺450" },
        { name: "Vanilya", lang: "tr", nameEn: "Vanilla", price: "₺450" },
      ],
    },

    {
      title: "Şaraplar",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { subheading: "Kırmızı" },
        { name: "Consensus 3'lü Kupaj", nameEn: "Consensus 3-Blend", price: "₺4.000" },
        { name: "İdol", price: "₺3.500" },
        { name: "Kadeh", nameEn: "By the Glass", price: "₺750" },
        { subheading: "Beyaz" },
        { name: "Consensus Chardonnay", price: "₺4.500" },
        { name: "İdol", price: "₺3.000" },
        { name: "Kadeh", nameEn: "By the Glass", price: "₺750" },
        { subheading: "Blush" },
        { name: "İdol", price: "₺3.500" },
        { name: "Kadeh", nameEn: "By the Glass", price: "₺750" },
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
        { name: "Absolut Votka", nameEn: "Absolut Vodka", price: "₺1.250" },
        { name: "Chivas Regal 12 Years Whisky", price: "₺1.250" },
        { name: "Chivas Regal 12 Years Whisky Double", price: "₺1.700" },
        { name: "Chivas Regal 18 Years Whisky", price: "₺1.500" },
        { name: "Chivas Regal 18 Years Whisky Double", price: "₺2.000" },
        { name: "Jameson Whiskey", price: "₺1.250" },
        { name: "Beefeater Gin", price: "₺1.250" },
        { name: "Mezcal Kadeh", nameEn: "Mezcal (Glass)", price: "₺1.250" },
        { name: "Rom Kadeh", nameEn: "Rum (Glass)", price: "₺1.250" },
        { name: "Sakız Likörü Kadeh", nameEn: "Mastic Liqueur (Glass)", price: "₺1.250" },
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
          descEn: "Vodka, espresso, Kahlua.",
          price: "₺1.200",
        },
        {
          name: "Margarita",
          description: "Tekila, portakal likörü, limon suyu.",
          descEn: "Tequila, orange liqueur, lemon juice.",
          price: "₺1.200",
        },
        {
          name: "Long Island",
          description: "Rom, cin, vodka, portakal likörü, tekila, cola.",
          descEn: "Rum, gin, vodka, orange liqueur, tequila, cola.",
          price: "₺1.200",
        },
        {
          name: "Mojito",
          description: "Rom, şeker şurubu, limon suyu, soda.",
          descEn: "Rum, sugar syrup, lemon juice, soda.",
          price: "₺1.200",
        },
        {
          name: "Lynchburg Lemonade",
          description: "Viski, limon suyu, portakal likörü, Sprite.",
          descEn: "Whiskey, lemon juice, orange liqueur, Sprite.",
          price: "₺1.200",
        },
        {
          name: "Negroni",
          description: "Cin, Campari, bitter.",
          descEn: "Gin, Campari, bitter.",
          price: "₺1.200",
        },
        {
          name: "Manhattan",
          description: "Bitter, viski, Cinzano bitter.",
          descEn: "Bitter, whiskey, Cinzano bitter.",
          price: "₺1.200",
        },
        {
          name: "Pornstar Martini",
          description: "Vanilya vodka, passion, limon suyu.",
          descEn: "Vanilla vodka, passion, lemon juice.",
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
          lang: "tr",
          nameEn: "Sorrel",
          description: "Cin, portakal likörü, citrus, kuzu kulağı sos.",
          descEn: "Gin, orange liqueur, citrus, sorrel sauce.",
          price: "₺1.250",
        },
        {
          name: "Satsuma",
          nameEn: "Satsuma",
          description: "Cin, Sakız Likörü, citrus, satsuma.",
          descEn: "Gin, mastic liqueur, citrus, satsuma.",
          price: "₺1.250",
        },
        {
          name: "Çilek Kordiyal",
          lang: "tr",
          nameEn: "Strawberry Cordial",
          description: "Vodka, portakal likörü, çilek kordiyal.",
          descEn: "Vodka, orange liqueur, strawberry cordial.",
          price: "₺1.250",
        },
        {
          name: "Nar Portakal",
          nameEn: "Pomegranate Orange",
          description: "Mezcal, portakal likörü, nar-portakal cordial.",
          descEn: "Mezcal, orange liqueur, pomegranate-orange cordial.",
          price: "₺1.250",
        },
        {
          name: "Ivory",
          nameEn: "Ivory",
          description: "Vanilya vodka, Hindistan Cevizi Likörü, süt, krema.",
          descEn: "Vanilla vodka, coconut liqueur, milk, cream.",
          price: "₺1.250",
        },
        {
          name: "Dusty",
          nameEn: "Dusty",
          description: "Rom, Passoa likörü, çilek, passion cordial.",
          descEn: "Rum, Passoã liqueur, strawberry, passion cordial.",
          price: "₺1.250",
        },
        {
          name: "Green",
          nameEn: "Green",
          description: "Cin, maraschino, yeşil elma, fesleğen cordial.",
          descEn: "Gin, maraschino, green apple, basil cordial.",
          price: "₺1.250",
        },
        { subheading: "Aperitifler" },
        { name: "Aperol Spritz", price: "₺1.000" },
        { name: "Campari Spritz", price: "₺1.000" },
      ],
    },

    {
      title: "Şişe Alkoller",
      theme: "dark",
      compact: true,
      note: "FOOD · DRINK · COCKTAIL · HOOKAH",
      items: [
        { name: "Belvedere Votka", nameEn: "Belvedere Vodka", price: "₺17.000" },
        { name: "Absolut Votka", nameEn: "Absolut Vodka", price: "₺13.000" },
        { name: "Chivas Regal 18 Years Whisky", price: "₺17.000" },
        { name: "Chivas Regal 12 Years Whisky", price: "₺13.000" },
        { name: "Jameson Black Barrel", price: "₺13.500" },
        { name: "Jameson", price: "₺13.000" },
        { name: "Malfy Gin", price: "₺15.000" },
        { name: "Beefeater Gin", price: "₺13.000" },
        { name: "Tequila Olmeca", price: "₺13.000" },
        { name: "35'lik Chivas Regal 12 Years Whisky", nameEn: "Chivas Regal 12 Years Whisky (35 cl)", price: "₺8.500" },
        { name: "50'lik Chivas Regal 12 Years Whisky", nameEn: "Chivas Regal 12 Years Whisky (50 cl)", price: "₺11.000" },
        { name: "35'lik Absolut Votka", nameEn: "Absolut Vodka (35 cl)", price: "₺8.500" },
        { name: "35'lik Beefeater Gin", nameEn: "Beefeater Gin (35 cl)", price: "₺8.500" },
        { name: "35'lik Tequila Olmeca", nameEn: "Tequila Olmeca (35 cl)", price: "₺8.500" },
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
        { name: "Stella 44 cl", price: "₺650" },
        { name: "Küba Birası", lang: "tr", nameEn: "Cuban Beer", price: "₺750" },
        {
          name: "Bira Kovası",
          lang: "tr",
          nameEn: "Beer Bucket",
          description: "6 Adet Efes",
          descEn: "6 Efes beers.",
          price: "₺2.850",
        },
        {
          name: "İthal Bira Kovası",
          lang: "tr",
          nameEn: "Imported Beer Bucket",
          description: "Becks, Miller, Corona & Stella arasından seçeceğiniz 6 adet ithal bira",
          descEn: "6 imported beers of your choice from Becks, Miller, Corona & Stella.",
          price: "₺3.300",
        },
      ],
    },
  ],
};
