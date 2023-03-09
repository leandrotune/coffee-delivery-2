'use client'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function OderInfo() {
  return (
    <div className="w-[32.875rem] h-[16.875rem] flex flex-col justify-evenly border border-purple-500 rounded-tl-md rounded-tr-[32px] rounded-bl-[32px]  rounded-br-md mb-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 ml-10">
          <MapPin size={16} weight="fill" color="#FAFAFA" />
        </div>
        <div>
          <p>
            Entrega em{' '}
            <strong className="text-md font-sans text-gray-700 font-bold">
              Rua João Daniel Martinelli, 102
            </strong>
          </p>
          <span>Farrapos - Porto Alegre, RS</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 ml-10">
          <Timer size={16} weight="fill" color="#FAFAFA" />
        </div>
        <div>
          <p>Previsão de entrega</p>
          <strong className="text-md font-sans text-gray-700 font-bold">
            20 min - 30 min{' '}
          </strong>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-900 ml-10">
          <CurrencyDollar size={16} weight="bold" color="#FAFAFA" />
        </div>
        <div>
          <p>Pagamento na entrega</p>
          <strong className="text-md font-sans text-gray-700 font-bold">
            Cartão de Crédito
          </strong>
        </div>
      </div>
    </div>
  )
}
