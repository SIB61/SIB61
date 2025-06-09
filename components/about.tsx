import RevealAnimation from "./reveal-animation"
import GradientBackground from "./gradient-background"
import SkillsSection from "./skills-section"
import { getPersonalInfo } from "../data/portfolio-data"

export default function About() {
  const personalInfo = getPersonalInfo()
  const experienceYears = new Date().getFullYear() - new Date(personalInfo.experiencedFrom).getFullYear()

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <RevealAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <RevealAnimation direction="left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Fullstack Software Engineer with {experienceYears}+ Years of Experience
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate backend-focused fullstack software engineer and design pattern enthusiast who started my journey
                in June 2022. I specialize in building robust server-side applications using clean architecture
                principles, SOLID design patterns, and cutting-edge technologies like Node.js, Next.js, and cloud
                platforms. I have extensively worked on design and building real time applications from scratch and also with SASS platforms.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My expertise lies in designing scalable backend architectures with proper design patterns, database
                optimization, and creating efficient APIs. As a design pattern enthusiast, I focus on writing
                maintainable, testable code that follows industry best practices and clean code principles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not implementing design patterns and architecting solutions, I enjoy sharing my knowledge about
                software architecture and contributing to the developer community.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation direction="right" delay={400}>
            <div className="space-y-6">
              <GradientBackground variant="card" className="p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">{experienceYears}+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">20+</div>
                    <div className="text-gray-400 text-sm">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">10+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">5+</div>
                    <div className="text-gray-400 text-sm">Articles</div>
                  </div>
                </div>
              </GradientBackground>

              <GradientBackground variant="card" className="p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Core Strengths</h4>
                <div className="space-y-3">
                  {[
                    "Backend API Development",
                    "Database Architecture & Optimization",
                    "Cloud Infrastructure & DevOps",
                    "Microservices Architecture",
                    "Performance Optimization",
                  ].map((strength, index) => (
                    <div key={strength} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                      <span className="text-gray-300">{strength}</span>
                    </div>
                  ))}
                </div>
              </GradientBackground>
            </div>
          </RevealAnimation>
        </div>

        {/* Enhanced Skills Section */}
        <SkillsSection />
      </div>
    </section>
  )
}
