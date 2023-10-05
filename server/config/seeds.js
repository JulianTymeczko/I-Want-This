// required files
const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    // resets the category table so we don't get long lists of duplicate items
    // from multiple tests
    await Category.deleteMany();

    // seed all the categories
    const categories = await Category.insertMany([
    {
        name: 'Cakes',
        description: 'Delicious cakes for every occasion',
    },
    {
        name: 'Cupcakes',
        description: 'Cute and tasty cupcakes',
    },
    {
        name: 'Donuts',
        description: 'Classic and flavored donuts',
    }
]);

    console.log('Categories seeded.')

    // resets the products table
    await Product.deleteMany();

    // seed the products
    const products = await Product.insertMany([
        {
            name: 'Chocolate Cake',
            description: 'Chocolate flavoured cupcake. A family favourite!',
            image: './',
            price: '20.99',
            flavour: 'Chocolate',
            category: categories[0]._id
        },
        {
            name: 'Vanilla Cake',
            description: "Vanilla flavoured cupcake. Stick to the basics and you'll never go wrong",
            image: './',
            price: '20.99',
            flavour: 'Vanilla',
            category: categories[0]._id
        },
        {
            name: 'Apple Cinnamon Cake',
            description: 'Icing-free apple cake decorated with cinnamon and sugar.',
            image: './',
            price: '25.99',
            flavour: 'Apple Cinnamon',
            category: categories[0]._id
        },
        {
            name: 'Black Forest Cake',
            description: 'A classic black forest cake, rich in flavour.',
            image: './',
            price: '25.99',
            flavour: 'Black Forest',
            category: categories[0]._id
        },
        {
            name: 'Chocolate Cupcake',
            description: 'Chocolate flavoured cupcake. A family favourite!',
            image: './',
            price: '2.99',
            flavour: 'Chocolate',
            category: categories[1]._id
        },
        {
            name: 'Vanilla Cupcake',
            description: "Vanilla flavoured cupcake. Stick to the basics and you'll never go wrong",
            image: './',
            price: '2.99',
            flavour: 'Vanilla',
            category: categories[1]._id
        },
        {
            name: 'Apple Caramel Cupcake',
            description: 'Apple cupcake with caramel icing. Perfect for fall or winter.',
            image: './',
            price: '3.99',
            flavour: 'Apple Caramel',
            category: categories[1]._id
        },
        {
            name: 'Unicorn Cupcake',
            description: 'White cupcake with sprinkles and colourful icing. Great for kids!',
            image: './',
            price: '2.99',
            flavour: 'White',
            category: categories[1]._id
        },
        {
            name: 'Chocolate Donut',
            description: 'Classic chocolate donut with a sugar glaze.',
            image: './',
            price: '1.99',
            flavour: 'Chocolate',
            category: categories[2]._id
        },
        {
            name: 'Glazed Donut',
            description: 'Classic plain donut with a sugar glaze.',
            image: './',
            price: '1.99',
            flavour: 'Plain',
            category: categories[2]._id
        },
        {
            name: 'Apple Cinnamon Donut',
            description: 'Apple cider donut covered in cinnamon and sugar.',
            image: './',
            price: '2.99',
            flavour: 'Apple Cinnamon',
            category: categories[2]._id
        },
        {
            name: 'Jelly Donut',
            description: 'Donut filly with strawberry jelly and coated in powdered sugar.',
            image: './',
            price: '1.99',
            flavour: 'Jelly',
            category: categories[2]._id
        },

    ]);

    console.log('Products seeded.')

    // create fake users
    const users = await User.insertMany([
        {
            name: 'User 1',
            email: 'user1@example.com',
            password: 'password1',
        },
        {
            name: 'User 2',
            email: 'user2@example.com',
            password: 'password2',
        },
        {
            name: 'User 3',
            email: 'user3@example.com',
            password: 'password3',
        },
        {
            name: 'User 4',
            email: 'user4@example.com',
            password: 'password4',
        },
        {
            name: 'User 5',
            email: 'user5@example.com',
            password: 'password5',
        },
    ]);

    console.log('Users seeded.')

    process.exit();
});
