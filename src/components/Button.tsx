import React, { ReactNode } from 'react'
import clsx from 'clsx'

type ButtonProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  className = '',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        'w-10 h-10 bg-gray-100 rounded-full text-gray-600 flex items-center justify-center text-xl',
        disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : '',
        className
      )}
    >
      {children}
    </button>
  )
}
