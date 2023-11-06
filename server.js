const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MONGO_URL
console.log(URL)
const path = require("path")

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "dist")))


app.use("/morning/journal", require("./routes/journalRouter.js"))
app.use("/morning/checklist", require("./routes/checklistRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})
mongoose.connect(URL, () => app.listen(process.env.PORT || 9000, () => console.log("The server is running on port 9000")))

// app.listen(process.env.PORT || 9000, () => console.log("The server is running on port 9000"))