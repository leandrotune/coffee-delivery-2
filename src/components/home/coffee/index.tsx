import { ItemCounter } from '@/components/itemCounter'
import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'

import coffeeExpresso from '../../../../public/coffeeExpresso.svg'

export function Coffee() {
  return (
    <div className="max-w-[16rem] h-[20rem] flex flex-col items-center bg-gray-100 rounded-tl-md rounded-tr-[32px] rounded-bl-[32px]  rounded-br-md mb-4">
      <Image
        src={coffeeExpresso}
        width={120}
        height={120}
        alt="coffee expresso"
        className="-mt-5"
      />
      <div className=" pt-4">
        <span className="bg-yellow-100 flex gap-1 justify-center items-center rounded-full w-[5.063rem] h-5 text-xp font-bold text-yellow-900">
          Tradicional
        </span>
      </div>
      <p className="text-gray-800 font-bold text-xl leading-6 mt-5">
        Expresso Tradicional
      </p>
      <span className="mt-2 text-sm font-normal text-gray-600 text-center">
        O tradicional café feito com água quente e grãos moídos
      </span>
      <div className="flex justify-between items-center w-[13rem] mt-[2.063rem]">
        <p>
          R$ <span className="font-extrabold text-2xl text-gray-700">9,90</span>
        </p>
        <div className="flex flex-row gap-2">
          <ItemCounter />
          <button
            type="button"
            className="w-[2.375rem] h-[2.375rem] bg-purple-900 rounded-md flex justify-center items-center gap-8 hover:bg-purple-500"
          >
            <ShoppingCart size={22} weight="fill" color="#FAFAFA" />
          </button>
        </div>
      </div>
    </div>
  )
}
