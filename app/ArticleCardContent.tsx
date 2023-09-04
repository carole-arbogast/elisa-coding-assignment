import Link from "next/link";
import Card from "./_components/Card";
import format from "date-fns/format";
import { StyledLink } from "./_components/StyledLink";
import { ArticleInfo } from "./_types";

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
