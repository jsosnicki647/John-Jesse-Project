const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.htm')
})

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT)
})