const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()

const quotes = require('./routes/quotes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/quote', quotes)

module.exports = server
