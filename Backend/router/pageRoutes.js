const express = require('express')
const { registerUser, loginUser } = require('../controllers/userControllers')
const routes = express.Router

routes.post('/', registerUser)

routes.post('/login', loginUser)

module.exports = routes