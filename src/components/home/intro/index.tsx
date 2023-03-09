'use client'

import Image from 'next/image'

import coffee from '../../../../public/coffee.svg'
import { ItemsIcons } from '../itemsIcons'

export function Intro() {
  return (
    <section className="max-w-[70rem] h-[34rem] py-[5.75rem] m-auto">
      <div className="flex justify-between ">
        <div className="max-w-[36.75rem]">
          <h1 className="w-auto text-3xl leading-[3.875rem] font-extrabold font-baloo text-gray-900">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="font-roboto text-xl text-gray-800 mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ItemsIcons />
        </div>
        <div>
          <Image src={coffee} width={476} height={360} alt="coffee" />
        </div>
      </div>
    </section>
  )
}
