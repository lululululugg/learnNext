import React from 'react'
import type { Metadata } from 'next'
import BlogList from '@/components/blogList'
 
export const metadata: Metadata = {
  title: '博客列表',
  description: '...',
}

export default function Bold() {
  return (
    <BlogList/>
  )
}
