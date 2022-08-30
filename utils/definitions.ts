import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: "http://localhost:4000/",
  // Additional options
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
