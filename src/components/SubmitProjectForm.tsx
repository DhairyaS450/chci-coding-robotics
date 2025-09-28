'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { submitProject } from '@/app/projects/actions'
import { CheckCircle } from 'lucide-react'

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  tech_stack: z.string().min(1, 'Tech stack is required'),
  repo_url: z.string().url('Invalid GitHub URL'),
  demo_url: z.string().url('Invalid demo URL').optional().or(z.literal('')),
  media: z.any().refine((files) => files?.length == 1, 'Image is required.'),
})

type ProjectFormValues = z.infer<typeof projectSchema>

export default function SubmitProjectForm({ userId }: { userId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
  })

  const onSubmit = async (data: ProjectFormValues) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const file = data.media[0]
      const fileName = `${userId}/${Date.now()}-${file.name}`
      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(fileName, file)

      if (uploadError) {
        throw new Error(`Image upload failed: ${uploadError.message}`)
      }

      const { data: urlData } = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName)

      await submitProject({
        ...data,
        media: urlData.publicUrl,
      })
      setIsSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center max-w-2xl mx-auto">
        <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
        <h2 className="text-3xl font-bold mt-4">Project Submitted!</h2>
        <p className="text-lg mt-2">
          Thank you for your submission. Your project is now pending review from our team.
        </p>
        <button
          onClick={() => router.push('/projects')}
          className="mt-6 bg-gray-800 text-white p-3 rounded-md"
        >
          Back to Projects
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="title" className="block text-lg font-medium">
          Title
        </label>
        <input
          id="title"
          {...register('title')}
          className="w-full p-2 border rounded-md"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-lg font-medium">
          Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          className="w-full p-2 border rounded-md"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="tech_stack" className="block text-lg font-medium">
          Tech Stack (comma-separated)
        </label>
        <input
          id="tech_stack"
          {...register('tech_stack')}
          className="w-full p-2 border rounded-md"
        />
        {errors.tech_stack && (
          <p className="text-red-500">{errors.tech_stack.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="repo_url" className="block text-lg font-medium">
          GitHub URL
        </label>
        <input
          id="repo_url"
          {...register('repo_url')}
          className="w-full p-2 border rounded-md"
        />
        {errors.repo_url && (
          <p className="text-red-500">{errors.repo_url.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="demo_url" className="block text-lg font-medium">
          Demo URL (Optional)
        </label>
        <input
          id="demo_url"
          {...register('demo_url')}
          className="w-full p-2 border rounded-md"
        />
        {errors.demo_url && (
          <p className="text-red-500">{errors.demo_url.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="media" className="block text-lg font-medium">
          Project Image
        </label>
        <input
          id="media"
          type="file"
          accept="image/*"
          {...register('media')}
          className="w-full p-2 border rounded-md"
        />
        {errors.media && (
          <p className="text-red-500">{errors.media.message as string}</p>
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-800 text-white p-3 rounded-md disabled:bg-gray-500"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Project'}
      </button>
    </form>
  )
}
