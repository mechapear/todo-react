import React, { ChangeEvent, FormEvent, useState } from 'react'

type Todo = {
  id: number
  text: string
  isChecked: boolean
}

let nextId = 0

function getNextId() {
  // เก็บค่า nextId เดิมเอาไว้ก่อนที่จะบวก
  const currentNextId = nextId
  nextId = nextId + 1
  return currentNextId
}

export default function TodoInput() {
  const [todoLists, setTodoLists] = useState<Todo[]>([])
  const [textTodo, setTextTodo] = useState('')

  function handleAddTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newTodo: Todo = {
      id: getNextId(),
      text: textTodo,
      isChecked: false,
    }
    setTodoLists([...todoLists, newTodo])
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
        className="flex-1 border border-cyan-500 rounded-lg p-2 focus:outline-none focus:ring-cyan-600 focus:ring-1 min-w-0"
        placeholder="New Task"
        value={textTodo}
        onChange={handleOnChange}
      />
      <button
        type="submit"
        className="flex-shrink-0 border bg-cyan-500 rounded-lg p-2 text-center text-gray-100 min-w-[6rem] hover:bg-cyan-600"
      >
        Add
      </button>
    </form>
  )
}
