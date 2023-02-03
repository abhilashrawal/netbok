const express = require('express')
const app = express()
const port = 3000
const rourt =require('./routes/')

//app.use('/',)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})