import React from 'react'
import AddTodo from '@/components/AddTodo'
import Header from '@/components/Header'
import TodoList from '@/components/TodoList'

const App = (): JSX.Element => {
  return (
    <div className="max-w-[28rem] mx-auto mt-6 space-y-6 p-8 bg-white border rounded-lg shadow-2xl">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
