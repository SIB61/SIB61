import { Calendar, ChevronDown, ChevronUp, Building } from 'lucide-react';
import RevealAnimation from './reveal-animation';
import GradientBackground from './gradient-background';
import TechTag from './tech-tag';
import { CardDescription } from './card-description';

interface Experience {
  id: string;
  companyName: string;
  companyImage: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isEven: boolean;
}

export default function ExperienceCard({
  experience,
  index,
  isEven,
}: ExperienceCardProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const getDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  };

  return (
    <RevealAnimation direction="up" delay={index * 200}>
      <div className="relative mb-12 md:mb-16">
        {/* Timeline dot */}
        <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/25 z-10"></div>

        <div
          className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
        >
          <GradientBackground
            variant="card"
            className="p-6 rounded-xl shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
              <div className="absolute inset-0 bg-dot-pattern"></div>
            </div>

            <div className="relative z-10">
              {/* Header - Mobile Responsive */}
              <div className="mb-4">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white break-words leading-tight">
                      {experience.position}
                    </h3>
                    <p className="text-blue-400 font-medium break-words text-sm sm:text-base">
                      {experience.companyName}
                    </p>
                  </div>
                </div>

                {/* Current badge - Mobile Responsive */}
                {!experience.endDate && (
                  <div className="flex justify-start">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      Current Position
                    </div>
                  </div>
                )}
              </div>

              {/* Date and Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400 text-sm mb-4 gap-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>
                    {formatDate(experience.startDate)} -{' '}
                    {formatDate(experience.endDate)}
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="text-xs">
                    {getDuration(experience.startDate, experience.endDate)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <CardDescription description={experience.description} />

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <TechTag
                    key={tech}
                    technology={tech}
                    variant="primary"
                    size="sm"
                  />
                ))}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
          </GradientBackground>
        </div>
      </div>
    </RevealAnimation>
  );
}
