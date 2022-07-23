// console.log("hello world")
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
// panggil koneksi
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/goals', (req, res) => {
  res.send({ message: 'Get Goals' })
})

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))