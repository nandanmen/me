import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import Tapestry from '../components/Tapestry'
import styles from '../css/Home.module.scss'
import useMeta from '../hooks/useMeta'
import useProjects, { Project } from '../hooks/useProjects'

export default function Home() {
  const { about, description } = useMeta()
  const projects = useProjects()
  return (
    <main
      className={clsx(
        'bg-white px-8 py-12 my-0 mx-auto max-w-screen-sm lg:flex lg:max-w-screen-xl',
        styles.main
      )}
    >
      <aside className={clsx('lg:mr-16', styles.about)}>
        <img
          className="w-16 h-16 bg-gray-500 mb-8 rounded-full border-gray-500 border-2 object-cover"
          src="./avatar.jpg"
        />
        <section className="mb-8 lg:col-start-1 lg:col-span-2">
          <div
            className="text-xl font-semibold mb-4"
            dangerouslySetInnerHTML={{ __html: about.html }}
          />
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description.html }}
          />
        </section>
      </aside>
      <ul
        className={clsx(
          'lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4',
          styles.project_list
        )}
      >
        {projects.map(project => (
          <li
            key={project.id}
            className={clsx('mb-4', styles.project_list_item)}
          >
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
    <a
      className={clsx(
        'p-6 rounded-md bg-gray-200 flex flex-col-reverse justify-between relative hover:bg-blue-600 hover:text-white',
        styles.project
      )}
      href={frontmatter.link || frontmatter.github}
      target="_blank"
      rel="noreferrer"
    >
      <header>
        <h1 className="text-lg font-semibold">{frontmatter.title}</h1>
        <p className="text-xs text-gray-600">
          {frontmatter.tech.map((name, index) => (
            <span key={name}>
              {name}
              {index === frontmatter.tech.length - 1 ? '' : ' / '}
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
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </button>
    </a>
  )
}
