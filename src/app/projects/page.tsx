'use client'

import FloatingSocial from '@/components/FloatingSocial'
import AnimatedBackground from '@/components/AnimatedBackground'
import CustomCursor from '@/components/CustomCursor'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Database } from '@/lib/supabase/types'

type Project = Database['public']['Tables']['projects']['Row']

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState('all')
  const [projects, setProjects] = useState<Project[]>([])
  const [allTechs, setAllTechs] = useState<string[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'published')
      
      if (error) {
        console.error('Error fetching projects:', error)
      } else {
        setProjects(data as Project[])
        const allTechs = Array.from(new Set(data.flatMap(p => p.tech_stack)))
        setAllTechs(allTechs)
      }
    }
    fetchProjects()
  }, [])

  const mainTechs = ["React", "Next.js", "Python", "Flutter", "Firebase"]
  const moreTechs = allTechs.filter(t => !mainTechs.includes(t))

  // Filter projects based on selected filters
  const filteredProjects = projects
    .filter(project => selectedTech === 'all' || project.tech_stack.includes(selectedTech))
    .sort((a, b) => (b.is_featured ? 1 : -1)) // Featured projects first

  return (
    <div className="min-h-screen bg-[#F7F7F7] custom-cursor">
      <CustomCursor />
      <FloatingSocial />
      
      {/* Hero Section - Enhanced with animations */}
      <section className="relative bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] text-white py-24 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">
            Student <span className="text-[#D4AF37] font-bold bg-gradient-to-r from-[#D4AF37] via-[#f4d55d] to-[#D4AF37] bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Innovative projects built by our club members - from web apps to robotics systems
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="/submit-project"
              className="inline-flex items-center bg-[#D4AF37] text-[#111111] px-8 py-4 rounded-2xl text-lg font-bold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              Submit Your Project
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
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

      {/* Projects Grid - Unified Design */}
      <section className="relative py-24 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
        {/* Enhanced background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-40 h-40 bg-[#1F7A3A]/3 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/5 w-28 h-28 bg-[#D4AF37]/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Cool floating code elements */}
          <div className="absolute top-1/3 left-1/4 text-[#1F7A3A]/8 text-5xl font-mono animate-fade-pulse rotate-12">{'{ }'}</div>
          <div className="absolute bottom-1/3 right-1/3 text-[#D4AF37]/8 text-4xl font-mono animate-fade-pulse -rotate-6" style={{animationDelay: '2s'}}>projects[]</div>
          <div className="absolute top-2/3 left-1/6 text-[#A3192E]/8 text-3xl font-mono animate-fade-pulse rotate-3" style={{animationDelay: '4s'}}>code()</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 animate-slide-up">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">
              All Projects ({filteredProjects.length})
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {selectedTech !== 'all' 
                ? 'Filtered results - click "All" to see everything' 
                : 'Every amazing project created by our talented members'
              }
            </p>
          </div>

          {/* Technology Filters */}
          <div className="mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => setSelectedTech('all')} className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${selectedTech === 'all' ? 'bg-[#1F7A3A] text-white shadow-lg' : 'bg-gray-100 text-gray-700'}`}>All Projects</button>
              {mainTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                    selectedTech === tech
                      ? 'bg-[#1F7A3A] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </button>
              ))}
              <div className="relative">
                <select onChange={(e) => setSelectedTech(e.target.value)} className="px-4 py-2 rounded-full font-medium transition-all duration-300 hover-scale bg-gray-100 text-gray-700 appearance-none">
                  <option value="all">More</option>
                  {moreTechs.map((tech) => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image with enhanced effects */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl mb-6 overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] relative">
                  {project.media ? (
                    <Image
                      src={project.media}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A3A]/20 to-[#1F7A3A]/40 flex items-center justify-center group-hover:from-[#1F7A3A]/30 group-hover:to-[#1F7A3A]/50 transition-all duration-500">
                      <span className="text-[#1F7A3A] text-6xl font-bold opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Featured Badge */}
                  {project.is_featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#D4AF37] text-[#111111] px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-glow">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#1F7A3A] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech_stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#1F7A3A]/10 text-[#1F7A3A] rounded-full text-sm font-semibold hover-scale transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech_stack.length > 3 && (
                    <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      +{project.tech_stack.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[#1F7A3A] font-bold hover:text-[#2d8a4a] transition-colors flex items-center group"
                  >
                    View Project 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 animate-slide-up">
              <div className="text-6xl mb-4 opacity-50">🔍</div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more projects</p>
              <button
                onClick={() => {
                  setSelectedTech('all')
                }}
                className="px-6 py-3 bg-[#1F7A3A] text-white rounded-xl font-semibold hover-lift transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#A3192E]/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Call to Action - Enhanced flowing transition */}
      <section className="relative py-20 bg-gradient-to-br from-[#1F7A3A] via-[#2d8a4a] to-[#1F7A3A] text-white overflow-hidden">
        <AnimatedBackground />
        {/* Subtle flowing connector from previous section */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent opacity-60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Share Your Creation</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Built something cool? Submit your project and inspire other members!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="/submit-project"
              className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#111111] rounded-xl text-lg font-bold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              Submit Project
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-bold hover:bg-white hover:text-[#1F7A3A] transition-all duration-300 hover-scale"
            >
              Project Ideas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
