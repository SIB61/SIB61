"use client"

import { Calendar, User, ExternalLink } from "lucide-react"

type MediumPost = {
  title: string
  link: string
  pubDate: string
  author: string
  thumbnail: string
  description: string
  categories: string[]
}


interface MediumPostCardProps {
  post: MediumPost
}

export default function MediumPostCard({ post }: MediumPostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-md mx-auto">
        <div className="relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-200 group shadow-lg hover:shadow-xl">
          {/* Thumbnail */}
          <div className="relative overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <div className="text-white text-6xl font-bold opacity-20">📝</div>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-3">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {post.categories.slice(0, 3).map((category, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200"
                  >
                    {category}
                  </span>
                ))}
                {post.categories.length > 3 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200">
                    +{post.categories.length - 3}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">{post.description}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between w-full text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.pubDate)}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Clickable overlay */}
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
            <span className="sr-only">Read {post.title}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

// Dummy data
const dummyPosts: MediumPost[] = [
  {
    title: "Building Scalable React Applications with Modern Architecture Patterns",
    link: "https://medium.com/@johndeveloper/building-scalable-react-apps",
    pubDate: "2024-01-15T10:30:00Z",
    author: "John Developer",
    thumbnail: "",
    description:
      "Explore advanced patterns and best practices for building maintainable React applications that scale. Learn about component composition, state management strategies, and performance optimization techniques that will take your React skills to the next level.",
    categories: ["React", "JavaScript", "Web Development", "Architecture", "Frontend"],
  },
  {
    title: "The Future of AI in Web Development: What Every Developer Should Know",
    link: "https://medium.com/@sarahtech/ai-web-development-future",
    pubDate: "2024-01-10T14:20:00Z",
    author: "Sarah Tech",
    thumbnail: "",
    description:
      "Artificial Intelligence is revolutionizing how we build web applications. From automated code generation to intelligent user interfaces, discover the tools and techniques that are shaping the future of web development.",
    categories: ["AI", "Machine Learning", "Web Development", "Future Tech", "Innovation"],
  },
  {
    title: "Mastering TypeScript: Advanced Types and Patterns for Better Code",
    link: "https://medium.com/@mikecoder/mastering-typescript-advanced",
    pubDate: "2024-01-05T09:15:00Z",
    author: "Mike Coder",
    thumbnail: "",
    description:
      "Deep dive into TypeScript's advanced type system. Learn about conditional types, mapped types, template literal types, and how to leverage them to write more robust and maintainable code.",
    categories: ["TypeScript", "JavaScript", "Programming", "Software Engineering"],
  },
]

// Example usage with multiple cards
export function MediumPostCardDemo() {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">My Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyPosts.map((post, index) => (
            <div key={index} className="max-w-md mx-auto w-full">
              <div className="relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-200 group shadow-lg hover:shadow-xl">
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <div className="text-white text-6xl font-bold opacity-20">📝</div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {post.categories.slice(0, 3).map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200"
                        >
                          {category}
                        </span>
                      ))}
                      {post.categories.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200">
                          +{post.categories.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">{post.description}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between w-full text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.pubDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Clickable overlay */}
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                  <span className="sr-only">Read {post.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
