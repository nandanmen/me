import React from 'react'
import clsx from 'clsx'
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
    <main className="bg-white p-8 pt-12">
      <img
        className={clsx(
          'w-16 h-16 bg-gray-500 mb-8 rounded-full border-gray-500 border-2',
          styles.image
        )}
        src="./avatar.jpg"
      />
      <header
        className="text-xl font-semibold mb-4"
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
