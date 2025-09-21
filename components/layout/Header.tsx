// components/layout/Header.tsx
import React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">Unnaira</div>

      {/* Search */}
      <div className="mt-3 md:mt-0 md:mx-6 flex-1">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Auth */}
      <div className="mt-3 md:mt-0 flex gap-3">
        <button className="px-4 py-2 border rounded-lg">Sign in</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Sign up
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="mt-3 md:mt-0 flex gap-4 text-gray-600 text-sm">
        <span>Rooms</span>
        <span>Mansion</span>
        <span>Countryside</span>
      </nav>
    </header>
  )
}

export default Header
