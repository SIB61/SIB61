'use client';

import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import GradientBackground from './gradient-background';
import TechTag from './tech-tag';
import { Project } from '@/data/portfolio-data';


interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact';
}

export default function ProjectCard({
  project,
  variant = 'default',
}: ProjectCardProps) {
  return (
    <div className="group relative">
      <GradientBackground
        variant="card"
        className={`h-full rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group border border-gray-700 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 ${
          variant === 'compact' ? 'max-w-md' : ''
        }`}
      >
        {/* Enhanced project image */}
        <div className={`relative overflow-hidden aspect-video`}>
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center relative">
            {project.cover ? (
              <img
                className="h-full w-full object-cover"
                src={project.cover}
                alt=""
              />
            ) : (
              <div
                className={`text-white font-bold opacity-20 ${variant === 'compact' ? 'text-4xl' : 'text-5xl'}`}
              >
                💻
              </div>
            )}

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
        <div
          className={`p-6 flex flex-col h-max ${variant === 'compact' ? 'p-4' : ''}`}
        >
          <div className="flex-1">
            <h3
              className={`font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight ${
                variant === 'compact' ? 'text-lg' : 'text-xl'
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-gray-300 leading-relaxed mb-4 line-clamp-2 ${
                variant === 'compact' ? 'text-sm' : 'text-sm'
              }`}
            >
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <TechTag
                  key={tech}
                  technology={tech}
                  variant="secondary"
                  size="sm"
                />
              ))}
              {project.technologies.length > 3 && (
                <TechTag
                  technology={`+${project.technologies.length - 3}`}
                  variant="default"
                  size="sm"
                />
              )}
            </div>
          </div>

          {/* Project stats */}
          <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{project.timeline}</span>
              </div>
            </div>
            <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
              <span className="mr-1">View</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}
