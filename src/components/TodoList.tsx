import React from 'react'

export default function TodoList() {
  return (
    <div>
      <ul>
        <li className="flex items-start justify-between space-x-4 p-4 hover:bg-gray-100">
          <label className="flex space-x-4">
            <div className="flex h-6 items-center">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <span className="flex-auto text-gray-700">learn React</span>
          </label>
          <button className="inline-flex items-center justify-center cursor-pointer bg-gray-700 rounded-lg text-white px-2 py-1 ">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="trash-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="inline align-middle w-[1em] h-[1em] leading-none"
            >
              <path
                fill="currentColor"
                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
              />
            </svg>
          </button>
        </li>
        <li className="flex items-start justify-between space-x-4 p-4 hover:bg-gray-100">
          <label className="flex space-x-4">
            <div className="flex h-6 items-center">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <span className="flex-auto text-gray-700">build new project</span>
          </label>
          <button className="inline-flex items-center justify-center cursor-pointer bg-gray-700 rounded-lg text-white px-2 py-1 ">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="trash-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="inline align-middle w-[1em] h-[1em] leading-none"
            >
              <path
                fill="currentColor"
                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}
