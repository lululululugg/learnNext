import React from 'react'
import { ImagesArr } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {ImagesArr.map((item,index)=>{
            return (
                <Link href={`/photos/${item.id}`} className="group" key={index}>
                    <div className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" >
                        <Image className='w-full h-full object-cover rounded-xl' src={item.src} alt={item.alt} width={200} height={200} />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700 line-clamp-1">{item.alt}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$28</p>
                </Link>
            )
        })}
        </div>
    </div>
    </div>
  )
}
