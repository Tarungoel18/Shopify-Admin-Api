import { restClient } from '../config/shopifyClient.js';

export async function getOrders() {
    const response = await restClient.get({ path: 'orders' });
    console.log(response)
    return response.body.orders;
}


export async function createOrder(orderData) {
    const response = await restClient.post({ path: 'orders', data: { order: orderData } });
    return response.body.order;
}