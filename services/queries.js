import { gql } from "@apollo/client";

export const allNews = gql`
  query getNews {
    articles {
      title
      author
      description
      urlToImage
    }
  }
`;
