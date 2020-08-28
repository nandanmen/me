import React from 'react'
import clsx from 'clsx'

import Avatar from './Avatar'
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
      <header className="lg:col-start-1 col-span-2">
        <Avatar />
      </header>
      {children}
    </main>
  )
}

Layout.Sidebar = function Sidebar({
  children,
  className = '',
}: ChildrenProps & { className?: string }) {
  return <aside className={clsx(styles.about, className)}>{children}</aside>
}

Layout.Content = function Content({ children }: ChildrenProps) {
  return <section className={styles.content}>{children}</section>
}
