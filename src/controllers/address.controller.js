import { getCustomerAddresses as getCustomerAddressesService, createCustomerAddress as createCustomerAddressService, updateCustomerAddress as updateCustomerAddressService } from "../services/address.service.js";


export async function getCustomerAddresses(req, res) {
    try {
        const address = await getCustomerAddressesService(req.params.id);
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch customer address', error: error.message });
    }
}



export async function createCustomerAddress(req, res) {
    try {
        const address = await createCustomerAddressService(req.params.id, req.body);
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create customer address', error: error.message });
    }
}


export async function updateCustomerAddress(req, res) {
    try {
        const address = await updateCustomerAddressService(req.params.custId, req.params.addId, req.body);
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update customer address', error: error.message });
    }
}