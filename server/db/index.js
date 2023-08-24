const Product  = require('./models/productsModels');
const User = require('./models/usersModels');

async function createData() {
  try {
    // Create a new user
    const newUser = await User.create({
      username: 'john_doe',
      email: 'john@example.com',
      password: 'hashed_password',
      city: 'New York',
    });

    // Create a new product
    const newProduct = await Product.create({
      title: 'Product Title',
      description: 'This is the description of the product...',
      image: 'product_image.jpg',
      price: 99.99,
    });

    console.log('User:', newUser);
    console.log('Product:', newProduct);
  } catch (error) {
    throw error;
  }
}

module.exports = createData ; 