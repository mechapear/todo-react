import React from 'react'
import RemoveTodoButton from '@/components/RemoveTodoButton'

export default function TodoItem() {
  return (
    <div>
      <li className="flex items-start justify-between space-x-4 p-4 hover:bg-gray-100">
        <label className="flex space-x-4">
          <div className="flex h-6 items-center">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <span className="flex-auto text-gray-700">learn React</span>
        </label>
        <RemoveTodoButton />
      </li>
    </div>
  )
}
