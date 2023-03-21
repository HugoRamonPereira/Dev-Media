import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Hugo Ramon"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, doloribus"
          />
          <Post
            author="Higor Diego"
            content="A very experienced Software Developer who now is working as an Architect of Solutions"
          />
        </main>
      </div>
    </>
  );
};
