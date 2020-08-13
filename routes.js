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
    // console.log(profile)
  const foundProfile = profile.characters.find(toy => toy.id === id)
  console.log(foundProfile)
  res.render('profile', foundProfile)
    }
  })
})

// router.get('/puppies/edit/:id', (req, res) => {
// 	const pram = req.params.id;
// 	const id = Number(pram);
// 	const puppy = data.puppies.find((puppy) => puppy.id === id);
// 	res.render('puppies/edit', puppy);
// });

// router.get('/characters/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const data = 

//   const foundCharacter = data.find(toy => toy.id === id)
//   res.render('profile', foundCharacter)
// })


// server.get('/bonehead/:name', (req, res) => {
//   console.log('params:', req.params)
//   const name = req.params.name
//   res.send(name + ' is a bonehead!')
// })