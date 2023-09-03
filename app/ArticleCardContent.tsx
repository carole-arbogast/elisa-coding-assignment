import Link from "next/link";
import Card from "./Card";
import { ArticleInfo } from "./page";
import format from "date-fns/format";
import { StyledLink } from "./StyledLink";

interface Props {
  article: ArticleInfo;
}

export function ArticleCardContent(props: Props) {
  const { article } = props;
  const publishDate = new Date(article.publishDate);
  const formattedDate = `${format(publishDate, "dd.MM.yyyy | H.mm")}`;

  return (
    <Card key={article.id}>
      <div className="pb-2">{formattedDate}</div>
      <StyledLink href={`news/${article.id}`}>{article.title}</StyledLink>
    </Card>
  );
}

export default ArticleCardContent;
