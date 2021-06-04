const express = require('express')
const Moms = require('./models/moms.js')
const momsSeed = require('./models/moms_seed.js')
// const qaSeed = require ('./models/qaSeed.js')
// const qa = require ('../models/qa.js')
const moms = express.Router()
// const session = require('express-session')

// const isAuthenticated = (req, res, next)=>{
//    if (req.session.currentUser){
//       return next()
//    } else {
//       res.redirect('/sessions/new')
//    }
// }

///HOME/////
moms.get('/', (req, res)=>{
   Moms.find({}, (err, foundMoms) =>{
      res.json(foundMoms)
      });
   })


////CREATE/////(create and posts new blog)
moms.post('/', (req, res)=>{
   moms.create(req.body, (err, createMoms)=>{
      Moms.find({}, (err, foundMoms) =>{
         res.json(foundMoms)
      })
   })
})

//moms CREATE SEED///
moms.get('/seed', (req, res)=>{
   Moms.insertMany(momsSeed, (err, manyMoms)=> {
      res.redirect('/moms')
   })
})

moms.put('/:id', (req, res)=> {
   Moms.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      (err, updatedMoms) =>{
         if (err) {
            res.send(err)
         } else {
            Moms.find({}, (err, foundMoms) =>{
               res.json(foundMoms)
            })
         }
      }
   )
})
moms.delete('/:id', (req, res)=>{
   Moms.findByIdAndRemove(req.params.id, (err, deletedMom)=>{
      Moms.find({}, (err, foundMoms)=>{
         res.json(foundMoms)
      })
   })
})

module.exports = moms
