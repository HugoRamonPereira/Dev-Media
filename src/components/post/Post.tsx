import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';

interface AuthorProps {
  name: string;
  role: string;
  avatarUrl: string;
}

interface ContentProps {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostTypes {
  id: number;
  author: AuthorProps;
  publishedAt: Date;
  content: ContentProps[];
}

interface PostProps {
  post: PostTypes;
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState(['What a cool post, huh?']);
  const [newCommentText, setNewCommentText] = useState('');

  const publicationDateFormatted =  format(post.publishedAt, 'dd \'de\' LLLL \'às\' HH:mm\'h\'', {
    locale: ptBR
  });

  const publicationDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value);
  };

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsList = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(commentsList);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <p>{post.author.name}</p>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publicationDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publicationDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
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
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publish
          </button>
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
