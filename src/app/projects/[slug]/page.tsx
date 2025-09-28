import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const supabase = await createClient()
  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={project.media}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="prose lg:prose-xl max-w-none">
          <p>{project.description}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub Repository
          </Link>
          {project.demo_url && (
            <Link href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
