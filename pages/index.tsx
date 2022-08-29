import type { NextPage } from "next";

import { HttpLink, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import PageLayout from "./PageLayout";

import Articles from "../components/Articles/ArticlesComponent";

const link = new HttpLink({
  uri: "http://localhost:4000/",
  // Additional options
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

type Articulo = {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
};
interface Props {
  data: any;
  children: HTMLElement;
}

const Home: NextPage<Props> = (props) => {
  const getNews: Articulo[] = props.data.getNews;

  return (
    <PageLayout title="HOME">
      <Articles articles={getNews} />
    </PageLayout>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getNews(topic: "iphone", date: "2022-08-22", language: "es") {
          title
          author
          description
          urlToImage
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}
