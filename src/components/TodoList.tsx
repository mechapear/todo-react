import React from 'react'
import { Todo } from '@/components/TodoBoard'
import TodoItem from '@/components/TodoItem'

export type TodoListProps = {
  todoList: Todo[]
  onCheckTodo: ({ id, isChecked }: Pick<Todo, 'id' | 'isChecked'>) => void
}

export default function TodoList({ todoList, onCheckTodo }: TodoListProps) {
  return (
    <div>
      <ul>
        {todoList.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              text={todoItem.text}
              isChecked={todoItem.isChecked}
              onChange={(newIsChecked) => onCheckTodo({ id: todoItem.id, isChecked: newIsChecked })}
            />
          )
        })}
      </ul>
    </div>
  )
}
