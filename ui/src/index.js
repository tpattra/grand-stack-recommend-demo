import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

client
  .query({
    query: gql`
      {
        Movie {
          movieId
          title
        }
      }
    `
  })
  .then(response => console.log(response.data.title));

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
