import React from 'react'

export default function Tapestry() {
  const center = { x: 50, y: 50 }
  const nodes = [
    { x: 80, y: 70 },
    { x: 20, y: 20 },
    { x: 15, y: 75 },
  ]

  return (
    <svg className="fill-current text-teal-400 w-full" viewBox="0 0 100 100">
      {nodes.map(({ x, y }) => (
        <line
          key={`link-${x}-${y}`}
          strokeWidth="2"
          stroke="currentColor"
          x1={x}
          x2={center.x}
          y1={y}
          y2={center.y}
        ></line>
      ))}
      <circle r="20" cx={center.x} cy={center.y}></circle>
      {nodes.map(node => (
        <circle
          key={`${node.x}-${node.y}`}
          r="8"
          cx={node.x}
          cy={node.y}
        ></circle>
      ))}
    </svg>
  )
}
