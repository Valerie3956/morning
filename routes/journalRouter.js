const express = require('express')
const journalRouter = express.Router()
const Journal = require('../models/journal')


journalRouter.get("/", (req, res, next) => {
    Journal.find((err, entry) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(entry)
    })
    })
    
    journalRouter.post("/", (req, res, next) => {
    const newEntry = new Journal(req.body)
    newEntry.save((err, savedEntry) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedEntry)
    })
    })

    module.exports = journalRouter