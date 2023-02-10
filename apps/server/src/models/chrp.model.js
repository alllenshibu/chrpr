const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ChrpSchema = new Schema({
  message: String,
  username: String,
})

const Chrp = mongoose.model("chrps", ChrpSchema)

module.exports = Chrp
