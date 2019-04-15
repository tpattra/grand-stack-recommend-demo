import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    Movie(title: $title) {
      movieId
      title
      year
      imdbRating
      plot
      poster
      recommend(offset: 3) {
        title
        poster
      }
      sameGenre(offset: 3) {
        title
        poster
      }
    }
  }
`;

const queryMovie = title => (
  <Query query={FEED_QUERY} variable={{ title }}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error has occured!</div>;
      if (data.movie.length === 0) return <div>No movie with this title!</div>;
    }}
  </Query>
);

class MovieList extends Component {
  render() {
    const movie = queryMovie;

    return (
      <Item>
        <Item.Image size="large" src={movie.poster} />
        <Item.Content>
          <Item.Header as="a">{movie.title}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default MovieList;
