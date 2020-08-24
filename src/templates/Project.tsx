import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import { Project } from '../hooks/useProjects'

type ProjectPageData = {
  markdownRemark: Project
}

export default function ProjectPageTemplate({
  data,
}: PageProps<ProjectPageData>) {
  const project = data.markdownRemark
  return (
    <Layout>
      <h1>{project.frontmatter.title}</h1>
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
