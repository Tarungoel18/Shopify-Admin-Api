import { restClient } from "../config/shopifyClient.js";


export async function createCustomer(customerData) {
    const response = await restClient.post({ path: 'customers', data: { customer: customerData } });
    return response.body.customer;
}


export async function getAllCustomers(limit = 50) {
    const response = await restClient.get({ path: 'customers' });
    return response.body.customers;
}

export async function updateCustomer(customerId, customerData) {
    const response = await restClient.put({
        path: `customers/${customerId}`,
        data: { customer: { id: customerId, ...customerData } }
    });
    return response.body.customer;
}