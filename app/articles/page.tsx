import { getArticles } from '@/data/portfolio-data';
import ArticlesPage from '../../components/articles-page';

export default async function Articles() {
  const articles = await getArticles();
  return <ArticlesPage allArticles={articles} />;
}
