import Link from "next/link";
import Image from "next/image";
// import Img1 from '/public/IMG_0377.jpg'
import React from "react";
import Hero from "../../components/Hero";
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <Hero contentText="Home"/>
  )
}