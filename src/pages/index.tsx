import React from 'react'
import clsx from 'clsx'

import styles from '../css/Home.module.scss'
import useMeta from '../hooks/useMeta'
import useProjects, { Project } from '../hooks/useProjects'

export default function Home() {
  const { about, description } = useMeta()
  const projects = useProjects()
  return (
    <main className="bg-white px-8 py-12">
      <img
        className="w-16 h-16 bg-gray-500 mb-8 rounded-full border-gray-500 border-2 object-cover"
        src="./avatar.jpg"
      />
      <header
        className="text-xl font-semibold mb-4"
        dangerouslySetInnerHTML={{ __html: about.html }}
      />
      <div
        className={clsx('mb-8', styles.description)}
        dangerouslySetInnerHTML={{ __html: description.html }}
      />
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </main>
  )
}

function ProjectCard({ frontmatter }: Project) {
  return (
    <section className="p-4 h-64 rounded-md bg-gray-200 mb-4 hover:bg-blue-200 flex flex-col-reverse items-start">
      <h1 className="text-lg font-semibold">{frontmatter.title}</h1>
    </section>
  )
}
