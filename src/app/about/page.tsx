import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocial from '@/components/FloatingSocial'
import ExecutiveTeam from '@/components/ExecutiveTeam'

export default function About() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] custom-cursor">
      <Header />
      <FloatingSocial />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-lg rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-pulse-slow" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-[#D4AF37]">Our Club</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover the story behind Cameron Heights&apos; premier coding and robotics community
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-[#111111] mb-8">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To create an inclusive community where students can explore technology, develop programming skills, 
                build innovative projects, and prepare for future careers in STEM fields.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#1F7A3A] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">Learn by Doing</h3>
                    <p className="text-gray-600">Hands-on projects and real-world applications of programming concepts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#A3192E] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">Compete & Excel</h3>
                    <p className="text-gray-600">Participate in coding competitions and robotics challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2">Build Community</h3>
                    <p className="text-gray-600">Foster collaboration and peer learning in a supportive environment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#1F7A3A] mb-2">3+</div>
                    <div className="text-gray-600">Years Active</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#A3192E] mb-2">50+</div>
                    <div className="text-gray-600">Members</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#D4AF37] mb-2">25+</div>
                    <div className="text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#1F7A3A] mb-2">5</div>
                    <div className="text-gray-600">Competitions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#111111] mb-16 text-center animate-slide-up">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">&lt;/&gt;</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Programming</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn multiple programming languages including Python, JavaScript, C++, and more through practical projects and competitions.
              </p>
            </div>
            
            <div className="text-center animate-slide-up hover-lift" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#A3192E] to-[#c21e33] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Robotics</h3>
              <p className="text-gray-600 leading-relaxed">
                Design, build, and program robots for VEX competitions. Learn electronics, mechanical design, and autonomous systems.
              </p>
            </div>
            
            <div className="text-center animate-slide-up hover-lift" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#f4d55d] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Competitions</h3>
              <p className="text-gray-600 leading-relaxed">
                Participate in CCC, hackathons, robotics competitions, and other STEM challenges to test and showcase your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <ExecutiveTeam />

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-r from-[#1F7A3A] to-[#2d8a4a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Ready to Join?</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Whether you&apos;re a beginner or experienced programmer, there&apos;s a place for you in our community.
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a
              href="https://classroom.google.com/c/lx4wa6n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#111111] rounded-xl text-lg font-bold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              Join Google Classroom
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}