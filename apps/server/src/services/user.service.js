const User = require("../models/user.model")

const createNewUser = async (username, password) => {
  try {
    const user = await User.create({ username, password })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  createNewUser,
}
