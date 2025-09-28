'use client'

import { useState, useEffect } from 'react'
import FloatingSocial from '@/components/FloatingSocial'
import AnimatedBackground from '@/components/AnimatedBackground'
import CustomCursor from '@/components/CustomCursor'
import TechnologySelector from '@/components/TechnologySelector'

interface DMOJProblem {
  code: string
  name: string
  points: number | null
  difficulty: 'Easy' | 'Medium' | 'Hard'
  url: string
}

interface LearningResource {
  title: string
  type: 'Course' | 'Certification' | 'Bootcamp' | 'YouTube Channel'
  provider: string
  url: string
  description: string
  duration?: string
  price?: string
  rating?: number
}

export default function Resources() {
  const [selectedTechnology, setSelectedTechnology] = useState<string>('')
  const [weeklyProblems, setWeeklyProblems] = useState<DMOJProblem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Learning resources data organized by technology - FREE CONTENT ONLY
  const learningResources: Record<string, LearningResource[]> = {
    'Python': [
      {
        title: 'Python for Everybody',
        type: 'Course',
        provider: 'FreeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
        description: 'Complete Python course covering fundamentals, data structures, and scientific computing.',
        duration: '300+ hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Python Full Course - 12 Hours',
        type: 'YouTube Channel',
        provider: 'Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        description: 'Complete Python tutorial for beginners covering all essential concepts.',
        duration: '12 hours',
        price: 'Free',
        rating: 4.9
      },
      {
        title: 'Automate the Boring Stuff',
        type: 'Course',
        provider: 'Al Sweigart',
        url: 'https://automatetheboringstuff.com/',
        description: 'Free online book teaching Python through practical automation projects.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.7
      }
    ],
    'JavaScript': [
      {
        title: 'JavaScript Algorithms and Data Structures',
        type: 'Course',
        provider: 'FreeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
        description: 'Comprehensive JavaScript course with certification.',
        duration: '300+ hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'JavaScript Tutorial for Beginners',
        type: 'YouTube Channel',
        provider: 'Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        description: '1-hour crash course covering JavaScript fundamentals.',
        duration: '1 hour',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'The Modern JavaScript Tutorial',
        type: 'Course',
        provider: 'javascript.info',
        url: 'https://javascript.info/',
        description: 'In-depth JavaScript tutorial from basics to advanced topics.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.9
      }
    ],
    'React': [
      {
        title: 'Front End Development Libraries',
        type: 'Course',
        provider: 'FreeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/',
        description: 'Learn React, Redux, and more with hands-on projects.',
        duration: '300+ hours',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'React Course - Beginner\'s Tutorial',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
        description: 'Complete React tutorial for beginners in one video.',
        duration: '5 hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'React Official Tutorial',
        type: 'Course',
        provider: 'React.dev',
        url: 'https://react.dev/learn',
        description: 'Official React documentation and interactive tutorial.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.9
      }
    ],
    'Vue.js': [
      {
        title: 'Vue.js Course for Beginners',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c',
        description: 'Complete Vue.js course from basics to advanced concepts.',
        duration: '4 hours',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Vue.js Official Guide',
        type: 'Course',
        provider: 'Vue.js',
        url: 'https://vuejs.org/guide/',
        description: 'Official Vue.js documentation and step-by-step guide.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Vue Mastery Free Courses',
        type: 'Course',
        provider: 'Vue Mastery',
        url: 'https://www.vuemastery.com/courses/',
        description: 'Several free Vue.js courses for beginners and intermediate developers.',
        duration: '10+ hours',
        price: 'Free',
        rating: 4.6
      }
    ],
    'Angular': [
      {
        title: 'Angular Full Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=2OHbjep_WjQ',
        description: 'Complete Angular course for beginners covering all major concepts.',
        duration: '7 hours',
        price: 'Free',
        rating: 4.6
      },
      {
        title: 'Angular Official Tutorial',
        type: 'Course',
        provider: 'Angular.io',
        url: 'https://angular.io/tutorial',
        description: 'Official Angular tutorial - Tour of Heroes.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Angular Fundamentals',
        type: 'Course',
        provider: 'Angular University',
        url: 'https://angular-university.io/course/getting-started-with-angular2',
        description: 'Free Angular course covering fundamentals.',
        duration: '8 hours',
        price: 'Free',
        rating: 4.5
      }
    ],
    'Svelte': [
      {
        title: 'Svelte Tutorial',
        type: 'Course',
        provider: 'Svelte.dev',
        url: 'https://svelte.dev/tutorial',
        description: 'Official interactive Svelte tutorial.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Svelte Crash Course',
        type: 'YouTube Channel',
        provider: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=uK2RnIzrQ0M',
        description: 'Learn Svelte in one video - crash course for beginners.',
        duration: '1 hour',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Learn Svelte Full Course',
        type: 'YouTube Channel',
        provider: 'Joy of Code',
        url: 'https://www.youtube.com/watch?v=UGBJHYpHPvA',
        description: 'Complete Svelte course covering all features.',
        duration: '8 hours',
        price: 'Free',
        rating: 4.6
      }
    ],
    'Next.js': [
      {
        title: 'Next.js Official Tutorial',
        type: 'Course',
        provider: 'Next.js',
        url: 'https://nextjs.org/learn',
        description: 'Official Next.js tutorial from Vercel.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.9
      },
      {
        title: 'Next.js Full Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=1WmNXEVia8I',
        description: 'Complete Next.js course for beginners.',
        duration: '4 hours',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Next.js Crash Course',
        type: 'YouTube Channel',
        provider: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=mTz0GXj8NN0',
        description: 'Quick introduction to Next.js fundamentals.',
        duration: '1 hour',
        price: 'Free',
        rating: 4.6
      }
    ],
    'TypeScript': [
      {
        title: 'TypeScript Full Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=gp5H0Vw39yw',
        description: 'Complete TypeScript course for beginners.',
        duration: '5 hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'TypeScript Handbook',
        type: 'Course',
        provider: 'TypeScript',
        url: 'https://www.typescriptlang.org/docs/',
        description: 'Official TypeScript documentation and handbook.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.9
      },
      {
        title: 'TypeScript Tutorial',
        type: 'Course',
        provider: 'TypeScript Tutorial',
        url: 'https://www.typescripttutorial.net/',
        description: 'Comprehensive TypeScript tutorial with examples.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.6
      }
    ],
    'C++': [
      {
        title: 'C++ Programming Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
        description: 'Complete C++ course for beginners in 4 hours.',
        duration: '4 hours',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Learn C++',
        type: 'Course',
        provider: 'LearnCpp.com',
        url: 'https://www.learncpp.com/',
        description: 'Free comprehensive C++ tutorial website.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'C++ Tutorial',
        type: 'Course',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/cpp/',
        description: 'Interactive C++ tutorial with examples and exercises.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.5
      }
    ],
    'Java': [
      {
        title: 'Java Programming Full Course',
        type: 'YouTube Channel',
        provider: 'Alex Lee',
        url: 'https://www.youtube.com/watch?v=xk4_1vDrzzo',
        description: 'Complete Java programming course for beginners.',
        duration: '12 hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Java Tutorial',
        type: 'Course',
        provider: 'Oracle',
        url: 'https://docs.oracle.com/javase/tutorial/',
        description: 'Official Java tutorial from Oracle.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.6
      },
      {
        title: 'Java Full Course',
        type: 'YouTube Channel',
        provider: 'Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=eIrMbAQSU34',
        description: 'Java tutorial for beginners covering OOP concepts.',
        duration: '3 hours',
        price: 'Free',
        rating: 4.7
      }
    ],
    'Node.js': [
      {
        title: 'Node.js and Express.js Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
        description: 'Complete Node.js and Express.js course for beginners.',
        duration: '8 hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Back End Development and APIs',
        type: 'Course',
        provider: 'FreeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
        description: 'Learn Node.js, Express, MongoDB, and API development.',
        duration: '300+ hours',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Node.js Tutorial',
        type: 'Course',
        provider: 'Node.js',
        url: 'https://nodejs.org/en/docs/guides/getting-started-guide/',
        description: 'Official Node.js getting started guide.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.6
      }
    ],
    'Django': [
      {
        title: 'Django Full Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4',
        description: 'Complete Django course for beginners.',
        duration: '4 hours',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Django Official Tutorial',
        type: 'Course',
        provider: 'Django',
        url: 'https://docs.djangoproject.com/en/stable/intro/tutorial01/',
        description: 'Official Django tutorial - writing your first Django app.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Django for Everybody',
        type: 'Course',
        provider: 'Dr. Chuck (Coursera)',
        url: 'https://www.coursera.org/specializations/django',
        description: 'Free audit available for comprehensive Django course.',
        duration: '4 months',
        price: 'Free audit',
        rating: 4.6
      }
    ],
    'Flask': [
      {
        title: 'Flask Tutorial',
        type: 'YouTube Channel',
        provider: 'Corey Schafer',
        url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH',
        description: 'Comprehensive Flask tutorial series.',
        duration: '10+ hours',
        price: 'Free',
        rating: 4.9
      },
      {
        title: 'Flask Mega-Tutorial',
        type: 'Course',
        provider: 'Miguel Grinberg',
        url: 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world',
        description: 'Free comprehensive Flask tutorial blog series.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Flask Official Tutorial',
        type: 'Course',
        provider: 'Flask',
        url: 'https://flask.palletsprojects.com/en/2.3.x/tutorial/',
        description: 'Official Flask tutorial from the documentation.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.7
      }
    ],
    'FastAPI': [
      {
        title: 'FastAPI Full Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=0sOvCWFmrtA',
        description: 'Complete FastAPI course for building APIs.',
        duration: '19 hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'FastAPI Official Tutorial',
        type: 'Course',
        provider: 'FastAPI',
        url: 'https://fastapi.tiangolo.com/tutorial/',
        description: 'Official FastAPI tutorial and documentation.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.9
      },
      {
        title: 'FastAPI Tutorial',
        type: 'YouTube Channel',
        provider: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=7t2alSnE2-I',
        description: 'FastAPI crash course for beginners.',
        duration: '1 hour',
        price: 'Free',
        rating: 4.6
      }
    ],
    'React Native': [
      {
        title: 'React Native Full Course',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
        description: 'Complete React Native course for beginners.',
        duration: '3 hours',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'React Native Official Tutorial',
        type: 'Course',
        provider: 'React Native',
        url: 'https://reactnative.dev/docs/tutorial',
        description: 'Official React Native getting started guide.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'The Complete React Native Course',
        type: 'YouTube Channel',
        provider: 'Academind',
        url: 'https://www.youtube.com/watch?v=ur6I5m2nTvk',
        description: 'React Native tutorial covering all essentials.',
        duration: '12+ hours',
        price: 'Free',
        rating: 4.6
      }
    ],
    'Flutter': [
      {
        title: 'Flutter Course for Beginners',
        type: 'YouTube Channel',
        provider: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=pTJJsmejUOQ',
        description: 'Complete Flutter course building real apps.',
        duration: '37 hours',
        price: 'Free',
        rating: 4.8
      },
      {
        title: 'Flutter Official Codelabs',
        type: 'Course',
        provider: 'Flutter',
        url: 'https://docs.flutter.dev/codelabs',
        description: 'Official Flutter codelabs and tutorials.',
        duration: 'Self-paced',
        price: 'Free',
        rating: 4.7
      },
      {
        title: 'Flutter Tutorial',
        type: 'YouTube Channel',
        provider: 'The Net Ninja',
        url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ',
        description: 'Flutter tutorial series for beginners.',
        duration: '15+ hours',
        price: 'Free',
        rating: 4.6
      }
    ]
  }

  // Fetch weekly problems from DMOJ API
  useEffect(() => {
    const fetchWeeklyProblems = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/dmoj')
        
        if (!response.ok) {
          throw new Error('Failed to fetch problems')
        }
        
        const data = await response.json()
        setWeeklyProblems(data.problems || [])
        setError(null)
      } catch (err) {
        setError('Failed to fetch weekly problems')
        console.error('Error fetching DMOJ problems:', err)
        
        // Fallback to mock data if API fails
        const mockProblems: DMOJProblem[] = [
          {
            code: 'aplusb',
            name: 'A Plus B',
            points: 3,
            difficulty: 'Easy',
            url: 'https://dmoj.ca/problem/aplusb'
          },
          {
            code: 'ccc13s2',
            name: 'Bridge Transport',
            points: 7,
            difficulty: 'Medium', 
            url: 'https://dmoj.ca/problem/ccc13s2'
          },
          {
            code: 'ccc19s4',
            name: 'Tourism',
            points: 15,
            difficulty: 'Hard',
            url: 'https://dmoj.ca/problem/ccc19s4'
          }
        ]
        setWeeklyProblems(mockProblems)
      } finally {
        setIsLoading(false)
      }
    }

    fetchWeeklyProblems()
  }, [])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-500 to-green-600'
      case 'Medium': return 'from-yellow-500 to-orange-500'
      case 'Hard': return 'from-red-500 to-red-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Course': return '📚'
      case 'Certification': return '🏆'
      case 'Bootcamp': return '🚀'
      case 'YouTube Channel': return '📺'
      default: return '💡'
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] custom-cursor">
      <CustomCursor />
      <FloatingSocial />
      
      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] text-white py-16 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-slide-up">
            Learning <span className="text-[#D4AF37] font-bold bg-gradient-to-r from-[#D4AF37] via-[#f4d55d] to-[#D4AF37] bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Weekly challenges and free learning paths to accelerate your coding journey
          </p>
        </div>
      </section>

      {/* Weekly Problems Section - Compact but impactful */}
      <section className="relative py-20 bg-gradient-to-br from-[#1F7A3A]/10 via-white to-[#D4AF37]/10 overflow-hidden">
        {/* Enhanced background for problems section */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-48 h-48 bg-[#1F7A3A]/8 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/6 w-36 h-36 bg-[#D4AF37]/12 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1F7A3A]/5 text-8xl font-bold animate-fade-pulse">DMOJ</div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-[#1F7A3A]/10 px-4 py-2 rounded-full mb-3">
              <span className="text-lg">🔥</span>
              <span className="font-bold text-[#1F7A3A]">WEEKLY CHALLENGES</span>
            </div>
            <h2 className="text-3xl font-bold text-[#111111] mb-3">Programming Problems</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fresh challenges from DMOJ updated weekly. Practice algorithms and prepare for competitions!
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-12 h-12 border-4 border-[#1F7A3A] border-t-transparent rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">Loading this week's challenges...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">⚠️</div>
              <div className="text-red-500 text-2xl font-bold mb-4">{error}</div>
              <p className="text-gray-600 text-lg">Please try again later</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {weeklyProblems.map((problem, index) => (
                <div 
                  key={problem.code}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up hover-lift border-2 border-transparent hover:border-[#1F7A3A]/20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced header with bigger impact */}
                  <div className={`bg-gradient-to-r ${getDifficultyColor(problem.difficulty)} p-8 text-white relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -top-4 -right-4 text-8xl font-bold opacity-30">
                        {problem.difficulty.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-bold">{problem.difficulty}</span>
                        {problem.points && (
                          <div className="bg-white/25 backdrop-blur-sm rounded-full px-4 py-2 text-lg font-bold">
                            {problem.points} pts
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 leading-tight">{problem.name}</h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <span className="bg-white/20 rounded-full px-3 py-1 font-mono">{problem.code}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Streamlined content */}
                  <div className="p-8">
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {problem.difficulty === 'Easy' ? 'Perfect for getting started with competitive programming.' :
                       problem.difficulty === 'Medium' ? 'Great for building problem-solving skills.' :
                       'Challenge yourself with advanced algorithms.'}
                    </p>
                    
                    <a
                      href={problem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-8 py-4 bg-gradient-to-r from-[#1F7A3A] to-[#2d8a4a] text-white rounded-2xl text-lg font-bold hover-lift hover-glow transition-all duration-300 shadow-lg group"
                    >
                      <span className="flex items-center justify-center">
                        <span className="text-2xl mr-3">🚀</span>
                        Solve Now
                        <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Call to action for more problems */}
          <div className="text-center mt-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <p className="text-gray-600 mb-3">Want more practice problems?</p>
            <a
              href="https://dmoj.ca/problems/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white border-2 border-[#1F7A3A] text-[#1F7A3A] rounded-xl font-semibold hover:bg-[#1F7A3A] hover:text-white transition-all duration-300 hover-scale"
            >
              Browse All DMOJ Problems
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#1F7A3A]/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer"></div>
      </div>

      {/* Technology Learning Section - Compact */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 animate-slide-up">
            <h2 className="text-3xl font-bold text-[#111111] mb-3">Learn Any Technology</h2>
            <p className="text-gray-600 mb-6">100% free resources to master programming languages and frameworks</p>
            
            {/* Technology Selector */}
            <TechnologySelector 
              selectedTechnology={selectedTechnology}
              onTechnologySelect={setSelectedTechnology}
            />
          </div>

          {/* Learning Resources Display - Simplified */}
          {selectedTechnology && learningResources[selectedTechnology] && (
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#111111] mb-1">
                  Free {selectedTechnology} Resources
                </h3>
              </div>

              {/* Mobile-friendly single column on small screens, 2 columns on larger */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningResources[selectedTechnology].map((resource, index) => (
                  <div 
                    key={resource.title}
                    className="bg-[#F7F7F7] hover:bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover-lift border-2 border-transparent hover:border-[#1F7A3A]/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl flex-shrink-0">{getTypeIcon(resource.type)}</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#111111] mb-1">{resource.title}</h4>
                        <p className="text-xs text-gray-500 mb-2">{resource.provider}</p>
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {resource.type} • FREE
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Simplified info */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        ⏱️ {resource.duration}
                      </span>
                      {resource.rating && (
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          ⭐ {resource.rating}
                        </span>
                      )}
                    </div>

                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2 bg-gradient-to-r from-[#1F7A3A] to-[#2d8a4a] text-white rounded-lg text-sm font-semibold hover-lift transition-all duration-300 shadow-md group"
                    >
                      <span className="flex items-center justify-center">
                        Start Learning
                        <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTechnology && !learningResources[selectedTechnology] && (
            <div className="text-center py-8 animate-slide-up">
              <div className="text-4xl mb-3 opacity-50">🔧</div>
              <h3 className="font-bold text-[#111111] mb-2">Coming Soon</h3>
              <p className="text-sm text-gray-600">
                We're curating free resources for {selectedTechnology}. Check back soon!
              </p>
            </div>
          )}
          
          {!selectedTechnology && (
            <div className="text-center py-8 animate-slide-up">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-[#111111] mb-2">Choose a Technology</h3>
              <p className="text-sm text-gray-600">
                Select any technology above to discover free learning resources
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Call to Action - Compact */}
      <section className="relative py-12 bg-gradient-to-br from-[#1F7A3A] via-[#2d8a4a] to-[#1F7A3A] text-white overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3 animate-slide-up">Ready to Level Up?</h2>
          <p className="opacity-90 mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Join our club sessions to get guidance on these problems and learning paths from experienced mentors.
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a
              href="https://classroom.google.com/c/lx4wa6n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-[#111111] rounded-xl font-bold hover-lift hover-glow transition-all duration-300 shadow-lg"
            >
              Join Our Classroom
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}