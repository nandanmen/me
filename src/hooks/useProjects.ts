import { useStaticQuery, graphql } from 'gatsby'

export type Project = {
  id: string
  html: string
  frontmatter: {
    color: string
    cover: string
    github: string
    link: string | null
    tech: string[]
    title: string
  }
}

export default function useProjects(): Project[] {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            html
            frontmatter {
              color
              cover
              github
              link
              tech
              title
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges.map(
    (edge: { node: Project }) => edge.node
  )
}
