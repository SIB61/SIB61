import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Articles from "../components/articles"
import Contact from "../components/contact"
import Navigation from "../components/navigation"
import { getArticles } from "@/data/portfolio-data"
// app/page.tsx

export default async function Portfolio() {
  const allArticles = await getArticles()
  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Articles allArticles={allArticles} />
      <Contact />
    </div>
  )
}
