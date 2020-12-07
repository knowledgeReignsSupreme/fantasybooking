import React, { useEffect } from 'react';
import { postsData } from '../../data';

export default function SinglePost({ posts, match }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let currentPost = postsData[+match.params.id];

  return (
    <div className='singlepost__wrapper'>
      <img
        className='singlepost__wrapper__img'
        src={currentPost.image}
        alt={currentPost.title}
      />
      <div className='singlepost__wrapper__text'>
        <h1 className='singlepost__wrapper__text__header'>
          {currentPost.title}
        </h1>
        <h5 className='singlepost__wrapper__text__author'>
          by {currentPost.author}
        </h5>
        <p className='singlepost__wrapper__text__description'>
          {currentPost.description}
        </p>
        <p className='singlepost__wrapper__text__body'>{currentPost.body}</p>
      </div>
    </div>
  );
}
