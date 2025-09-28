'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type ProjectData = {
  title: string
  description: string
  tech_stack: string
  repo_url: string
  demo_url?: string
  media: string
}

export async function submitProject(projectData: ProjectData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('You must be logged in to submit a project.')
  }

  const slug = projectData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const { error } = await supabase.from('projects').insert({
    title: projectData.title,
    slug,
    description: projectData.description,
    tech_stack: projectData.tech_stack.split(',').map((item) => item.trim()),
    repo_url: projectData.repo_url,
    demo_url: projectData.demo_url,
    media: projectData.media,
    created_by: user.id,
    status: 'pending',
  })

  if (error) {
    console.error('Error inserting project:', error)
    throw new Error(`Failed to submit project: ${error.message}`)
  }

  revalidatePath('/projects')
  redirect('/projects')
}
