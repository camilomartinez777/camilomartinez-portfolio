"use client"

import LiquidPage from 'app/components/liquid-page'

export default function ContactPage() {
    return (
        <LiquidPage currentPage="contact" backgroundVariant="purple">
            {/* Main content card - positioned better */}
            <section className="liquid-glass-card backdrop-blur-2xl bg-white/[0.06] border border-white/[0.1] rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl shadow-black/20">
                {/* Header with concentric design */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extralight text-white mb-6 drop-shadow-lg">
                        Let's Connect
                    </h1>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
                        Ready to build something extraordinary together? I'm always excited to discuss innovative projects and collaborate with ambitious teams.
                    </p>
                </div>

                {/* Contact Cards with liquid glass styling */}
                <div className="space-y-6 mb-12">
                    {/* Email Card */}
                    <div className="group">
                        <a
                            href="mailto:camilomartinez.ai@outlook.com?subject=I would like to connect with you&body=Hi Camilo,%0D%0A%0D%0AI would love to connect with you and discuss potential opportunities.%0D%0A%0D%0ABest regards"
                            className="liquid-glass-contact-card backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 flex items-center group-hover:border-cyan-400/30 shimmer-on-hover"
                        >
                            <div className="flex items-center space-x-4 md:space-x-6 w-full">
                                <div className="liquid-glass-icon backdrop-blur-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-300/20 rounded-2xl p-3 md:p-4 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-left flex-1">
                                    <p className="text-lg md:text-xl font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">Send Email</p>
                                    <p className="text-cyan-400/80 font-mono text-sm md:text-lg mt-1">camilomartinez.ai@outlook.com</p>
                                </div>
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    {/* Social Links with enhanced glass effect */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* LinkedIn */}
                        <div className="group">
                            <a
                                href="https://www.linkedin.com/in/camilomartinez-ai/?utm_source=portfolio&utm_medium=contact&utm_campaign=connect"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="liquid-glass-contact-card backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 md:p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 flex items-center group-hover:border-blue-400/30 shimmer-on-hover"
                            >
                                <div className="flex items-center space-x-3 md:space-x-4 w-full">
                                    <div className="liquid-glass-icon backdrop-blur-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-blue-300/20 rounded-xl p-2.5 md:p-3 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <span className="text-base md:text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">LinkedIn</span>
                                    </div>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/* GitHub */}
                        <div className="group">
                            <a
                                href="https://github.com/camilomartinez777"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="liquid-glass-contact-card backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 md:p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 flex items-center group-hover:border-purple-400/30 shimmer-on-hover"
                            >
                                <div className="flex items-center space-x-3 md:space-x-4 w-full">
                                    <div className="liquid-glass-icon backdrop-blur-lg bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-purple-300/20 rounded-xl p-2.5 md:p-3 group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-300">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <span className="text-base md:text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">GitHub</span>
                                    </div>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Call to Action with enhanced styling */}
                <div className="text-center">
                    <p className="text-white/60 mb-6 text-base md:text-lg font-light">Based in the intersection of data and creativity</p>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        <span className="text-green-400 font-medium text-sm md:text-base">Available for new opportunities</span>
                    </div>
                </div>
            </section>
        </LiquidPage>
    );
}
