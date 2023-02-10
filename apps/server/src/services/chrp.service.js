const Chrp = require("../models/chrp.model")

const getAllChrps = async () => {
  try {
    const chrps = await Chrp.find({})

    return chrps
  } catch (err) {
    console.log(err)
  }
}

const postNewChrp = async (requestBody) => {
  try {
    const { message, username } = requestBody

    const chrp = await Chrp.create({ message, username })

    console.log(chrp)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAllChrps,
  postNewChrp,
}
