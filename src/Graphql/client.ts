import { ApolloClient, HttpLink, from, InMemoryCache } from "@apollo/client";

const link = from([
  new HttpLink({ uri: "https://graphql-weather-api.herokuapp.com" }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
