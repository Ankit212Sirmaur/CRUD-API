// const { response } = require('express');
const {AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
async function createAirplane(req, res){
    try {
        console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'successfull',
            data: airplane,
            error:  {},
        });
    } catch (error) {
        return res.status(StatusCodes.CREATED).json({
            success: false,
            message: 'failed',
            data: {},
            error: error,
        });
    }
}

module.exports = {
    createAirplane
}