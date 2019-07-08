const mongoose = require('mongoose');
const Movie = require('../models/Movie');


mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  const movieArray = [
    {
        title: "Forbidden Kingdom",
        genre: "Kung Fu (Wuxia)",
        plot: "Some kid gets transported to a Kung Fu world to help free the Monkey King"
    },
    {
        title: "Fast Five",
        genre: "Heist/Action",
        plot: "The Furious crew team up for a heist in Rio de Janeiro while avoiding a federal agent and a corrupt businessman."
    },
    {
        title: "Major Keys",
        genre: "Action/Fantasy",
        plot: "An ancient demon reawakens to the modern world, with no recollection of his abilities. He's forced to re-learn all his skills while fighting the Illuminati."
    },
  ];


Movie.create(movieArray)
.then(()=>{
console.log('it worked')
})
.catch(()=>{
console.log('it didnt work')
})
