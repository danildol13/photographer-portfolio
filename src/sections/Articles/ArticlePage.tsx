import css from "./ArticlePage.module.css";

const articles = [
  {
    id: 1,
    image: "/images/firstArticle.png",
    title: "What is the story behind tattooing",
    date: "Feb 16, 2021",
    alt: "first",
  },
  {
    id: 2,
    image: "/images/secondArticle.png",
    title: "Top 10 tattoo myths & misconceptions",
    date: "Feb 17, 2021",
    alt: "second",
  },
  {
    id: 3,
    image: "/images/thirdArticle.png",
    title: "Unbelievable benefits of doing tattoo",
    date: "Feb 20, 2021",
    alt: "third",
  },
];

export default function ArticlePage() {
  return (
    <section className={css.articleSession}>
      <div className={css.container}>
        <ul className={css.list}>
          {articles.map((article) => (
            <li key={article.id} className={css.oneArticle}>
              <p className={css.title}>ARTICLES:</p>
              <button type="button" className={css.bttn}>
                <img
                  src={article.image}
                  alt={article.alt}
                  className={css.picture}
                />
              </button>

              <h2 className={css.description}>{article.title}</h2>
              <span className={css.date}>{article.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
