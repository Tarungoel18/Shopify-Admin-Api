import express from 'express';
import productsRoute from './routes/products.route.js';
import orderRoute from './routes/order.route.js'
import customerRoute from './routes/customer.route.js'
import addressRoute from './routes/address.route.js'
import discountRoute from './routes/discount.route.js'

const app = express();
app.use(express.json());

app.use('/api/products', productsRoute);
app.use('/api/orders', orderRoute)
app.use('/api/customer', customerRoute)
app.use('/api/address', addressRoute)
app.use('/api/discount', discountRoute)


export default app;