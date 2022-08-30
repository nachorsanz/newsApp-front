import Image from "next/image";
import { Article } from "../../utils/types";
import styles from "../../styles/Article.module.css";

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className={styles.container}>
      {articles?.map((article, index) => (
        <article key={index} className={styles.new}>
          <Image
            src={article.urlToImage}
            alt={`title ${article.title}`}
            width={450}
            height={300}
            layout="responsive"
          />
          <h1>{article.title}</h1>
          <h4>{article.author || "Agency"}</h4>
          <p>{article.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Articles;
