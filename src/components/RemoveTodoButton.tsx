import React, { MouseEventHandler } from 'react'
import TrashIcon from '@/icons/TrashIcon'

export type RemoveTodoButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function RemoveTodoButton({ onClick }: RemoveTodoButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center cursor-pointer bg-color-remove dark:bg-color-remove rounded-lg text-color-remove dark:text-color-remove p-1.5 text-sm"
      onClick={onClick}
    >
      <TrashIcon />
    </button>
  )
}
