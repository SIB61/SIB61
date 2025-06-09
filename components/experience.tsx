import { Calendar } from "lucide-react"
import RevealAnimation from "./reveal-animation"
import GradientBackground from "./gradient-background"
import TechTag from "./tech-tag"
import { getExperiences } from "../data/portfolio-data"

export default function Experience() {
  const experiences = getExperiences()

  const formatDate = (dateString: string) => {
    if (!dateString) return "Present"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  return (
    <section id="experience" className="py-20 px-4 relative">
      <GradientBackground variant="section" className="absolute inset-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
        </RevealAnimation>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <RevealAnimation key={exp.id} direction="up" delay={index * 200}>
              <div className="relative mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/25"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <GradientBackground
                    variant="card"
                    className="p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <div className="w-8 h-8 bg-white rounded overflow-hidden">
                         <img src={exp.companyImage} alt={exp.companyName}/>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <p className="text-blue-400 font-medium">{exp.companyName}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <TechTag key={tech} technology={tech} variant="primary" size="sm" />
                      ))}
                    </div>
                  </GradientBackground>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
