// Modules and Globals
// require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
// const mongoose = require('mongoose')

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

// //MONGOOSE
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// module.exports.Place = require('./models/places')

// Listen for Connections
app.listen(process.env.PORT)
