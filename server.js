/*============ DEPENDENCIES =============*/

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const bodyParser = require('body-parser')
//const session = require('express-session')


/*============ CONFIGURATION =============*/

const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


/*============= MIDDLEWARE ==============*/

//Use this middleware to return JSON data, rather than res.send/urlencoded which returns HTML:
const momsController = require('./controllers/moms_controller.js')
app.use(express.static('public'))
app.use(express.json()) // use .json(), not .urlencoded()
app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
app.use('/moms', momsController)



/*============== LISTENER ================*/
app.listen (PORT, ()=>{
   console.log('listening on port' + PORT);
})

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})


/*============ MONGOOSE ERR/SUCCESS =============*/

mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
