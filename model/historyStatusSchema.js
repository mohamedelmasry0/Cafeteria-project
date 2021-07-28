const mongoose = require("mongoose");

const historyStatusSchema = new mongoose.Schema({
    id_histo_status: {
        type: Number,
        require: true,
    },
    id_status: {
        type: Number,
        require: true
    },
    
    comment: {
        type: String,
        require: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('historyStatus', historyStatusSchema)