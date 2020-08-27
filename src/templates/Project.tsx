import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import LinkButton from '../components/LinkButton'
import Layout from '../components/Layout'
import useProjects, { Project } from '../hooks/useProjects'

type ProjectPageData = {
  markdownRemark: Project
}

type PageContext = {
  pagePath: string
  next: {
    frontmatter: {
      path: string
    }
  } | null
  previous: {
    frontmatter: {
      path: string
    }
  } | null
}

export default function ProjectPageTemplate({
  data,
  pageContext,
}: PageProps<ProjectPageData>) {
  const projects = useProjects()
  const project = data.markdownRemark
  const { next, previous, pagePath } = pageContext as PageContext
  return (
    <Layout>
      <Layout.Sidebar>
        <section className="h-full relative">
          <nav className="flex justify-between mb-8">
            <LinkButton to="/">
              <FontAwesomeIcon icon={faHome} />
            </LinkButton>
            <div className="flex">
              <LinkButton
                to={previous?.frontmatter.path || '/'}
                className="mr-2"
                disabled={previous === null}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </LinkButton>
              <LinkButton
                to={next?.frontmatter.path || '/'}
                disabled={next === null}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </LinkButton>
            </div>
          </nav>
          <h1 className="font-semibold text-2xl mb-4">Projects</h1>
          <ul>
            {projects.map(project => (
              <li
                key={project.id}
                className={clsx(
                  project.frontmatter.path === pagePath
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600',
                  'p-4 font-semibold mb-2 rounded-md hover:bg-blue-400 hover:text-white'
                )}
              >
                <Link to={project.frontmatter.path}>
                  {project.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout.Sidebar>
      <Layout.Content>
        <section className="max-w-2xl mx-auto">
          <h1 className="font-semibold text-5xl">
            {project.frontmatter.title}
          </h1>
          <article dangerouslySetInnerHTML={{ __html: project.html }} />
        </section>
      </Layout.Content>
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      frontmatter {
        title
        tech
        github
        link
      }
    }
  }
`
