
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
          <Route path='/register' element={<Register />} />
          <Route path='/unauthorized' element={<Unauthorized />} />

          <Route element={<PersistLogin />}>
            <Route path='/register' element={<Register />} />
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="/verfication" element={<Verfication />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='/articles' element={<Articles />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='/add' element={<AddPost />} />
            </Route>
            <Route element={<RequireLogin/>}>
            <Route path='/login' element={<Login />} />
            </Route>

          </Route>
          </Route>
        </Routes>

  );
}

export default App;
