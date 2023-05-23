const  mongoose = require('mongoose');

const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    Score : {
        type: Number,
        required: true,
        default: 0,
    },
}
);

module.exports = mongoose.model('User', User);