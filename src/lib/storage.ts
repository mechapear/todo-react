import { Todo } from '@/domain/todo.types'

// save todoList ใน localStorage
export const saveInStorage = (todoList: Todo[]) => {
  localStorage.setItem('allTodoList', JSON.stringify(todoList))
}

// get allTodoList from localStorage
export const getDataFromStorage = (): Todo[] => {
  const rawStorageStr = localStorage.getItem('allTodoList')
  return rawStorageStr ? JSON.parse(rawStorageStr) : []
}
