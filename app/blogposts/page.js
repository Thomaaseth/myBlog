"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

const blogPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let storedPosts = localStorage.getItem('blogPosts')
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts))
        }
    }, [])

    return (
        <div>
            <h1>List of Blog Posts</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <Link href='/'>Accueil</Link>

                </div>

            ))}
        </div>
    )
}

export default blogPosts