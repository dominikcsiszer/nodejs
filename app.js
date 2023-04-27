const express = require("express")
const app = express()

const cors = require("cors")

const corsOptions = {
    origin: "*"
}
require('dotenv').config()

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Welcome." })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})