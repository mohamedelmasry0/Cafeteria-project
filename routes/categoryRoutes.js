//libraries
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const categoryModel = require('../model/categorySchema')
let category = []
router.get('/', (req, res, next) => {
    categoryModel.find()
    .then(category => {
        res.status(200).send(category);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const categoryId = req.params.categoryId

    categoryModel.findOne({
        _id: categoryId
    })
    .then(category => {
        res.status(200).send(category)
    })
    .catch(error => next(error))

})


router.post('/', function (req, res, next) {
   

    let category = new categoryModel({
    id_category:req.body.id_category,
    categoryName: req.body.categoryName
    })
    category.save()
    .then(category =>{res.status(200).send(category)})
    .catch(error=>{next(error)})
})


router.put('/:categoryId', function (req, res, next) {
    const categoryId = req.params.categoryId
    
    categoryModel.findOneAndUpdate({
        _id: categoryId
    }, {
        id:req.body.id,
        categoryName: req.body.categoryName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(category => res.status(200).send(category))
    .catch(error => next(error))
    
   
})

router.delete('/:categoryId', function (req, res, next) {
    const categoryId = req.params.categoryId
    
    categoryModel.findOneAndDelete({
        _id: categoryId
    }).then(category => {
        res.status(200).send('category well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router