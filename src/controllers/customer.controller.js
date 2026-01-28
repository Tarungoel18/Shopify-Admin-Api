import {
    createCustomer as createCustomerService,
    getAllCustomers as getAllCustomersService,
    updateCustomer as updateCustomerService
} from "../services/customer.service.js";



export async function getAllCustomers(req, res) {
    try {
        const customers = await getAllCustomersService();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch customers', error: error.message });
    }
}


export async function createCustomer(req, res) {
    try {
        const customer = await createCustomerService(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create customer', error: error.message });
    }
}


export async function updateCustomer(req, res) {
    try {
        const customer = await updateCustomerService(req.params.id, req.body);
        res.json(customer);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update customer', error: error.message });
    }
}