import React from 'react'
import clsx from 'clsx'

import styles from '../css/Home.module.scss'
import useMeta from '../hooks/useMeta'

export default function Home() {
  const { about, description } = useMeta()
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
