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

router.get('/characters/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log(typeof id)
  // get the data
  utils.getProfile((err, profile) => {
    if (err) {
      res.status(500).send('Oh no! 500 Error!')
    } else {
    // render the template

  const foundProfile = profile.characters.find(toy => toy.id === id)
  console.log(foundProfile)
  res.render('profile', foundProfile)
    }
  })
})

router.get('/new', (req,res) => {
  res.render('new')
})


router.post('/new', (req, res) => {
  const { imageURL, name, favSong, favHobby, favQuote} = req.body
  const character = { imageURL, name, favSong, favHobby, favQuote}

  utils.addCharacter(character, (err) => {
    if (err) {
      res.status(500).send(err.message)
    }
    res.redirect('/')
  })
})