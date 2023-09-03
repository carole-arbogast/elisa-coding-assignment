import { ArticleInfo, request } from "@/app/page";
import { format } from "date-fns";

interface Article {
  id: string;
  creationDate: Date;
  publishDate: string;
  title: string;
  content: string;
}

const getData = async (id: string) => {
  const res = await request<Article>(
    `https://esco.elisa.fi/rest/esco/bulletin/id/${id}`
  );
  return res;
};

export async function NewsArticle({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  const publishDate = new Date(data.publishDate);
  const formattedDate = `${format(publishDate, "dd.MM.yyyy H.m")}`;

  return (
    <div>
      {formattedDate}
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
    </div>
  );
}

export default NewsArticle;
