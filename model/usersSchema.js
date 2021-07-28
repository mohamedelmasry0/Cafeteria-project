const mongoose = require("mongoose");

const usersModel = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     require: true,
    // },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    }

}
, {
    timestamps: true,
    //versionKey: false
    // timestamps: {
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at'
    // }
})
// const data = Object.entries(usersModel).map(([key, value]) => ({key,value}));

module.exports = mongoose.model('users', usersModel)