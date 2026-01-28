import express from 'express';
import { getAllCustomers, createCustomer, updateCustomer } from '../controllers/customer.controller.js';

const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', createCustomer)
router.put('/:id', updateCustomer)

export default router;