import React from 'react';
import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/HugoRamonPereira.png" />
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
    </article>
  );
};
