import React from 'react'
import TodoItem from '@/components/TodoItem'

export default function TodoList() {
  return (
    <div>
      <ul>
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}
