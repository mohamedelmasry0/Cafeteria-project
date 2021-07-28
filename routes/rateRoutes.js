//libraries
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const rateModel = require('../model/rateSchema')
let rate = []
router.get('/', (req, res, next) => {
    rateModel.find()
    .then(rate => {
        res.status(200).send(rate);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const rateId = req.params.rateId

    rateModel.findOne({
        _id: rateId
    })
    .then(rate => {
        res.status(200).send(rate)
    })
    .catch(error => next(error))

})


router.post('/', function (req, res, next) {
   

    let rate = new rateModel({
    id_rate:req.body.id_rate
    })
    rate.save()
    .then(rate =>{res.status(200).send(rate)})
    .catch(error=>{next(error)})
})


router.put('/:rateId', function (req, res, next) {
    const rateId = req.params.rateId
    
    rateModel.findOneAndUpdate({
        _id: rateId
    }, {
        id:req.body.id,
        rateName: req.body.rateName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(rate => res.status(200).send(rate))
    .catch(error => next(error))
    
   
})

router.delete('/:rateId', function (req, res, next) {
    const rateId = req.params.rateId
    
    rateModel.findOneAndDelete({
        _id: rateId
    }).then(rate => {
        res.status(200).send('rate well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router