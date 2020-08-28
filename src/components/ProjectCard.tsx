import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Project } from '../hooks/useProjects'
import Button from './Button'
import Tapestry from './Tapestry'
import styles from './css/ProjectCard.module.scss'

type ProjectCardProps = {
  variant?: 'link'
} & Project

function ProjectCard({ frontmatter, variant }: ProjectCardProps) {
  const components: Record<string, () => JSX.Element> = {
    Tapestry,
  }
  const Component = components[frontmatter.title]
  const Wrapper = variant === 'link' ? Link : 'section'
  return (
    <Wrapper
      to={frontmatter.path}
      className={clsx(
        'p-6 rounded-md bg-gray-200 flex flex-col-reverse justify-between relative',
        styles.project,
        variant === 'link' ? styles.link : ''
      )}
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
      {variant === 'link' && (
        <Button className={clsx('absolute', styles.button)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      )}
    </Wrapper>
  )
}

ProjectCard.variants = {
  link: 'link',
} as const

export default ProjectCard
