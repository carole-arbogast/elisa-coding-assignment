export interface ArticleInfo {
  id: string;
  creationDate: string;
  publishDate: string;
  title: string;
}

interface Article extends ArticleInfo {
  content: string;
}
