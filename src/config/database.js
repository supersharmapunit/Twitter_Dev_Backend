const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://0.0.0.0/twitter_Dev');
}

module.exports = connect;