const mongoose=require("mongoose")
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    user:{type:'ObjectId'},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

module.exports={todo}