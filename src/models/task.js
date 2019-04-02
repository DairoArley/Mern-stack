const mongoose = require('mongoose');
const {Shema} = mongoose;

const TaskSchema = new Shema({
    title: { type: String, required: true},
    descryption: {type: String, required: true}
});

module.exports = mongoose.model('Task', TaskSchema);