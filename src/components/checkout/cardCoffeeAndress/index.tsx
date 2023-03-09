'use client'

import { MapPin } from 'phosphor-react'
import { DeliveryAddressInformation } from '../deliveryAddressInformation/index'

export function CardCoffeeAndress() {
  return (
    <section className="mt-4 bg-gray-100 rounded-md w-[40rem] p-10 flex flex-col justify-between gap-8">
      <header className="flex gap-2 items-start">
        <MapPin size={22} weight="regular" color="#C47F17" />
        <div>
          <p className="text-md font-normal font-roboto leading-5">
            Endereço de Entrega
          </p>
          <span className="text-sm font-normal leading-5">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </header>

      <DeliveryAddressInformation />
    </section>
  )
}
