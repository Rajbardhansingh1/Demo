import React from 'react'

const NoOpenings = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
    <div className="animate-bounce text-6xl text-gray-400 dark:text-gray-600">😔</div>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">No openings right now</p>
  </div>
  )
}

export default NoOpenings