'use client';

import { Calendar, User, ExternalLink, Clock, BookOpen } from 'lucide-react';
import GradientBackground from './gradient-background';
import TechTag from './tech-tag';

interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact';
}

export default function ArticleCard({
  article,
  variant = 'default',
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: variant === 'compact' ? 'short' : 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (description: string) => {
    const wordsPerMinute = 200;
    const wordCount = description.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="group relative">
      <GradientBackground
        variant="card"
        className={`h-full border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:rounded-2xl transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:transform hover:scale-[1.02] ${
          variant === 'compact' ? 'max-w-md' : ''
        }`}
      >
        {/* Enhanced thumbnail */}
        <div className={`relative overflow-hidden aspect-video`}>
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
            {article.thumbnail ? (
              <img
                className="h-full w-full object-cover"
                src={article.thumbnail}
                alt=""
              />
            ) : (
              <div
                className={`text-white font-bold opacity-20 ${variant === 'compact' ? 'text-4xl' : 'text-6xl'}`}
              >
                📝
              </div>
            )}

            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

            {/* Reading time badge */}
            <div className="absolute top-4 left-4">
              <div className="flex items-center px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                <Clock className="w-3 h-3 mr-1" />
                {getReadingTime(article.description)} min read
              </div>
            </div>

            {/* Article type badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                <BookOpen className="w-3 h-3 mr-1" />
                Article
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Enhanced content */}
        <div
          className={`p-6 flex flex-col h-1/2 ${variant === 'compact' ? 'p-4' : ''}`}
        >
          <div className="flex-1">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.categories.slice(0, 2).map((category, catIndex) => (
                <TechTag
                  key={catIndex}
                  technology={category}
                  variant="primary"
                  size="sm"
                />
              ))}
              {article.categories.length > 2 && (
                <TechTag
                  technology={`+${article.categories.length - 2}`}
                  variant="secondary"
                  size="sm"
                />
              )}
            </div>

            {/* Title */}
            <h3
              className={`font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-300 leading-tight mb-3 ${
                variant === 'compact' ? 'text-lg' : 'text-xl'
              }`}
            >
              {article.title}
            </h3>

            {/* Description */}
            <p
              className={`text-gray-300 line-clamp-2 leading-relaxed mb-4 ${
                variant === 'compact' ? 'text-sm' : 'text-sm'
              }`}
            >
              {article.description}
            </p>
          </div>

          {/* Enhanced footer */}
          <div className="pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span className="truncate">
                    {article.author.split(' ')[0]}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(article.pubDate)}</span>
                </div>
              </div>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                <ExternalLink className="w-4 h-4 mr-1" />
                <span className="text-xs">Read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clickable overlay */}
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">Read {article.title}</span>
        </a>
      </GradientBackground>
    </div>
  );
}
