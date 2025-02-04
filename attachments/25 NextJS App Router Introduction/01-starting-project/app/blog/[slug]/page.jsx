/* eslint-disable react/prop-types */
import React from 'react'

function BlogPostPage({params}) {
    return (
        <main>
            <h1>Blog Page</h1>
            <h2>{params.slug}</h2>
        </main>
    )
}

export default BlogPostPage