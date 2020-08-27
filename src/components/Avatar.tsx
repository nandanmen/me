import React from 'react'
import { Link } from 'gatsby'

type AvatarProps = {
  src?: string
}

export default function Avatar({ src = '/avatar.jpg' }: AvatarProps) {
  return (
    <Link to="/" className="w-16 h-16 mb-8 block lg:mb-0">
      <img
        className="w-16 h-16 bg-gray-500 rounded-full border-gray-500 object-cover border-2 "
        src={src}
      />
    </Link>
  )
}
