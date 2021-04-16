const express = require('express')

const db = require('../db/db')

const router = express.Router()

//routes live here
router.get('/', (req, res) => {
  db.getQuote()
      .then((result) => {
          res.json(result.quote)
          return null
      })
      .catch((err) => {
          res.status(500).json({ error: err.message })
      })
})

module.exports = router
