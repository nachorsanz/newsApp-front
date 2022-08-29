import Image from "next/image"
import { ReactElement } from "react"

type Articulo = {
    author: string,
    title: string,
    description: string,
    urlToImage: string,
   }
export default function Articles (articles : Articulo[]): ReactElement{
  return  (
  <div>
    {articles?.map((article, index)=> 
      (<article key={index}>
        <Image src={  article.urlToImage} alt={`title ${article.title}`} width={450} height={300} layout="responsive" />
      <h1>{article.title}</h1>
      <h4>{article.author || "Agency"}</h4>
      <p>{article.description}</p>

    </article>)
    )}
    </div>
    )
}