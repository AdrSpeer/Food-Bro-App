const foodTable = [
    {
        name: "Big Beef Burger",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Burger",
        price: 8.99,
        image: "./img/1.png",
        rating: "4.1"
    },
    {
        name: "Double Beef Burger",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Burger",
        price: 9.99,
        image: "./img/2.png",
        rating: "4.4"
    },
    {
        name: "Tripple Beef Burger",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Burger",
        price: 10.99,
        image: "./img/3.png",
        rating: "3.8"
    },
    {
        name: "Chicken Baguette",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Baguette",
        price: 5.99,
        image: "./img/4.png",
        rating: "2.9"
    },
    {
        name: "Chicken Burger",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Burger",
        price: 5.49,
        image: "./img/5.png",
        rating: "5.0"
    },
    {
        name: "Pizza Salami",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Pizza",
        price: 6.99,
        image: "./img/6.png",
        rating: "1.4"
    },
    {
        name: "Pizza Speciale",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Pizza",
        price: 7.99,
        image: "./img/7.png",
        rating: "2.6"
    },
    {
        name: "Crispy Chicken Wrap",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Wrap",
        price: 6.99,
        image: "./img/8.png",
        rating: "4.9"
    },
    {
        name: "Wrap Speciale",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Wrap",
        price: 4.99,
        image: "./img/9.png",
        rating: "4.7"
    },
    {
        name: "Cheesy Hotdog",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Hotdog",
        price: 3.99,
        image: "./img/10.png",
        rating: "3.9"
    },
    {
        name: "Meat Taco",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Taco",
        price: 5.99,
        image: "./img/11.png",
        rating: "4.1"
    },
    {
        name: "Taco Speciale",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Taco",
        price: 4.50,
        image: "./img/12.png",
        rating: "2.4"
    },
    {
        name: "Onion Rings",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 3.30,
        image: "./img/13.png",
        rating: "4.6"
    },
    {
        name: "Chicken Wings",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 6.39,
        image: "./img/14.png",
        rating: "3.6"
    },
    {
        name: "Bacon-Egg Baguette",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Baguette",
        price: 4.99,
        image: "./img/15.png",
        rating: "3.5"
    },
    {
        name: "Cripsy Chicken Bites",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 8.49,
        image: "./img/16.png",
        rating: "5.0"
    },
    {
        name: "Tortilla Party",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 5.99,
        image: "./img/17.png",
        rating: "4.0"
    },
    {
        name: "Strawberry Cream Shake",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Sweets",
        price: 2.69,
        image: "./img/18.png",
        rating: "3.0"
    },
    {
        name: "Potato Salad Deluxe",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Others",
        price: 4.29,
        image: "./img/19.png",
        rating: "3.8"
    },
    {
        name: "Chilli Concarne",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Others",
        price: 4.79,
        image: "./img/20.png",
        rating: "4.8"
    },
    {
        name: "Strawberry Ice Cream",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Sweets",
        price: 1.79,
        image: "./img/21.png",
        rating: "2.9"
    },
    {
        name: "Potion of Fries",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 2.49,
        image: "./img/22.png",
        rating: "3.2"
    },
    {
        name: "Extra Salted Fries",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 3.99,
        image: "./img/23.png",
        rating: "4.5"
    },
    {
        name: "Chicken Nuggets",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 4.99,
        image: "./img/24.png",
        rating: "4.9"
    },
    {
        name: "Crispy Chicken Filets",
        shortdesc: "lorem ipsum",
        longdesc: "bla bla bla bla bla bla",
        category: "Fingerfood",
        price: 7.99,
        image: "./img/25.png",
        rating: "4.1"
    }
];

export default foodTable;
