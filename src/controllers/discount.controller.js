import { createDiscount as createDiscountService, getDiscount as getAllDiscountServicwe, updateDiscount as updateDiscountService } from "../services/discount.service.js";


export async function createDiscount(req, res) {
    try {
        const discount = await createDiscountService(req.params.id, req.body);
        res.status(201).json(discount);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create discount', error: error.message });
    }
}



export async function getDiscount(req, res) {
    try {
        const discount = await getAllDiscountServicwe();
        res.status(201).json(discount);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get discount', error: error.message });
    }
}



export async function updateDiscount(req, res) {
    try {
        const discount = await updateDiscountService(req.params.id1, req.params.id2, req.body);
        res.status(201).json(discount);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update discount', error: error.message });
    }
}