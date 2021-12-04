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

  const handleCheckTodo = ({ id, isChecked }: Pick<Todo, 'id' | 'isChecked'>) => {
    const updateTodo = todoList.map((todo) => {
      if (todo.id !== id) return todo

      return { ...todo, isChecked: isChecked }
    })
    setTodoList(updateTodo)
  }

  return (
    <div>
      <TodoInput onNewTodo={handleNewTodo} />
      <TodoList todoList={todoList} onCheckTodo={handleCheckTodo} />
    </div>
  )
}
