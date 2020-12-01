import React, {useEffect} from 'react'
import Posts from '../Components/Blog/Posts';

export default function Blog({posts}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="blog__header__wrapper">
      <h1 className="blog__header__wrapper__header">Our Blog</h1>
      <h3 className="blog__header__wrapper__header-sub">We'll keep you up to date with the most fantastic <span>writers</span></h3>
    </div>
      <Posts posts={posts}/>
    </div>
  )
}
