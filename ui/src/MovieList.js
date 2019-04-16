import React, { Component } from "react";
import { Item } from "semantic-ui-react";

class MovieList extends Component {
  data = {
    Movie: [
      {
        movieId: "1",
        title: "Toy Story",
        year: 1995,
        imdbRating: 8.3,
        plot:
          "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
        recommend: [
          {
            title: "Forrest Gump",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTI1Nzk1MzQwMV5BMl5BanBnXkFtZTYwODkxOTA5._V1_SX300.jpg"
          },
          {
            title: "Star Wars: Episode IV - A New Hope",
            poster:
              "https://m.media-amazon.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg"
          },
          {
            title: "Shawshank Redemption, The",
            poster:
              "https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
          }
        ],
        sameGenre: [
          {
            title: "Boxtrolls, The",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTQxODA5MDkyNV5BMl5BanBnXkFtZTgwMDMyNjkzMjE@._V1_SX300.jpg"
          },
          {
            title: "The Book of Life",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTkzOTgzNDYzOF5BMl5BanBnXkFtZTgwOTgxMTkyMjE@._V1_SX300.jpg"
          },
          {
            title: "Teenage Mutant Ninja Turtles",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNjUzODQ5MDY5NV5BMl5BanBnXkFtZTgwOTc1NzcyMjE@._V1_SX300.jpg"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <Item>
        <Item.Image size="large" src={this.data.poster} />
        <Item.Content>
          <Item.Header as="a">{this.data.title}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default MovieList;
