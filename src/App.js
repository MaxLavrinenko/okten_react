import css from './App.module.css';
import {Route, Routes} from "react-router-dom";


import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import PostCommentPage from "./pages/PostCommentsPage/PostCommentPage";
import UserPage from "./pages/UserPage/UserPage";
import UserPostPage from "./pages/UserPostPage/UserPostPage";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<PostCommentPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );

}

export default App;
