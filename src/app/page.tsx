import FloatingSocial from '@/components/FloatingSocial'
import ExecutiveTeam from '@/components/ExecutiveTeam'
import AnimatedBackground from '@/components/AnimatedBackground'
import CustomCursor from '@/components/CustomCursor'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'

export default async function Home() {
  const supabase = await createClient()
  const { data: featuredProjects } = await supabase
    .from('projects')
    .select('*')
    .eq('is_featured', true)
    .eq('status', 'published')
    .limit(3)

  return (
    <div className="min-h-screen bg-[#F7F7F7] custom-cursor">
      <CustomCursor />
      <FloatingSocial />
      
      {/* Hero Section with Background Animation */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] text-white overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div className="animate-fade-in">
              <h1 className="text-6xl sm:text-7xl font-bold mb-8 leading-tight">
                Code. Build.<br/>
                <span className="text-[#D4AF37] font-bold bg-gradient-to-r from-[#D4AF37] via-[#f4d55d] to-[#D4AF37] bg-clip-text animate-shimmer">
                  Innovate.
                </span>
              </h1>
              <p className="text-2xl mb-12 opacity-90 leading-relaxed">
                Join Cameron Heights&apos; premier coding and robotics club where ideas become reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="https://classroom.google.com/c/lx4wa6n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#D4AF37] text-[#111111] px-10 py-5 rounded-2xl text-xl font-bold hover-lift hover-glow transition-all duration-300 shadow-xl"
                >
                  Join Our Classroom
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center border-3 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#1F7A3A] transition-all duration-300 hover-scale"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Right Column - Club Photo Space */}
            <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                {/* Photo Frame */}
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover-lift">
                  <Image
                    src="/coding_club_24_25.jpg"
                    alt="CHCI Coding x Robotics Club Team Photo"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#D4AF37] rounded-2xl opacity-20 animate-bounce-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full opacity-10 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Schedule Section - Enhanced Flowing Design */}
      <section className="relative py-24 bg-gradient-to-b from-[#1F7A3A]/5 via-white to-[#F7F7F7] overflow-hidden">
        {/* Enhanced flowing background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1F7A3A]/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          {/* Cool floating elements */}
          <div className="absolute top-1/6 right-1/5 text-[#1F7A3A]/8 text-8xl font-mono animate-fade-pulse">C137</div>
          <div className="absolute bottom-1/5 left-1/6 w-20 h-20 border border-[#D4AF37]/20 rounded-2xl rotate-12 animate-spin-slow"></div>
          <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-[#A3192E]/20 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-[#1F7A3A]/15 rounded-full animate-bounce-slow" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-slide-up">
            {/* Big Bold Text - Three Lines */}
            <h2 className="text-5xl sm:text-6xl font-black mb-8 leading-tight">
              <span className="block text-[#1F7A3A] text-7xl sm:text-8xl my-4">Room C137</span>
              <div className="space-y-3 text-3xl sm:text-4xl font-bold">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-[#D4AF37]">Wed 10:50-11:50AM</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Coding</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-[#A3192E]">Thu 2:30-4:00PM</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Robotics</span>
                </div>
              </div>
            </h2>
            
            {/* See Schedule Button */}
            <div className="mt-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <Link
                href="/schedule"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#1F7A3A] to-[#2d8a4a] text-white rounded-2xl text-xl font-bold hover-lift hover-glow transition-all duration-300 shadow-lg group"
              >
                SEE SCHEDULE
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flowing Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#1F7A3A]/15 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/8 to-transparent animate-shimmer" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Featured Projects - Flowing into next section */}
      <section className="relative py-32 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
        {/* Enhanced background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/6 w-48 h-48 bg-[#1F7A3A]/3 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/5 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Cool floating code elements */}
          <div className="absolute top-1/4 left-1/4 text-[#1F7A3A]/10 text-6xl font-mono animate-fade-pulse rotate-12">function()</div>
          <div className="absolute bottom-1/3 right-1/3 text-[#D4AF37]/10 text-5xl font-mono animate-fade-pulse -rotate-6" style={{animationDelay: '2s'}}>{'{ }'}</div>
          <div className="absolute top-2/3 left-1/6 text-[#A3192E]/10 text-4xl font-mono animate-fade-pulse rotate-3" style={{animationDelay: '4s'}}>while(true)</div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/2 right-1/5 w-24 h-24 border-2 border-[#1F7A3A]/10 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/5 left-1/3 w-16 h-16 bg-[#D4AF37]/5 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-bold text-[#111111] mb-6">Student Creations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real projects built by our members
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {featuredProjects?.map((project, index) => (
              <div 
                key={project.title} 
                className="group cursor-pointer animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image with enhanced effects */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl mb-8 overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] relative">
                  {project.media && (
                    <Image
                      src={project.media}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#1F7A3A] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech_stack.map((tech: any) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#1F7A3A]/10 text-[#1F7A3A] rounded-full text-sm font-semibold hover-scale transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Featured Project</span>
                  <Link href={`/projects/${project.slug}`} className="text-[#1F7A3A] font-bold hover:text-[#2d8a4a] transition-colors flex items-center group">
                    View Project 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Link
              href="/projects"
              className="inline-flex items-center px-10 py-4 bg-[#1F7A3A] text-white rounded-2xl text-lg font-bold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              View All Projects
              <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#1F7A3A]/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer"></div>
      </div>

      {/* Executive Team - Enhanced flowing transition */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F7F7]/50 to-[#F7F7F7]"></div>
        
        {/* Background personality for Executive Team section */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/5 right-1/4 w-36 h-36 bg-[#1F7A3A]/5 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/5 w-28 h-28 bg-[#A3192E]/5 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 right-1/6 text-[#1F7A3A]/5 text-7xl font-bold animate-fade-pulse">TEAM</div>
        </div>
        
        <div className="relative z-10">
          <ExecutiveTeam />
        </div>
      </div>

      {/* Another Subtle Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#A3192E]/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Enhanced Stats Section - Flowing design */}
      <section className="relative py-24 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
        {/* Personality elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-[#1F7A3A]/5 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/5 w-56 h-56 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 text-[#1F7A3A]/5 text-9xl font-mono animate-fade-pulse">&lt;/&gt;</div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="animate-slide-up hover-scale">
              <div className="text-6xl font-bold text-[#1F7A3A] mb-4 animate-glow">50+</div>
              <div className="text-gray-600 text-lg font-medium">Active Members</div>
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.1s'}}>
              <div className="text-6xl font-bold text-[#A3192E] mb-4 animate-glow" style={{animationDelay: '0.5s'}}>25+</div>
              <div className="text-gray-600 text-lg font-medium">Projects Built</div>
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl font-bold text-[#D4AF37] mb-4 animate-glow" style={{animationDelay: '1s'}}>5</div>
              <div className="text-gray-600 text-lg font-medium">Competitions</div>
            </div>
            <div className="animate-slide-up hover-scale" style={{animationDelay: '0.3s'}}>
              <div className="text-6xl font-bold text-[#1F7A3A] mb-4 animate-glow" style={{animationDelay: '1.5s'}}>4</div>
              <div className="text-gray-600 text-lg font-medium">Years Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA - Smooth flowing transition */}
      <section className="relative py-24 bg-gradient-to-br from-[#1F7A3A] via-[#2d8a4a] to-[#1F7A3A] text-white overflow-hidden">
        <AnimatedBackground />
        {/* Subtle flowing connector from previous section */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent opacity-60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-slide-up">Ready to Start Building?</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Join our community of passionate students and turn your ideas into reality.
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="https://classroom.google.com/c/lx4wa6n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-[#D4AF37] text-[#111111] rounded-2xl text-xl font-bold hover-lift hover-glow transition-all duration-300 shadow-xl"
            >
              Join Google Classroom
              <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
