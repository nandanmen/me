import React from 'react'
import clsx from 'clsx'

import styles from '../css/Layout.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={clsx(
        'bg-white px-8 py-12 my-0 mx-auto max-w-screen-sm lg:flex lg:max-w-screen-xl',
        styles.main
      )}
    >
      {children}
    </main>
  )
}
