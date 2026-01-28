import { restClient } from '../config/shopifyClient.js';

export async function getAllProducts() {
    const response = await restClient.get({ path: 'products', query: { limit: 50 } });
    return response.body.products;
}

export async function createProduct(productData) {
    const response = await restClient.post({ path: 'products', data: { product: productData } });
    return response.body.product;
}

export async function updateProduct(productId, productData) {
    const response = await restClient.put({
        path: `products/${productId}`,
        data: { product: { id: productId, ...productData } },
    });
    return response.body.product;
}


export async function deleteProduct(productId) {
    await restClient.delete({ path: `products/${productId}` });
    return true;
}