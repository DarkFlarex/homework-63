import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import { Route, Routes } from "react-router-dom";
import NewPost from "./components/Newpost/NewPost";
import ShowChoicePostsItem from "./containers/ShowChoosePosts/ShowChoicePostsItem";

const App = () => {
    return (
        <>
            <header>
                <Toolbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-post" element={<NewPost />} />
                    <Route path="/posts/:id" element={<ShowChoicePostsItem />} />
                    <Route path="/posts/:id/edit" element={<NewPost />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
            </main>
        </>
    );
};

export default App;
