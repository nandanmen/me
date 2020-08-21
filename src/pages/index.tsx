import React from 'react'
import { graphql, PageProps } from 'gatsby'
import styles from '../css/Home.module.scss'

type PageData = {
  about: {
    html: string
  }
  description: {
    html: string
  }
}

export default function Home({
  data: { about, description },
}: PageProps<PageData>) {
  return (
    <main className="bg-white p-8 pt-24">
      <div className="w-16 h-16 bg-gray-500 mb-12 rounded-full" />
      <header
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: about.html }}
      />
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description.html }}
      />
    </main>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    about: markdownRemark(fileAbsolutePath: { regex: "/about/i" }) {
      html
    }
    description: markdownRemark(fileAbsolutePath: { regex: "/description/i" }) {
      html
    }
  }
`
