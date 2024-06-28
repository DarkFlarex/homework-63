import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import { Route, Routes } from "react-router-dom";
import ShowChoicePostsItem from "./containers/ShowChoosePosts/ShowChoicePostsItem";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import NewPostItem from "./containers/Newpost/NewPostItem";

const App = () => {
    return (
        <>
            <header>
                <Toolbar />
            </header>
            <main className="col-12">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-post" element={<NewPostItem />} />
                    <Route path="/posts/:id" element={<ShowChoicePostsItem />} />
                    <Route path="/posts/:id/edit" element={<NewPostItem />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
            </main>
        </>
    );
};

export default App;
