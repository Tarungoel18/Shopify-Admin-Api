import express from 'express';
import { getCustomerAddresses, createCustomerAddress, updateCustomerAddress } from '../controllers/address.controller.js';
const router = express.Router();

router.get('/:id', getCustomerAddresses);
router.post('/:id', createCustomerAddress)
router.put('/:custId/:addId', updateCustomerAddress)

export default router;