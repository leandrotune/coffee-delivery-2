'use client'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function CardPaymentMethod() {
  return (
    <footer className="max-w-[40rem] mt-3 bg-gray-100 p-10 rounded-md">
      <div className="flex gap-1">
        <CurrencyDollar size={22} weight="regular" color="#8047F8" />
        <div>
          <p className="text-md font-normal text-gray-800">Pagamento</p>
          <span className=" text-sm font-normal text-gray-700">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <div className="bg-gray-300 w-[11.167rem] flex items-center gap-3 p-4 rounded-md hover:bg-gray-400 active:bg-purple-100 border active:border-purple-500">
          <CreditCard size={16} weight="regular" color="#8047F8" />
          <p className="text-xs font-normal text-gray-700 uppercase">
            Cartão de Crédito
          </p>
        </div>
        <div className="bg-gray-300 w-[11.167rem] flex items-center gap-3 p-4 rounded-md hover:bg-gray-400 active:bg-purple-100 border active:border-purple-500">
          <Bank size={16} weight="regular" color="#8047F8" />
          <p className="text-xs font-normal text-gray-700 uppercase">
            Cartão de Débito
          </p>
        </div>
        <div className="bg-gray-300 w-[11.167rem] flex items-center gap-3 p-4 rounded-md hover:bg-gray-400 active:bg-purple-100 border active:border-purple-500">
          <Money size={16} weight="regular" color="#8047F8" />
          <p className="text-xs font-normal text-gray-700 uppercase">
            Dinheiro
          </p>
        </div>
      </div>
    </footer>
  )
}
