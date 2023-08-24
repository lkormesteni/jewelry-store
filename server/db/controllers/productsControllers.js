const product = require('../models/productsModels');

async function createProduct(req, res) {
  try {
    const newProduct = await product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getProduct(req, res) {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getProductById(req, res) {
  try {
    const productItem = await product.findById(req.params.id);
    if (!productItem) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(productItem);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteProduct(req, res) {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct
};