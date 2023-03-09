const asyncHandler = require('express-async-handler')

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

  res.send('Register user')
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