const express = require('express')
const router = new express.Router
const SchoolInfo = require('../modules/schoolmodel')

router.post("/schools", async (req, res) => {
  try {
    const addschool = new SchoolInfo(req.body)
    console.log(req.body);
    console.log("New School Added in the Database");
    const newschool = await addschool.save();
    return res.status(201).send(newschool);
  } catch (e) {
    return res.status(400).send(e);
  }
})
router.get("/schools", async (req, res) => {
  try {
    const getschool = await SchoolInfo.find({});
    console.log(getschool)
    console.log("All the records in the database")
    return res.send(getschool);
  } catch (e) {
    return res.status(400).send(e);
  }
})
router.get('/schools/:id', async (req, res) => {
  try{
      const getschool = await SchoolInfo.findById(req.params.id);
      console.log(getschool)
      console.log("Record with given ID")
      res.json(getschool)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})
router.patch('/schools/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const school_update = await SchoolInfo.findByIdAndUpdate(
          id, updatedData, options
      )
      console.log(school_update)
      console.log("Updated the required the details")
      res.send(school_update)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
router.delete('/schools/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await SchoolInfo.findByIdAndDelete(id)
      console.log("Record Deleted")
      res.send(`Document with ${data.school_name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
module.exports = router;