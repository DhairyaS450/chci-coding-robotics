'use client'

import FloatingSocial from '@/components/FloatingSocial'
import AnimatedBackground from '@/components/AnimatedBackground'
import CustomCursor from '@/components/CustomCursor'
import Link from 'next/link'
import { useState } from 'react'

export default function Opportunities() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Events', icon: '🏆', color: 'bg-gray-100 text-gray-700' },
    { id: 'coding', name: 'Coding', icon: '💻', color: 'bg-blue-100 text-blue-700' },
    { id: 'robotics', name: 'Robotics', icon: '🤖', color: 'bg-red-100 text-red-700' },
    { id: 'hackathon', name: 'Hackathons', icon: '⚡', color: 'bg-purple-100 text-purple-700' },
  ]

  const competitions = [
    {
      id: 1,
      name: 'Canadian Computing Competition (CCC)',
      date: 'February 2026',
      description: 'Canada\'s premier high school computer science contest',
      details: 'Test your algorithmic thinking and programming skills against students from across the country. Open to all skill levels with Junior and Senior divisions.',
      link: 'https://cemc.uwaterloo.ca/contests/computing.html',
      category: 'coding',
      difficulty: 'All Levels',
      prize: 'University Recognition',
      participants: '15,000+ students',
      duration: '3 hours',
      format: 'Individual',
      featured: true
    },
    {
      id: 2,
      name: 'FIRST Robotics Competition',
      date: 'January - April 2026',
      description: 'International robotics competition for high school students',
      details: 'Build and program robots to compete in challenging games. Combines engineering, programming, and teamwork.',
      link: 'https://www.firstinspires.org/robotics/frc',
      category: 'robotics',
      difficulty: 'Intermediate',
      prize: '$80,000+ in scholarships',
      participants: '3,000+ teams',
      duration: '6 weeks build + competition',
      format: 'Team (15-20 members)',
      featured: true
    },
    {
      id: 3,
      name: 'VEX Robotics Competition',
      date: 'September 2025 - April 2026',
      description: 'World\'s largest robotics competition for students',
      details: 'Design, build, and program robots to play challenging games with and against other teams.',
      link: 'https://www.vexrobotics.com/competition',
      category: 'robotics',
      difficulty: 'Beginner to Advanced',
      prize: 'World Championship Trip',
      participants: '20,000+ teams worldwide',
      duration: 'Full season',
      format: 'Team (2-5 members)',
      featured: false
    },
    {
      id: 4,
      name: 'Hack the North',
      date: 'September 2026',
      description: 'Canada\'s biggest hackathon at University of Waterloo',
      details: 'Canada\'s biggest hackathon where students from around the world come together to build amazing projects in 36 hours.',
      link: 'https://hackthenorth.com/',
      category: 'hackathon',
      difficulty: 'All Levels',
      prize: '$50,000+ in prizes',
      participants: '3,000+ hackers',
      duration: '36 hours',
      format: 'Team (1-4 members)',
      featured: true
    },
    {
      id: 5,
      name: 'Canadian Open Data Challenge',
      date: 'March 2026',
      description: 'Data science and visualization competition',
      details: 'Use open government data to create innovative solutions and visualizations that address real-world problems.',
      link: 'https://www.statcan.gc.ca/en/open-data-challenge',
      category: 'coding',
      difficulty: 'Intermediate',
      prize: '$25,000 in prizes',
      participants: '500+ teams',
      duration: '2 months',
      format: 'Individual or Team',
      featured: false
    },
    {
      id: 6,
      name: 'TOHacks',
      date: 'May 2026',
      description: 'Toronto\'s premier high school hackathon',
      details: 'High school students build innovative tech solutions in 24 hours with workshops, mentorship, and prizes.',
      link: 'https://tohacks.ca/',
      category: 'hackathon',
      difficulty: 'Beginner to Advanced',
      prize: '$15,000+ in prizes',
      participants: '300+ students',
      duration: '24 hours',
      format: 'Team (1-4 members)',
      featured: false
    }
  ]

  const filteredCompetitions = selectedCategory === 'all' 
    ? competitions.sort((a, b) => b.featured ? 1 : -1)
    : competitions.filter(comp => comp.category === selectedCategory).sort((a, b) => b.featured ? 1 : -1)

  return (
    <div className="min-h-screen bg-[#F7F7F7] custom-cursor">
      <CustomCursor />
      <FloatingSocial />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] text-white py-24 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">
            Opportunities & <span className="text-[#D4AF37] font-bold bg-gradient-to-r from-[#D4AF37] via-[#f4d55d] to-[#D4AF37] bg-clip-text text-transparent">Competitions</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Explore competitions and events to take your coding and robotics skills to the next level
          </p>
          <div className="mt-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37]">{competitions.length}</div>
                <div className="text-sm">Active Events</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37]">$200K+</div>
                <div className="text-sm">Total Prizes</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37]">50K+</div>
                <div className="text-sm">Participants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation - Flowing Design */}
      <section className="relative py-16 bg-gradient-to-b from-[#1F7A3A]/5 via-white to-[#F7F7F7] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-[#1F7A3A]/5 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 text-[#1F7A3A]/5 text-6xl font-mono animate-fade-pulse">compete()</div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-[#111111] mb-8">Choose Your Challenge</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover-lift ${
                    selectedCategory === category.id
                      ? 'bg-[#1F7A3A] text-white shadow-lg scale-105'
                      : category.color + ' hover:scale-105'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            <p className="text-gray-600 text-lg">
              Showing {filteredCompetitions.length} {selectedCategory === 'all' ? 'competitions' : selectedCategory} event{filteredCompetitions.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#1F7A3A]/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer"></div>
      </div>

      {/* Enhanced Competitions Grid */}
      <section className="relative py-24 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
        {/* Enhanced background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-40 h-40 bg-[#1F7A3A]/3 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/5 w-28 h-28 bg-[#D4AF37]/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Clean floating elements */}
          <div className="absolute top-1/3 left-1/4 text-[#1F7A3A]/8 text-4xl font-mono animate-fade-pulse rotate-12">compete</div>
          <div className="absolute bottom-1/3 right-1/3 text-[#D4AF37]/8 text-3xl font-mono animate-fade-pulse -rotate-6" style={{animationDelay: '2s'}}>{'challenge'}</div>
          <div className="absolute top-2/3 left-1/6 text-[#A3192E]/8 text-2xl font-mono animate-fade-pulse rotate-3" style={{animationDelay: '4s'}}>win()</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCompetitions.map((comp, index) => (
              <div 
                key={comp.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured Badge - Fixed positioning */}
                {comp.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#D4AF37] text-[#111111] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </span>
                  </div>
                )}

                {/* Simplified Header */}
                <div className={`relative p-6 text-white ${
                  comp.category === 'coding' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  comp.category === 'robotics' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                  comp.category === 'hackathon' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  'bg-gradient-to-br from-gray-500 to-gray-600'
                } overflow-hidden`}>
                  
                  <div className="relative z-10 pr-16">
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {comp.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">{comp.description}</p>
                    
                    {/* Essential Info Only */}
                    <div className="flex items-center gap-6 text-sm opacity-90">
                      <span>{comp.date}</span>
                      <span>•</span>
                      <span>{comp.difficulty}</span>
                    </div>
                  </div>
                </div>
                
                {/* Simplified Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {comp.details}
                  </p>
                  
                  {/* Clean Stats - Only the most important */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#1F7A3A]">{comp.participants.split(' ')[0]}</div>
                      <div className="text-xs text-gray-500">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#D4AF37]">{comp.prize}</div>
                      <div className="text-xs text-gray-500">Prizes</div>
                    </div>
                  </div>
                  
                  {/* Clean Action Button */}
                  <Link
                    href={comp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#1F7A3A] to-[#2d8a4a] text-white rounded-xl font-semibold hover-lift hover-glow transition-all duration-300 shadow-md group"
                  >
                    <span className="flex items-center justify-center">
                      Learn More & Register
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCompetitions.length === 0 && (
            <div className="text-center py-16 animate-slide-up">
              <div className="text-6xl mb-4 opacity-50">🔍</div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">No competitions found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-6 py-3 bg-[#1F7A3A] text-white rounded-xl font-semibold hover-lift transition-all duration-300"
              >
                Show All Competitions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#A3192E]/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Enhanced Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-[#1F7A3A] via-[#2d8a4a] to-[#1F7A3A] text-white overflow-hidden">
        <AnimatedBackground />
        {/* Subtle flowing connector from previous section */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/40 via-white/20 to-transparent opacity-60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Ready to Compete?</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Join our club sessions to prepare for these amazing opportunities. We'll help you build the skills you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="https://classroom.google.com/c/lx4wa6n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#111111] rounded-xl text-lg font-bold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              Join Our Classroom
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-bold hover:bg-white hover:text-[#1F7A3A] transition-all duration-300 hover-scale"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}