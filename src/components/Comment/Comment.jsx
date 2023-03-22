import { ThumbsUp, Trash } from 'phosphor-react';
import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Ramon</strong>
              <time title='March, 20th at 02:19h' dateTime='2023-03-20 02:19:45'>About 1h ago</time>
            </div>

            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>Great job, attaboy!!! 👏🏼👏🏼👏🏼</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
