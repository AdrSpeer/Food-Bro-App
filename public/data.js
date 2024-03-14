const foodTable = [
  {
    id: 0,
    name: "Big Beef Burger",
    shortdesc: "A juicy beef burger with all the fixings",
    longdesc: "bla bla bla bla bla bla",
    category: "Burger",
    price: 8.99,
    image: "./img/1.png ",
    rating: "4.1",
  },

  {
    id: 1,
    name: "Double Beef Burger",
    shortdesc: "Double the beef, double the flavor in this burger",
    longdesc: "bla bla bla bla bla bla",
    category: "Burger",
    price: 9.99,
    image: "./img/2.png",
    rating: "4.4",
  },
  {
    id: 2,
    name: "Tripple Beef Burger",
    shortdesc: "For the ultimate beef lover - a triple beef patty burger",
    longdesc: "bla bla bla bla bla bla",
    category: "Burger",
    price: 10.99,
    image: "./img/3.png",
    rating: "3.8",
  },
  {
    id: 3,
    name: "Chicken Baguette",
    shortdesc: "A delicious baguette filled with seasoned chicken",
    longdesc: "",
    category: "Baguette",
    price: 5.99,
    image: "./img/4.png",
    rating: "2.9",
  },
  {
    id: 4,
    name: "Chicken Burger",
    shortdesc: "Crispy chicken patty served on a bun with fresh toppings",
    longdesc: "bla bla bla bla bla bla",
    category: "Burger",
    price: 5.49,
    image: "./img/5.png",
    rating: "5.0",
  },
  {
    id: 5,
    name: "Pizza Salami",
    shortdesc: "Classic pizza topped with savory salami slices",
    longdesc: "bla bla bla bla bla bla",
    category: "Pizza",
    price: 6.99,
    image: "./img/6.png",
    rating: "1.4",
  },
  {
    id: 6,
    name: "Pizza Speciale",
    shortdesc: "Delicious pizza with a special blend of toppings",
    longdesc: "bla bla bla bla bla bla",
    category: "Pizza",
    price: 7.99,
    image: "./img/7.png",
    rating: "2.6",
  },
  {
    id: 7,
    name: "Crispy Chicken Wrap",
    shortdesc: "Crispy chicken wrapped in a soft tortilla with fresh veggies",
    longdesc: "bla bla bla bla bla bla",
    category: "Wrap",
    price: 6.99,
    image: "./img/8.png",
    rating: "4.9",
  },
  {
    id: 8,
    name: "Wrap Speciale",
    shortdesc: "Special wrap filled with flavorful ingredients and sauces",
    longdesc: "bla bla bla bla bla bla",
    category: "Wrap",
    price: 4.99,
    image: "./img/9.png",
    rating: "4.7",
  },
  {
    id: 9,
    name: "Cheesy Hotdog",
    shortdesc: "Hotdog topped with melted cheese and your favorite condiments",
    longdesc: "bla bla bla bla bla bla",
    category: "Hotdog",
    price: 3.99,
    image: "./img/10.png",
    rating: "3.9",
  },
  {
    id: 10,
    name: "Meat Taco",
    shortdesc: "Savory taco filled with seasoned meat and fresh toppings",
    longdesc: "bla bla bla bla bla bla",
    category: "Taco",
    price: 5.99,
    image: "./img/11.png",
    rating: "4.1",
  },
  {
    id: 11,
    name: "Taco Speciale",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Taco",
    price: 4.5,
    image: "./img/12.png",
    rating: "2.4",
  },
  {
    id: 12,
    name: "Onion Rings",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 3.3,
    image: "./img/13.png",
    rating: "4.6",
  },
  {
    id: 13,
    name: "Chicken Wings",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 6.39,
    image: "./img/14.png",
    rating: "3.6",
  },
  {
    id: 14,
    name: "Bacon-Egg Baguette",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Baguette",
    price: 4.99,
    image: "./img/15.png",
    rating: "3.5",
  },
  {
    id: 15,
    name: "Cripsy Chicken Bites",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 8.49,
    image: "./img/16.png",
    rating: "5.0",
  },
  {
    id: 16,
    name: "Tortilla Party",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 5.99,
    image: "./img/17.png",
    rating: "4.0",
  },
  {
    id: 17,
    name: "Strawberry Cream Shake",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Drinks",
    price: 2.69,
    image: "./img/18.png",
    rating: "3.0",
  },
  {
    id: 18,
    name: "Potato Salad Deluxe",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Others",
    price: 4.29,
    image: "./img/19.png",
    rating: "3.8",
  },
  {
    id: 19,
    name: "Chilli Concarne",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Others",
    price: 4.79,
    image: "./img/20.png",
    rating: "4.8",
  },
  {
    id: 20,
    name: "Strawberry Ice Cream",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Sweets",
    price: 1.79,
    image: "./img/21.png",
    rating: "2.9",
  },
  {
    id: 21,
    name: "Potion of Fries",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 2.49,
    image: "./img/22.png",
    rating: "3.2",
  },
  {
    id: 22,
    name: "Extra Salted Fries",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 3.99,
    image: "./img/23.png",
    rating: "4.5",
  },
  {
    id: 23,
    name: "Chicken Nuggets",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 4.99,
    image: "./img/24.png",
    rating: "4.9",
  },
  {
    id: 24,
    name: "Crispy Chicken Filets",
    shortdesc: "lorem ipsum",
    longdesc: "bla bla bla bla bla bla",
    category: "Fingerfood",
    price: 7.99,
    image: "./img/25.png",
    rating: "4.1",
  },
  {
    id: 25,
    name: "Healthy Bagle",
    shortdesc: "Ein leckerer Bagel mit gesunden Zutaten wie frischem Gemüse und magerem Aufschnitt.",
    longdesc: "Der Healthy Bagel ist die perfekte Wahl für einen gesunden Snack oder ein leichtes Mittagessen. Er besteht aus einem knusprigen Bagel, der mit frischem Gemüse wie Tomaten, Gurken und Salat belegt ist. Dazu kommt magerer Aufschnitt wie Putenbrust oder Schinken. Genießen Sie diesen köstlichen Bagel, der reich an Geschmack und Nährstoffen ist!",
    category: "Others",
    price: 3.49,
    image: "./img/26.png",
    rating: "4.2"
  },
  {
    id: 26,
    name: "Baked Potatoes",
    shortdesc: "Herrlich knusprige Ofenkartoffeln mit einer Vielzahl von herzhaften Belägen.",
    longdesc: "Genießen Sie unsere köstlichen Baked Potatoes, die im Ofen gebacken werden, bis sie außen knusprig und innen zart sind. Sie werden mit einer Vielzahl von herzhaften Belägen wie saurer Sahne, geriebenem Käse, Frühlingszwiebeln und knusprigem Speck serviert. Diese Baked Potatoes sind perfekt als Beilage oder als leichte Mahlzeit für unterwegs.",
    category: "Others",
    price: 4.99,
    image: "./img/27.png",
    rating: "4.8"
  },
  {
    id: 27,
    name: "Bacon Wrap",
    shortdesc: "Ein herzhafter Wrap gefüllt mit knusprigem Speck, frischem Gemüse und würziger Sauce.",
    longdesc: "Unser Bacon Wrap ist ein echter Genuss für Liebhaber von herzhaften Aromen. Er enthält knusprig gebratenen Speck, der mit frischem Gemüse wie Salat, Tomaten und Gurken umwickelt ist. Dazu kommt eine würzige Sauce, die dem Wrap eine zusätzliche Geschmackskomponente verleiht. Perfekt für ein schnelles Mittagessen oder einen herzhaften Snack zwischendurch!",
    category: "Wrap",
    price: 5.49,
    image: "./img/28.png",
    rating: "4.7"
  },
  {
    id: 28,
    name: "Onion Beef Burger",
    shortdesc: "Ein saftiger Burger mit gegrilltem Rindfleisch, knusprigen Zwiebelringen und würziger Sauce.",
    longdesc: "Unser Onion Beef Burger ist ein Klassiker unter den Burger-Liebhabern. Er besteht aus saftig gegrilltem Rindfleisch, das mit knusprigen Zwiebelringen und einer würzigen Sauce belegt ist. Serviert auf einem warmen Brötchen, ist dieser Burger ein echter Genuss für alle, die herzhafte Aromen lieben.",
    category: "Burger",
    price: 6.99,
    image: "./img/29.png",
    rating: "4.3"
  },
  {
    id: 29,
    name: "Extra Cheesy Wrap",
    shortdesc: "Ein köstlicher Wrap gefüllt mit extra viel geschmolzenem Käse und frischem Gemüse.",
    longdesc: "Der Extra Cheesy Wrap ist perfekt für alle Käseliebhaber! Er ist gefüllt mit einer großzügigen Portion geschmolzenem Käse, der sich herrlich mit frischem Gemüse wie Paprika, Tomaten und Salat verbindet. Jeder Bissen ist ein Genuss voller cremiger und würziger Aromen.",
    category: "Wrap",
    price: 5.99,
    image: "./img/30.png",
    rating: "4.6"
  },
  {
    id: 30,
    name: "Salad Bowl",
    shortdesc: "Eine bunte Schüssel voller frischer und knackiger Salate mit einem köstlichen Dressing.",
    longdesc: "Unsere Salad Bowl ist eine gesunde und köstliche Mahlzeitoption für unterwegs. Sie besteht aus einer Vielzahl von frischen und knackigen Salaten wie Rucola, Feldsalat und Spinat, die mit köstlichen Toppings wie Cherrytomaten, Gurken und Avocado ergänzt werden. Dazu servieren wir ein leckeres Dressing, das den Geschmack der Salate perfekt abrundet.",
    category: "Salad",
    price: 7.49,
    image: "./img/31.png",
    rating: "4.5"
  },
  {
    id: 31,
    name: "Creamy Salad",
    shortdesc: "Ein cremiger Salat mit frischem Gemüse und einer reichhaltigen Dressing.",
    longdesc: "Unser Creamy Salad ist ein wahrer Genuss für alle, die cremige Aromen lieben. Er besteht aus einer Mischung von frischem Gemüse wie Eisbergsalat, Gurken und Karotten, die mit einer reichhaltigen und cremigen Dressing bedeckt sind. Dieser Salat ist eine köstliche Beilage oder eine leichte Mahlzeit für jeden Tag.",
    category: "Salad",
    price: 6.99,
    image: "./img/32.png",
    rating: "4.4"
  },
  {
    id: 32,
    name: "Crispy Chicken Salad",
    shortdesc: "Ein knackiger Salat mit knusprig gebratenem Hähnchenfleisch und frischem Gemüse.",
    longdesc: "Unser Crispy Chicken Salad ist eine köstliche Kombination aus knackigem Gemüse und zartem Hähnchenfleisch. Er besteht aus frischem Eisbergsalat, Gurken, Cherrytomaten und knusprig gebratenem Hähnchenfleisch, das mit einem leckeren Dressing verfeinert ist. Diese Mahlzeit ist nicht nur gesund, sondern auch unglaublich lecker!",
    category: "Salad",
    price: 8.49,
    image: "./img/33.png",
    rating: "4.7"
  },
  {
    id: 33,
    name: "Chicken Filet Salad",
    shortdesc: "Ein köstlicher Salat mit saftig gegrilltem Hähnchenfilet und frischem Gemüse.",
    longdesc: "Unser Chicken Filet Salad ist eine köstliche Mahlzeitoption für alle, die saftiges Hähnchenfleisch lieben. Er besteht aus saftig gegrilltem Hähnchenfilet, das auf einem Bett aus frischem Gemüse wie Blattsalat, Gurken und Paprika serviert wird. Dazu kommt ein leckeres Dressing, das den Geschmack des Salats perfekt abrundet.",
    category: "Salad",
    price: 7.99,
    image: "./img/34.png",
    rating: "4.6"
  },
  {
    id: 34,
    name: "Salami Supreme Pizza",
    shortdesc: "Eine köstliche Pizza mit würziger Salami, frischem Gemüse und aromatischem Käse.",
    longdesc: "Unsere Salami Supreme Pizza ist ein echter Klassiker unter den Pizzaliebhabern. Sie ist mit würziger Salami, frischem Gemüse wie Paprika und Zwiebeln sowie aromatischem Käse belegt. Der knusprige Teig und die perfekte Kombination von Zutaten machen diese Pizza zu einem wahren Geschmackserlebnis.",
    category: "Pizza",
    price: 11.99,
    image: "./img/35.png",
    rating: "4.8"
  },
  {
    id: 35,
    name: "Monster Sandwich",
    shortdesc: "Ein riesiges Sandwich mit einer Vielzahl von köstlichen Belägen.",
    longdesc: "Unser Monster Sandwich ist perfekt für alle, die großen Hunger haben! Es ist randvoll gefüllt mit einer Vielzahl von köstlichen Belägen wie Schinken, Salami, Käse, Salat, Tomaten und Gurken. Serviert auf frisch gebackenem Brot, ist dieses Sandwich ein echtes Geschmackserlebnis, das Sie lange satt macht.",
    category: "Wrap",
    price: 9.99,
    image: "./img/36.png",
    rating: "4.6"
  },
  {
    id: 36,
    name: "Fried Chicken Special",
    shortdesc: "Eine knusprige und saftige Portion frittierten Hähnchens mit Beilagen nach Wahl.",
    longdesc: "Unser Fried Chicken Special ist eine köstliche Mahlzeitoption für alle Liebhaber von knusprigem Hähnchen. Es besteht aus saftigen und knusprig panierten Hähnchenstücken, die perfekt frittiert wurden. Serviert mit Beilagen wie Pommes frites, Cole Slaw und BBQ-Sauce, ist dieses Gericht ein wahrer Genuss für alle Sinne.",
    category: "Fingerfood",
    price: 8.99,
    image: "./img/37.png",
    rating: "4.7"
  },
  {
    id: 37,
    name: "Chicken Wings Normal",
    shortdesc: "Knusprige Hähnchenflügel mit einer würzigen Marinade, perfekt zum Dippen.",
    longdesc: "Unsere Chicken Wings Normal sind ein echter Klassiker und ein beliebter Snack für jede Gelegenheit. Sie sind knusprig gebraten und mit einer würzigen Marinade glasiert, die ihnen einen unverwechselbaren Geschmack verleiht. Serviert mit verschiedenen Dipsaucen sind sie der perfekte Snack für Partys, Spieleabende oder einfach nur zwischendurch.",
    category: "Fingerfood",
    price: 7.49,
    image: "./img/38.png",
    rating: "4.4"
  },
  {
    id: 38,
    name: "Chicken Hot Wings",
    shortdesc: "Knusprige Hähnchenflügel mit einer scharfen und würzigen Glasur.",
    longdesc: "Unsere Chicken Hot Wings sind perfekt für alle, die es gerne etwas schärfer mögen. Sie sind knusprig gebraten und mit einer scharfen und würzigen Glasur überzogen, die ihnen eine angenehme Schärfe verleiht. Serviert mit einem erfrischenden Dip sind sie der ideale Snack für alle, die es gerne würzig mögen.",
    category: "Fingerfood",
    price: 7.99,
    image: "./img/39.png",
    rating: "4.5"
  },
  {
    id: 39,
    name: "Cinnamon Roll",
    shortdesc: "Ein köstliches Gebäck mit Zimt und Zucker, perfekt für den süßen Genuss zwischendurch.",
    longdesc: "Unsere Cinnamon Rolls sind ein wahrer Genuss für alle Liebhaber von süßen Leckereien. Sie sind mit einer großzügigen Menge von Zimt und Zucker gefüllt und werden mit einem köstlichen Glasur überzogen. Jeder Bissen ist ein Genuss voller aromatischer Gewürze und süßer Aromen.",
    category: "Sweets",
    price: 2.99,
    image: "./img/40.png",
    rating: "4.8"
  },
  {
    id: 40,
    name: "Nutella Crepe",
    shortdesc: "Ein dünn gebackener Crepe gefüllt mit Nutella und frischen Früchten.",
    longdesc: "Unser Nutella Crepe ist ein köstlicher Genuss für alle Liebhaber von süßen Leckereien. Er besteht aus einem dünn gebackenen Crepe, der mit einer großzügigen Portion Nutella gefüllt ist und mit frischen Früchten wie Erdbeeren und Bananen garniert wird. Jeder Bissen ist eine wahre Geschmacksexplosion voller süßer und fruchtiger Aromen.",
    category: "Sweets",
    price: 4.49,
    image: "./img/41.png",
    rating: "4.7"
  },
  {
    id: 41,
    name: "Rainbow Donut",
    shortdesc: "Ein bunter Donut mit glasierter Oberfläche und Streuseln.",
    longdesc: "Unsere Rainbow Donuts sind nicht nur ein Augenschmaus, sondern auch ein Geschmackserlebnis! Sie sind mit einer glasierten Oberfläche und bunten Streuseln verziert, die ihnen ein fröhliches und verspieltes Aussehen verleihen. Jeder Bissen ist ein Genuss voller süßer Aromen und knuspriger Textur.",
    category: "Sweets",
    price: 1.99,
    image: "./img/42.png",
    rating: "4.6"
  },
  {
    id: 42,
    name: "Bacon-Egg Sandwich",
    shortdesc: "Ein herzhaftes Sandwich mit knusprigem Speck, saftigem Spiegelei und würziger Sauce.",
    longdesc: "Unser Bacon-Egg Sandwich ist der perfekte Start in den Tag! Es ist gefüllt mit knusprig gebratenem Speck, einem saftigen Spiegelei und einer würzigen Sauce, die dem Sandwich eine zusätzliche Geschmackskomponente verleiht. Serviert auf einem warmen Brötchen, ist dieses Sandwich ein echter Genuss für alle, die herzhafte Aromen lieben.",
    category: "Baguette",
    price: 5.99,
    image: "./img/43.png",
    rating: "4.5"
  },
  {
    id: 43,
    name: "Fish Burger",
    shortdesc: "Ein köstlicher Burger mit knusprig gebratenem Fischfilet, frischem Gemüse und würziger Sauce.",
    longdesc: "Unser Fish Burger ist eine köstliche Alternative zu klassischen Burgern. Er besteht aus knusprig gebratenem Fischfilet, das mit frischem Gemüse wie Salat, Tomaten und Gurken belegt ist. Dazu kommt eine würzige Sauce, die dem Burger eine zusätzliche Geschmackskomponente verleiht. Serviert auf einem warmen Brötchen, ist dieser Burger ein echter Genuss für alle Fischliebhaber.",
    category: "Burger",
    price: 6.99,
    image: "./img/44.png",
    rating: "4.3"
  },
  {
    id: 44,
    name: "Double Fried Chicken Bites",
    shortdesc: "Knusprige und saftige Hähnchenbissen, doppelt frittiert für extra Crunch.",
    longdesc: "Unsere Double Fried Chicken Bites sind ein wahrer Genuss für alle Liebhaber von knusprigem Hähnchen. Sie sind doppelt frittiert, um eine extra knusprige Textur zu erreichen, und sind innen herrlich saftig und zart. Perfekt als Snack oder Beilage zu anderen Gerichten.",
    category: "Sweets",
    price: 6.49,
    image: "./img/45.png",
    rating: "4.4"
  },
  {
    id: 45,
    name: "Hotdog Deluxe",
    shortdesc: "Ein klassischer Hotdog mit einer Vielzahl von köstlichen Belägen.",
    longdesc: "Unser Hotdog Deluxe ist ein echter Klassiker und ein beliebter Snack für jede Gelegenheit. Er ist mit einer Vielzahl von köstlichen Belägen wie Ketchup, Senf, sauren Gurken und gerösteten Zwiebeln belegt. Serviert in einem warmen Brötchen, ist dieser Hotdog ein wahrer Genuss für alle Sinne.",
    category: "Hotdog",
    price: 4.99,
    image: "./img/46.png",
    rating: "4.2"
  },
  {
    id: 46,
    name: "Onion Hotdog",
    shortdesc: "Ein klassischer Hotdog mit knusprigen Zwiebeln und würziger Sauce.",
    longdesc: "Unser Onion Hotdog ist perfekt für alle, die es gerne etwas würziger mögen. Er ist mit knusprig gebratenen Zwiebeln und einer würzigen Sauce belegt, die ihm eine angenehme Schärfe verleiht. Serviert in einem warmen Brötchen, ist dieser Hotdog ein wahrer Genuss für alle, die herzhafte Aromen lieben.",
    category: "Hotdog",
    price: 4.99,
    image: "./img/47.png",
    rating: "4.3"
  },
  {
    id: 47,
    name: "Rainbow Ice Cream",
    shortdesc: "Eine bunte Kugel Eis in verschiedenen Geschmacksrichtungen, perfekt für heiße Tage.",
    longdesc: "Unsere Rainbow Ice Cream ist ein wahrer Genuss für alle Eisliebhaber. Sie besteht aus einer bunt gemischten Kugel Eis in verschiedenen Geschmacksrichtungen wie Vanille, Schokolade, Erdbeere und Pistazie. Serviert in einer Waffel oder einem Becher, ist dieses Eis eine erfrischende Leckerei für heiße Tage.",
    category: "Sweets",
    price: 3.99,
    image: "./img/48.png",
    rating: "4.7"
  },
  {
    id: 48,
    name: "Barbeque Beef Burger",
    shortdesc: "Ein herzhafter Burger mit saftigem Rindfleisch und würziger Barbecue-Sauce.",
    longdesc: "Unser Barbeque Beef Burger ist ein wahrer Genuss für alle Liebhaber von herzhaften Aromen. Er besteht aus saftig gegrilltem Rindfleisch, das mit würziger Barbecue-Sauce und knusprigen Zwiebelringen belegt ist. Serviert auf einem warmen Brötchen, ist dieser Burger ein echter Gaumenschmaus.",
    category: "Burger",
    price: 7.99,
    image: "./img/49.png",
    rating: "4.6"
  },
  {
    id: 49,
    name: "Pancakes",
    shortdesc: "Fluffige Pancakes mit Ahornsirup und frischen Früchten.",
    longdesc: "Unsere Pancakes sind ein wahrer Genuss für alle Liebhaber von süßen Frühstücksspezialitäten. Sie sind herrlich fluffig und werden mit großzügigem Ahornsirup übergossen, der ihnen eine angenehme Süße verleiht. Serviert mit frischen Früchten wie Erdbeeren, Bananen und Blaubeeren sind sie die perfekte Wahl für einen köstlichen Start in den Tag.",
    category: "Sweets",
    price: 6.49,
    image: "./img/50.png",
    rating: "4.8"
  },
  {
    id: 50,
    name: "Healty Chicken Wrap",
    shortdesc: "Ein köstlicher Wrap gefüllt mit saftigem Hähnchenfleisch und frischem Gemüse.",
    longdesc: "Unser Healty Chicken Wrap ist perfekt für alle, die es gerne gesund und lecker mögen. Er ist gefüllt mit saftig gegrilltem Hähnchenfleisch, frischem Gemüse wie Salat, Tomaten und Gurken sowie einer leichten Joghurtsauce. Jeder Bissen ist ein Genuss voller frischer Aromen und köstlicher Geschmacksrichtungen.",
    category: "Wrap",
    price: 5.99,
    image: "./img/51.png",
    rating: "4.5"
  },
  {
    id: 51,
    name: "Chicken Tender",
    shortdesc: "Knusprig panierte Hähnchenstreifen, perfekt zum Dippen in verschiedene Saucen.",
    longdesc: "Unsere Chicken Tender sind ein beliebter Snack für alle, die knusprige und saftige Hähnchenstreifen lieben. Sie sind perfekt paniert und knusprig frittiert, um eine herrlich knusprige Textur zu erreichen. Serviert mit verschiedenen Saucen wie BBQ, Honigsenf oder Ranch, sind sie der ideale Snack für Partys, Spieleabende oder einfach nur zwischendurch.",
    category: "Fingerfood",
    price: 5.99,
    image: "./img/52.png",
    rating: "4.7"
  },
  {
    id: 52,
    name: "XXL Meat Sandwich",
    shortdesc: "Ein riesiges Sandwich mit einer Fülle von herzhaften Fleischsorten und köstlichen Belägen.",
    longdesc: "Unser XXL Meat Sandwich ist perfekt für alle, die großen Hunger haben! Es ist randvoll gefüllt mit einer Vielzahl von herzhaften Fleischsorten wie Roastbeef, Putenbrust, Schinken und Salami, die mit köstlichen Belägen wie Käse, Salat, Tomaten und Gurken kombiniert werden. Serviert auf frisch gebackenem Brot, ist dieses Sandwich ein echter Gaumenschmaus, der Sie lange satt macht.",
    category: "Baguette",
    price: 10.99,
    image: "./img/53.png",
    rating: "4.6"
  },
  {
    id: 53,
    name: "Veggie Pizza",
    shortdesc: "Eine köstliche Pizza mit einer Vielzahl von frischen Gemüsesorten und aromatischem Käse.",
    longdesc: "Unsere Veggie Pizza ist eine gesunde und köstliche Alternative zu klassischen Pizzasorten. Sie ist mit einer Vielzahl von frischen Gemüsesorten wie Paprika, Zwiebeln, Pilzen und Oliven belegt, die mit aromatischem Käse überbacken werden. Der knusprige Teig und die perfekte Kombination von Zutaten machen diese Pizza zu einem wahren Geschmackserlebnis.",
    category: "Pizza",
    price: 10.49,
    image: "./img/54.png",
    rating: "4.5"
  },
  {
    id: 54,
    name: "Fruity Shake",
    shortdesc: "Ein erfrischender Shake aus frischen Früchten und cremigem Joghurt.",
    longdesc: "Unser Fruity Shake ist der perfekte Durstlöscher für heiße Tage! Er besteht aus einer Mischung von frischen Früchten wie Erdbeeren, Bananen und Ananas, die mit cremigem Joghurt vermischt werden. Serviert in einem großen Glas, ist dieser Shake nicht nur erfrischend, sondern auch unglaublich lecker!",
    category: "Drinks",
    price: 4.49,
    image: "./img/55.png",
    rating: "4.6"
  },
  {
    id: 55,
    name: "Berry Shake",
    shortdesc: "Ein köstlicher Shake aus gemischten Beeren und cremigem Joghurt.",
    longdesc: "Unser Berry Shake ist eine köstliche Kombination aus verschiedenen Beeren wie Erdbeeren, Himbeeren und Blaubeeren, die mit cremigem Joghurt vermischt werden. Der Shake ist nicht nur erfrischend, sondern auch reich an Antioxidantien und Vitaminen. Perfekt als gesunde und leckere Zwischenmahlzeit!",
    category: "Drinks",
    price: 4.99,
    image: "./img/56.png",
    rating: "4.7"
  },
  {
    id: 56,
    name: "Cola",
    shortdesc: "Ein erfrischendes Softgetränk mit dem klassischen Geschmack von Cola.",
    longdesc: "Unsere Cola ist ein erfrischendes Softgetränk, das perfekt zu jeder Mahlzeit passt. Sie hat den klassischen Geschmack von Cola, der sowohl erfrischend als auch belebend ist. Serviert in einer eiskalten Flasche oder einem Glas, ist unsere Cola der ideale Durstlöscher für alle Gelegenheiten.",
    category: "Drinks",
    price: 1.49,
    image: "./img/57.png",
    rating: "4.3"
  },
  {
    id: 57,
    name: "Fruity Lemonade",
    shortdesc: "Eine erfrischende Limonade mit fruchtigem Geschmack und einem Hauch von Zitrone.",
    longdesc: "Unsere Fruity Lemonade ist ein erfrischendes Getränk mit fruchtigem Geschmack und einem Hauch von Zitrone. Sie ist perfekt für heiße Tage und bietet eine köstliche Erfrischung für Körper und Geist. Serviert in einem eiskalten Glas mit Eiswürfeln, ist unsere Fruity Lemonade ein wahrer Genuss für alle Sinne.",
    category: "Drinks",
    price: 2.49,
    image: "./img/58.png",
    rating: "4.5"
  },
  {
    id: 58,
    name: "Deluxe Taco",
    shortdesc: "Ein köstlicher Taco gefüllt mit würzigem Hackfleisch, frischem Gemüse und cremiger Guacamole.",
    longdesc: "Unser Deluxe Taco ist ein wahrer Genuss für alle Liebhaber von mexikanischem Essen. Er ist gefüllt mit würzigem Hackfleisch, frischem Gemüse wie Tomaten und Salat und cremiger Guacamole. Serviert in einer knusprigen Tortilla, ist dieser Taco ein echter Gaumenschmaus.",
    category: "Taco",
    price: 3.99,
    image: "./img/59.png",
    rating: "4.6"
  },
  {
    id: 59,
    name: "Tomato Burger Special",
    shortdesc: "Ein herzhafter Burger mit saftigem Rindfleisch, frischen Tomaten und würziger Sauce.",
    longdesc: "Unser Tomato Burger Special ist perfekt für alle, die herzhafte Aromen und frische Zutaten lieben. Er besteht aus saftig gegrilltem Rindfleisch, frischen Tomatenscheiben und einer würzigen Sauce, die dem Burger eine angenehme Schärfe verleiht. Serviert auf einem warmen Brötchen, ist dieser Burger ein echter Genuss für alle Geschmacksrichtungen.",
    category: "Burger",
    price: 7.49,
    image: "./img/60.png",
    rating: "4.4"
  }
];

export default foodTable;
