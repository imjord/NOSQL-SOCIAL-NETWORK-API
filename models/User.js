const { model, Schema } = require("mongoose");





const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
       type: String,
        required: true,
        trim: true
    }


})