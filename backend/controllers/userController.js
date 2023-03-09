const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

// @desc Register a new user
// @route /api/users
// @acess Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = (req.body)

  // Validation
  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  // Find if user already exist
  const userExist = await User.findOne({email})

  if(userExist) {
    res.status(400)
    throw new Error('User already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashPassword
  })

  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Login user
// @route /api/users/login
// @acess Public
const loginUser = asyncHandler(async  (req, res) => {
  res.send('Login user')
})

module.exports = {
  registerUser,
  loginUser
}