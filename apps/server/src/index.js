require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT || 80

const bodyParser = require("body-parser")

app.use(bodyParser.json())

const mongoose = require("mongoose")

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(console.log("DB Connected"))

app.use("/chrp", require("./routes/chrp.route"))
app.use("/user", require("./routes/user.route"))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
