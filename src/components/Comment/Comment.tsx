import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteContact = () => {
    onDeleteComment(content);
  };

  const handleLikeCount = () => {
    setLikeCount((prevState) => prevState + 1);
  };
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hugo Ramon</strong>
              <time title='March, 20th at 02:19h' dateTime='2023-03-20 02:19:45'>About 1h ago</time>
            </div>

            <button
              title='Delete comment'
              onClick={handleDeleteContact}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
