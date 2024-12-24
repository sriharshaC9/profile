import { Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 dark:bg-blue-900 text-white p-4 transition-colors duration-300">
        <h1 className="text-2xl font-bold">Sriharsha</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Hello there!</h2>
            <p className="mb-4">
              I&apos;m Sriharsha. I work as a Software engineer currently living in Ottawa, Canada.
            </p>
            <p className="mb-4">
              I grew up in Hyderabad, India and pursued my masters in Texas, USA. After a wonderful time in USA for over 10 years, I have moved to Canada.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">What I Love</h3>
            <p className="mb-4">
              I love developing websites and applications.
              Some stuff that makes me excited are Javascript, React, Next.js, HELM, Docker and API Management.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">In My Spare Time</h3>
            <p>
              In my spare time I like travelling and love to explore different cuisines.
            </p>
          </section>
          <span>
            <a
              href="https://www.linkedin.com/in/harshakosaraju/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </a>
          </span>
          <span className='px-8'>
            <a
              href="https://github.com/sriharshaC9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              <Github className="mr-2" />
              GitHub
            </a>
          </span>
        </div>
      </main>

      <footer className="bg-blue-600 dark:bg-blue-900 text-white p-4 text-center transition-colors duration-300">
        <p>&copy; Sriharsha {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
