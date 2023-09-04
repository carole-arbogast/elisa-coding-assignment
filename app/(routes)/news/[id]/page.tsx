import { format } from "date-fns";
import RecentArticle from "./RecentArticle";
import { formatDate, getArticle, getRecentArticles } from "@/app/_utils/utils";

async function NewsArticle({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  const recentArticles = await getRecentArticles();

  // Get last 5 articles, excluding current one. This assumes that the API returns the articles chronologically.
  const recentArticlesToDisplay = recentArticles
    .filter((article) => article.id !== params.id)
    .slice(6);

  const formattedDate = formatDate(article.publishDate);

  return (
    <>
      <div className="m-auto px-10 py-6 lg:max-w-904px lg:pt-12 lg:flex">
        <div className="pr-10 lg:max-w-1/3">
          {formattedDate}
          <h1>{article.title}</h1>
          <article
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></article>
        </div>
        <div className="hidden lg:flex lg:flex-col ">
          {recentArticlesToDisplay.map((article) => (
            <RecentArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewsArticle;
