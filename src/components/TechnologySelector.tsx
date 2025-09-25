'use client'

import { useState, useEffect, useRef } from 'react'

interface Technology {
  name: string
  category: string
  icon: string
  description: string
}

interface TechnologySelectorProps {
  selectedTechnology: string
  onTechnologySelect: (technology: string) => void
}

export default function TechnologySelector({ selectedTechnology, onTechnologySelect }: TechnologySelectorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    { id: 'all', name: 'All Technologies', icon: '🌐' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'data', name: 'Data Science', icon: '📊' },
    { id: 'ai', name: 'AI/ML', icon: '🤖' },
    { id: 'devops', name: 'DevOps', icon: '🚀' },
    { id: 'languages', name: 'Languages', icon: '💻' },
    { id: 'databases', name: 'Databases', icon: '🗄️' },
    { id: 'cloud', name: 'Cloud', icon: '☁️' }
  ]

  const technologies: Technology[] = [
    // Frontend Technologies
    { name: 'React', category: 'frontend', icon: '⚛️', description: 'Popular JavaScript library for building user interfaces' },
    { name: 'Vue.js', category: 'frontend', icon: '💚', description: 'Progressive framework for building user interfaces' },
    { name: 'Angular', category: 'frontend', icon: '🅰️', description: 'Platform for building mobile and desktop web applications' },
    { name: 'Svelte', category: 'frontend', icon: '🧡', description: 'Cybernetically enhanced web apps' },
    { name: 'Next.js', category: 'frontend', icon: '▲', description: 'The React framework for production' },
    { name: 'TypeScript', category: 'frontend', icon: '🔷', description: 'Typed superset of JavaScript' },
    { name: 'Tailwind CSS', category: 'frontend', icon: '💨', description: 'Utility-first CSS framework' },
    
    // Backend Technologies
    { name: 'Node.js', category: 'backend', icon: '💚', description: 'JavaScript runtime built on Chrome\'s V8 engine' },
    { name: 'Express.js', category: 'backend', icon: '⚡', description: 'Fast, unopinionated web framework for Node.js' },
    { name: 'Django', category: 'backend', icon: '🐍', description: 'High-level Python web framework' },
    { name: 'Flask', category: 'backend', icon: '🌶️', description: 'Lightweight WSGI web application framework' },
    { name: 'FastAPI', category: 'backend', icon: '⚡', description: 'Modern, fast web framework for building APIs with Python' },
    { name: 'Spring Boot', category: 'backend', icon: '🍃', description: 'Java-based framework for building microservices' },
    { name: 'Ruby on Rails', category: 'backend', icon: '💎', description: 'Server-side web application framework' },
    { name: 'ASP.NET Core', category: 'backend', icon: '🔵', description: 'Cross-platform, high-performance framework' },
    
    // Mobile Technologies
    { name: 'React Native', category: 'mobile', icon: '📱', description: 'Build mobile apps using React' },
    { name: 'Flutter', category: 'mobile', icon: '🐦', description: 'Google\'s UI toolkit for building natively compiled applications' },
    { name: 'Swift', category: 'mobile', icon: '🍎', description: 'Powerful programming language for iOS development' },
    { name: 'Kotlin', category: 'mobile', icon: '🎯', description: 'Modern programming language for Android development' },
    { name: 'Xamarin', category: 'mobile', icon: '💙', description: 'Cross-platform mobile development framework' },
    
    // Programming Languages
    { name: 'Python', category: 'languages', icon: '🐍', description: 'Versatile programming language for many applications' },
    { name: 'JavaScript', category: 'languages', icon: '🟨', description: 'Dynamic programming language of the web' },
    { name: 'Java', category: 'languages', icon: '☕', description: 'Object-oriented programming language' },
    { name: 'C++', category: 'languages', icon: '⚡', description: 'General-purpose programming language' },
    { name: 'C#', category: 'languages', icon: '🔷', description: 'Modern, object-oriented programming language' },
    { name: 'Go', category: 'languages', icon: '🐹', description: 'Fast, simple, and reliable programming language' },
    { name: 'Rust', category: 'languages', icon: '🦀', description: 'Systems programming language focused on safety' },
    { name: 'PHP', category: 'languages', icon: '🐘', description: 'Popular general-purpose scripting language' },
    
    // Data Science & AI
    { name: 'TensorFlow', category: 'ai', icon: '🧠', description: 'Open source machine learning framework' },
    { name: 'PyTorch', category: 'ai', icon: '🔥', description: 'Machine learning framework based on the Torch library' },
    { name: 'Pandas', category: 'data', icon: '🐼', description: 'Data manipulation and analysis library for Python' },
    { name: 'NumPy', category: 'data', icon: '🔢', description: 'Fundamental package for scientific computing with Python' },
    { name: 'Scikit-learn', category: 'ai', icon: '🤖', description: 'Machine learning library for Python' },
    { name: 'R', category: 'data', icon: '📈', description: 'Programming language for statistical computing' },
    
    // Databases
    { name: 'PostgreSQL', category: 'databases', icon: '🐘', description: 'Advanced open source relational database' },
    { name: 'MongoDB', category: 'databases', icon: '🍃', description: 'Document-oriented NoSQL database' },
    { name: 'MySQL', category: 'databases', icon: '🐬', description: 'Popular open-source relational database' },
    { name: 'Redis', category: 'databases', icon: '🔴', description: 'In-memory data structure store' },
    { name: 'SQLite', category: 'databases', icon: '📦', description: 'Self-contained SQL database engine' },
    
    // Cloud & DevOps
    { name: 'Docker', category: 'devops', icon: '🐳', description: 'Platform for developing, shipping, and running applications' },
    { name: 'Kubernetes', category: 'devops', icon: '☸️', description: 'Container orchestration platform' },
    { name: 'AWS', category: 'cloud', icon: '☁️', description: 'Amazon Web Services cloud platform' },
    { name: 'Google Cloud', category: 'cloud', icon: '☁️', description: 'Google\'s cloud computing services' },
    { name: 'Azure', category: 'cloud', icon: '🔵', description: 'Microsoft\'s cloud computing service' },
    { name: 'Jenkins', category: 'devops', icon: '👨‍💼', description: 'Open source automation server' },
    { name: 'GitHub Actions', category: 'devops', icon: '⚡', description: 'CI/CD platform integrated with GitHub' },
  ]

  // Focus search input when modal opens
  useEffect(() => {
    if (isModalOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100)
    }
  }, [isModalOpen])

  // Filter technologies based on search term and category
  const filteredTechnologies = technologies.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tech.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || tech.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleTechnologySelect = (technologyName: string) => {
    onTechnologySelect(technologyName)
    setIsModalOpen(false)
    setSearchTerm('')
    setSelectedCategory('all')
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  return (
    <>
      {/* Technology Selector Button - More Compact */}
      <div className="flex items-center justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#1F7A3A]/20 rounded-xl font-semibold text-[#111111] hover:border-[#1F7A3A] hover:bg-[#1F7A3A]/5 transition-all duration-300 hover-lift shadow-lg min-w-[280px]"
        >
          <div className="text-xl">
            {selectedTechnology ? 
              technologies.find(t => t.name === selectedTechnology)?.icon || '💡' : 
              '🔍'
            }
          </div>
          <div className="flex-1 text-left">
            {selectedTechnology ? (
              <div>
                <div className="font-bold">{selectedTechnology}</div>
                <div className="text-xs text-gray-500">Click to change</div>
              </div>
            ) : (
              <div>
                <div className="font-bold">Select Technology</div>
                <div className="text-xs text-gray-500">Browse all technologies</div>
              </div>
            )}
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Technology Selection Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#111111]">Choose a Technology</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search technologies..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-[#1F7A3A] focus:border-[#1F7A3A] text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                      selectedCategory === category.id
                        ? 'bg-[#1F7A3A] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="p-6 overflow-y-auto max-h-96">
              {filteredTechnologies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredTechnologies.map((tech) => (
                    <button
                      key={tech.name}
                      onClick={() => handleTechnologySelect(tech.name)}
                      className="text-left p-4 rounded-2xl border border-gray-200 hover:border-[#1F7A3A] hover:bg-[#1F7A3A]/5 transition-all duration-300 hover-lift group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-[#111111] group-hover:text-[#1F7A3A] transition-colors truncate">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {tech.description}
                          </p>
                          <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600 capitalize">
                            {categories.find(cat => cat.id === tech.category)?.name}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 opacity-50">🔍</div>
                  <h4 className="text-xl font-bold text-[#111111] mb-2">No technologies found</h4>
                  <p className="text-gray-600">Try adjusting your search or category filter</p>
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('all')
                    }}
                    className="mt-4 px-4 py-2 bg-[#1F7A3A] text-white rounded-lg font-medium hover:bg-[#2d8a4a] transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  Showing {filteredTechnologies.length} of {technologies.length} technologies
                </span>
                <span>
                  Press Esc to close
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}