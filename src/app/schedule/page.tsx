'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocial from '@/components/FloatingSocial'
import AnimatedBackground from '@/components/AnimatedBackground'
import CustomCursor from '@/components/CustomCursor'
import Image from 'next/image'
import { useState } from 'react'

export default function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const regularSessions = [
    {
      title: 'Coding Sessions',
      day: 'Wednesdays',
      time: '10:50 - 11:50 AM',
      location: 'Room C137',
      description: 'Learn programming fundamentals, practice algorithms, and prepare for competitions like CCC.',
      activities: ['Algorithm practice', 'CCC preparation', 'Programming tutorials', 'Debugging workshops'],
      color: 'from-[#1F7A3A] to-[#2d8a4a]',
      icon: '💻'
    },
    {
      title: 'Robotics Projects',
      day: 'Thursdays', 
      time: '2:30 - 4:00 PM',
      location: 'Room C137',
      description: 'Build and program robots, learn electronics, and compete in robotics competitions.',
      activities: ['Robot building', 'VEX programming', 'Circuit design', 'Competition prep'],
      color: 'from-[#A3192E] to-[#c21e33]',
      icon: '🤖'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F7F7F7] custom-cursor">
      <CustomCursor />
      <Header />
      <FloatingSocial />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] text-white py-24 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">
            Club <span className="text-[#D4AF37] font-bold bg-gradient-to-r from-[#D4AF37] via-[#f4d55d] to-[#D4AF37] bg-clip-text text-transparent">Schedule</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Join us for regular coding sessions and robotics projects. All skill levels welcome!
          </p>
        </div>
      </section>

      {/* Enhanced Regular Sessions */}
      <section className="relative py-24 bg-gradient-to-b from-[#1F7A3A]/5 via-white to-[#F7F7F7] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-[#1F7A3A]/5 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 text-[#1F7A3A]/5 text-6xl font-mono animate-fade-pulse">weekly</div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">Weekly Sessions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join us every week in Room C137 for hands-on learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regularSessions.map((session, index) => (
              <div 
                key={session.title}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Simplified Header with gradient */}
                <div className={`bg-gradient-to-r ${session.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{session.icon}</div>
                    <div className="text-right">
                      <div className="text-xl font-bold">{session.day}</div>
                      <div className="text-sm opacity-90">{session.time}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{session.title}</h3>
                  <p className="text-sm opacity-90">{session.description}</p>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-6 text-gray-600">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="font-semibold">{session.location}</span>
                  </div>
                  
                  <h4 className="font-bold text-lg mb-4 text-[#111111]">What we cover:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {session.activities.map((activity) => (
                      <div key={activity} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#1F7A3A] rounded-full mr-3"></div>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#1F7A3A]/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer"></div>
      </div>

      {/* Detailed Schedule Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
        {/* Enhanced background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-40 h-40 bg-[#1F7A3A]/3 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/5 w-28 h-28 bg-[#D4AF37]/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Clean floating elements */}
          <div className="absolute top-1/3 left-1/4 text-[#1F7A3A]/8 text-4xl font-mono animate-fade-pulse rotate-12">schedule</div>
          <div className="absolute bottom-1/3 right-1/3 text-[#D4AF37]/8 text-3xl font-mono animate-fade-pulse -rotate-6" style={{animationDelay: '2s'}}>plan</div>
          <div className="absolute top-2/3 left-1/6 text-[#A3192E]/8 text-2xl font-mono animate-fade-pulse rotate-3" style={{animationDelay: '4s'}}>learn()</div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">Detailed Schedule</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our comprehensive learning plan for the year
            </p>
          </div>
          
          {/* Schedule Image Container - Clickable */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift">
              <div className="p-8">
                <div 
                  className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image
                    src="/coding_club_schedule.png"
                    alt="CHCI Coding x Robotics Club Detailed Schedule"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                  />
                  {/* Click to expand indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-[#1F7A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-[#111111] mb-2">
                    Learning Roadmap
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    From fundamentals to advanced projects - track our progression through algorithms, 
                    data structures, competitive programming, and hands-on robotics projects.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 bg-[#1F7A3A]/10 text-[#1F7A3A] rounded-full text-sm font-semibold hover:bg-[#1F7A3A]/20 transition-all duration-300 hover-scale"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Click to expand
                  </button>
                </div>
              </div>
            </div>
          </div>
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
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Join Us Today</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Ready to start coding and building? Join our Google Classroom to stay updated on all sessions and events.
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

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 hover-scale"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal content */}
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/coding_club_schedule.png"
                alt="CHCI Coding x Robotics Club Detailed Schedule - Expanded View"
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
                style={{
                  maxHeight: '85vh'
                }}
              />
            </div>
            
            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-center">
              <p className="text-sm">Click anywhere outside the image to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}