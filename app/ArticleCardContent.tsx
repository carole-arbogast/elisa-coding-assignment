import Link from "next/link";
import Card from "./_components/Card";
import format from "date-fns/format";
import { StyledLink } from "./_components/StyledLink";
import { ArticleInfo } from "./_types";
import { formatDate } from "./_utils/utils";

interface Props {
  article: ArticleInfo;
}

export function ArticleCardContent(props: Props) {
  const { article } = props;
  const formattedDate = formatDate(article.publishDate, "dd.MM.yyyy | H.mm");

  return (
    <Card key={article.id}>
      <div className="pb-2">{formattedDate}</div>
      <StyledLink href={`news/${article.id}`}>{article.title}</StyledLink>
    </Card>
  );
}

export default ArticleCardContent;
