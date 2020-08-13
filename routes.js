const express = require('express')
const router = express.Router()
const utils = require('./utils')

module.exports = router

// routes

router.get('/', (req, res) => {
  // get the data
  utils.getData((err, characters) => {
    if (err) {
      res.status(500).send('Oh no! 500 Error!')
    } else {
    // render the template
    res.render('home', characters)
    }
  })
})