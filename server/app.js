const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const movies = JSON.parse(fs.readFileSync("movies.JSON"))

app.get('/movies', (req, res) => res.json(movies))
app.get('/movies/:movieId', (req, res) => res.send(movies.find(movie => movie.movieId === +req.params.movieId)))

app.get('/search',(req,res) => {
    const query = decodeURIComponent(req.query.search)
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query))

    res.send(filteredMovies)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))