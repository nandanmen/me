import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

type LinkButtonProps = {
  to: string
  children: ReactNode
  className?: string
  disabled?: boolean
}

export default function LinkButton({
  children,
  to,
  className = '',
  disabled = false,
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'w-10 h-10 bg-gray-100 rounded-full text-gray-600 flex items-center justify-center text-xl',
        disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : '',
        className
      )}
    >
      {children}
    </Link>
  )
}
