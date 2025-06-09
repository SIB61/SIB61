"use client"

import { Calendar, User, ExternalLink, ArrowRight, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import RevealAnimation from "./reveal-animation"
import StaggerContainer from "./stagger-container"
import GradientBackground from "./gradient-background"
import TechTag from "./tech-tag"
import { useResponsiveItems } from "../hooks/use-responsive-items"
import { Article } from "../data/portfolio-data"

export default function Articles({allArticles}:{allArticles: Article[]}) {
  const itemCount = useResponsiveItems({ mobileCount: 3, desktopCount: 6 })
  const displayedArticles = allArticles.slice(0, itemCount)
  const hasMoreArticles = allArticles.length > itemCount

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getReadingTime = (description: string) => {
    const wordsPerMinute = 200
    const wordCount = description.split(" ").length
    return Math.ceil(wordCount / wordsPerMinute)
  }

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Dive into my thoughts on software development, technology trends, and programming best practices.
            </p>
          </div>
        </RevealAnimation>

        <StaggerContainer staggerDelay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article, index) => (
              <div key={article.id} className="group relative">
                <GradientBackground
                  variant="card"
                  className="h-full border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:rounded-2xl transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:transform hover:scale-[1.02]"
                >
                  {/* Enhanced thumbnail */}
                  <div className="relative overflow-hidden aspect-video">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                      {
                        article.thumbnail ? 
                        <img src={article.thumbnail} className="h-full w-full object-cover" alt="" />
                        :
                      <div className="text-white text-6xl font-bold opacity-20">📝</div>
                      }

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

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <div className="p-6 flex flex-col h-1/2">
                    <div className="flex-1">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.categories.slice(0, 2).map((category, catIndex) => (
                          <TechTag key={catIndex} technology={category} variant="primary" size="sm" />
                        ))}
                        {article.categories.length > 2 && (
                          <TechTag technology={`+${article.categories.length - 2}`} variant="secondary" size="sm" />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-300 leading-tight mb-3">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed mb-4">{article.description}</p>
                    </div>

                    {/* Enhanced footer */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3 text-gray-400">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span className="truncate">{article.author.split(" ")[0]}</span>
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
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                    <span className="sr-only">Read {article.title}</span>
                  </a>
                </GradientBackground>
              </div>
            ))}
          </div>
        </StaggerContainer>

        {/* Enhanced See All Button */}
        {hasMoreArticles && (
          <RevealAnimation direction="up" delay={300}>
            <div className="text-center mt-16">
              <div className="relative inline-block">
                <Link
                  href="/articles"
                  className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    See All Articles
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300"></div>
              </div>
              <p className="text-gray-400 text-sm mt-4 flex items-center justify-center">
                <span>
                  Showing {displayedArticles.length} of {allArticles.length} articles
                </span>
                <div className="w-2 h-2 bg-purple-400 rounded-full ml-2 animate-pulse"></div>
              </p>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  )
}
