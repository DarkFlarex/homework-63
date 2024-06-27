import './App.css'
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import {useState} from "react";
import {GetPost} from './types';
import {Route, Routes} from "react-router-dom";
import ShowChoiceDeleteOrEdit from "./containers/ShowChoiceDeleteOrEdit/ShowChoiceDeleteOrEdit";

const App =() => {
    const [posts, setPosts] = useState<GetPost[]>([
        {
            id: '1',
            datetime: '2024-06-27',
            title: 'Hello World',
            description: 'description hello world'
        }
    ]);
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
                        element={<Home  Posts={posts}/>}
                    />
                  {posts.map(post => (
                      <Route
                          key={post.id}
                          path={`/posts/`+ post.id}
                          element={<ShowChoiceDeleteOrEdit Posts={posts}  onRemovePost={() => removePost(post.id)} />}
                      />
                  ))}
              </Routes>
          </main>
      </>
  )
}

export default App
