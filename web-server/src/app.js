const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') //lo use para agregar css y js antes de hbs
const viewsPath = path.join(__dirname, '../templates/views') //lo usa res.render para buscar todo en la carpeta "templates/views" y no la "views" que es la por defecto
const partialsPath = path.join(__dirname, '../templates/partials') //lo uso para q los {{<footer}} lo busquen por aca

//Setup handlebars engine and views location
app.set('view engine','hbs') //other alternative its ejs(bootcamp)
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        helpText: 'This is the important help',
        title: 'Help',
        name: 'FDR'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'it is snowing',
        location: 'Philadelphia'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'help/404',
        errorMessage: 'Help article not found',
        name: 'FDR'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'FDR'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

//si pongo res.send (envia como json)
// app.get('/weather', (req, res) => {
//     res.send('string cualquiera')
// })
//si pongo res.render (renderiza la pagina)


//////////////////// NODEMON
//nodemon src/app.js -e js, hbs, css