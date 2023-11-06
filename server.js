const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MONGO_URL
console.log(URL)


app.use(express.json())
app.use(morgan('dev'))


app.use("/morning/journal", require("./routes/journalRouter.js"))
app.use("/morning/checklist", require("./routes/checklistRouter.js"))
mongoose.connect(URL, () => console.log('connected to database'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => console.log("The server is running on port 9000"))