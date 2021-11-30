import React from 'react'
import { Todo } from '@/components/TodoBoard'
import TodoItem from '@/components/TodoItem'

export type TodoListProps = {
  todoList: Todo[]
}

export default function TodoList({ todoList }: TodoListProps) {
  return (
    <div>
      <ul>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} text={todoItem.text} isChecked={todoItem.isChecked} />
        ))}
      </ul>
    </div>
  )
}
