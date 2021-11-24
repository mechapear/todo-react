import React from 'react'
import Header from '@/components/Header'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

const App = (): JSX.Element => {
  return (
    <div className="max-w-[28rem] mx-auto mt-6 space-y-6 p-8 bg-white border rounded-lg shadow-2xl">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
