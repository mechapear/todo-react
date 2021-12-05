import React, { useState } from 'react'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'
import { Todo } from '@/domain/todo.types'
import { getDataFromStorage, saveInStorage } from '@/lib/storage'

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
