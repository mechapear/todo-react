import React from 'react'
import RemoveTodoButton from '@/components/RemoveTodoButton'
import { Todo } from '@/components/TodoBoard'

export type TodoItemProps = Pick<Todo, 'text' | 'isChecked'>

export default function TodoItem({ text, isChecked }: TodoItemProps) {
  return (
    <li className="flex items-start justify-between space-x-4 p-4 hover:bg-gray-100">
      <label className="flex space-x-4">
        <div className="flex h-6 items-center">
          <input type="checkbox" className="cursor-pointer" checked={isChecked} />
        </div>
        <span className="flex-auto text-gray-700">{text}</span>
      </label>
      <RemoveTodoButton />
    </li>
  )
}
