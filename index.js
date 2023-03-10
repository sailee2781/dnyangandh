const express = require("express")
require("./dbs/conn")
var cors = require('cors')
const router = require("./routes/school")

const app = express();
app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, PATCH, GET, DELETE"
    )
    return res.status(200).json({})
  }
  next()
})
const port = process.env.PORT || 5555;
app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
  res.send("Hello!!!! We are backend team of Dnyangandh")
})

app.listen(port, () => {
  console.log(`App running at PORT: ${port}`)
})