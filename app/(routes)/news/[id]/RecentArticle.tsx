import StyledLink from "@/app/_components/StyledLink";
import { ArticleInfo } from "@/app/_types";
import { formatDate } from "@/app/_utils/utils";

interface Props {
  article: ArticleInfo;
}

export function RecentArticle(props: Props) {
  const { article } = props;

  const formattedDate = formatDate(article.publishDate);

  return (
    <div className="px-5 py-2.5">
      <div className="pb-1.5">{formattedDate}</div>
      <StyledLink href={`/news/${article.id}`} key={article.id}>
        {article.title}
      </StyledLink>
    </div>
  );
}

export default RecentArticle;
