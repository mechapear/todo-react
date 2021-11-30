import React from 'react'
import Header from '@/components/Header'
import TodoBoard from '@/components/TodoBoard'

const App = (): JSX.Element => {
  return (
    <div className="max-w-[28rem] mx-auto mt-6 space-y-6 p-8 bg-white border rounded-lg shadow-2xl">
      <Header />
      <TodoBoard />
    </div>
  )
}

export default App
