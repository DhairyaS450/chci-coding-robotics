import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SubmitProjectForm from '@/components/SubmitProjectForm'

export default async function SubmitProjectPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
            <p className="text-xl mb-8">Please log in to submit a project.</p>
            {/* The login button is in the header, which is part of the layout */}
        </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Submit a New Project</h1>
      <SubmitProjectForm userId={user.id} />
    </main>
  )
}
