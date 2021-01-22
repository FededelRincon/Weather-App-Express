const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') //lo use para agregar css y js antes de hbs
const viewsPath = path.join(__dirname, '../templates') //lo uso para meter todo en la carpeta "templates" y no la "views" que es la por defecto

//Setup handlebars engine and views location
app.set('view engine','hbs') //other alternative its ejs(bootcamp)
app.set('views', viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))
    //http://localhost:3000/
    //http://localhost:3000/about

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'FDR'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'FDR'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help ejs',
        name:'FDR'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'it is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})