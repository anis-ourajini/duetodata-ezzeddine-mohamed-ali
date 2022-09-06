const mongoose = require('mongoose');
const dbConfig = require("./db.config.js");
exports.db_connect = async () => {
    if (dbConfig.USER && dbConfig.PASSWORD) {
        await mongoose.connect('mongodb://' + dbConfig.USER + ':' + dbConfig.PASSWORD + '@' + dbConfig.HOST + ':' + dbConfig.PORT + '/' + dbConfig.DB)
            .then(() => { console.log('mongodb connection established') })
            .catch(() => { console.log('mongodb connection failed') })
    } else {
        await mongoose.connect('mongodb://' + dbConfig.HOST + ':' + dbConfig.PORT + '/' + dbConfig.DB)
            .then(() => { console.log('mongodb connection established') })
            .catch(() => { console.log('mongodb connection failed') })
    }

} 