const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
//http://localhost:3000/
//http://localhost:3000/help  //estas funcionan xq puse el path mirando a esta carpeta, y existen los html en ese lugar.
//http://localhost:3000/about
//http://localhost:3000/weather



app.get('/weather', (req, res) => {
    res.send({
        forecast: 'it is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})