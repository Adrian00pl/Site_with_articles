
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth';
import RequireLogin from './components/RequireLogin';
import PersistLogin from './components/PersistLogin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'
import AddPost from './components/AddPost';
import Verfication from './components/Verfication';
import Articles from './components/Articles';
import Home from './components/Home';
import Unauthorized from './components/Unauthoorized';
import Article from './components/Article';
import UserArticles from './components/UserArticles'
import Contact from './components/Contact';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/unauthorized' element={<Unauthorized />} />
          <Route path="/:tagId" element={<Articles />} />
          <Route path="/:tagId/:articleId" element={<Articles />} />
          <Route path='/add' element={<AddPost />} />
          <Route path='/article' element={<Article />} />
          <Route path='/contact' element={<Contact />} />
          

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="/verfication" element={<Verfication />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='/articles' element={<UserArticles />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='/add' element={<AddPost />} />
            </Route>
            <Route element={<RequireLogin/>}>
            <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<RequireLogin/>}>
            <Route path='/register' element={<Register />} />
            </Route>

          </Route>
          </Route>
        </Routes>

  );
}

export default App;
