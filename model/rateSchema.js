const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    id_rate: {
        type: Number,
        require: true,
    },
    rate_name: {
        type: String,
        require: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('rate', rateSchema)