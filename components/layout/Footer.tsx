// components/layout/Footer.tsx
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Unnaira. All rights reserved.</p>
    </footer>
  )
}

export default Footer
