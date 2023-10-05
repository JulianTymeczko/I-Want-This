// required files
const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    // resets the category table so we don't get long lists of duplicate items
    // from multiple tests
    await Category.deleteMany();

    // seed all the categories
    const categories = await Category.insterMany([

    ]);

    console.log('Categories seeded.')

    // resets the products table
    await Product.deleteMany();

    // seed the products
    const products = await Product.insertMany([

    ]);

    console.log('Products seeded.')

    // create fake users
    await User.create({

    });

    await User.create({

    });

    console.log('Users seeded.')

    process.exit();
});