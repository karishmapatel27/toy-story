const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'data.json')

module.exports = {
  getData,
  getProfile
}

// data functions

function getData (callback) {
  // read the file
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
      callback(new Error(err.message))
    } else {
    // parse the contents
    const characters = JSON.parse(contents)
    // call the callback
    callback(null, characters)
    }
  })
}

function getProfile (callback) {
  // read the file
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
      callback(new Error(err.message))
    } else {
    // parse the contents
    const profile = JSON.parse(contents)
    // call the callback
    callback(null, profile)
    }
  })
}

// function getDinoData (callback) {
//   // read the file
//   fs.readFile(filepath, 'utf8', (err, contents) => {
//     // parse the contents
//     const dinos = JSON.parse(contents)
//     // call the callback
//     callback(null, dinos)
//   })
// }

// function getMarvelData(callback) {
//   const filepath = path.join(__dirname, 'data/marvel.json')
//   fs.readFile(filepath, 'utf8', (err, contents) => {
//     if (err) {
//       // call our callback with an error
//       callback(new Error(err.message))
//     } else {
//       // turn the contents into a js object
//       const marvelData = JSON.parse(contents)
//       callback(null, marvelData)
//     }
//   })
// }