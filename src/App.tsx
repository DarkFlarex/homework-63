import './App.css'
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import {useState} from "react";
import { Post } from './types';
import {Route, Routes} from "react-router-dom";
import ShowChoiceDeleteOrEdit from "./containers/ShowChoiceDeleteOrEdit/ShowChoiceDeleteOrEdit";
import NewPost from "./components/Newpost/NewPost";

const App =() => {
    const [posts, setPosts] = useState<Post[]>([]);

    const removePost = (id: string) => {
        setPosts((prevPosts) => {
            return prevPosts.filter((post) => post.id !== id);
        });
    };
    return (
      <>
        <header>
          <Toolbar/>
        </header>

          <main>
              <Routes>
                    <Route
                        path="/"
                        element={<Home/>}
                    />
                  <Route path="/new-post"  element={<NewPost />} />

                  {posts.map(post => (
                      <Route
                          key={post.id}
                          path="/posts/:id"
                          element={<ShowChoiceDeleteOrEdit Posts={[post]} onRemovePost={() => removePost(post.id)} />}
                      />
                  ))}

                  <Route path="*" element={<h1>Not found!</h1>}/>
              </Routes>
          </main>
      </>
  )
}

export default App
