const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')

const server = express()

module.exports = server

server.engine('hbs', hbs({
  extname: 'hbs'
}))

// hbs.registerHelper('nextItem', function (array, index, options) {
//   return options.fn(array[index + 1]);
// });

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

// server.use routes

server.use('/', routes)
server.use('/characters', routes)