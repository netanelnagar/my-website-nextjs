'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="grow flex items-center justify-center bg-slate-100/50 px-6">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-4xl p-10 text-center space-y-6">
        <p className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
          Oops! Something went wrong
        </p>
        <h2 className="text-4xl font-bold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
          An unexpected error occurred
        </h2>
        <p className="text-gray-600">
          We hit a snag while loading this page. Try again or head back home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}