import Article from './models/article.model';
import data from './data/seed';

class ArticleData {
  getData(): Article[] {
    const articles: Article[] = [];

    for (let i = 0; i < data.length; i++) {
      const currentArticle = new Article(
        data[i].title,
        data[i].description,
        data[i].author,
        data[i].imageUrl
      );

      articles.push(currentArticle);
    }

    return articles;
  };
};

export default ArticleData;