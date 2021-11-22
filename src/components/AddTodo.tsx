import React, { useState } from 'react'

export default function AddTodo() {
  const [textTodo, setTextTodo] = useState('')

  return (
    <div className="flex space-x-2">
      <input
        className="flex-1 border border-cyan-500 rounded-lg p-2 focus:outline-none focus:ring-cyan-600 focus:ring-1 min-w-0"
        placeholder="New Task"
        value={textTodo}
        onChange={(event) => setTextTodo(event.target.value)}
      />
      <button
        className="flex-shrink-0 border bg-cyan-500 rounded-lg p-2 text-center text-gray-100 min-w-[6rem] hover:bg-cyan-600"
        onClick={() => {
          setTextTodo('')
        }}
      >
        Add
      </button>
    </div>
  )
}
