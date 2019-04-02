const mongoose = require('mongoose');

const URI = 'mongodb://localhost/taskdb';

mongoose.connect(URI)
    .then( db => console.log('DB is connected'))
    .catch( error => console.error(error));

module.exports = mongoose;