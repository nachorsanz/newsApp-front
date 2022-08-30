import type { NextPage } from "next";

import PageLayout from "./PageLayout";

import Articles from "../components/Articles/ArticlesComponent";
import { client } from "../utils/definitions";
import { Article } from "../utils/types";
import { getNews } from "../utils/queries";
interface HomeProps {
  data: { getNews: Article[] };
  children: HTMLElement;
}

const Home: NextPage<HomeProps> = (props) => {
  const getNews: Article[] = props.data.getNews;

  return (
    <PageLayout title="HOME">
      <Articles articles={getNews} />
    </PageLayout>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: getNews,
    variables: { topic: "iphone", date: "2022-08-15", language: "en" },
  });
  return {
    props: {
      data,
    },
  };
}
