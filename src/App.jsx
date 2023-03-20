import { Header } from './components/header/Header';
import { Post } from './components/post/Post';
import './global.css';

export const App = () => {
  return (
    <>
      <Header />
      <Post
        author="Hugo Ramon"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, doloribus"
      />
      <Post
        author="Higor Diego"
        content="A very experienced Software Developer who now is working as an Architect of Solutions"
      />
    </>
  );
};
