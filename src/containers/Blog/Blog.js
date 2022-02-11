/* eslint-disable no-unused-vars */
import React from 'react';
import images from '../../constants/images';
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import ActionButton from '../../components/ActionButton/ActionButton';
import BlogPost from '../../components/BlogPost/BlogPost';
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
        {blogData.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <ActionButton label="View More" />
    </div>
  );
}
export default Blog;
