const express = require('express');
const router = express.Router();

const Car = require('../model/car.model');

router.get('/', async (req, res) => {
    try {
        const response = await Car.find();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})

router.post('/', async (req, res) => {
    const cars = new Car({
        vehicleRegNumber: req.body.vehicleRegNumber,
        description: req.body.description,
        location:req.body.location,
        vehicleBrandName: req.body.vehicleBrandName
    })
    console.log(cars)
    try {
        const response = await cars.save();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})


router.put('/', async (req, res) => {
    try {
        const cars = await Car.find();
        for (const c of cars) {
            if (req.body.vehicleRegNumber === c.vehicleRegNumber) {
                const car = await Car.findById(c._id)
                car.vehicleRegNumber = req.body.vehicleRegNumber;
                car.description = req.body.description;
                car.location = req.body.location;
                car.vehicleBrandName = req.body.vehicleBrandName;
                const response = await car.save();
                res.send(response)
            }
        }

    } catch (e) {
        res.send('error :' + e)
    }
})

router.delete('/', async (req, res) => {
    try {
        const cars = await Car.find();
        for (const c of cars) {
            if (req.body.vehicleRegNumber === c.vehicleRegNumber) {
                const dlt = await Car.findById(c._id);
                const response = await dlt.remove();
                res.send(response)
            }
        }
    } catch (e) {
        res.send('error :' + e)
    }
})

module.exports = router;