import React, { ChangeEvent } from 'react'
import RemoveTodoButton from '@/components/RemoveTodoButton'
import { Todo } from '@/components/TodoBoard'

export type TodoItemProps = Pick<Todo, 'text' | 'isChecked'> & {
  onChange: (newIsChecked: boolean) => void
}

export default function TodoItem({ text, isChecked, onChange }: TodoItemProps) {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <li className="flex items-start justify-between space-x-4 p-4 hover:bg-gray-100">
      <label className="flex space-x-4">
        <div className="flex h-6 items-center">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isChecked}
            onChange={handleOnChange}
          />
        </div>
        <span className="flex-auto text-gray-700">{text}</span>
      </label>
      <RemoveTodoButton />
    </li>
  )
}
