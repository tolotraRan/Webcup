import React from 'react';
import BlogBox from '../Elements/BlogBox';
import FullButton from '../Buttons/FullButton';

export default function Card({ title, text,tag }) 
{
  return (
      <BlogBox
        title={title}
        text={text}
        tag={tag}
        button={<FullButton title="Commander" />}
      />
      );
};