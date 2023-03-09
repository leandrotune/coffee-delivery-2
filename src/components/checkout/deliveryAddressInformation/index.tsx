'use client'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const addressInformationSchema = z.object({
  cep: z.string(),
  address: z.string(),
  number: z.string(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  county: z.string(),
})

type informationInputsForm = z.infer<typeof addressInformationSchema>

export function DeliveryAddressInformation() {
  const { register, handleSubmit } = useForm<informationInputsForm>()

  function handleInformationsInputs(data: informationInputsForm) {
    console.log(data)
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleInformationsInputs)}
    >
      <input
        id="cep"
        type="text"
        placeholder="05891-160"
        className="flex gap-1 p-3 rounded border border-gray-400  focus:outline-none focus:border-yellow-900 no-underline placeholder:text-gray-700 bg-gray-300 max-w-[12.5rem]"
        required
        {...register('cep')}
      />
      <input
        id="address"
        type="text"
        placeholder="Rua João Daniel Martinelli"
        className="flex gap-1 p-3 rounded border border-gray-400  focus:outline-none focus:border-yellow-900 no-underline placeholder:text-gray-700 bg-gray-300"
        {...register('address')}
        required
      />
      <div className="w-[35rem] flex justify-between">
        <input
          id="number"
          type="text"
          placeholder="102"
          className="flex gap-1 p-3 rounded border border-gray-400  focus:outline-none focus:border-yellow-900 no-underline placeholder:text-gray-700 bg-gray-300"
          {...register('number')}
          required
        />
        <input
          id="complement"
          type="text"
          placeholder="Complemento"
          className="flex gap-1 p-3 rounded border border-gray-400  focus:outline-none focus:border-yellow-900 no-underline placeholder:text-gray-700 bg-gray-300"
          {...register('complement')}
        />
      </div>
      <div className="box-border w-[35rem] flex justify-between">
        <input
          id="district"
          type="text"
          placeholder="ferrapos"
          className="flex gap-1 p-3 rounded border border-gray-400  focus:outline-none focus:border-yellow-900 no-underline placeholder:text-gray-700 bg-gray-300"
          {...register('district')}
          required
        />
        <input
          id="city"
          type="text"
          placeholder="Porto Alegre"
          className="w-[12.813rem] flex gap-1 p-3 rounded border border-gray-400  focus:outline-none focus:border-yellow-900 no-underline placeholder:text-gray-700 bg-gray-300"
          {...register('city')}
          required
        />
        <input
          id="county"
          type="text"
          placeholder="RS"
          className="w-[3.75rem] flex gap-1 p-3 rounded border border-gray-400  focus:outline-none focus:border-yellow-900 no-underline placeholder:text-gray-700 bg-gray-300"
          {...register('county')}
          required
        />
      </div>
    </form>
  )
}
