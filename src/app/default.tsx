import React from "react";
// import Hero from "../../components/Hero";
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <div className="flex justify-center items-center p-8 flex-1 rounded-lg bg-yellow-100 mt-3 text-red-300">children</div>
  )
}