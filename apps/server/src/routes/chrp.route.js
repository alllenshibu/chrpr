const express = require("express")
const router = express()

const { getAllChrps, postNewChrp } = require("../services/chrp.service")

router.get("/", async (req, res) => {
  try {
    const chrps = await getAllChrps()

    res.status(200).json(chrps)
  } catch (err) {
    res.status(500).json({
      message: "Error getting chrps",
    })
  }
})

router.post("/", async (req, res) => {
  try {
    postNewChrp(req.body)

    res.status(201).json({
      message: "Chrp created successfully",
    })
  } catch (err) {
    res.status(500).json({
      message: "Chrp not created",
    })
  }
})

module.exports = router
