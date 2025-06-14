'use client';

import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import RevealAnimation from './reveal-animation';
import StaggerContainer from './stagger-container';
import { useResponsiveItems } from '../hooks/use-responsive-items';
import { getProjects } from '../data/portfolio-data';
import ProjectCard from './project-card';

export default function Projects() {
  const allProjects = getProjects();
  const itemCount = useResponsiveItems({ mobileCount: 3, desktopCount: 6 });
  const displayedProjects = allProjects.slice(0, itemCount);
  const hasMoreProjects = allProjects.length > itemCount;

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Discover my latest work featuring modern web applications,
              innovative solutions, and cutting-edge technologies.
            </p>
          </div>
        </RevealAnimation>

        <StaggerContainer staggerDelay={150}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="default"
              />
            ))}
          </div>
        </StaggerContainer>

        {/* Enhanced See All Button */}
        {hasMoreProjects && (
          <RevealAnimation direction="up" delay={300}>
            <div className="text-center mt-16">
              <Link
                passHref
                href={'/projects'}
                className="relative inline-block"
              >
                <div className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    See All Projects
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300"></div>
              </Link>
              <div className="text-gray-400 text-sm mt-4 flex items-center justify-center">
                <span>
                  Showing {displayedProjects.length} of {allProjects.length}{' '}
                  projects
                </span>
                <div className="w-2 h-2 bg-blue-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
}
