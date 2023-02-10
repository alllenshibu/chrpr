const express = require("express")
const router = express()

const { createNewUser } = require("../services/user.service")

router.get("/", async (req, res) => {
  res.send("Bruh")
})

router.post("/new", async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await createNewUser(username, password)
    res.send(user)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
