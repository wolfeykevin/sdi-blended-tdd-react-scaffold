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

app.get('/movies',(req,res) => {
    const query = decodeURIComponent(req.query.search)
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))

    res.send(filteredMovies)
});

// UNCOMMENT CODE BELOW FOR STRETCH GOALS
// const reviews = [{email: 'johndoe@gmail.com', movieId: 1, reviewTitle: "Director is a scumbag", reviewText: "I can't believe Gunn said those things on Twitter... Makes me not want to watch this movie!!!"}]
// const users = [{email: 'johndoe@gmail.com', password: 'password'}];

// app.get('/reviews/:movieId', (req, res) => res.json(reviews.filter(review => review.movieId === +req.params.movieId)))
// app.post('/reviews',function(req,res){

//     let result;
//     const review = req.body;
//     if(review.email && review.movieId && review.reviewTitle && review.reviewText){
//         reviews.push({ email: review.email, movieId: review.movieId, reviewTitle: review.reviewTitle, reviewText: review.reviewText })

//         result = {
//             "status": "success",
//             "message": "The review has been successfully added"
//         }
//     }else{
//         result = {
//             "status": "failed",
//             "message": "The review has not been added"
//         }
//         res.status(400);
//     }

//     res.json(result);
// });

// app.post('/register',function(req,res){

//     let result;
//     const user = {email: req.body.email, password: req.body.password};
//     if(user.email && user.password){
//         const existingUserIndex = users.findIndex(oldUser => oldUser.email === user.email)
//         existingUserIndex === -1 ? users.push(user) : users.splice(existingUserIndex, 1, user);

//         result = {
//             "status": "success",
//             "message": "The account has been successfully created"
//         }

//     }else{
//         result = {
//             "status": "failed",
//             "message": "The account has not been created"
//         }
//         res.status(400);
//     }
//     res.json(result);
// });


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
