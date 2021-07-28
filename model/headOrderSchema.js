const mongoose = require("mongoose");

const headOrderSchema = new mongoose.Schema({
    id_head_order: {
        type: Number,
        require: true,
    },
    Total_number: {
        type: Number,
        require: true
    },
    Total_price: {
        type: Number,
        require: true
    },
    id_payement: {
        type: Number,
        require: true
    },
    id_user: {
        type: Number,
        require: true
    },
    order_time: {
        type: Number,
        require: true
    },
    id_histo_status: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    id_dish: {
        type: Number,
        require: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('headOrder', headOrderSchema)