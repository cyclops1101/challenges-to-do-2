import {Schema, model} from 'mongoose';

const ToDoSchema = new Schema ({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

export default model('ToDo', ToDoSchema);