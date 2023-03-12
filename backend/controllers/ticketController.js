const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc Get user ticket
// @route GET /api/tickets
// @acess Private
const getTickets = asyncHandler(async  (req, res) => {
  res.status(200).json({message: 'getTickets'})
})

// @desc Create new ticket
// @route POST /api/tickets
// @acess Private
const createTicket = asyncHandler(async  (req, res) => {
  res.status(200).json({message: 'createTicket'})
})

module.exports = {
  getTickets,
  createTicket
}