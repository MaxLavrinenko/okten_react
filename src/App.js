import './App.css';
import {Route, Routes} from "react-router-dom";


import Layout from "./component/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/users'} element={<UsersPage/>}>
              <Route path={':id/albums'} element={<AlbumsPage/>}>
                  <Route path={':idPhoto'} element={<PhotosPage/>}/>
              </Route>
          </Route>
          <Route path={'*'} element = {<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
