import { Article } from "../../utils/types";
import styles from "../../styles/Article.module.css";
import ArticleComponent from "./ArticleComponent";

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className={styles.container}>
      {articles?.map((article, index) => (
        <ArticleComponent article={article} key={index} />
      ))}
    </div>
  );
};

export default Articles;
