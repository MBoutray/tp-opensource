const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

app.listen(PORT, () => {
  console.log(PORT)
  console.log(`Example app listening at http://localhost:${PORT}`)
})