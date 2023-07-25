import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center p-24"'>
      <div className='flex flex-col gap-8 items-center justify-between'>
        <h2 className='text-3xl'>
          Not Found this page
        </h2>
        <Link href="/">
          <button className='bg-orange-500 py-4 px-8 rounded-md'>
            Go back to home
            </button>
        </Link>
      </div>
    </div>
  )
}
