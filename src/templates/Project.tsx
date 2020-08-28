import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

import ProjectCard from '../components/ProjectCard'
import Layout from '../components/Layout'
import { Project } from '../hooks/useProjects'

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
  const project = data.markdownRemark
  const { next, previous, pagePath } = pageContext as PageContext
  return (
    <>
      <Layout.Sidebar>
        <ProjectCard {...project} />
      </Layout.Sidebar>
      <Layout.Content>
        <section className="max-w-2xl">
          <h1 className="font-semibold text-5xl">
            {project.frontmatter.title}
          </h1>
          <article dangerouslySetInnerHTML={{ __html: project.html }} />
        </section>
      </Layout.Content>
    </>
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
