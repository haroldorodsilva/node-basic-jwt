const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', (req, res, next) => {
    const products = [
        {
            name: "Product 1",
            price: 10
        }, {
            name: "Product 2",
            price: 15
        },];
    res.json({ message: "Products Route" , products});
});

router.post('/', auth, (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({ message: "Product was created", product });
});

router.get('/:id', (req, res, next) => {
    const product = {
        _id: req.params.id,
        name: "Product",
        price: 100
    }
    res.json({ product });
});

module.exports = router;
