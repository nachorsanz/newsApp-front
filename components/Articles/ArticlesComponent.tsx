import Image from "next/image";
import { Article } from "../../utils/types";

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div>
      {articles?.map((article, index) => (
        <article key={index}>
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
