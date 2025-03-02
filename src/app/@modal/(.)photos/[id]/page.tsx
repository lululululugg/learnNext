"use client"
import { IImage, ImagesArr } from '@/data';
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface IParams {
    params :{ id: string }
  }
export default function Page({params}: IParams) {
  const router = useRouter();
  const photo : IImage = ImagesArr.find((item) => item.id === +params.id)!;
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={router.back}>
      <Image width={300} height={300} className="rounded-lg" alt={photo.alt} src={photo.src} onClick={e=>e.stopPropagation()} />
    </div>
  )
}
