import { createClient } from '@/lib/supabase/server'

export default async function RoleDisplay() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const role = user?.app_metadata?.role || 'member'

  if (!user) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md">
        Viewing as unauthenticated
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md">
      Viewing as {role}
    </div>
  )
}
