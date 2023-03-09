'use client'

import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export function ItemCounter() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    if (count >= 0) {
      setCount((state) => (state += 1))
    }
  }

  function handleDescrement() {
    if (count > 0) setCount((state) => (state -= 1))
  }

  return (
    <div className="w-[4.5rem] h-[2.375rem] bg-gray-400 flex items-center justify-around rounded-md ">
      <button className="bottom-0" onClick={handleDescrement}>
        <Minus size={14} weight="bold" color="#8047F8" />
      </button>
      <span className="text-md text-gray-900">{count}</span>
      <button className="bottom-0" onClick={handleIncrement}>
        <Plus size={14} weight="bold" color="#8047F8" />
      </button>
    </div>
  )
}
