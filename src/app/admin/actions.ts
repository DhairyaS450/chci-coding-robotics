'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

async function checkAdmin() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.app_metadata?.role !== 'admin') {
    throw new Error('Unauthorized')
  }
  return user
}

export async function approveProject(projectId: string) {
  const user = await checkAdmin()
  const supabase = await createClient()
  const { error } = await supabase
    .from('projects')
    .update({ status: 'published', approved_by: user.id })
    .eq('id', projectId)

  if (error) throw error
  revalidatePath('/admin')
  revalidatePath('/projects')
}

export async function rejectProject(projectId: string, reason: string) {
  await checkAdmin()
  const supabase = await createClient()
  const { error } = await supabase
    .from('projects')
    .update({ status: 'rejected', rejection_reason: reason })
    .eq('id', projectId)

  if (error) throw error
  revalidatePath('/admin')
}

export async function featureProject(projectId: string, isFeatured: boolean) {
  await checkAdmin()
  const supabase = await createClient()
  const { error } = await supabase
    .from('projects')
    .update({ is_featured: isFeatured })
    .eq('id', projectId)

  if (error) throw error
  revalidatePath('/admin')
  revalidatePath('/projects')
  revalidatePath('/')
}
