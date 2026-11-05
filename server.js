require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const property = require('./routes/property')
const app = express()

app.use(express.json())

app.use('/api/properties', property)

app.get('/', (req, res) => {
    res.send('API is running')
})


async function start(){
        await connectDB()
        app.listen(process.env.PORT, () => {
            console.log(`http://localhost:${process.env.PORT}`)
        })
}

start()