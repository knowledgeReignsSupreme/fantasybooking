import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useScroll} from '../../useScroll';
import {scrollReveal} from '../../Animation.js'
import {motion} from 'framer-motion';

export default function BlogPreview({ posts }) {
  const [element, controls] = useScroll();
  return (
    <motion.div className="blogpreview__content" variants={scrollReveal} animate={controls} ref={element} initial="hidden">
      <div className="blogpreview__content__text">
        <h3 className="blogpreview__content__text__header">
          <span>Top</span> Blog Posts
        </h3>
        <h5 className="blogpreview__content__text__header-sub">
          Stay up to date with the most fantastic blog
        </h5>
      </div>
      <div className="blogpreview__content__posts">
          <div className="blogpreview__content__post blogpreview__content__post-1">
          <Link to={`/blog/post/${posts[1].id}`}>

            <img
              src={posts[1].image}
              alt="gingerbead man"
              className="postcard__img"
            />
            <h4 className="postcard__header">{posts[1].title}</h4>
            <p className="postcard__author">by {posts[1].author}</p>
            <p className="postcard__description">{posts[1].description}</p>
            </Link>
          </div>
          <div className="blogpreview__content__post blogpreview__content__post-2">
          <Link to={`/blog/post/${posts[4].id}`}>
            <img
              src={posts[4].image}
              alt="hansel and gretel"
              className="postcard__img"
            />
            <h4 className="postcard__header">{posts[4].title}</h4>
            <p className="postcard__author">by {posts[4].author}</p>
            <p className="postcard__description">{posts[4].description}</p>
            </Link>
          </div>
          <div className="blogpreview__content__post blogpreview__content__post-3">
          <Link to={`/blog/post/${posts[6].id}`}>
            <img
              src={posts[6].image}
              alt="goldilocks"
              className="postcard__img"
            />
            <h4 className="postcard__header">{posts[6].title}</h4>
            <p className="postcard__author">by {posts[6].author}</p>
            <p className="postcard__description">{posts[6].description}</p>
            </Link>
          </div>
      </div>
    </motion.div>
  );
}
