//libraries
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const statusModel = require('../model/statusSchema')
let status = []
router.get('/', (req, res, next) => {
    statusModel.find()
    .then(status => {
        res.status(200).send(status);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const statusId = req.params.statusId

    statusModel.findOne({
        _id: statusId
    })
    .then(status => {
        res.status(200).send(status)
    })
    .catch(error => next(error))

})


router.post('/', function (req, res, next) {
   

    let status = new statusModel({
    id:req.body.id,
    status_name: req.body.status_name,
	Description: req.body.Description,
	Comment: req.body.Comment
    })
    status.save()
    .then(status =>{res.status(200).send(status)})
    .catch(error=>{next(error)})


})


router.put('/:statusId', function (req, res, next) {
    const statusId = req.params.statusId
    
    productModel.findOneAndUpdate({
        _id: statusId
    }, {
        id:req.body.id,
        statusName: req.body.statusName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(status => res.status(200).send(status))
    .catch(error => next(error))
    
   
})

router.delete('/:statusId', function (req, res, next) {
    const statusId = req.params.productId
    
    statusModel.findOneAndDelete({
        _id: statusId
    }).then(status => {
        res.status(200).send('Product well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router