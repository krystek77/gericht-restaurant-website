import React from 'react';
import './BlogPost.css';

function BlogPost({ title, image, date, author, content }) {
  return (
    <div className="post-card">
      <div className="post-card__image-wrapper">
        <img className="post-card__image" src={image} alt="title" />
      </div>
      <div className="post-card__info">
        <p className="post-card__date">{date}</p>
        <p className="post-card__author">- {author}</p>
      </div>
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__content">{content}</p>
      <a className="post-card__read-more" href="#post01">
        Read More
      </a>
    </div>
  );
}
export default BlogPost;
