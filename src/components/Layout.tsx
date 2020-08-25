import React from 'react'
import clsx from 'clsx'

import styles from './css/Layout.module.scss'

type ChildrenProps = {
  children: React.ReactNode
}

export default function Layout({ children }: ChildrenProps) {
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

Layout.Sidebar = function Sidebar({
  children,
  className = '',
}: ChildrenProps & { className?: string }) {
  return (
    <aside className={clsx('lg:mr-16', styles.about, className)}>
      {children}
    </aside>
  )
}

Layout.Main = function Main({ children }: ChildrenProps) {
  return <section className={styles.content}>{children}</section>
}
