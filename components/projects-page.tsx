"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowLeft, Filter } from "lucide-react"
import Link from "next/link"
import RevealAnimation from "./reveal-animation"
import StaggerContainer from "./stagger-container"
import GradientBackground from "./gradient-background"
import TechTag from "./tech-tag"
import Navigation from "./navigation"
import { getProjects } from "../data/portfolio-data"

export default function ProjectsPage() {
  const allProjects = getProjects()
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  // Get all unique technologies
  const allTechnologies = Array.from(new Set(allProjects.flatMap((project) => project.technologies))).sort()

  // Filter projects based on selected criteria
  const filteredProjects = allProjects.filter((project) => {
    if (showFeaturedOnly && !project.featured) return false
    if (selectedTech && !project.technologies.includes(selectedTech)) return false
    return true
  })

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 px-4 relative">
        <GradientBackground variant="hero" className="absolute inset-0" />

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
                href="/#projects"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">All Projects</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Explore my complete collection of projects, from web applications to mobile apps and open-source
                libraries.
              </p>
            </div>
          </RevealAnimation>

          {/* Filters */}
          <RevealAnimation direction="up" delay={200}>
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 font-medium">Filter by:</span>
                </div>

                <button
                  onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    showFeaturedOnly
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  Featured Only
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech(null)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    selectedTech === null
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  All Technologies
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                      selectedTech === tech
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* Projects Grid */}
          <StaggerContainer staggerDelay={100}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <GradientBackground
                  key={project.id}
                  variant="card"
                  className="rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-gray-700 hover:border-blue-500/50 shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 flex items-center justify-center relative">
                      <div className="text-white text-4xl font-bold opacity-20">💻</div>
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
                          >
                            <Github className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechTag key={tech} technology={tech} variant="secondary" size="sm" />
                      ))}
                    </div>
                  </div>
                </GradientBackground>
              ))}
            </div>
          </StaggerContainer>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <RevealAnimation direction="up" delay={300}>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-gray-400">Try adjusting your filters to see more projects.</p>
              </div>
            </RevealAnimation>
          )}

          {/* Stats */}
          <RevealAnimation direction="up" delay={400}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                <span className="text-gray-300">
                  Showing <span className="text-blue-400 font-bold">{filteredProjects.length}</span> of{" "}
                  <span className="text-blue-400 font-bold">{allProjects.length}</span> projects
                </span>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  )
}
