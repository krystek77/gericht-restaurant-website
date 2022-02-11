/* eslint-disable no-unused-vars */
import React from 'react';
import images from '../../constants/images';
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
    image: images.blog01,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    date: new Date(2021, 4, 23).toLocaleDateString(),
    author: 'John Michael',
  },
  {
    title: 'easy cooking for college students',
    image: images.blog01,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    date: new Date(2021, 7, 6).toLocaleDateString(),
    author: 'Fred W',
  },
];

function Blog() {
  return <div className="Blog">some Blog</div>;
}
export default Blog;
