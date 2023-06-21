"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      <div>
        <Link href="/">Home</Link>
        <Link href="/blog-posts">See all posts</Link>
        <Link href="/new-post">Create new post</Link>
      </div>
      <div>
        <h1>Welcome to my blog</h1>
        <p>This is a simple blog application used as a training for building apps with nextJS</p>
      </div>
    </main>
  )
}
