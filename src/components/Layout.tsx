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
        'bg-white p-8 my-0 mx-auto max-w-screen-sm lg:max-w-screen-xl lg:grid lg:gap-8',
        styles.main
      )}
    >
      {children}
    </main>
  )
}

Layout.Header = function Header({ children }: ChildrenProps) {
  return <header className="lg:col-start-1 col-span-2">{children}</header>
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

Layout.Content = function Content({ children }: ChildrenProps) {
  return <section className={styles.content}>{children}</section>
}
