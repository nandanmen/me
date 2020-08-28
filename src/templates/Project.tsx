import React from 'react'
import { graphql, PageProps } from 'gatsby'

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
}: PageProps<ProjectPageData>) {
  const project = data.markdownRemark
  return (
    <>
      <Layout.Sidebar>
        <ProjectCard {...project} />
        <section className="p-6">
          <ul>
            <MetaItem name="Timeline" value={project.frontmatter.timeline} />
            <MetaItem
              name="Website"
              value={project.frontmatter.link}
              variant="link"
            />
            <MetaItem
              name="GitHub"
              value={project.frontmatter.github}
              variant="link"
            />
          </ul>
        </section>
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

function MetaItem({
  name,
  value,
  variant,
}: {
  name: string
  value: string
  variant?: 'link'
}) {
  return (
    <li>
      <h3 className="font-semibold">{name}</h3>
      {variant === 'link' ? (
        <a
          className="text-xs text-gray-600 block"
          href={value}
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-xs text-gray-600">{value}</p>
      )}
    </li>
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
        timeline
      }
    }
  }
`
