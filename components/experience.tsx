'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import RevealAnimation from './reveal-animation';
import GradientBackground from './gradient-background';
import ExperienceCard from './experience-card';
import { getExperiences } from '../data/portfolio-data';

export default function Experience() {
  const experiences = getExperiences();
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);
  const hasMoreExperiences = experiences.length > 3;

  return (
    <section id="experience" className="py-20 px-4 relative">
      <GradientBackground variant="section" className="absolute inset-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career
              in software development.
            </p>
          </div>
        </RevealAnimation>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          {displayedExperiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        {/* Toggle Button */}
        {hasMoreExperiences && (
          <RevealAnimation direction="up" delay={400}>
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                <span className="mr-2">
                  {showAll
                    ? 'Show Less'
                    : `Show All ${experiences.length} Experiences`}
                </span>
                {showAll ? (
                  <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
                )}
              </button>
              <p className="text-gray-400 text-sm mt-3">
                {showAll
                  ? `Showing all ${experiences.length} experiences`
                  : `Showing ${displayedExperiences.length} of ${experiences.length} experiences`}
              </p>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
}
