import React from 'react'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale',
};
export default function Page() {
  return (
    <Hero contentText="Scale~"/>
  )
}
