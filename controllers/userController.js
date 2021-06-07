const bcrypt = require('bcrypt')

const express = require('express')
const users = express.Router()

const User = require('/..models.users.js')

//======CREATE======//
users.post('/', (req, res) =>{
   req.body.username = req.body.username.toLowerCase()
   req.body.password = bcrypt.hashSync(
      req.body.password, genSaltSync(10))
   User.create(req.body, (err, createdUser)=>{
      res.json(createdUser)
   })
})

//=====GET USER====//
users.get('/login', (req, res)=>{
   User.find({},
         (err.foundUser)=>{
            res.json(foundUser, {
               currentUser: req.session.currentUser
         })
   })
})

module.exports = users
