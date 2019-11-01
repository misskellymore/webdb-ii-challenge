const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();
const model = require('./carsmodel.js');


router.get('/', (req, res) => {

    model.find()
    .then( data => {
        res.status(200).json(data)
    })

});



router.post('/', validateCar, (req, res) => {
    const car = req.body;

    db('cars').insert(car)
    .then(car => {
        res.status(200).json(car[0]);
    })
    .catch(err => {
        res.status(500).json({ err: 'Car could not be added' });
    })
})



function validateCar (req, res, next) {
    const { vin, make, model, mileage } = req.body;

    if (!vin || !make || !model || !mileage) {
        res.status(400).json({ message: 'Please provide required fields.' });
    } else {
        next();
    }
};



module.exports = router;