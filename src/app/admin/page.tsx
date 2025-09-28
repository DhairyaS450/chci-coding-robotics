'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { approveProject, rejectProject, featureProject, getProjectsForReview } from './actions'

type Project = {
  id: string
  title: string
  description: string
  status: 'pending' | 'published' | 'rejected'
  is_featured: boolean
}

export default function AdminPanel() {
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient()
      const { data, error } = await supabase.auth.getUser()

      if (error || !data.user) {
        console.error('Error fetching user:', error)
        setLoading(false)
        return
      }

      setUser(data.user)
      const userRole = data.user?.app_metadata?.role
      if (userRole === 'admin') {
        setIsAdmin(true)
        fetchProjects()
      }
      setLoading(false)
    }

    checkUser()
  }, [])

  const fetchProjects = async () => {
    const data = await getProjectsForReview();
    setProjects(data as Project[]);
  }

  const handleApprove = async (id: string) => {
    await approveProject(id)
    fetchProjects()
  }

  const handleReject = async (id: string) => {
    const reason = prompt('Reason for rejection:')
    if (reason) {
      await rejectProject(id, reason)
      fetchProjects()
    }
  }

  const handleFeature = async (id: string, isFeatured: boolean) => {
    await featureProject(id, isFeatured)
    fetchProjects()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAdmin) {
    return <div>Access Denied. You are not an admin.</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Projects for Review</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg">
              <h3 className="font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-2 space-x-2">
                {project.status === 'pending' && (
                  <>
                    <button onClick={() => handleApprove(project.id)} className="px-4 py-2 bg-green-500 text-white rounded">Approve</button>
                    <button onClick={() => handleReject(project.id)} className="px-4 py-2 bg-red-500 text-white rounded">Reject</button>
                  </>
                )}
                {project.status === 'published' && (
                  <button onClick={() => handleFeature(project.id, !project.is_featured)} className="px-4 py-2 bg-blue-500 text-white rounded">
                    {project.is_featured ? 'Unfeature' : 'Feature'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
