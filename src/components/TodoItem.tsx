import React, { ChangeEvent } from 'react'
import RemoveTodoButton, { RemoveTodoButtonProps } from '@/components/RemoveTodoButton'
import { Todo } from '@/domain/todo.types'

export type TodoItemProps = Pick<Todo, 'text' | 'isChecked'> & {
  onChange: (newIsChecked: boolean) => void
  onRemove: RemoveTodoButtonProps['onClick']
}

export default function TodoItem({ text, isChecked, onChange, onRemove }: TodoItemProps) {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <li className="group flex items-start justify-between space-x-4 p-4 hover:bg-color-listHover dark:hover:bg-color-listHover rounded-lg">
      <label className="flex space-x-4">
        <div className="flex h-6 items-center">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isChecked}
            onChange={handleOnChange}
          />
        </div>
        <span className="flex-auto text-color-list dark:text-color-list">{text}</span>
      </label>
      <div className="invisible group-hover:visible">
        <RemoveTodoButton onClick={onRemove} />
      </div>
    </li>
  )
}
