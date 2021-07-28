//libraries
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const payementModel = require('../model/payementSchema')
let payement = []
router.get('/', (req, res, next) => {
    statusModel.find()
    .then(status => {
        res.status(200).send(status);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const payementId = req.params.payementId

    payementModel.findOne({
        _id: payementId
    })
    .then(payement => {
        res.status(200).send(payement)
    })
    .catch(error => next(error))

})


router.post('/', function (req, res, next) {
   

    let payement = new payementModel({
    ID_payement:req.body.ID_payement,
    payementName: req.body.payementName,
	Method: req.body.Method,
	Description: req.body.Description
	
    })
    payement.save()
    .then(payement =>{res.status(200).send(payement)})
    .catch(error=>{next(error)})
})


router.put('/:payementId', function (req, res, next) {
    const payementId = req.params.payementId
    
    payementModel.findOneAndUpdate({
        _id: payementId
    }, {
        id:req.body.id,
        payementName: req.body.payementName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(payement => res.status(200).send(payement))
    .catch(error => next(error))
    
   
})

router.delete('/:payementId', function (req, res, next) {
    const payementId = req.params.payementId
    
    payementModel.findOneAndDelete({
        _id: payementId
    }).then(payement => {
        res.status(200).send('payement well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router