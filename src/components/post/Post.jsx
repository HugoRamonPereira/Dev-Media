import React from 'react';

export const Post = (props) => {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
};
