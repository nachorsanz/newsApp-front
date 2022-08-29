import Head from "next/head";
import { FunctionComponent } from "react";

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
      <main>{children}</main>
    </>
  );
};

export default PageLayout;