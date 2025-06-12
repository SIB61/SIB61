import {
  Github,
  Mail,
  Instagram,
  Twitter,
  Download,
  ArrowDown,
  Linkedin,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import RevealAnimation from './reveal-animation';
import GradientBackground from './gradient-background';
import { getPersonalInfo, getSocialLinks } from '../data/portfolio-data';
import { TypeWritter } from './typewritter';

export default function Hero() {
  const personalInfo = getPersonalInfo();
  const socialLinks = getSocialLinks();

  const iconMap = {
    github: Github,
    mail: Mail,
    instagram: Instagram,
    twitter: Linkedin,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden"
    >
      <GradientBackground variant="hero" className="absolute inset-0" />

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <RevealAnimation direction="fade" delay={200}>
          <div className="mb-8">
            <div className="relative w-36 h-36 lg:h-40 lg:w-40 mx-auto mb-6">
              {/* Animated ring around avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
               <img src={personalInfo.image} alt="" className='w-full rounded-full h-full object-cover object-top' />
                {/* <span className="text-5xl font-bold text-white">SB</span> */}
              </div>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={400}>
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-gray-300 text-sm">
                Available for new opportunities
              </span>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={600}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Md Sabit Islam Bhuiya
            </span>
          </h1>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={800}>
          <div className="mb-8">
            <TypeWritter/>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                'Design Patterns',
                'Clean Architecture',
                'SOLID Principles',
                'Node.js',
                'Next.js',
              ].map((keyword, index) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-600 hover:border-blue-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={1000}>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with clean
            architecture and design patterns. As a design pattern enthusiast, I
            create exceptional user experiences while maintaining robust,
            maintainable codebases. Currently working as a Software Engineer at
            JB Connect LTD.
          </p>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={1200}>
          <div className="flex justify-center space-x-4 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent =
                iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-gray-700 hover:border-transparent hover:scale-110"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </a>
              );
            })}
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={1400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href='/#contact'
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get In Touch
                <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href='/#projects'
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-300 font-medium backdrop-blur-sm hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-200" />
              </span>
            </a>

            <a
              href="https://www.dropbox.com/scl/fi/n1kcb7ad9nvi3icfj6tq8/Md-Sabit-Islam-Bhuiya-s-Resume.pdf?rlkey=8naozpv7un7awp807wnd5of5o&st=hgv8voo1&dl=1"
              target="_blank"
              rel="noopener"
              className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 rounded-xl hover:border-gray-600 hover:text-white hover:bg-gray-700/50 transition-all duration-300 font-medium hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Download CV
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-200" />
              </span>
            </a>
          </div>
        </RevealAnimation>

        {/* Scroll indicator */}
        <RevealAnimation direction="up" delay={1600}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 text-gray-400">
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
