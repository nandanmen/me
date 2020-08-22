import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Tapestry from '../components/Tapestry'
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
  const components: Record<string, () => JSX.Element> = {
    Tapestry,
  }
  const Component = components[frontmatter.title]
  return (
    <section
      className={clsx(
        'p-6 rounded-md bg-gray-200 mb-4 hover:bg-blue-200 flex flex-col-reverse items-start relative',
        styles.project
      )}
    >
      <header>
        <h1 className="text-lg font-semibold">{frontmatter.title}</h1>
        <p className="text-xs text-gray-600 font-light">
          {frontmatter.tech.map((name, index) => (
            <span className="mr-1" key={name}>
              {name} {index === frontmatter.tech.length - 1 ? '' : ' /'}
            </span>
          ))}
        </p>
      </header>
      {Component && <Component />}
      <button
        className={clsx(
          'w-10 h-10 bg-gray-100 absolute rounded-full text-gray-600',
          styles.project_button
        )}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section>
  )
}
