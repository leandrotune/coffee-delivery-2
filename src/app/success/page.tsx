import { OderInfo } from '@/components/success/orderInfo'
import Image from 'next/image'

import illustration from '../../../public/illustration.svg'

export default async function Success() {
  return (
    <main className="max-w-[70rem] m-auto flex justify-between">
      <div>
        <h1 className="mt-20 font-baloo2 text-4xl font-extrabold text-yellow-900 leading-7">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-xl font-normal mb-11 leading-7 mt-1">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <OderInfo />
      </div>
      <div>
        <Image
          src={illustration}
          alt="ilustração"
          width={492}
          height={293}
          className="mt-[11.25rem]"
        />
      </div>
    </main>
  )
}
