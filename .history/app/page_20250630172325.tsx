import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import LiquidPage from 'app/components/liquid-page'

export default function Page() {
  return (
    <LiquidPage currentPage="home">
      {/* Main content card with enhanced liquid glass effect */}
      <section className="liquid-glass-card backdrop-blur-2xl bg-white/[0.06] border border-white/[0.1] rounded-3xl p-12 max-w-5xl w-full shadow-2xl shadow-black/20">
        {/* Elevated hierarchy with concentric design */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-5xl md:text-7xl font-extralight tracking-tight text-white drop-shadow-lg">
            Camilo Martinez
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-6"></div>
          <h2 className="text-xl md:text-2xl text-cyan-300/90 font-light tracking-wide">
            Data Analyst & AI Developer Specializing in NLP
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="mb-6 text-lg text-white/80 leading-relaxed font-light">
            I build intelligent applications that understand and generate language. With a Master's degree in Data Analytics and a passion for NLP, I develop solutions that range from automated content creation to personalized AI coaching.
          </p>
          <p className="mb-8 text-lg text-white/70 leading-relaxed font-light">
            My philosophy is simple: data, used correctly, empowers us to achieve more. I build efficient, data-driven workflows that unleash the full capabilities of people and companies.
          </p>
        </div>

        {/* Enhanced CTA Buttons with liquid glass styling */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <Link
            href="/projects"
            className="group liquid-glass-primary backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white font-medium py-4 px-10 rounded-2xl hover:from-cyan-400/30 hover:to-blue-400/30 hover:border-cyan-300/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="flex items-center justify-center gap-3 text-lg">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
          <Link
            href="/contact"
            className="group liquid-glass-secondary backdrop-blur-xl bg-white/[0.04] border border-white/[0.15] text-white/90 font-medium py-4 px-10 rounded-2xl hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span className="text-lg">Get In Touch</span>
          </Link>
        </div>

        {/* Featured Projects Section with concentric design */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Featured Work</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project Card 1 - Enhanced liquid glass */}
            <div className="group liquid-glass-project backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-start gap-6">
                <div className="liquid-glass-icon backdrop-blur-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-300/20 rounded-2xl p-4 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">Interactive 'About Me' Chatbot</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">A live demo of a full-stack application built with Next.js and NLP to create an engaging, interactive user experience.</p>
                  <Link href="/about" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link">
                    <span className="font-medium">View Project</span>
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Card 2 - Enhanced liquid glass */}
            <div className="group liquid-glass-project backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-start gap-6">
                <div className="liquid-glass-icon backdrop-blur-lg bg-gradient-to-br from-purple-400/20 to-indigo-500/20 border border-purple-300/20 rounded-2xl p-4 group-hover:from-purple-400/30 group-hover:to-indigo-500/30 transition-all duration-300">
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">AI Content Creator</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">A conceptual application using advanced NLP models to help marketers and writers accelerate their creative workflow.</p>
                  <span className="inline-block mb-4 px-4 py-1.5 text-sm backdrop-blur-lg bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-300 rounded-full border border-cyan-400/20">In Progress</span>
                  <div className="mt-4">
                    <Link href="/projects/ai-content-creator" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link">
                      <span className="font-medium">View Project</span>
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Section with liquid glass styling */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Latest Thoughts</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mx-auto mb-12"></div>
          <div className="liquid-glass-blog backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <BlogPosts />
          </div>
        </div>
      </section>
    </LiquidPage>
  )
}
}
