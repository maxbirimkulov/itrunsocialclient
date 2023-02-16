import {Suspense} from "react";
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MyProfile from "./pages/MyProfile/MyProfile";
import '../src/styles/style.scss'
import './utils/i18n'
import NotFound from "./pages/NotFound/NotFound";
import {useSelector} from "react-redux";

function App() {

  const {user} = useSelector((store) => store.user)

  return (
    <Suspense fallback={'...Loading'}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='friends' element={<Friends/>}/>

            {
              !user.login.length &&  <Route path='register' element={<Register/>}/>
            }
            {
              !user.login.length &&   <Route path='login' element={<Login/>}/>
            }

            <Route path='myprofile' element={<MyProfile/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
    </Suspense>
  );
}

export default App;


