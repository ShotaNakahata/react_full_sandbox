import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main>
        <h1>The Blog</h1>
        <p><Link href="/blog/post1">Post 1</Link></p>
        <p><Link href="/blog/post2">Post 2</Link></p>
    </main>
  )
}

export default page