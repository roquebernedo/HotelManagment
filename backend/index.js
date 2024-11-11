const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db.js')

dotenv.config() 

const port = process.env.PORT
connectDB()

app.use(cors())

app.use(express.json())

console.log("hello cagada")
console.log("ahora estoy aca")

app.listen(port, () => console.log(`Server started on port ${port}`))