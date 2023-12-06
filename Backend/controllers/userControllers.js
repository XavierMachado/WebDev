const User = require('../Models/userModels')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async(req,res)=> {
    const {name, email, password} = req.body
    console.log(req.body)
    const user = User.create({
        name,
        email,
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email
        })
    }
    res.send('Register User')
})

const loginUser = (req,res)=> {
    res.send('Login User')
}

module.exports = {
    registerUser,
    loginUser,
}