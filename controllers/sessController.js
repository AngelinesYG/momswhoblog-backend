const bcrypt = require('bcrypt')

const express = require('express')
const sessions = express.Router()

const User = require('../models/users.js')

//=======LOGIN SESSION======//
sessions.post('/', (req, res)=>{
   User.findOne(
      {username: req.body.username.toLowerCase()},
      (err, foundUser)=>{
         if(err){
            console.log(err)
         } else if (!foundUser){
            res.json('Invalid')
         } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
               console.log('' + req.body.username + '')
               req.session.currentUser = foundUser
               res.json(req.session.currentUser)
            } else{
               res.json('Invalid')
            }
         }
      }
   )
})

sessions.get('/validate', (req, res)=>{
   res.json(req.session)
})

sessions.delete('/', (req, res)=>{
   req.sessions.destroy((err)=>{
      if (err){
         console.log(err)
      }
      console.log('End Session')
      res.json(req.session)
   })
})

module.exports = sessions
