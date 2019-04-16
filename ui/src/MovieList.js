import React, { Component } from "react";
import { Item } from "semantic-ui-react";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";
// import { threadId } from "worker_threads";

class MovieList extends Component {
  render() {
    // const movie = queryMovie;

    return (
      <Item>
        <Item.Image size="large" src={this.props.poster} />
        <Item.Content>
          <Item.Header as="a">{this.props.title}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

// const MOVIE_LIST_DATA = gql`
//   {
//     Movie(title: $title) {
//       movieId
//       title
//       year
//       imdbRating
//       plot
//       poster
//       recommend(offset: 3) {
//         title
//         poster
//       }
//       sameGenre(offset: 3) {
//         title
//         poster
//       }
//     }
//   }
// `;

export default MovieList;
