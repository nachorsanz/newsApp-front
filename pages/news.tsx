import type { NextPage } from "next";

import PageLayout from "../components/PageLayout";

import Articles from "../components/Articles/ArticlesComponent";
import { client } from "../utils/definitions";
import { Article } from "../utils/types";
import { getNews } from "../utils/queries";

interface NewsProps {
  data: { getNews: Article[] };
  children: HTMLElement;
}

const News: NextPage<NewsProps> = (props) => {
  const getNews: Article[] = props.data.getNews;

  return (
    <PageLayout title="news">
      <Articles articles={getNews} />
    </PageLayout>
  );
};

export default News;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: getNews,
    variables: { topic: "league", date: "2022-08-15", language: "en" },
  });
  return {
    props: {
      data,
    },
  };
}