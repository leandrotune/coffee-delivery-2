'use client'

import { Coffee } from '../coffee'

export function CoffeeList() {
  return (
    <main className="max-w-[70rem] m-auto">
      <h2 className="font-sans text-4xl text-gray-800 font-extrabold mb-[3.375rem]">
        Nossos cafés
      </h2>
      <div className="flex flex-wrap gap-8 pb-[9.625rem]">
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
      </div>
    </main>
  )
}
