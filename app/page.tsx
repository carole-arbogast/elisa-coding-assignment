import ArticleCardContent from "./ArticleCardContent";
import { Card } from "./Card";
import Link from "next/link";
export interface ArticleInfo {
  id: string;
  creationDate: Date;
  publishDate: Date;
  title: string;
}

export const request = async <T,>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    return Promise.reject("error");
  }
  return res.json() as T;
};

const getData = async () => {
  const res = await request<ArticleInfo[]>(
    "https://esco.elisa.fi/rest/esco/bulletin/list?tags=corporate.elisa.fi:national-press&maxResults=10"
  );
  return res;
};

export default async function Home() {
  const data = await getData();

  return (
    <>
      <main className="">
        <h1 className="text-center">Uusimmat lehdistötiedotteet</h1>
        <div className="grid grid-cols-fluid gap-x-6 mx-2">
          {data.map((article) => (
            <ArticleCardContent key={article.id} article={article} />
          ))}
        </div>
      </main>
    </>
  );
}
