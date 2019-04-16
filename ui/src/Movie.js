import React, { Component } from "react";
import { Item, Grid, Label } from "semantic-ui-react";

class Movie extends Component {
  render() {
    return (
      <item>
        <Item.Image size="Massive" src={this.props.poster} />
        <Item.Header> this.props.title </Item.Header>
      </item>
    );
  }
}

export default Movie;
