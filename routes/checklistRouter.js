const express = require('express')
const checklistRouter = express.Router()
const Checklist = require('../models/checklist')


checklistRouter.get("/", (req, res, next) => {
  Checklist.find((err, item) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(item)
  })
})

checklistRouter.post("/", (req, res, next) => {
  const newItem = new Checklist(req.body)
  newItem.save((err, savedItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedItem)
  })
})

checklistRouter.delete("/:checklistId", (req, res, next) => {
  Checklist.findOneAndDelete({ _id: req.params.checklistId }, (err, deletedItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted bounty ${deletedItem} from the database`)
  })
})

checklistRouter.put('/:checklistId', (req, res, next) => {
  Checklist.findByIdAndUpdate({_id: req.params.checklistId}, req.body, {new:true}, (err, updatedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(updatedItem)
  })
})















module.exports = checklistRouter