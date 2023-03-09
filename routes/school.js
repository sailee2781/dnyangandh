const express = require('express')
const router = new express.Router
const SchoolInfo = require('../modules/schoolmodel')

router.post("/schools", async (req, res) => {
  try {
    const addschool = new SchoolInfo(req.body)
    console.log(req.body);
    const newschool = await addschool.save();
    return res.status(201).send(newschool);
  } catch (e) {
    return res.status(400).send(e);
  }
})
router.get("/schools", async (req, res) => {
  try {
    const getschool = await SchoolInfo.find({});
    return res.send(getschool);
  } catch (e) {
    return res.status(400).send(e);
  }
})

module.exports = router;