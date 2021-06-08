const bcrypt = require('bcrypt')

const express = require('express')
const users = express.Router()

const User = require('../models/users.js')

//======CREATE======//
users.post('/', (req, res) =>{
   let newUser = {
      username: req.body.username,
      password: bcrypt.hashSync(
         req.body.password, bcrypt.genSaltSync(10))
   }
   User.create(newUser, (err, createdUser)=>{
      res.json(createdUser)
   })
})

//=====GET USER====//
users.put('/login', (req, res)=>{
   User.findOne({username:req.body.username},
         (err, foundUser)=>{
            if (err){
               res.json({})
            } else {
               if(bcrypt.compareSync(req.body.password, foundUser.password)){
                  res.json(foundUser)
               } else {
                  res.json({})
               }
            }
   })
})

module.exports = users
