import { Article, ArticleInfo } from "../_types";

// Custom fetch to make typing response easier
export const request = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    return Promise.reject("error");
  }
  return res.json() as T;
};

export const getArticle = async (id: string) => {
  const res = await request<Article>(
    `https://esco.elisa.fi/rest/esco/bulletin/id/${id}`
  );
  return res;
};

export const getRecentArticles = async () => {
  const res = await request<ArticleInfo[]>(
    "https://esco.elisa.fi/rest/esco/bulletin/list?tags=corporate.elisa.fi:national-press&maxResults=10"
  );
  return res;
};
