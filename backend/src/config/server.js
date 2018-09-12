const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extented: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`dsdsdsdsdsdsds ${port}.`)
})

module.exports = server