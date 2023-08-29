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
const navbarItems = {
  rightSide: [
    {
      title: "ELISA",
      url: "/",
    },
    {
      title: "Tuotteet ja palvelut",
      url: "/",
    },
    {
      title: "5G",
      url: "/",
    },
    {
      title: "Ideat",
      url: "/",
    },
    {
      title: "Asiakaspalvelu ja tuki",
      url: "/",
    },
    {
      title: "OmaElisa 24/7",
      url: "/",
    },
  ],
  leftSide: [
    {
      title: "SEARCH",
      url: "/",
    },
    {
      title: "CART",
      url: "/",
    },
    {
      title: "KIRJAUDU",
      url: "/",
    },
  ],
};

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
      <nav className="flex">
        <ol className="flex px-5">
          {navbarItems.rightSide.map((item) => (
            <li key={item.title} className="px-2">
              {item.title}
            </li>
          ))}
        </ol>
        <ol className="flex ml-auto px-5">
          {navbarItems.leftSide.map((item) => (
            <li key={item.title} className="px-2">
              {item.title}
            </li>
          ))}
        </ol>
      </nav>
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
