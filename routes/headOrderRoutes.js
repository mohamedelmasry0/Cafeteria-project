//libraries
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const headOrderModel = require('../model/headOrderSchema')
let headOrder = []
router.get('/', (req, res, next) => {
    headOrderModel.find()
    .then(headOrder => {
        res.status(200).send(headOrder);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const headOrderId = req.params.headOrderId

    headOrderModel.findOne({
        _id: headOrderId
    })
    .then(headOrder => {
        res.status(200).send(headOrder)
    })
    .catch(error => next(error))

})


router.post('/', function (req, res, next) {
   

    let headOrder = new headOrderModel({
    id_head_order:req.body.id_head_order,
    Total_number: req.body.Total_number,
	Total_price: req.body.Total_price,
	id_payement: req.body.id_payement,
	id_user: req.body.id_user,
	order_time: req.body.order_time,
	id_histo_status: req.body.id_histo_status,
	comment: req.body.comment,
    id_dish: req.body.id_dish
    })
    headOrder.save()
    .then(headOrder =>{res.status(200).send(headOrder)})
    .catch(error=>{next(error)})
})


router.put('/:headOrderId', function (req, res, next) {
    const headOrderId = req.params.headOrderId
    
    headOrderModel.findOneAndUpdate({
        _id: headOrderId
    }, {
        id:req.body.id,
        headOrderName: req.body.headOrderName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(headOrder => res.status(200).send(headOrder))
    .catch(error => next(error))
    
   
})

router.delete('/:headOrderId', function (req, res, next) {
    const headOrderId = req.params.headOrderId
    
    usersModel.findOneAndDelete({
        _id: headOrderId
    }).then(headOrder => {
        res.status(200).send('headOrder well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router