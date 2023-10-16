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
            image: '/images/chocolate-cake.PNG',
            price: '20.99',
            flavour: 'Chocolate',
            category: categories[0]._id
        },
        {
            name: 'Vanilla Cake',
            description: "Vanilla flavoured cupcake. Stick to the basics and you'll never go wrong",
            image: '/images/vanilla-cake.PNG',
            price: '20.99',
            flavour: 'Vanilla',
            category: categories[0]._id
        },
        {
            name: 'Apple Cinnamon Cake',
            description: 'Icing-free apple cake decorated with cinnamon and sugar.',
            image: '/images/apple-cinnamon-cake.PNG',
            price: '25.99',
            flavour: '',
            category: categories[0]._id
        },
        {
            name: 'Black Forest Cake',
            description: 'A classic black forest cake, rich in flavour.',
            image: '/images/black-forest-cake.PNG',
            price: '25.99',
            flavour: 'Chocolate',
            category: categories[0]._id
        },
        {
            name: 'Chocolate Cupcake',
            description: 'Chocolate flavoured cupcake. A family favourite!',
            image: '/images/chocolate-cupcake.PNG',
            price: '2.99',
            flavour: 'Chocolate',
            category: categories[1]._id
        },
        {
            name: 'Vanilla Cupcake',
            description: "Vanilla flavoured cupcake. Stick to the basics and you'll never go wrong",
            image: '/images/vanilla-cupcake.PNG',
            price: '2.99',
            flavour: 'Vanilla',
            category: categories[1]._id
        },
        {
            name: 'Apple Caramel Cupcake',
            description: 'Apple cupcake with caramel icing. Perfect for fall or winter.',
            image: '/images/apple-caramel-cupcake.PNG',
            price: '3.99',
            flavour: '',
            category: categories[1]._id
        },
        {
            name: 'Unicorn Cupcake',
            description: 'Vanilla cupcake with sprinkles and colourful icing. Great for kids!',
            image: '/images/unicorn-cupcake.PNG',
            price: '2.99',
            flavour: 'Vanilla',
            category: categories[1]._id
        },
        {
            name: 'Chocolate Donut',
            description: 'Classic chocolate donut with chocolate icing.',
            image: '/images/chocolate-donut.PNG',
            price: '1.99',
            flavour: 'Chocolate',
            category: categories[2]._id
        },
        {
            name: 'Glazed Donut',
            description: 'Classic plain donut with a sugar glaze.',
            image: '/images/glazed-donut.PNG',
            price: '1.99',
            flavour: 'Vanilla',
            category: categories[2]._id
        },
        {
            name: 'Apple Cinnamon Donut',
            description: 'Apple cider donut covered in cinnamon and sugar.',
            image: '/images/apple-cinnamon-donut.PNG',
            price: '2.99',
            flavour: '',
            category: categories[2]._id
        },
        {
            name: 'Jelly Donut',
            description: 'Donut filly with strawberry jelly and topped with powdered sugar.',
            image: '/images/jelly-donut.PNG',
            price: '1.99',
            flavour: 'Strawberry',
            category: categories[2]._id
        },

    ]);

    console.log('Products seeded.')

    // create fake users
    const users = await User.insertMany([
        {
            username: 'User 1',
            email: 'user1@example.com',
            password: 'password1',
        },
        {
            username: 'User 2',
            email: 'user2@example.com',
            password: 'password2',
        },
        {
            username: 'User 3',
            email: 'user3@example.com',
            password: 'password3',
        },
        {
            username: 'User 4',
            email: 'user4@example.com',
            password: 'password4',
        },
        {
            username: 'User 5',
            email: 'user5@example.com',
            password: 'password5',
        },
    ]);

    console.log('Users seeded.')

    process.exit();
});
