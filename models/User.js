const { model, Schema, Mongoose } = require("mongoose");
const Thoughts = require("./Thought");





const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique: true,
        trim: true
    },
    email: {
       type: String,
        required: true,
        trim: true,
        maxLength: 50,
        unique: true
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    
        
    }],
    friends: {
        type: Array,
        default: []
    }
},
{timestamps:true}
// add virtual
)




module.exports = model("User", UserSchema);