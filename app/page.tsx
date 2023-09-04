import ArticleCardContent from "./ArticleCardContent";
import { getRecentArticles } from "./_utils/utils";

export default async function Home() {
  const data = await getRecentArticles();

  return (
    <>
      <main className="">
        <h1 className="text-center">Uusimmat lehdistötiedotteet</h1>
        <div className="grid grid-cols-fluid gap-x-6 max-w-7xl m-auto">
          {data.map((article) => (
            <ArticleCardContent key={article.id} article={article} />
          ))}
        </div>
      </main>
    </>
  );
}
