import StyledLink from "@/app/_components/StyledLink";
import { ArticleInfo } from "@/app/page";
import { format } from "date-fns";

interface Props {
  article: ArticleInfo;
}

export function RecentArticle(props: Props) {
  const { article } = props;
  //   TODO extract logic to format date
  const publishDate = new Date(article.publishDate);
  const formattedDate = `${format(publishDate, "dd.MM.yyyy H.mm")}`;

  return (
    <div className="px-5 py-2.5">
      <div className="pb-1.5">{formattedDate}</div>
      <StyledLink href={`news/${article.id}`} key={article.id}>
        {article.title}
      </StyledLink>
    </div>
  );
}

export default RecentArticle;
