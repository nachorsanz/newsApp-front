import { gql } from "@apollo/client";

export const getNews = gql`
  query GetNews($topic: String!, $date: String!, $language: String!) {
    getNews(topic: $topic, date: $date, language: $language) {
      title
      author
      description
      urlToImage
    }
  }
`;
