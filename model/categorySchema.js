const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    id_category: {
        type: Number,
        require: true,
    },
    categoryName: {
        type: String,
        require: true
    }
    

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('category', categorySchema)