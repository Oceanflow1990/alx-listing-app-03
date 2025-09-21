// components/common/Pill.tsx
import React from "react"
import { PillProps } from "@/interfaces"

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <span className="px-4 py-2 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-indigo-600 hover:text-white">
      {label}
    </span>
  )
}

export default Pill
