import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Trust from './components/Trust'
import Process from './components/Process'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Services />
      <Trust />
      <Process />
      <ContactForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
