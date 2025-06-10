'use client';

import { useState } from 'react';
import { ArrowLeft, Filter } from 'lucide-react';
import Link from 'next/link';
import RevealAnimation from './reveal-animation';
import StaggerContainer from './stagger-container';
import GradientBackground from './gradient-background';
import Navigation from './navigation';
import { Article, getArticles } from '../data/portfolio-data';
import ArticleCard from './article-card';

export default function ArticlesPage({
  allArticles,
}: {
  allArticles: Article[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique categories
  const allCategories = Array.from(
    new Set(allArticles.flatMap((article) => article.categories))
  ).sort();

  // Filter articles based on selected category
  const filteredArticles = allArticles.filter((article) => {
    if (selectedCategory && !article.categories.includes(selectedCategory))
      return false;
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 px-4 relative">
        <GradientBackground variant="section" className="absolute inset-0" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <RevealAnimation direction="up">
            <div className="text-center mb-12">
              <Link
                href="/#articles"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                All Articles
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Dive into my thoughts on software development, technology
                trends, and programming best practices.
              </p>
            </div>
          </RevealAnimation>

          {/* Filters */}
          <RevealAnimation direction="up" delay={200}>
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-medium">
                    Filter by category:
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    selectedCategory === null
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All Categories
                </button>
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* Articles Grid */}
          <StaggerContainer staggerDelay={150}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="compact"
                />
              ))}
            </div>
          </StaggerContainer>

          {/* No results message */}
          {filteredArticles.length === 0 && (
            <RevealAnimation direction="up" delay={300}>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-400">
                  Try selecting a different category to see more articles.
                </p>
              </div>
            </RevealAnimation>
          )}

          {/* Stats */}
          <RevealAnimation direction="up" delay={400}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                <span className="text-gray-300">
                  Showing{' '}
                  <span className="text-blue-400 font-bold">
                    {filteredArticles.length}
                  </span>{' '}
                  of{' '}
                  <span className="text-blue-400 font-bold">
                    {allArticles.length}
                  </span>{' '}
                  articles
                </span>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
