const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'data.json')

module.exports = {
  getData,
  getProfile,
  addCharacter
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

function addCharacter (character, callback) {
  // read the file
  fs.readFile(filepath, 'utf8', (err, contents) => {
    // parse the contents
    const data = JSON.parse(contents)
    // add a new id based on the length of the array (not a great practice)
    character.id = data.characters.length + 1
    // add the new character to the array
    data.characters.push(character)
    // stringify the characters object
    const stringCharacter = JSON.stringify(data, null, 2)
    // save the string to the file
    fs.writeFile(filepath, stringCharacter, 'utf8', (err) => {
      // call the callback
      callback()
    })
  })
}