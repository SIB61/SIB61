'use client';

import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import RevealAnimation from './reveal-animation';
import StaggerContainer from './stagger-container';
import GradientBackground from './gradient-background';
import { useResponsiveItems } from '../hooks/use-responsive-items';
import { Article, getArticles } from '../data/portfolio-data';
import ArticleCard from './article-card';
import { useEffect, useState } from 'react';

export default function Articles() {
  const [allArticles,setAllArticles] = useState<Article[]>([])
  const itemCount = useResponsiveItems({ mobileCount: 3, desktopCount: 6 });
  const displayedArticles = allArticles.slice(0, itemCount);
  const hasMoreArticles = allArticles.length > itemCount;

  useEffect(()=>{
    getArticles().then(articles=>setAllArticles(articles))
  },[])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getReadingTime = (description: string) => {
    const wordsPerMinute = 200;
    const wordCount = description.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <section id="articles" className="py-20 px-4 relative overflow-hidden">
      <GradientBackground variant="section" className="absolute inset-0" />

      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealAnimation direction="up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 mb-6">
              <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-gray-300 text-sm">Knowledge Sharing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Dive into my thoughts on software development, technology trends,
              and programming best practices.
            </p>
          </div>
        </RevealAnimation>

        <StaggerContainer staggerDelay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="default"
              />
            ))}
          </div>
        </StaggerContainer>

        {/* Enhanced See All Button */}
        {hasMoreArticles && (
          <RevealAnimation direction="up" delay={300}>
            <div className="text-center mt-16">
              <Link
                passHref
                href={'/articles'}
                className="relative inline-block"
              >
                <div className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    See All Articles
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300"></div>
              </Link>
              <div className="text-gray-400 text-sm mt-4 flex items-center justify-center">
                <span>
                  Showing {displayedArticles.length} of {allArticles.length}{' '}
                  articles
                </span>
                <div className="w-2 h-2 bg-purple-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
}
