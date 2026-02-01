'use client'

import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="mt-4 text-gray-600">Something went wrong.</p>
        <Link 
          href="/login" 
          className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          Return to login
        </Link>
      </div>
    </div>
  )
}