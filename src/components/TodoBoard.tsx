import React, { useState } from 'react'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

export type Todo = {
  id: string
  text: string
  isChecked: boolean
}

// save todoList ใน localStorage
const saveInStorage = (todoList: Todo[]) => {
  localStorage.setItem('allTodoList', JSON.stringify(todoList))
}

// get allTodoList from localStorage
const getDataFromStorage = (): Todo[] => {
  const rawStorageStr = localStorage.getItem('allTodoList')
  return rawStorageStr ? JSON.parse(rawStorageStr) : []
}

export default function TodoBoard() {
  const [todoList, setTodoList] = useState<Todo[]>(getDataFromStorage)

  const handleNewTodo = (newTodo: Todo) => {
    setTodoList([...todoList, newTodo])
    saveInStorage([...todoList, newTodo])
  }

  const handleCheckTodo = ({ id, isChecked }: Pick<Todo, 'id' | 'isChecked'>) => {
    const updateTodo = todoList.map((todo) => {
      if (todo.id !== id) return todo

      return { ...todo, isChecked: isChecked }
    })
    setTodoList(updateTodo)
    saveInStorage(updateTodo)
  }

  const handleRemoveTodo = (id: Todo['id']) => {
    const updateTodo = todoList.filter((todo) => {
      if (todo.id !== id) return todo
    })

    setTodoList(updateTodo)
    saveInStorage(updateTodo)
  }

  return (
    <div>
      <TodoInput onNewTodo={handleNewTodo} />
      <TodoList todoList={todoList} onCheckTodo={handleCheckTodo} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}
