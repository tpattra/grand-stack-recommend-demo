# GRANDstack Recommended Movie demo

This is the project I created based on the GRANDstack starter provided in their Github founded here https://github.com/grand-stack/grand-stack-starter so I can get a hand on developing a web app with GRANDstack.

The project is movie recommendation web app, starting with user searching any movie with its title or part of the title and the result would show the information of the relevant movie (if any) along with the movies that in the same genres and the movies that other users who watched this movie also like ( user gives rating >= 3 ).


**Main tech stack**
Neo4j, GraphQL, Apollo, and React

**Others**
Zeit Now: Using for deploy node server for the API and the application itself.
UI: Using reatc libraries such as Sematic UI React
Neo4j database: Using Neo4j sandbox that comes with the prompt movies dataset. 

(Please note that the prompt values for movies' posters are not valid due to IMDB licensing those images. The images from OMDb API are used instead ( see http://www.omdbapi.com/ ).



#### This project is still working in progress.


## API
The GraphQL playground is ready to use at https://api.tpattra.now.sh/src

Example for the queries that uses in the app that the result can be seen in the playground as well.
```
query{
  movie(title: "tOy StOrY") {
    movieId
    title
    year
    genres
    imdbRating
    plot
    poster
    recommend (first:3)  {
      title
      poster
    }
    sameGenre (first:3)  {
      title
      poster
    }
  }
}
```

