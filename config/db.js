const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URI, {dbName: 'props'});
        console.log('Connected to DB');
    } catch (err) {
        console.error(`Error connecting to DB: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;