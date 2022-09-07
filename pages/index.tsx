import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import PageLayout from "../components/PageLayout";
import LinkAsButton from "../components/Minor/LinkAsButton";

const Home: NextPage = () => {
  return (
    <PageLayout title="Home">
      <div className={styles.buttonContainer}>
        <LinkAsButton link="news" text="News App"/>
        <LinkAsButton link="star-wars" text="Star Wars App"/>
      </div>
    </PageLayout>
  );
};

export default Home;
