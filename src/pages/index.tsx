import React from 'react'
import { Helmet } from 'react-helmet'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faPaperPlane,
  faFileAlt,
  faHeartbeat,
  faVectorSquare,
  faSeedling,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nanda Syahrasyad</title>
      </Helmet>
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
          <ul className="flex mt-4">
            <SocialMedia link="/resume.pdf" icon={faFileAlt} />
            <SocialMedia link="mailto:nanda.s@hey.com" icon={faPaperPlane} />
            <SocialMedia
              link="https://github.com/narendrasss"
              icon={faGithub}
            />
            <SocialMedia
              link="https://linkedin.com/in/narendrass/"
              icon={faLinkedinIn}
            />
          </ul>
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
  const components: Record<string, IconDefinition> = {
    eVital: faHeartbeat,
    Visualizer: faVectorSquare,
    KeepFresh: faSeedling,
  }
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
      {frontmatter.title === 'Tapestry' ? (
        <Tapestry />
      ) : (
        <div className="text-teal-400 h-full flex items-center justify-center">
          <FontAwesomeIcon icon={components[frontmatter.title]} size="8x" />
        </div>
      )}
      <button
        className={clsx(
          'w-10 h-10 bg-gray-100 absolute rounded-full text-gray-600',
          styles.project_button,
          { 'text-2xl': !frontmatter.link }
        )}
      >
        <FontAwesomeIcon
          icon={frontmatter.link ? faExternalLinkAlt : faGithub}
        />
      </button>
    </a>
  )
}

const PREFIXES = ['https://', 'mailto:']

function SocialMedia({ link, icon }: { link: string; icon: IconDefinition }) {
  const prefix = PREFIXES.find(prefix => link.startsWith(prefix))
  const displayLink = prefix ? link.slice(prefix.length) : link
  return (
    <li className="text-lg mr-4">
      <a
        className={clsx('hover:text-blue-600', styles.social_link)}
        data-link={displayLink}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  )
}
