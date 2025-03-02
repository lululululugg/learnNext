import React from 'react'
import Image from 'next/image'
import { IImage, ImagesArr } from '@/data'
interface IParams {
  params :{ id: string }
}
export default function Page({params}:IParams) {
  const item : IImage = ImagesArr.find((item) => item.id === +params.id)!;
  return (
    <div className='container mx-auto mt-8'>
      <Image src={item?.src} alt={item?.alt} width={400} height={400} className='rounded-xl block mx-auto' />
      <div className='border border-dashed border-gray-500 rounded-lg p-4 mt-4' >
        <p className='text-center text-gray-500'>
          <strong>title:</strong>{item?.alt}
        </p>
        <p className='text-center text-gray-500'>
          <strong>price: </strong> {item?.price}
        </p>
      </div>
    </div>
  )
}
