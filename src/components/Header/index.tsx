'use client'

import Image from 'next/image'
import Link from 'next/link'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../../public/logo.svg'

export function Header() {
  return (
    <header className="max-w-[70rem] h-[6.5rem] m-auto flex flex-col justify-center">
      <nav className="flex justify-between">
        <Link href="/">
          <Image
            src={logoImg}
            width={85}
            height={40}
            alt="Logo coffee Delivery"
          />
        </Link>

        <div className="w-[12.063rem] flex justify-between">
          <div className=" w-[8.938rem] flex justify-center items-center bg-purple-100 rounded-md">
            <MapPin size={22} weight="fill" color="#8047F8" />
            <span className="text-sm text-purple-900">Porto alegre, SR</span>
          </div>
          <div className="m-auto h-auto bg-yellow-100 p-2 rounded-md flex justify-center items-center">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </div>
        </div>
      </nav>
    </header>
  )
}
