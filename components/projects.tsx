"use client"

import { ExternalLink, Github, ArrowRight, Star, Calendar } from "lucide-react"
import Link from "next/link"
import RevealAnimation from "./reveal-animation"
import StaggerContainer from "./stagger-container"
import GradientBackground from "./gradient-background"
import TechTag from "./tech-tag"
import { useResponsiveItems } from "../hooks/use-responsive-items"
import { getProjects } from "../data/portfolio-data"

export default function Projects() {
  const allProjects = getProjects()
  const itemCount = useResponsiveItems({ mobileCount: 3, desktopCount: 6 })
  const displayedProjects = allProjects.slice(0, itemCount)
  const hasMoreProjects = allProjects.length > itemCount

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealAnimation direction="up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-gray-300 text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Discover my latest work featuring modern web applications, innovative solutions, and cutting-edge
              technologies.
            </p>
          </div>
        </RevealAnimation>

        <StaggerContainer staggerDelay={150}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div key={project.id} className="group relative">
                <GradientBackground
                  variant="card"
                  className="h-full rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group border border-gray-700 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Enhanced project image */}
                  <div className="relative overflow-hidden aspect-video">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center relative">
                      {
                        project.cover ? 
<img src={project.cover} alt="" className="h-full w-full object-cover"/>:
                      <div className="text-white text-5xl font-bold opacity-20">💻</div>
                      }

                      {/* Overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 group-hover:opacity-80 transition-opacity duration-300"></div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Hover overlay with actions */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                            >
                              <Github className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <TechTag key={tech} technology={tech} variant="secondary" size="sm" />
                        ))}
                        {project.technologies.length > 3 && (
                          <TechTag technology={`+${project.technologies.length - 3}`} variant="default" size="sm" />
                        )}
                      </div>
                    </div>

                    {/* Project stats */}
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>2024</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                          <span>Active</span>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                        <span className="mr-1">View</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </GradientBackground>
              </div>
            ))}
          </div>
        </StaggerContainer>

        {/* Enhanced See All Button */}
        {hasMoreProjects && (
          <RevealAnimation direction="up" delay={300}>
            <div className="text-center mt-16">
              <div className="relative cursor-pointer inline-block">
                <Link
                  href="/projects"
                  passHref
                  className="group cursor-pointer relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    See All Projects
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300"></div>
              </div>
              <p className="text-gray-400 text-sm mt-4 flex items-center justify-center">
                <span>
                  Showing {displayedProjects.length} of {allProjects.length} projects
                </span>
                <div className="w-2 h-2 bg-blue-400 rounded-full ml-2 animate-pulse"></div>
              </p>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  )
}
