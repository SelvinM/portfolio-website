import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <header className="bg-blue-500 p-4 sticky ">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl font-bold">Your App Name</h1>
      </div>
    </header>
  )
}

export default Header