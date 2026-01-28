import {
    getOrders as getAllOrdersService,
    createOrder as createOrderServicde
} from '../services/order.service.js';


export async function getAllOrders(req, res) {
    try {
        const orders = await getAllOrdersService();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
}


export async function createOrder(req, res) {
    try {
        const order = await createOrderServicde(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create order', error: error.message });
    }
}