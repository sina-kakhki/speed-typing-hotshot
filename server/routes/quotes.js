const express = require('express')

const db = require('../db/db')

const router = express.Router()

//routes live here
router.get('/', (req, res) => {
  db.getQuote()
      .then((quotes) => {
          res.json(quotes)
          return null
      })
      .catch((err) => {
          res.status(500).json({ error: err.message })
      })
})

module.exports = router
