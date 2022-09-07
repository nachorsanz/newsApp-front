import Image from "next/image";
import { Article } from "../../utils/types";
import styles from "../../styles/Article.module.css";

interface ArticleComponentProps {
  article: Article;
}

const ArticleComponent = ({ article }: ArticleComponentProps) => {
  return (
    <article className={styles.new}>
      <Image
        src={article.urlToImage}
        alt={article.title}
        width={450}
        height={300}
      />
      <a href={article.url} target="blank" className={styles.title}>
        <h3>{article.title}</h3>
      </a>
      <div>
        <h4>{article.author}</h4>
        <p>{article.description}</p>
      </div>
    </article>
  );
};
export default ArticleComponent;
