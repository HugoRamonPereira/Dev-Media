import React, { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';

export const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(['What a cool post, huh?']);
  const [newCommentText, setNewCommentText] = useState('');

  const publicationDateFormatted =  format(publishedAt, 'dd \'de\' LLLL \'às\' HH:mm\'h\'', {
    locale: ptBR
  });

  const publicationDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewComment = (event) => {
    event.preventDefault();
    const newCommentText = event.target.comment.value;
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete) => {
    const commentsList = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(commentsList);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <p>{author.name}</p>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publicationDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publicationDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content}>{line.content}</p>
            );
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          name='comment'
          value={newCommentText}
          placeholder='Leave a comment'
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>
      <div className={styles.commentsList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
