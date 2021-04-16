const config = require('./knexfile').development
const db = require('knex')(config)
const connection =require('knex')(config)

module.exports = {
  getQuote
}

function getRandomQuote(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function getQuote (db = connection) {
  return db('quotes')
    .where('id', getRandomQuote(1, 10))
    .select('id','quote').first()
    
}

