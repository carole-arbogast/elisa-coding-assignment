/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ElisaLogo from "../public/elisa.png";
import Navbar from "./Navbar";
interface Article {
  id: string;
  creationDate: Date;
  publishDate: Date;
  title: string;
  // FIXME better type
  siteSpecificTags: object;
}

const request = async <T,>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    return Promise.reject("error");
  }
  return res.json() as T;
};

// TODO make space for icons + button instead of link

const getData = async () => {
  const res = await request<Article[]>(
    "https://esco.elisa.fi/rest/esco/bulletin/list?tags=corporate.elisa.fi:national-press&maxResults=10"
  );
  return res;
};

export default async function Home() {
  // TODO Write types
  const data = await getData();

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>ELISA NEWS</h1>
        {data.map((article) => (
          <article key={article.id}>
            <h2>{article.title}</h2>
          </article>
        ))}
      </main>
    </>
  );
}
