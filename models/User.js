const { model, Schema, Mongoose } = require("mongoose");





const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
        trim: true
    },
    email: {
       type: String,
        required: true,
        trim: true,
        max: 50,
        unique: true
    },
    thoughts: {
        type: Array
    },
    friends: {
        type: Array,
        default: []
    }
},
{timestamps:true}
)


module.exports = model("User", UserSchema);