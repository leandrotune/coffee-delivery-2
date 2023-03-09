import { CardCoffeeAndress } from '@/components/checkout/cardCoffeeAndress'
import { CardPaymentMethod } from '../../components/checkout/cardPaymentMethod/index'

export default function Checkout() {
  return (
    <div className="max-w-[70rem] m-auto">
      <main>
        <h1 className="mt-10 text-lg font-mono font-bold">
          Complete seu pedido
        </h1>
        <CardCoffeeAndress />
        <CardPaymentMethod />
      </main>
    </div>
  )
}
