import { useStaticQuery, graphql } from 'gatsby'

type MetaContent = {
  about: {
    html: string
  }
  description: {
    html: string
  }
}

export default function useMeta() {
  return useStaticQuery<MetaContent>(graphql`
    query MetaQuery {
      about: markdownRemark(fileAbsolutePath: { regex: "/about/i" }) {
        html
      }
      description: markdownRemark(
        fileAbsolutePath: { regex: "/description/i" }
      ) {
        html
      }
    }
  `)
}
