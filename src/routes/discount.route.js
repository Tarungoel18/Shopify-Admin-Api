import express from 'express';
import { createDiscount, getDiscount, updateDiscount } from '../controllers/discount.controller.js';

const router = express.Router();

router.post('/:id', createDiscount);
router.get('', getDiscount)
router.put('/:id1/:id2', updateDiscount)

export default router;