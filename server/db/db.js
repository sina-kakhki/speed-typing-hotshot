const config = require('./knexfile').development
const db = require('knex')(config)

module.exports = {
  getQuote
}

function getQuote (db = connection) {
  return db('quotes')
    .where('id', getRandomQuote(1, 10))
    .select('id','quotes')
    
}

function getRandomQuote(min, max) {
  return Math.random() * (max - min) + min;
}