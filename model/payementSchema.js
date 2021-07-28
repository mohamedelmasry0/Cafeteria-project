const mongoose = require("mongoose");

const payementModel = new mongoose.Schema({
    ID_payement: {
        type: Number,
        require: true,
    },
    Method: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('payement', payementModel)