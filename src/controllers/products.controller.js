import {
    getAllProducts as getAllProductsService,
    createProduct as createProductService,
    updateProduct as updateProductService,
    deleteProduct as deleteProductService,
} from '../services/products.service.js';

export async function getAllProducts(req, res) {
    try {
        const products = await getAllProductsService();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
}

export async function createProduct(req, res) {
    try {
        const product = await createProductService(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create product', error: error.message });
    }
}

export async function updateProduct(req, res) {
    try {
        const product = await updateProductService(req.params.id, req.body);
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update product', error: error.message });
    }
}

export async function deleteProduct(req, res) {
    try {
        await deleteProductService(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete product', error: error.message });
    }
}