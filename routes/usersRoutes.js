//libraries
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//JSfiles
const usersModel = require('../model/usersSchema')
let users = []
router.get('/', (req, res, next) => {
    usersModel.find()
    .then(users => {
        res.status(200).send(users);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const userId = req.params.userId

    usersModel.findOne({
        _id: userId
    })
    .then(users => {
        res.status(200).send(users)
    })
    .catch(error => next(error))

})


router.post('/addUser', function (req, res, next) {
   

    let users = new usersModel({
    // id:req.body.id,
    userName: req.body.userName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    users.save()
    .then(users =>{res.status(200).send(users)})
    .catch(error=>{next(error)});

    res.status(200).send(users)

})



router.put('/:userId', function (req, res, next) {
    const userId = req.params.userId
    
   usersModel.findOneAndUpdate({
        _id: userId
    }, {
    id:req.body.id,
    userName: req.body.userName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(users => res.status(200).send(users))
    .catch(error => next(error))
    
   
})

router.delete('/:userId', function (req, res, next) {
    const userId = req.params.userId
    
    usersModel.findOneAndDelete({
        _id: userId
    }).then(users => {
        res.status(200).send('user well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router