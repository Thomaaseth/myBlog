import React from 'react'
import Link from 'next/link'

const home = () => {
    return (
        <>

            <h1>Welcome to my blog</h1>
            <p>This is a simple blog application used as a training for building apps with nextJS</p>
            <div>
                <Link href="/blog-posts">See all posts</Link>
            </div>
            <div>
                <Link href="/new-posts">Create a new post</Link>
            </div>

        </>
    )
}

export default home