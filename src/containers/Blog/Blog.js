/* eslint-disable no-unused-vars */
import React from 'react';
import images from '../../constants/images';
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import ActionButton from '../../components/ActionButton/ActionButton';
import './Blog.css';

const blogData = [
  {
    title: 'tips for prepping and caring for your grill',
    image: images.blog01,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    date: new Date(2021, 3, 16).toLocaleDateString(),
    author: 'Annalisa L',
  },
  {
    title: 'summer cocktails and mocktails',
    image: images.blog02,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    date: new Date(2021, 4, 23).toLocaleDateString(),
    author: 'John Michael',
  },
  {
    title: 'easy cooking for college students',
    image: images.blog03,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    date: new Date(2021, 7, 6).toLocaleDateString(),
    author: 'Fred W',
  },
];

function Blog() {
  return (
    <div className="blog">
      <Subtitle content="Blogs" />
      <Title content="Gerícht Updates" purpose="section" />
      <div className="blog__posts">
        {blogData.map(({ title, image, date, author, content }, index) => (
          <div className="post-card" key={index}>
            <div className="post-card__image">
              <img src={image} alt="title" />
            </div>
            <div className="post-card__info">
              <p className="post-card__date">{date}</p>
              <p className="post-card__author">{author}</p>
            </div>
            <h3 className="post-card__title">{title}</h3>
            <p className="post-card__content">{content}</p>
            <a className="post-card__read-more" href="#post01">
              Read More
            </a>
          </div>
        ))}
      </div>
      <ActionButton label="View More" />
    </div>
  );
}
export default Blog;
