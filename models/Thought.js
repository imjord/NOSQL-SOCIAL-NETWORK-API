const { model, Schema } = require("mongoose");
const User = require("./User")
const Reaction = require("./Reaction");



const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        // // array of nested documents from reaction schema 
        // ref: "Reaction"

    }
})



module.exports = model("Thought", ThoughtSchema);