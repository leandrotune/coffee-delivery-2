import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function ItemsIcons() {
  return (
    <div className="grid grid-cols-2 h-8 mt-[4.469rem]">
      <div className="flex items-center h-8 w-[14.438rem] mb-[1.938rem]">
        <div className="w-8 mr-3 flex justify-center items-center h-8 rounded-full bg-yellow-900">
          <ShoppingCart size={16} weight="fill" color="#FFFFFF" />
        </div>
        <span>Compra simples e segura</span>
      </div>
      <div className="flex items-center h-8 w-[18.375rem] mb-[1.938rem]">
        <div className="w-8 mr-3 flex justify-center items-center h-8 rounded-full bg-gray-700">
          <Package size={16} weight="fill" color="#FFFFFF" />
        </div>
        <span>Embalagem mantém o café intacto</span>
      </div>
      <div className="flex items-center  h-8 w-[14.438rem]">
        <div className="w-8 mr-3 flex justify-center items-center h-8 rounded-full bg-yellow-500">
          <Timer size={16} weight="fill" color="#FFFFFF" />
        </div>
        <span>Entrega rápida e rastreada</span>
      </div>
      <div className="flex items-center h-8 w-[18.375rem]">
        <div className="w-8 mr-3 flex justify-center items-center h-8 rounded-full bg-purple-500">
          <Coffee size={16} weight="fill" color="#FFFFFF" />
        </div>
        <span>O café chega fresquinho até você</span>
      </div>
    </div>
  )
}
