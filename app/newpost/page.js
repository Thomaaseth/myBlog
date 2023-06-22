"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'


const newpost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newPost = { title: title, content: content };
        let existingPosts = JSON.parse(localStorage.getItem('blogPosts'));
        if (!existingPosts) {
            existingPosts = [];
        }

        existingPosts.push(newPost);

        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        // localStorage.setItem('title', title);
        // localStorage.setItem('content', content)
        setTitle('');
        setContent('');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h2>Create new blog post</h2>
                <label>
                    Title:<input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <label>
                    Content:<textarea name="content" value={content} onChange={e => setContent(e.target.value)} />
                </label>
                <button type="submit">Submit new post</button>
            </form>
            <Link href='/'>Accueil</Link>

        </div>
    )
}

export default newpost