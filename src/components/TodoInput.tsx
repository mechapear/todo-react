import { nanoid } from 'nanoid'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Todo } from '@/domain/todo.types'
import PlusIcon from '@/icons/PlusIcon'

export type TodoInputProps = {
  // onNewTodo รับมาจาก TodoBoard เป็น Function ที่ไม่ return แต่ส่งค่า newTodo ไปให้ TodoBoard
  onNewTodo: (newTodoText: Todo) => void
}

export default function TodoInput({ onNewTodo }: TodoInputProps) {
  const [textTodo, setTextTodo] = useState('')

  function handleAddTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (textTodo === '') return undefined

    const newTodo: Todo = {
      id: nanoid(),
      text: textTodo,
      isChecked: false,
    }
    onNewTodo(newTodo)
    setTextTodo('')
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setTextTodo(event.target.value)
  }

  return (
    <form className="flex space-x-2" onSubmit={handleAddTodo}>
      <input
        type="text"
        name="todoInput"
        className="flex-1 border border-color-input dark:border-color-input rounded-lg p-2 focus:outline-none focus:ring-color-inputFocus dark:focus:ring-color-inputFocus focus:ring-1 min-w-0 text-color-input dark:text-color-input bg-color-input dark:bg-color-input"
        placeholder="New Task"
        value={textTodo}
        onChange={handleOnChange}
      />
      <button
        type="submit"
        className="flex-shrink-0 border border-color-button dark:border-color-button bg-color-button dark:bg-color-button rounded-lg p-2 space-x-1 text-center text-color-button dark:text-color-button min-w-[2.625rem] sm:min-w-[6rem] hover:bg-color-buttonHover dark:hover:bg-color-buttonHover inline-flex items-center justify-center"
      >
        <PlusIcon />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  )
}
