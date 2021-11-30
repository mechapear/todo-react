import React, { useState } from 'react'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

export type Todo = {
  id: number
  text: string
  isChecked: boolean
}

export default function TodoBoard() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleNewTodo = (newTodo: Todo) => setTodoList([...todoList, newTodo])

  return (
    <div>
      <TodoInput onNewTodo={handleNewTodo} />
      <TodoList todoList={todoList} />
    </div>
  )
}
