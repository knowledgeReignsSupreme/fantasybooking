import React from 'react'
import { Link } from 'react-router-dom'

export default function Posts({ posts }) {
  return (
    <div className="blog__posts__wrapper">
      {posts.map(post => (
        <Link to={`/blog/post/${post.id}`} key={post.id} >
        <div key={post.id} className="blog__post">
        <img className="blog__post__img" src={post.image} alt={post.title.toString()}/>
        <div className="blog__post__text">
        <h1 className="blog__post__header">{post.title}</h1>
        <h5 className="blog__post__author">by {post.author}</h5>
        <p className="blog__post__description">{post.description}</p>
        <button className="blog__post__button">Read More &rarr;</button>
        </div>
        </div>
        </Link>
      ))}
    </div>
      )  
    }
      
