import Head from "next/head";
import { FunctionComponent } from "react";

import styles from "../styles/Home.module.css";

interface PageLayoutProps {
  title: string;
  children: JSX.Element;
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.pageContainer}>{children}</main>
    </>
  );
};

export default PageLayout;
