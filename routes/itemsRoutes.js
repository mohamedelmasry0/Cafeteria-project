//libraries
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const itemsModel = require('../model/itemsSchema')
let items = []
router.get('/', (req, res, next) => {
    itemsModel.find()
    .then(items => {
        res.status(200).send(items);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const itemsId = req.params.itemsId

    itemsModel.findOne({
        _id: itemsId
    })
    .then(items => {
        res.status(200).send(items)
    })
    .catch(error => next(error))

})


router.post('/', function (req, res, next) {
   

    let items = new itemsModel({
    id_dish:req.body.id_dish,
    Dish_name: req.body.Dish_name,
	unit_price: req.body.unit_price,
	Description: req.body. Description,
	Feature1: req.body.Feature1,
	Feature2: req.body.Feature2,
	ID_category: req.body.ID_category
    })
    items.save()
    .then(items =>{res.status(200).send(items)})
    .catch(error=>{next(error)})
})


router.put('/:itemsId', function (req, res, next) {
    const itemsId = req.params.itemsId
    
    itemsModel.findOneAndUpdate({
        _id: itemsId
    }, {
        id:req.body.id,
        itemsName: req.body.itemsName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(items => res.status(200).send(items))
    .catch(error => next(error))
    
   
})

router.delete('/:itemsId', function (req, res, next) {
    const itemsId = req.params.itemsId
    
    itemsModel.findOneAndDelete({
        _id:itemsId
    }).then(items => {
        res.status(200).send('items well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router