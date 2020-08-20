import React from 'react'
import { graphql, PageProps } from 'gatsby'

type PageData = {
  about: {
    edges: Array<{
      node: {
        html: string
      }
    }>
  }
}

export default function Home({ data }: PageProps<PageData>) {
  const { html } = data.about.edges[0].node
  return (
    <main>
      <header dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    about: allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`
