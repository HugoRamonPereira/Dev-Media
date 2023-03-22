import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <p>Hugo Ramon</p>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time
          title='March, 20th at 02:19h'
          dateTime='2023-03-20 02:19:45'
        >
          Published 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello guys 👋🏼</p>
        <p>Just finished a new project, and it is pretty nice, you guys can check it at.</p>
        <p>{' '}<a href="">ramon/alienlabs</a></p>
        <p>
          <a href="">#newproject </a>{' '}
          <a href="">#frontend </a>{' '}
          <a href="">#webdevelopent</a>{' '}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          placeholder='Leave a comment'
        />
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>
      <div className={styles.commentsList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
