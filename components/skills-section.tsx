'use client';

import { Code, Database, Cloud, Settings, Zap, Star } from 'lucide-react';
import RevealAnimation from './reveal-animation';
import GradientBackground from './gradient-background';
import { getSkills } from '../data/portfolio-data';
import { useState } from 'react';

// Technology icons mapping
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();

  // Frontend
  if (techLower.includes('react')) return '⚛️';
  if (techLower.includes('next')) return '▲';
  if (techLower.includes('typescript')) return '🔷';
  if (techLower.includes('angular')) return '🅰️';
  if (techLower.includes('vue')) return '💚';
  if (techLower.includes('tailwind')) return '🎨';
  if (techLower.includes('html')) return '🌐';
  if (techLower.includes('css')) return '🎨';
  if (techLower.includes('sass')) return '💄';

  // Backend
  if (techLower.includes('node')) return '🟢';
  if (techLower.includes('express')) return '🚀';
  if (techLower.includes('.net')) return '🔵';
  if (techLower.includes('prisma')) return '🔺';
  if (techLower.includes('graphql')) return '🔗';
  if (techLower.includes('rest')) return '🌐';
  if (techLower.includes('microservices')) return '🏗️';

  // Database
  if (techLower.includes('mongodb')) return '🍃';
  if (techLower.includes('postgresql')) return '🐘';
  if (techLower.includes('redis')) return '🔴';
  if (techLower.includes('firestore')) return '🔥';
  if (techLower.includes('mysql')) return '🐬';
  if (techLower.includes('sqlite')) return '📦';

  // Cloud & DevOps
  if (techLower.includes('aws')) return '☁️';
  if (techLower.includes('vercel')) return '▲';
  if (techLower.includes('firebase')) return '🔥';
  if (techLower.includes('docker')) return '🐳';
  if (techLower.includes('kubernetes')) return '⚙️';
  if (techLower.includes('netlify')) return '🌐';

  // Tools
  if (techLower.includes('git')) return '📝';
  if (techLower.includes('rabbitmq')) return '🐰';
  if (techLower.includes('signalr')) return '📡';
  if (techLower.includes('socket')) return '🔌';
  if (techLower.includes('webpack')) return '📦';
  if (techLower.includes('vite')) return '⚡';
  if (techLower.includes('jest')) return '🃏';
  if (techLower.includes('cypress')) return '🌲';

  // Default icon based on first letter
  return tech.charAt(0).toUpperCase();
};

export default function SkillsSection() {
  const skillsData = getSkills();
  const [activeCategory, setActiveCategory] = useState<string>('backend');
  const [expandedMobile, setExpandedMobile] = useState<string | null>(
    'backend'
  );

  const skillCategories = [
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Settings,
      color: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500',
      skills: skillsData.backend,
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500',
      skills: skillsData.frontend,
    },
    {
      id: 'database',
      title: 'Database & Storage',
      icon: Database,
      color: 'text-purple-400',
      gradient: 'from-purple-500 to-violet-500',
      skills: skillsData.database,
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-orange-400',
      gradient: 'from-orange-500 to-red-500',
      skills: skillsData.cloud,
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: Zap,
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      skills: skillsData.tools,
    },
  ];

  const activeSkillCategory =
    skillCategories.find((cat) => cat.id === activeCategory) ||
    skillCategories[0];

  const toggleMobileAccordion = (categoryId: string) => {
    if (expandedMobile === categoryId) {
      setExpandedMobile(null);
    } else {
      setExpandedMobile(categoryId);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <RevealAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise with a focus on
              design patterns and clean architecture.
            </p>
          </div>
        </RevealAnimation>

        {/* Desktop Layout: Side by side with arrow */}
        <div className="hidden md:flex gap-8 justify-center">
          {/* Category Navigation - Desktop */}
          <RevealAnimation direction="left" delay={200}>
            <div className="w-80 flex-shrink-0">
              <div className="space-y-3">
                {skillCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full p-4 rounded-lg transition-all duration-300 group text-left ${
                        isActive
                          ? 'bg-gradient-to-r ' +
                            category.gradient +
                            ' text-white shadow-lg transform scale-105'
                          : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            isActive
                              ? 'bg-white/20 backdrop-blur-sm'
                              : 'bg-gray-700 group-hover:bg-gray-600'
                          }`}
                        >
                          <IconComponent
                            className={`w-5 h-5 transition-colors duration-300 ${
                              isActive ? 'text-white' : category.color
                            }`}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{category.title}</h4>
                          <p className="text-sm opacity-75">
                            {category.skills.length} technologies
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </RevealAnimation>

          {/* Arrow Indicator */}

          {/* Skills Display - Desktop */}
          <RevealAnimation direction="right" delay={400}>
            <div className="flex-1 h-full max-w-4xl">
              <GradientBackground
                variant="card"
                className="p-8 rounded-xl border border-gray-700 relative overflow-hidden h-full"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
                  <div className="absolute inset-0 bg-dot-pattern"></div>
                </div>

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${activeSkillCategory.gradient} shadow-lg`}
                    >
                      <activeSkillCategory.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {activeSkillCategory.title}
                      </h3>
                      <p className="text-gray-400">
                        {activeSkillCategory.skills.length} technologies in this
                        category
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {activeSkillCategory.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="group relative"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                          {/* Skill Icon/Initial */}
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${activeSkillCategory.gradient} flex items-center justify-center shadow-lg`}
                            >
                              <span className="text-white font-bold text-lg">
                                {getTechIcon(skill)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-sm truncate">
                                {skill}
                              </h4>
                              <div className="flex items-center space-x-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < 4
                                        ? activeSkillCategory.color
                                        : 'text-gray-600'
                                    } fill-current`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Hover Effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${activeSkillCategory.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicators */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Proficiency Level</span>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 4
                                  ? `bg-gradient-to-r ${activeSkillCategory.gradient}`
                                  : 'bg-gray-600'
                              }`}
                            ></div>
                          ))}
                        </div>
                        <span className="text-gray-300 ml-2">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GradientBackground>
            </div>
          </RevealAnimation>
        </div>

        {/* Mobile Layout: Accordion */}
        {/* Mobile Layout: Enhanced Accordion */}
        <div className="md:hidden space-y-4">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedMobile === category.id;

            return (
              <RevealAnimation
                key={category.id}
                direction="up"
                delay={index * 100}
              >
                <GradientBackground
                  variant="card"
                  className={`rounded-xl border border-gray-700 scrollbar-none overflow-y-auto max-h-[500px] transition-all duration-300 ${
                    isExpanded
                      ? 'shadow-lg shadow-' +
                        category.color.replace('text-', '') +
                        '/20'
                      : ''
                  }`}
                >
                  {/* Enhanced Accordion Header */}
                  <button
                    onClick={() => toggleMobileAccordion(category.id)}
                    className={`w-full sticky top-0 z-10 p-5 text-left flex items-center justify-between transition-all duration-300 ${
                      isExpanded
                        ? `bg-gradient-to-r ${category.gradient} text-white`
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isExpanded
                            ? 'bg-white/20 backdrop-blur-sm shadow-lg'
                            : 'bg-gray-700'
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 transition-colors duration-300 ${isExpanded ? 'text-white' : category.color}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{category.title}</h4>
                        <p className="text-sm opacity-75">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>
                    <div
                      className={`transform transition-all duration-300 p-2 rounded-full ${
                        isExpanded
                          ? 'rotate-180 bg-white/10'
                          : 'rotate-0 hover:bg-gray-600'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Enhanced Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 bg-gray-800/30 backdrop-blur-sm border-t border-gray-700/50">
                      <div className="grid grid-cols-1 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skill}
                            className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-200 group"
                            style={{
                              animationDelay: `${skillIndex * 50}ms`,
                            }}
                          >
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}
                            >
                              <span className="text-white font-bold text-lg">
                                {getTechIcon(skill)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white text-base truncate">
                                {skill}
                              </h4>
                              <div className="flex items-center space-x-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < 4 ? category.color : 'text-gray-600'} fill-current`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GradientBackground>
              </RevealAnimation>
            );
          })}
        </div>

        {/* Skills Summary */}
        <RevealAnimation direction="up" delay={600}>
          <div className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              <GradientBackground
                variant="card"
                className="p-6 rounded-lg border border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Backend Expert
                </h4>
                <p className="text-gray-400 text-sm">
                  Specialized in Node.js ecosystem with{' '}
                  {skillsData.backend.length}+ backend technologies
                </p>
              </GradientBackground>

              <GradientBackground
                variant="card"
                className="p-6 rounded-lg border border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Frontend Developer
                </h4>
                <p className="text-gray-400 text-sm">
                  Modern React development with {skillsData.frontend.length}+
                  frontend technologies
                </p>
              </GradientBackground>

              <GradientBackground
                variant="card"
                className="p-6 rounded-lg border border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Cloud & DevOps
                </h4>
                <p className="text-gray-400 text-sm">
                  Modern deployment with {skillsData.cloud.length}+ cloud
                  platforms
                </p>
              </GradientBackground>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
