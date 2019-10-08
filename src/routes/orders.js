const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ message: "Orders Route" });
});

router.post('/', (req, res, next) => {
    const order ={
        productID: req.body.id,
        quantity: req.body.quantity
    }
    res.status(201).json({ message: "Order was created", order });
});

router.get('/:id', (req, res, next) => {
    res.json({ message: `ID: ${req.params.id}` });
});

module.exports = router;
