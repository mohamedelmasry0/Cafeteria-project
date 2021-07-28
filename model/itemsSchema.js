const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    id_dish: {
        type: Number,
        require: true,
    },
    Dish_name: {
        type: String,
        require: true
    },
    Unit_price: {
        type: Number,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Feature1: {
        type: String,
        require: true
    },
    Feature2: {
        type: String,
        require: true
    },
    
    ID_category: {
        type: String,
        require: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('itemsSchema', itemsSchema)