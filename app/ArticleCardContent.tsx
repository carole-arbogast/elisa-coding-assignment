import Link from "next/link";
import Card from "./Card";
import { ArticleInfo } from "./page";
import format from "date-fns/format";

interface Props {
  article: ArticleInfo;
}

export function ArticleCardContent(props: Props) {
  const { article } = props;
  const publishDate = new Date(article.publishDate);
  const formattedDate = `${format(publishDate, "dd.MM.yyyy | H.m")}`;

  return (
    <Card key={article.id}>
      <div className="pb-2">{formattedDate}</div>
      <Link
        href={`news/${article.id}`}
        className="text-link hover:text-link-hover hover:underline"
      >
        {article.title}
      </Link>
    </Card>
  );
}

export default ArticleCardContent;
