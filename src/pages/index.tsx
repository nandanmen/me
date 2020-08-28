import React from 'react'
import clsx from 'clsx'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import styles from '../css/Home.module.scss'
import useMeta from '../hooks/useMeta'
import useProjects from '../hooks/useProjects'

export default function Home() {
  const { about, description } = useMeta()
  const projects = useProjects()
  return (
    <>
      <Layout.Sidebar className={styles.about}>
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
      </Layout.Sidebar>
      <Layout.Content>
        <ul className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 lg:h-full">
          {projects.map(project => (
            <li
              key={project.id}
              className={clsx('mb-4', styles.project_list_item)}
            >
              <ProjectCard {...project} variant={ProjectCard.variants.link} />
            </li>
          ))}
        </ul>
      </Layout.Content>
    </>
  )
}
