import { NextRequest, NextResponse } from 'next/server'

interface DMOJProblem {
  code: string
  name: string
  points: number | null
  difficulty: 'Easy' | 'Medium' | 'Hard'
  url: string
}

export async function GET() {
  try {
    const apiKey = process.env.DMOJ_API_KEY
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'DMOJ API key not configured' },
        { status: 500 }
      )
    }

    // For now, return curated weekly problems
    // In production, you would fetch from DMOJ API with proper filtering
    const weeklyProblems: DMOJProblem[] = [
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

    // You can implement more sophisticated logic here:
    // - Rotate problems weekly
    // - Filter by difficulty range
    // - Select from specific contest categories
    // - Cache results for performance

    return NextResponse.json({
      problems: weeklyProblems,
      lastUpdated: new Date().toISOString(),
      message: 'Weekly problems updated successfully'
    })

  } catch (error) {
    console.error('Error fetching DMOJ problems:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weekly problems' },
      { status: 500 }
    )
  }
}

// Helper function to determine problem difficulty based on points
function getDifficultyFromPoints(points: number | null): 'Easy' | 'Medium' | 'Hard' {
  if (!points) return 'Easy'
  if (points <= 5) return 'Easy'
  if (points <= 10) return 'Medium'
  return 'Hard'
}

// Helper function to generate weekly problem rotation
function getWeeklyProblemSet(): string[] {
  const currentWeek = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000))
  
  // Problem pools by difficulty
  const easyProblems = ['aplusb', 'ccc07j1', 'ccc08j1', 'ccc09j1', 'ccc10j1']
  const mediumProblems = ['ccc13s2', 'ccc14s2', 'ccc15s2', 'ccc16s2', 'ccc17s2']
  const hardProblems = ['ccc19s4', 'ccc18s4', 'ccc17s4', 'ccc16s4', 'ccc15s4']
  
  return [
    easyProblems[currentWeek % easyProblems.length],
    mediumProblems[currentWeek % mediumProblems.length], 
    hardProblems[currentWeek % hardProblems.length]
  ]
}