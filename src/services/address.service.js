import { restClient } from "../config/shopifyClient.js";

export async function getCustomerAddresses(customerId) {
    const response = await restClient.get({
        path: `customers/${customerId}/addresses`,
    });
    return response.body.addresses;
}


export async function createCustomerAddress(customerId, addressData) {
    const response = await restClient.post({
        path: `customers/${customerId}/addresses`,
        data: {
            address: addressData,
        },
    });
    return response.body.customer_address;
}


export async function updateCustomerAddress(customerId, addressId, addressData) {
    const response = await restClient.put({
        path: `customers/${customerId}/addresses/${addressId}`,
        data: {
            address: {
                id: addressId,
                ...addressData,
            },
        },
    });
    return response.body.customer_address;
}