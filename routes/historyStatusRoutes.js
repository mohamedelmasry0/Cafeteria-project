//libraries
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const historyStatusModel = require('../model/historyStatusSchema')
let historyStatus = []
router.get('/', (req, res, next) => {
    historyStatusModel.find()
    .then(historyStatus => {
        res.status(200).send(historyStatus);
    })
    .catch(error => next(error))
})

router.get('/:id', (req, res, next) => {
    const historyStatusId = req.params.historyStatusId

    historyStatusModel.findOne({
        _id: historyStatusId
    })
    .then(historyStatus => {
        res.status(200).send(historyStatus)
    })
    .catch(error => next(error))

})


router.post('/', function (req, res, next) {
   

    let historyStatus = new historyStatusModel({
    id_histo_status:req.body.id_histo_status,
    id_status: req.body.id_status,
	comment: req.body.comment
    })
    historyStatus.save()
    .then(historyStatus =>{res.status(200).send(historyStatus)})
    .catch(error=>{next(error)})
})


router.put('/:historyStatusId', function (req, res, next) {
    const historyStatusId = req.params.historyStatusId
    
    historyStatusModel.findOneAndUpdate({
        _id: historyStatusId
    }, {
        id:req.body.id,
        historyStatusName: req.body.historyStatusName,
	password: req.body.password,
	email: req.body.email,
	address: req.body.address,
	phone: req.body.phone,
	type: req.body.type,
	comment: req.body.comment
    })
    .then(historyStatus => res.status(200).send(historyStatus))
    .catch(error => next(error))
    
   
})

router.delete('/:historyStatusId', function (req, res, next) {
    const historyStatusId = req.params.historyStatusId
    
    historyStatusModel.findOneAndDelete({
        _id: historyStatusId
    }).then(historyStatus => {
        res.status(200).send('historyStatus well deleted !')
    })
    .catch(error => next(error))

  
})

module.exports = router