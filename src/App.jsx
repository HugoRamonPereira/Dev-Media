import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph' , content: 'Hello fellas 👋🏼'},
      { type: 'paragraph', content: 'Just finished a very cool project, please check it out'},
      { type: 'link',  content: 'https://github.com/HugoRamonPereira/my-contacts'}
    ],
    publishedAt: new Date('2023-03-11 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Solutions Architect'
    },
    content: [
      { type: 'paragraph' , content: 'Hello Devs 👋🏼'},
      { type: 'paragraph', content: 'Talking to you to let you guys know that new content is gonna be available soon to you all'},
      { type: 'link',  content: 'https://github.com/HugoRamonPereira/my-contacts'}
    ],
    publishedAt: new Date('2023-03-20 19:00:00')
  }
];

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};
