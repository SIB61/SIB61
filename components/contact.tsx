'use client';
import {
  Mail,
  MapPin,
  Github,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
import RevealAnimation from './reveal-animation';
import GradientBackground from './gradient-background';
import { getPersonalInfo, getSocialLinks } from '../data/portfolio-data';
import { FormEvent, useState } from 'react';
import { useToast } from './ui/use-toast';
import { toast } from 'sonner';

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdnS_BEBhLDnMaDHQCV9Rz0SLnorewc5AAB9jvZq05O1FxQzw/formResponse';
const FORM_FIELDS = {
  name: 'entry.1115770761',
  email: 'entry.606546672',
  subject: 'entry.222261746',
  description: 'entry.141411445',
};

export default function Contact() {
  const personalInfo = getPersonalInfo();
  const socialLinks = getSocialLinks();
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true)

    console.log(e);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // must use 'no-cors' for Google Forms
        body: formData,
      }).then((res) => {
        form.reset();
        setIsLoading(false)
        toast.success(
          `Thanks ${formData.get(FORM_FIELDS.name)}. I will get back to you ASAP`,
          { richColors: true }
        );
      }).catch(e=>{
        throw e
      });
    } catch (err) {
      console.error('Failed to send form', err);
      setIsLoading(false)
    }

  };

  const iconMap = {
    github: Github,
    mail: Mail,
    instagram: Instagram,
    twitter: Linkedin,
  };

  return (
    <section id="contact" className="pt-20 pb-10 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <RevealAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          <RevealAnimation direction="left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <GradientBackground
                    variant="accent"
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </GradientBackground>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-300">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <GradientBackground
                    variant="accent"
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </GradientBackground>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent =
                      iconMap[social.icon as keyof typeof iconMap];
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-gray-700 hover:border-transparent"
                      >
                        <IconComponent className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-200" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation direction="right" delay={400}>
            <GradientBackground
              variant="card"
              className="p-8 rounded-lg border border-gray-700"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name={FORM_FIELDS.name}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name={FORM_FIELDS.email}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name={FORM_FIELDS.subject}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name={FORM_FIELDS.description}
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-blue-500/25`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </GradientBackground>
          </RevealAnimation>
        </div>

        <RevealAnimation direction="up" delay={200}>
          <div className="mt-16 pt-8 pb-10 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2025 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
