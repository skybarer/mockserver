// index.js // server.js
var jsonServer = require('json-server')

var server = jsonServer.create()
var router = jsonServer.router('src/db.json')

server.use(jsonServer.defaults)
server.use(router)

server.listen(3000)